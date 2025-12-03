module Buffer = NodeJs.Buffer
type commandId = string
type message = string
type playerId = int

type liquidChange = {
  x: int,
  y: int,
  amount: int,
  liquidType: int,
}

type liquid = {changes: array<liquidChange>}

type position = {
  x: float,
  y: float,
}

type ambience = {
  playerId: int,
  seed: int,
  skyEntityType: int,
}

type killCount = int
type bestiaryUnlockType =
  | Kill(killCount)
  | Sight
  | Chat

type bestiary = {
  unlockType: bestiaryUnlockType,
  npcId: int,
}

type creativeUnlock = {
  itemId: int,
  researchedCount: int,
}

type unlockReport = {
  itemId: int,
  researchedCount: int,
}

type pylonAction =
  | Added
  | Removed
  | RequestTeleport

type teleportPylon = {
  pylonAction: pylonAction,
  x: int,
  y: int,
  pylonType: int,
}

type particle = {
  particleType: int,
  x: float,
  y: float,
  vx: float,
  vy: float,
  shaderIndex: int,
  invokedByPlayer: int,
}

type powerLevel =
  | LockedForEveryone
  | CanBeChangedByHostAlone
  | CanBeChangedByEveryone

type creativePowerPermission = {
  powerType: int,
  powerLevel: powerLevel,
}

type t =
  | Liquid(liquid)
  | ClientText(commandId, message)
  | ServerText(playerId, PacketFactory.NetworkText.t, PacketFactory.Color.t)
  | Ping(position)
  | Ambience(ambience)
  | Bestiary(bestiary)
  | CreativeUnlocks(creativeUnlock)
  | CreativePower(CreativePowers.t)
  | CreativeUnlocksPlayerReport(unlockReport)
  | TeleportPylon(teleportPylon)
  | Particles(particle)
  | CreativePowerPermissions(creativePowerPermission)

let pylonActionToInt = pylonAction =>
  switch pylonAction {
  | Added => 0
  | Removed => 1
  | RequestTeleport => 2
  }

let powerLevelToInt = powerLevel =>
  switch powerLevel {
  | LockedForEveryone => 0
  | CanBeChangedByHostAlone => 1
  | CanBeChangedByEveryone => 2
  }

module NetModuleType = {
  type t =
    | Liquid
    | Text
    | Ping
    | Ambience
    | Bestiary
    | CreativeUnlocks
    | CreativePower
    | CreativeUnlocksPlayerReport
    | TeleportPylon
    | Particles
    | CreativePowerPermissions

  let fromInt = n =>
    switch n {
    | 0 => Some(Liquid)
    | 1 => Some(Text)
    | 2 => Some(Ping)
    | 3 => Some(Ambience)
    | 4 => Some(Bestiary)
    | 5 => Some(CreativeUnlocks)
    | 6 => Some(CreativePower)
    | 7 => Some(CreativeUnlocksPlayerReport)
    | 8 => Some(TeleportPylon)
    | 9 => Some(Particles)
    | 10 => Some(CreativePowerPermissions)
    | _ => None
    }

  let toInt = self =>
    switch self {
    | Liquid => 0
    | Text => 1
    | Ping => 2
    | Ambience => 3
    | Bestiary => 4
    | CreativeUnlocks => 5
    | CreativePower => 6
    | CreativeUnlocksPlayerReport => 7
    | TeleportPylon => 8
    | Particles => 9
    | CreativePowerPermissions => 10
    }
}

module Encode = {
  let {
    packInt32,
    packInt16,
    packNetworkText, // Assuming this is from ErrorAwarePacketWriter or a compatible module
    packColor, // Assuming this is from ErrorAwarePacketWriter or a compatible module
    packString,
    packUInt16,
    packByte,
    packSingle,
    setType,
    data,
  } = module(ErrorAwarePacketWriter)

  let liquidToBuffer = (liquid: liquid): result<Buffer.t, ErrorAwarePacketWriter.packError> => {
    let writer =
      ErrorAwarePacketWriter.make()
      ->setType(PacketType.NetModuleLoad->PacketType.toInt)
      ->packUInt16(NetModuleType.Liquid->NetModuleType.toInt, "moduleType")
      ->packUInt16(liquid.changes->Array.length, "changesCount")
    liquid.changes->Array.forEach(change => {
      writer
      ->packInt16(change.y, "y")
      ->packInt16(change.x, "x")
      ->packByte(change.amount, "amount")
      ->packByte(change.liquidType, "liquidType")
      ->ignore
    })

    writer->data
  }

