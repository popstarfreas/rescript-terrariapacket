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

type creativePower = {powerType: int}

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
  | CreativePower(creativePower)
  | CreativeUnlocksPlayerReport(unlockReport)
  | TeleportPylon(teleportPylon)
  | Particles(particle)
  | CreativePowerPermissions(creativePowerPermission)

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
    packNetworkText,
    packColor,
    packString,
    packUInt16,
    packByte,
    packSingle,
    setType,
    data,
  } = module(PacketFactory.ManagedPacketWriter)

  let liquidToBuffer = (liquid: liquid): Buffer.t => {
    let writer =
      PacketFactory.ManagedPacketWriter.make()
      ->setType(PacketType.NetModuleLoad->PacketType.toInt)
      ->packUInt16(NetModuleType.Liquid->NetModuleType.toInt)
      ->packUInt16(liquid.changes->Belt.Array.length)
    liquid.changes->Js.Array2.forEach(change => {
      writer
      ->packInt16(change.y)
      ->packInt16(change.x)
      ->packByte(change.amount)
      ->packByte(change.liquidType)
      ->ignore
    })

    writer->data
  }

  let clientTextToBuffer = (commandId, message): Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.NetModuleLoad->PacketType.toInt)
    ->packUInt16(NetModuleType.Text->NetModuleType.toInt)
    ->packString(commandId)
    ->packString(message)
    ->data
  }

  let serverTextToBuffer = (playerId, networkText, color): Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.NetModuleLoad->PacketType.toInt)
    ->packUInt16(NetModuleType.Text->NetModuleType.toInt)
    ->packByte(playerId)
    ->packNetworkText(networkText)
    ->packColor(color)
    ->data
  }

  let pingToBuffer = (ping: position): Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.NetModuleLoad->PacketType.toInt)
    ->packUInt16(NetModuleType.Ping->NetModuleType.toInt)
    ->packSingle(ping.x)
    ->packSingle(ping.y)
    ->data
  }

  let ambienceToBuffer = (ambience: ambience): Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.NetModuleLoad->PacketType.toInt)
    ->packUInt16(NetModuleType.Ambience->NetModuleType.toInt)
    ->packByte(ambience.playerId)
    ->packInt32(ambience.seed)
    ->packByte(ambience.skyEntityType)
    ->data
  }

  let bestiaryToBuffer = (bestiary: bestiary): Buffer.t => {
    let writer =
      PacketFactory.ManagedPacketWriter.make()
      ->setType(PacketType.NetModuleLoad->PacketType.toInt)
      ->packUInt16(NetModuleType.Bestiary->NetModuleType.toInt)
    switch bestiary.unlockType {
    | Kill(_count) => writer->packByte(0)
    | Sight => writer->packByte(1)
    | Chat => writer->packByte(2)
    }
    ->packInt16(bestiary.npcId)
    ->ignore
    switch bestiary.unlockType {
    | Kill(count) => writer->packUInt16(count)
    | Sight
    | Chat => writer
    }->data
  }

  let toBuffer = (self: t): Buffer.t => {
    switch self {
    | Liquid(liquid) => liquidToBuffer(liquid)
    | ClientText(commandId, message) => clientTextToBuffer(commandId, message)
    | ServerText(playerId, networkText, color) => serverTextToBuffer(playerId, networkText, color)
    | Ping(ping) => pingToBuffer(ping)
    | Ambience(ambience) => ambienceToBuffer(ambience)
    | Bestiary(bestiary) => bestiaryToBuffer(bestiary)
    | CreativeUnlocks(creativeUnlock) => Buffer.allocUnsafe(0) // creativeUnlocksToBuffer(creativeUnlock)
    | CreativePower(creativePower) => Buffer.allocUnsafe(0) // creativePowerToBuffer(creativePower)
    | CreativeUnlocksPlayerReport(unlockReport) => Buffer.allocUnsafe(0) // creativeUnlocksPlayerReportToBuffer(unlockReport)
    | TeleportPylon(teleportPylon) => Buffer.allocUnsafe(0) // teleportPylonToBuffer(teleportPylon)
    | Particles(particle) => Buffer.allocUnsafe(0) // particlesToBuffer(particle)
    | CreativePowerPermissions(creativePowerPermission) => Buffer.allocUnsafe(0) // creativePowerPermissionsToBuffer(creativePowerPermission)
    }
  }
}

module Decode = {
  let {readInt32, readSingle, readUInt16, readInt16, readString, readByte, readColor} = module(
    PacketFactory.PacketReader
  )

  let parseLiquid = (reader: PacketFactory.PacketReader.t) => {
    let changesCount = reader->readUInt16
    let changes = []
    for _ in 0 to changesCount {
      let y = reader->readInt16
      let x = reader->readInt16
      let amount = reader->readByte
      let liquidType = reader->readByte
      changes
      ->Js.Array2.push({
        y: y,
        x: x,
        amount: amount,
        liquidType: liquidType,
      })
      ->ignore
    }

    Some(Liquid({changes: changes}))
  }

  let parseText = (reader: PacketFactory.PacketReader.t, fromServer: bool) => {
    if fromServer {
      let playerId = reader->readByte
      let mode = reader->readByte
      let message = reader->readString
      let color = reader->readColor
      ServerText(playerId, PacketFactory.NetworkText.make(mode, message), color)->Some
    } else {
      let commandId = reader->readString
      let message = reader->readString
      ClientText(commandId, message)->Some
    }
  }

  let parsePing = (reader: PacketFactory.PacketReader.t) => {
    let x = reader->readSingle
    let y = reader->readSingle

    Some(Ping({x: x, y: y}))
  }

  let parseAmbience = (reader: PacketFactory.PacketReader.t) => {
    let playerId = reader->readByte
    let seed = reader->readInt32
    let skyEntityType = reader->readByte

    Some(Ambience({playerId: playerId, seed: seed, skyEntityType: skyEntityType}))
  }

  let parseBestiary = (reader: PacketFactory.PacketReader.t) => {
    let rawBestiaryUnlockType = reader->readByte
    let npcId = reader->readInt16
    let bestiaryUnlockType = switch rawBestiaryUnlockType {
    | 0 => Some(Kill(reader->readUInt16))
    | 1 => Some(Sight)
    | 2 => Some(Chat)
    | _ => None
    }

    switch bestiaryUnlockType {
    | Some(unlockType) => Some(Bestiary({unlockType: unlockType, npcId: npcId}))
    | None => None
    }
  }

  let parseCreativeUnlock = (reader: PacketFactory.PacketReader.t) => {
    let itemId = reader->readInt16
    let researchedCount = reader->readUInt16
    Some(CreativeUnlocks({itemId: itemId, researchedCount: researchedCount}))
  }

  // TODO: Add missing power deserialize
  let parseCreativePower = (reader: PacketFactory.PacketReader.t) => {
    let powerType = reader->readUInt16
    Some(CreativePower({powerType: powerType}))
  }

  let parseCreativeUnlocksPlayerReport = (reader: PacketFactory.PacketReader.t) => {
    let _ = reader->readByte
    let itemId = reader->readUInt16
    let researchedCount = reader->readUInt16
    Some(CreativeUnlocksPlayerReport({itemId: itemId, researchedCount: researchedCount}))
  }

  let parseTeleportPylon = (reader: PacketFactory.PacketReader.t) => {
    let rawPylonAction = reader->readByte
    let x = reader->readInt16
    let y = reader->readInt16
    let pylonType = reader->readByte

    let pylonAction = switch rawPylonAction {
    | 0 => Some(Added)
    | 1 => Some(Removed)
    | 2 => Some(RequestTeleport)
    | _ => None
    }

    switch pylonAction {
    | Some(pylonAction) =>
      Some(TeleportPylon({pylonAction: pylonAction, x: x, y: y, pylonType: pylonType}))
    | None => None
    }
  }

  let parseParticle = (reader: PacketFactory.PacketReader.t) => {
    let particleType = reader->readByte
    let x = reader->readSingle
    let y = reader->readSingle
    let vx = reader->readSingle
    let vy = reader->readSingle
    let shaderIndex = reader->readInt32
    let invokedByPlayer = reader->readByte

    Some(
      Particles({
        particleType: particleType,
        x: x,
        y: y,
        vx: vx,
        vy: vy,
        shaderIndex: shaderIndex,
        invokedByPlayer: invokedByPlayer,
      }),
    )
  }

  let parseCreativePowerPermission = (reader: PacketFactory.PacketReader.t) => {
    let _ = reader->readByte
    let powerType = reader->readUInt16
    let rawPowerLevel = reader->readByte

    let powerLevel = switch rawPowerLevel {
    | 0 => Some(LockedForEveryone)
    | 1 => Some(CanBeChangedByHostAlone)
    | 2 => Some(CanBeChangedByEveryone)
    | _ => None
    }

    switch powerLevel {
    | Some(powerLevel) =>
      Some(CreativePowerPermissions({powerType: powerType, powerLevel: powerLevel}))
    | None => None
    }
  }

  let parse = (payload: NodeJs.Buffer.t, fromServer: bool) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let moduleType = reader->readUInt16
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
    | None => None
    }
  }
}

let toBuffer = Encode.toBuffer
let parse = Decode.parse