  let clientTextToBuffer = (commandId, message): result<
    Buffer.t,
    ErrorAwarePacketWriter.packError,
  > => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.NetModuleLoad->PacketType.toInt)
    ->packUInt16(NetModuleType.Text->NetModuleType.toInt, "moduleType")
    ->packString(commandId, "commandId")
    ->packString(message, "message")
    ->data
  }

  let serverTextToBuffer = (playerId, networkText, color): result<
    Buffer.t,
    ErrorAwarePacketWriter.packError,
  > => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.NetModuleLoad->PacketType.toInt)
    ->packUInt16(NetModuleType.Text->NetModuleType.toInt, "moduleType")
    ->packByte(playerId, "playerId")
    ->packNetworkText(networkText, "networkText")
    ->packColor(color, "color")
    ->data
  }

  let pingToBuffer = (ping: position): result<Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.NetModuleLoad->PacketType.toInt)
    ->packUInt16(NetModuleType.Ping->NetModuleType.toInt, "moduleType")
    ->packSingle(ping.x, "x")
    ->packSingle(ping.y, "y")
    ->data
  }

  let ambienceToBuffer = (ambience: ambience): result<
    Buffer.t,
    ErrorAwarePacketWriter.packError,
  > => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.NetModuleLoad->PacketType.toInt)
    ->packUInt16(NetModuleType.Ambience->NetModuleType.toInt, "moduleType")
    ->packByte(ambience.playerId, "playerId")
    ->packInt32(ambience.seed, "seed")
    ->packByte(ambience.skyEntityType, "skyEntityType")
    ->data
  }

  let bestiaryToBuffer = (bestiary: bestiary): result<
    Buffer.t,
    ErrorAwarePacketWriter.packError,
  > => {
    let writer =
      ErrorAwarePacketWriter.make()
      ->setType(PacketType.NetModuleLoad->PacketType.toInt)
      ->packUInt16(NetModuleType.Bestiary->NetModuleType.toInt, "moduleType")
    switch bestiary.unlockType {
    | Kill(_count) => writer->packByte(0, "unlockTypeByte")
    | Sight => writer->packByte(1, "unlockTypeByte")
    | Chat => writer->packByte(2, "unlockTypeByte")
    }
    ->packInt16(bestiary.npcId, "npcId")
    ->ignore
    switch bestiary.unlockType {
    | Kill(count) => writer->packUInt16(count, "killCount")
    | Sight
    | Chat => writer
    }->data
  }

  let creativeUnlocksToBuffer = (creativeUnlock: creativeUnlock): result<
    Buffer.t,
    ErrorAwarePacketWriter.packError,
  > => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.NetModuleLoad->PacketType.toInt)
    ->packUInt16(NetModuleType.CreativeUnlocks->NetModuleType.toInt, "moduleType")
    ->packInt16(creativeUnlock.itemId, "itemId")
    ->packUInt16(creativeUnlock.researchedCount, "researchedCount")
    ->data
  }

  let creativePowerToBuffer = (creativePower: CreativePowers.t): result<
    Buffer.t,
    ErrorAwarePacketWriter.packError,
  > => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.NetModuleLoad->PacketType.toInt)
    ->packUInt16(NetModuleType.CreativePower->NetModuleType.toInt, "moduleType")
    ->CreativePowers.pack(creativePower) // This needs to be adapted if CreativePowers.pack uses ErrorAwarePacketWriter
    ->data
  }

  let creativeUnlocksPlayerReportToBuffer = (unlockReport: unlockReport): result<
    Buffer.t,
    ErrorAwarePacketWriter.packError,
  > => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.NetModuleLoad->PacketType.toInt)
    ->packUInt16(NetModuleType.CreativeUnlocksPlayerReport->NetModuleType.toInt, "moduleType")
    ->packUInt16(unlockReport.itemId, "itemId")
    ->packUInt16(unlockReport.researchedCount, "researchedCount")
    ->data
  }

  let teleportPylonToBuffer = (teleportPylon: teleportPylon): result<
    Buffer.t,
    ErrorAwarePacketWriter.packError,
  > => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.NetModuleLoad->PacketType.toInt)
    ->packUInt16(NetModuleType.TeleportPylon->NetModuleType.toInt, "moduleType")
    ->packByte(teleportPylon.pylonAction->pylonActionToInt, "pylonAction")
    ->packInt16(teleportPylon.x, "x")
    ->packInt16(teleportPylon.y, "y")
    ->packByte(teleportPylon.pylonType, "pylonType")
    ->data
  }

  let particlesToBuffer = (particle: particle): result<
    Buffer.t,
    ErrorAwarePacketWriter.packError,
  > => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.NetModuleLoad->PacketType.toInt)
    ->packUInt16(NetModuleType.Particles->NetModuleType.toInt, "moduleType")
    ->packByte(particle.particleType, "particleType")
    ->packSingle(particle.x, "x")
    ->packSingle(particle.y, "y")
    ->packSingle(particle.vx, "vx")
    ->packSingle(particle.vy, "vy")
    ->packInt32(particle.shaderIndex, "shaderIndex")
    ->packByte(particle.invokedByPlayer, "invokedByPlayer")
    ->data
  }

  let creativePowerPermissionsToBuffer = (creativePowerPermission: creativePowerPermission): result<
    Buffer.t,
    ErrorAwarePacketWriter.packError,
  > => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.NetModuleLoad->PacketType.toInt)
    ->packUInt16(NetModuleType.CreativePowerPermissions->NetModuleType.toInt, "moduleType")
    ->packByte(creativePowerPermission.powerType, "powerType")
    ->packByte(creativePowerPermission.powerLevel->powerLevelToInt, "powerLevel")
    ->data
  }

  let toBuffer = (self: t): result<Buffer.t, ErrorAwarePacketWriter.packError> => {
    switch self {
    | Liquid(liquid) => liquidToBuffer(liquid)
    | ClientText(commandId, message) => clientTextToBuffer(commandId, message)
    | ServerText(playerId, networkText, color) => serverTextToBuffer(playerId, networkText, color)
    | Ping(ping) => pingToBuffer(ping)
    | Ambience(ambience) => ambienceToBuffer(ambience)
    | Bestiary(bestiary) => bestiaryToBuffer(bestiary)
    | CreativeUnlocks(creativeUnlock) => creativeUnlocksToBuffer(creativeUnlock)
    | CreativePower(creativePower) => creativePowerToBuffer(creativePower)
    | CreativeUnlocksPlayerReport(unlockReport) => creativeUnlocksPlayerReportToBuffer(unlockReport)
    | TeleportPylon(teleportPylon) => teleportPylonToBuffer(teleportPylon)
    | Particles(particle) => particlesToBuffer(particle)
    | CreativePowerPermissions(creativePowerPermission) =>
      creativePowerPermissionsToBuffer(creativePowerPermission)
    }
  }
}

module Decode = {
  let {
    readInt32,
    readSingle,
    readUInt16,
    readInt16,
    readString,
    readByte,
    readColor,
    readNetworkText,
  } = module(ErrorAwarePacketReader)

  let parseLiquid = (reader: PacketFactory.PacketReader.t) => {
    let? Ok(changesCount) = reader->readUInt16("changesCount")

    let rec readChanges = (idx, acc) =>
      if idx >= changesCount {
        Ok(Belt.Array.reverse(acc))
      } else {
        let? Ok(y) = reader->readInt16("y")
        let? Ok(x) = reader->readInt16("x")
        let? Ok(amount) = reader->readByte("amount")
        let? Ok(liquidType) = reader->readByte("liquidType")
        readChanges(
          idx + 1,
          [
            {
              y,
              x,
              amount,
              liquidType,
            },
            ...acc,
          ],
        )
      }

    let? Ok(changes: array<liquidChange>) = readChanges(0, [])

    Ok(Liquid({changes: changes}))
  }

  let parseText = (reader: PacketFactory.PacketReader.t, fromServer: bool) => {
    if fromServer {
      let? Ok(playerId) = reader->readByte("playerId")
      let? Ok(message) = reader->readNetworkText("message")
      let? Ok(color) = reader->readColor("color")
      Ok(ServerText(playerId, message, color))
    } else {
      let? Ok(commandId) = reader->readString("commandId")
      let? Ok(message) = reader->readString("message")
      Ok(ClientText(commandId, message))
    }
  }

  let parsePing = (reader: PacketFactory.PacketReader.t) => {
    let? Ok(x) = reader->readSingle("x")
    let? Ok(y) = reader->readSingle("y")

    Ok(Ping({x, y}))
  }

  let parseAmbience = (reader: PacketFactory.PacketReader.t) => {
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(seed) = reader->readInt32("seed")
    let? Ok(skyEntityType) = reader->readByte("skyEntityType")

    Ok(Ambience({playerId, seed, skyEntityType}))
  }

  let parseBestiary = (reader: PacketFactory.PacketReader.t) => {
    let? Ok(rawBestiaryUnlockType) = reader->readByte("rawBestiaryUnlockType")
    let? Ok(npcId) = reader->readInt16("npcId")
    let? Ok(bestiaryUnlockType) = switch rawBestiaryUnlockType {
    | 0 =>
      let? Ok(killCount) = reader->readUInt16("killCount")
      Ok(Kill(killCount))
    | 1 => Ok(Sight)
    | 2 => Ok(Chat)
    | _ =>
      Error({
        context: "Packet_NetModuleLoad.parseBestiary",
        error: JsError.make("Unknown bestiary unlock type")->JsError.toJsExn,
      })
    }

    Ok(Bestiary({unlockType: bestiaryUnlockType, npcId}))
  }

  let parseCreativeUnlock = (reader: PacketFactory.PacketReader.t) => {
    let? Ok(itemId) = reader->readInt16("itemId")
    let? Ok(researchedCount) = reader->readUInt16("researchedCount")
    Ok(CreativeUnlocks({itemId, researchedCount}))
  }

  // TODO: Add missing power deserialize
  let parseCreativePower = (reader: PacketFactory.PacketReader.t) => {
    switch reader->CreativePowers.parse {
    | Some(p) => Ok(CreativePower(p))
    | None =>
      Error({
        ErrorAwarePacketReader.context: "Packet_NetModuleLoad.parseCreativePower",
        error: JsError.make("Failed to parse creative power")->JsError.toJsExn,
      })
    }
  }

  let parseCreativeUnlocksPlayerReport = (reader: PacketFactory.PacketReader.t) => {
    let? Ok(_) = reader->readByte("unknownByte") // previously implicit _
    let? Ok(itemId) = reader->readUInt16("itemId")
    let? Ok(researchedCount) = reader->readUInt16("researchedCount")
    Ok(CreativeUnlocksPlayerReport({itemId, researchedCount}))
  }

  let parseTeleportPylon = (reader: PacketFactory.PacketReader.t) => {
    let? Ok(rawPylonAction) = reader->readByte("rawPylonAction")
    let? Ok(x) = reader->readInt16("x")
    let? Ok(y) = reader->readInt16("y")
    let? Ok(pylonType) = reader->readByte("pylonType")

    let pylonAction = switch rawPylonAction {
    | 0 => Some(Added)
    | 1 => Some(Removed)
    | 2 => Some(RequestTeleport)
    | _ => None
    }

    switch pylonAction {
    | Some(pylonAction) => Ok(TeleportPylon({pylonAction, x, y, pylonType}))
    | None =>
      Error({
        context: "Packet_NetModuleLoad.parseTeleportPylon",
        error: JsError.make("Unknown pylon action")->JsError.toJsExn,
      })
    }
  }

  let parseParticle = (reader: PacketFactory.PacketReader.t) => {
    let? Ok(particleType) = reader->readByte("particleType")
    let? Ok(x) = reader->readSingle("x")
    let? Ok(y) = reader->readSingle("y")
    let? Ok(vx) = reader->readSingle("vx")
    let? Ok(vy) = reader->readSingle("vy")
    let? Ok(shaderIndex) = reader->readInt32("shaderIndex")
    let? Ok(invokedByPlayer) = reader->readByte("invokedByPlayer")

    Ok(
      Particles({
        particleType,
        x,
        y,
        vx,
        vy,
        shaderIndex,
        invokedByPlayer,
      }),
    )
  }

  let parseCreativePowerPermission = (reader: PacketFactory.PacketReader.t) => {
    let? Ok(_) = reader->readByte("unknownByte") // previously implicit _
    let? Ok(powerType) = reader->readUInt16("powerType")
    let? Ok(rawPowerLevel) = reader->readByte("rawPowerLevel")

    let powerLevel = switch rawPowerLevel {
    | 0 => Some(LockedForEveryone)
    | 1 => Some(CanBeChangedByHostAlone)
    | 2 => Some(CanBeChangedByEveryone)
    | _ => None
    }

    switch powerLevel {
    | Some(powerLevel) => Ok(CreativePowerPermissions({powerType, powerLevel}))
    | None =>
      Error({
        context: "Packet_NetModuleLoad.parseCreativePowerPermission",
        error: JsError.make("Unknown creative power permission level")->JsError.toJsExn,
      })
    }
  }

  let parse = (payload: NodeJs.Buffer.t, ~fromServer: bool) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(moduleType) = reader->readUInt16("moduleType")
    switch NetModuleType.fromInt(moduleType) {
    | Some(NetModuleType.Liquid) => reader->parseLiquid
    | Some(NetModuleType.Text) => reader->parseText(fromServer)
    | Some(NetModuleType.Ping) => reader->parsePing
    | Some(NetModuleType.Ambience) => reader->parseAmbience
    | Some(NetModuleType.Bestiary) => reader->parseBestiary
    | Some(NetModuleType.CreativeUnlocks) => reader->parseCreativeUnlock
    | Some(NetModuleType.CreativePower) => reader->parseCreativePower
    | Some(NetModuleType.CreativeUnlocksPlayerReport) => reader->parseCreativeUnlocksPlayerReport
    | Some(NetModuleType.TeleportPylon) => reader->parseTeleportPylon
    | Some(NetModuleType.Particles) => reader->parseParticle
    | Some(NetModuleType.CreativePowerPermissions) => reader->parseCreativePowerPermission
    | None =>
      Error({
        context: "Packet_NetModuleLoad.parse",
        error: JsError.make("Unknown net module type")->JsError.toJsExn,
      })
    }
  }
}

let toBuffer = Encode.toBuffer
let parse = Decode.parse
