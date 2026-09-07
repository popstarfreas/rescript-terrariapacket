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
  sacrificeCount: int,
}

type unlockReport = {
  userId: int,
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

type bannerFullState = {
  killCounts: array<int>,
  claimableCounts: array<int>,
}

type bannerKillCountUpdate = {bannerId: int, killCount: int}
type bannerClaimCountUpdate = {bannerId: int, claimCount: int}
type bannerClaimRequest = {bannerId: int, amount: int}
type bannerClaimResponse = {bannerId: int, amount: int, granted: bool}

type bannerMessage =
  | BannerFullState(bannerFullState)
  | BannerKillCountUpdate(bannerKillCountUpdate)
  | BannerClaimCountUpdate(bannerClaimCountUpdate)
  | BannerClaimRequest(bannerClaimRequest)
  | BannerClaimResponse(bannerClaimResponse)

type craftingRequestItem = {
  itemIdOrRecipeGroup: int,
  stack: int,
}

type craftingRequest = {
  items: array<craftingRequestItem>,
  chestIndexes: array<int>,
}

type craftingResponse = {approved: bool}

type craftingMessage =
  | CraftingRequest(craftingRequest)
  | CraftingResponse(craftingResponse)

type sparseNpcTime = {
  npcIndex: int,
  time: int,
}

type tagFullState = {
  ownerId: int,
  effectType: int,
  timeLeft: array<sparseNpcTime>,
  procTimeLeft: option<array<sparseNpcTime>>,
}

type tagChangeActiveEffect = {ownerId: int, effectType: int}
type tagNpcChange = {ownerId: int, npcIndex: int}

type tagEffectStateMessage =
  | TagFullState(tagFullState)
  | TagChangeActiveEffect(tagChangeActiveEffect)
  | TagApplyTagToNpc(tagNpcChange)
  | TagEnableProcOnNpc(tagNpcChange)
  | TagClearProcOnNpc(tagNpcChange)

type leashedRemove = {slot: int}
type leashedFullSync = {
  slot: int,
  entityType: int,
  anchorX: int,
  anchorY: int,
  payload: Buffer.t,
}
type leashedPartialSync = {slot: int, entityType: int, payload: Buffer.t}

type leashedEntityMessage =
  | LeashedRemove(leashedRemove)
  | LeashedFullSync(leashedFullSync)
  | LeashedPartialSync(leashedPartialSync)

type unbreakableWallScan = {
  playerId: int,
  insideUnbreakableWalls: bool,
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
  | Banners(bannerMessage)
  | CraftingRequests(craftingMessage)
  | LeashedEntity(leashedEntityMessage)
  | UnbreakableWallScan(unbreakableWallScan)

let maxNpcIndexSentinel = 200

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
    | Banners
    | CraftingRequests
    | LeashedEntity
    | UnbreakableWallScan

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
    | 11 => Some(Banners)
    | 12 => Some(CraftingRequests)
    | 13 => Some(LeashedEntity)
    | 14 => Some(UnbreakableWallScan)
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
    | Banners => 11
    | CraftingRequests => 12
    | LeashedEntity => 13
    | UnbreakableWallScan => 14
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
    packBool,
    packBuffer,
    setType,
    data,
  } = module(ErrorAwarePacketWriter)

  let pack7BitEncodedInt = (writer, value, context) => {
    let writer = ref(writer)
    let remaining = ref(value)
    let continue = ref(true)
    while continue.contents {
      let byte = ref(Int.bitwiseAnd(remaining.contents, 0x7f))
      remaining := Int.shiftRightUnsigned(remaining.contents, 7)
      if remaining.contents != 0 {
        byte := Int.bitwiseOr(byte.contents, 0x80)
      }
      writer := writer.contents->packByte(byte.contents, context)
      if remaining.contents == 0 {
        continue := false
      }
    }
    writer.contents
  }

  let liquidToBuffer = (liquid: liquid): result<Buffer.t, ErrorAwarePacketWriter.packError> => {
    let writer =
      ErrorAwarePacketWriter.make()
      ->setType(PacketTypeV1457.NetModuleLoad->PacketTypeV1457.toInt)
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
    ->setType(PacketTypeV1457.NetModuleLoad->PacketTypeV1457.toInt)
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
    ->setType(PacketTypeV1457.NetModuleLoad->PacketTypeV1457.toInt)
    ->packUInt16(NetModuleType.Text->NetModuleType.toInt, "moduleType")
    ->packByte(playerId, "playerId")
    ->packNetworkText(networkText, "networkText")
    ->packColor(color, "color")
    ->data
  }

  let pingToBuffer = (ping: position): result<Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketTypeV1457.NetModuleLoad->PacketTypeV1457.toInt)
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
    ->setType(PacketTypeV1457.NetModuleLoad->PacketTypeV1457.toInt)
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
      ->setType(PacketTypeV1457.NetModuleLoad->PacketTypeV1457.toInt)
      ->packUInt16(NetModuleType.Bestiary->NetModuleType.toInt, "moduleType")
    switch bestiary.unlockType {
    | Kill(_count) => writer->packByte(0, "unlockTypeByte")
    | Sight => writer->packByte(1, "unlockTypeByte")
    | Chat => writer->packByte(2, "unlockTypeByte")
    }
    ->packInt16(bestiary.npcId, "npcId")
    ->ignore
    switch bestiary.unlockType {
    | Kill(count) => writer->pack7BitEncodedInt(count, "killCount")
    | Sight
    | Chat => writer
    }->data
  }

  let creativePowerToBuffer = (creativePower: CreativePowers.t): result<
    Buffer.t,
    ErrorAwarePacketWriter.packError,
  > => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketTypeV1457.NetModuleLoad->PacketTypeV1457.toInt)
    ->packUInt16(NetModuleType.CreativePower->NetModuleType.toInt, "moduleType")
    ->CreativePowers.pack(creativePower)
    ->data
  }

  let creativeUnlocksToBuffer = (creativeUnlock: creativeUnlock): result<
    Buffer.t,
    ErrorAwarePacketWriter.packError,
  > => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketTypeV1457.NetModuleLoad->PacketTypeV1457.toInt)
    ->packUInt16(NetModuleType.CreativeUnlocks->NetModuleType.toInt, "moduleType")
    ->packInt16(creativeUnlock.itemId, "itemId")
    ->packUInt16(creativeUnlock.sacrificeCount, "sacrificeCount")
    ->data
  }

  let creativeUnlocksPlayerReportToBuffer = (unlockReport: unlockReport): result<
    Buffer.t,
    ErrorAwarePacketWriter.packError,
  > => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketTypeV1457.NetModuleLoad->PacketTypeV1457.toInt)
    ->packUInt16(NetModuleType.CreativeUnlocksPlayerReport->NetModuleType.toInt, "moduleType")
    ->packByte(unlockReport.userId, "userId")
    ->packUInt16(unlockReport.itemId, "itemId")
    ->packUInt16(unlockReport.researchedCount, "researchedCount")
    ->data
  }

  let teleportPylonToBuffer = (teleportPylon: teleportPylon): result<
    Buffer.t,
    ErrorAwarePacketWriter.packError,
  > => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketTypeV1457.NetModuleLoad->PacketTypeV1457.toInt)
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
    ->setType(PacketTypeV1457.NetModuleLoad->PacketTypeV1457.toInt)
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
    ->setType(PacketTypeV1457.NetModuleLoad->PacketTypeV1457.toInt)
    ->packUInt16(NetModuleType.CreativePowerPermissions->NetModuleType.toInt, "moduleType")
    ->packByte(0, "messageType")
    ->packUInt16(creativePowerPermission.powerType, "powerType")
    ->packByte(creativePowerPermission.powerLevel->powerLevelToInt, "powerLevel")
    ->data
  }

  let bannersToBuffer = (message: bannerMessage): result<
    Buffer.t,
    ErrorAwarePacketWriter.packError,
  > => {
    let writer =
      ErrorAwarePacketWriter.make()
      ->setType(PacketTypeV1457.NetModuleLoad->PacketTypeV1457.toInt)
      ->packUInt16(NetModuleType.Banners->NetModuleType.toInt, "moduleType")
    switch message {
    | BannerFullState(state) =>
      let writer =
        writer
        ->packByte(0, "messageType")
        ->packInt16(state.killCounts->Array.length, "killCountLength")
      state.killCounts->Array.forEach(count => {
        writer->packInt32(count, "killCount")->ignore
      })
      let writer =
        writer
        ->packInt16(state.claimableCounts->Array.length, "claimableCountLength")
      state.claimableCounts->Array.forEach(count => {
        writer->packUInt16(count, "claimableCount")->ignore
      })
      writer->data
    | BannerKillCountUpdate({bannerId, killCount}) =>
      writer
      ->packByte(1, "messageType")
      ->packInt16(bannerId, "bannerId")
      ->packInt32(killCount, "killCount")
      ->data
    | BannerClaimCountUpdate({bannerId, claimCount}) =>
      writer
      ->packByte(2, "messageType")
      ->packInt16(bannerId, "bannerId")
      ->packUInt16(claimCount, "claimCount")
      ->data
    | BannerClaimRequest({bannerId, amount}) =>
      writer
      ->packByte(3, "messageType")
      ->packInt16(bannerId, "bannerId")
      ->packUInt16(amount, "amount")
      ->data
    | BannerClaimResponse({bannerId, amount, granted}) =>
      writer
      ->packByte(4, "messageType")
      ->packInt16(bannerId, "bannerId")
      ->packUInt16(amount, "amount")
      ->packBool(granted, "granted")
      ->data
    }
  }

  let craftingRequestsToBuffer = (message: craftingMessage): result<
    Buffer.t,
    ErrorAwarePacketWriter.packError,
  > => {
    let writer =
      ErrorAwarePacketWriter.make()
      ->setType(PacketTypeV1457.NetModuleLoad->PacketTypeV1457.toInt)
      ->packUInt16(NetModuleType.CraftingRequests->NetModuleType.toInt, "moduleType")
    switch message {
    | CraftingRequest(request) =>
      let writer = writer->pack7BitEncodedInt(request.items->Array.length, "itemsCount")
      request.items->Array.forEach(item => {
        writer
        ->packInt32(item.itemIdOrRecipeGroup, "itemIdOrRecipeGroup")
        ->pack7BitEncodedInt(item.stack, "stack")
        ->ignore
      })
      let writer = writer->pack7BitEncodedInt(request.chestIndexes->Array.length, "chestCount")
      request.chestIndexes->Array.forEach(chestIndex => {
        writer->pack7BitEncodedInt(chestIndex, "chestIndex")->ignore
      })
      writer->data
    | CraftingResponse(response) =>
      writer->packBool(response.approved, "approved")->data
    }
  }

  let packSparseNpcTimes = (writer, entries: array<sparseNpcTime>) => {
    let writer = ref(writer)
    entries->Array.forEach(entry => {
      writer :=
        writer.contents
        ->packByte(entry.npcIndex, "npcIndex")
        ->packInt32(entry.time, "npcTime")
    })
    writer.contents->packByte(maxNpcIndexSentinel, "npcIndexSentinel")
  }

  let leashedEntityToBuffer = (message: leashedEntityMessage): result<
    Buffer.t,
    ErrorAwarePacketWriter.packError,
  > => {
    let writer =
      ErrorAwarePacketWriter.make()
      ->setType(PacketTypeV1457.NetModuleLoad->PacketTypeV1457.toInt)
      ->packUInt16(NetModuleType.LeashedEntity->NetModuleType.toInt, "moduleType")
    switch message {
    | LeashedRemove({slot}) =>
      writer
      ->packByte(0, "messageType")
      ->pack7BitEncodedInt(slot, "slot")
      ->data
    | LeashedFullSync({slot, entityType, anchorX, anchorY, payload}) =>
      writer
      ->packByte(1, "messageType")
      ->pack7BitEncodedInt(slot, "slot")
      ->pack7BitEncodedInt(entityType, "entityType")
      ->packInt16(anchorX, "anchorX")
      ->packInt16(anchorY, "anchorY")
      ->packBuffer(payload, "payload")
      ->data
    | LeashedPartialSync({slot, entityType, payload}) =>
      writer
      ->packByte(2, "messageType")
      ->pack7BitEncodedInt(slot, "slot")
      ->pack7BitEncodedInt(entityType, "entityType")
      ->packBuffer(payload, "payload")
      ->data
    }
  }

  let unbreakableWallScanToBuffer = (payload: unbreakableWallScan): result<
    Buffer.t,
    ErrorAwarePacketWriter.packError,
  > => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketTypeV1457.NetModuleLoad->PacketTypeV1457.toInt)
    ->packUInt16(NetModuleType.UnbreakableWallScan->NetModuleType.toInt, "moduleType")
    ->packByte(payload.playerId, "playerId")
    ->packBool(payload.insideUnbreakableWalls, "insideUnbreakableWalls")
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
    | CreativeUnlocksPlayerReport(unlockReport) =>
      creativeUnlocksPlayerReportToBuffer(unlockReport)
    | TeleportPylon(teleportPylon) => teleportPylonToBuffer(teleportPylon)
    | Particles(particle) => particlesToBuffer(particle)
    | CreativePowerPermissions(creativePowerPermission) =>
      creativePowerPermissionsToBuffer(creativePowerPermission)
    | Banners(message) => bannersToBuffer(message)
    | CraftingRequests(message) => craftingRequestsToBuffer(message)
    | LeashedEntity(message) => leashedEntityToBuffer(message)
    | UnbreakableWallScan(payload) => unbreakableWallScanToBuffer(payload)
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
    readBool,
    readColor,
    readNetworkText,
    readBuffer,
    getBytesLeft,
    read7BitEncodedInt,
  } = module(ErrorAwarePacketReader)

  let parseLiquid = (reader: PacketFactory.PacketReader.t) => {
    let? Ok(changesCount) = reader->readUInt16("changesCount")

    let rec readChanges = (idx, acc) =>
      if idx >= changesCount {
        Ok(Array.toReversed(acc))
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
      let? Ok(killCount) = reader->read7BitEncodedInt("killCount")
      Ok(Kill(killCount))
    | 1 => Ok(Sight)
    | 2 => Ok(Chat)
    | _ =>
      Error({
        context: "PacketV1457_NetModuleLoad.parseBestiary",
        error: JsError.make("Unknown bestiary unlock type")->JsError.toJsExn,
      })
    }

    Ok(Bestiary({unlockType: bestiaryUnlockType, npcId}))
  }

  let parseCreativePower = (reader: PacketFactory.PacketReader.t) => {
    switch reader->CreativePowers.parse {
    | Some(p) => Ok(CreativePower(p))
    | None =>
      Error({
        ErrorAwarePacketReader.context: "PacketV1457_NetModuleLoad.parseCreativePower",
        error: JsError.make("Failed to parse creative power")->JsError.toJsExn,
      })
    }
  }

  let parseCreativeUnlocks = (reader: PacketFactory.PacketReader.t) => {
    let? Ok(itemId) = reader->readInt16("itemId")
    let? Ok(sacrificeCount) = reader->readUInt16("sacrificeCount")
    Ok(CreativeUnlocks({itemId, sacrificeCount}))
  }

  let parseCreativeUnlocksPlayerReport = (reader: PacketFactory.PacketReader.t) => {
    let? Ok(userId) = reader->readByte("userId")
    let? Ok(itemId) = reader->readUInt16("itemId")
    let? Ok(researchedCount) = reader->readUInt16("researchedCount")
    Ok(CreativeUnlocksPlayerReport({userId, itemId, researchedCount}))
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
        context: "PacketV1457_NetModuleLoad.parseTeleportPylon",
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
    let? Ok(_) = reader->readByte("messageType")
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
        context: "PacketV1457_NetModuleLoad.parseCreativePowerPermission",
        error: JsError.make("Unknown creative power permission level")->JsError.toJsExn,
      })
    }
  }

  let parseBanners = (reader: PacketFactory.PacketReader.t) => {
    let? Ok(messageType) = reader->readByte("messageType")
    switch messageType {
    | 0 =>
      let? Ok(killCountLength) = reader->readInt16("killCountLength")
      let rec readKillCounts = (idx, acc) =>
        if idx >= killCountLength {
          Ok(Array.toReversed(acc))
        } else {
          let? Ok(killCount) = reader->readInt32("killCount")
          readKillCounts(idx + 1, [killCount, ...acc])
        }
      let? Ok(killCounts) = readKillCounts(0, [])
      let? Ok(claimableCountLength) = reader->readInt16("claimableCountLength")
      let rec readClaimableCounts = (idx, acc) =>
        if idx >= claimableCountLength {
          Ok(Array.toReversed(acc))
        } else {
          let? Ok(claimableCount) = reader->readUInt16("claimableCount")
          readClaimableCounts(idx + 1, [claimableCount, ...acc])
        }
      let? Ok(claimableCounts) = readClaimableCounts(0, [])
      Ok(Banners(BannerFullState({killCounts, claimableCounts})))
    | 1 =>
      let? Ok(bannerId) = reader->readInt16("bannerId")
      let? Ok(killCount) = reader->readInt32("killCount")
      Ok(Banners(BannerKillCountUpdate({bannerId, killCount})))
    | 2 =>
      let? Ok(bannerId) = reader->readInt16("bannerId")
      let? Ok(claimCount) = reader->readUInt16("claimCount")
      Ok(Banners(BannerClaimCountUpdate({bannerId, claimCount})))
    | 3 =>
      let? Ok(bannerId) = reader->readInt16("bannerId")
      let? Ok(amount) = reader->readUInt16("amount")
      Ok(Banners(BannerClaimRequest({bannerId, amount})))
    | 4 =>
      let? Ok(bannerId) = reader->readInt16("bannerId")
      let? Ok(amount) = reader->readUInt16("amount")
      let? Ok(granted) = reader->readBool("granted")
      Ok(Banners(BannerClaimResponse({bannerId, amount, granted})))
    | _ =>
      Error({
        context: "PacketV1457_NetModuleLoad.parseBanners",
        error: JsError.make("Unknown banner message type")->JsError.toJsExn,
      })
    }
  }

  let parseCraftingRequests = (reader: PacketFactory.PacketReader.t, fromServer: bool) => {
    if fromServer {
      let? Ok(approved) = reader->readBool("approved")
      Ok(CraftingRequests(CraftingResponse({approved: approved})))
    } else {
      let? Ok(itemsCount) = reader->read7BitEncodedInt("itemsCount")
      let rec readItems = (idx, acc) =>
        if idx >= itemsCount {
          Ok(Array.toReversed(acc))
        } else {
          let? Ok(itemIdOrRecipeGroup) = reader->readInt32("itemIdOrRecipeGroup")
          let? Ok(stack) = reader->read7BitEncodedInt("stack")
          readItems(idx + 1, [{itemIdOrRecipeGroup, stack}, ...acc])
        }
      let? Ok(items) = readItems(0, [])
      let? Ok(chestCount) = reader->read7BitEncodedInt("chestCount")
      let rec readChests = (idx, acc) =>
        if idx >= chestCount {
          Ok(Array.toReversed(acc))
        } else {
          let? Ok(chestIndex) = reader->read7BitEncodedInt("chestIndex")
          readChests(idx + 1, [chestIndex, ...acc])
        }
      let? Ok(chestIndexes) = readChests(0, [])
      Ok(CraftingRequests(CraftingRequest({items, chestIndexes})))
    }
  }

  let readSparseNpcTimes = (reader: PacketFactory.PacketReader.t) => {
    let rec loop = acc => {
      let? Ok(npcIndex) = reader->readByte("npcIndex")
      if npcIndex >= maxNpcIndexSentinel {
        Ok(Array.toReversed(acc))
      } else {
        let? Ok(time) = reader->readInt32("npcTime")
        loop([{npcIndex, time}, ...acc])
      }
    }
    loop([])
  }

  let parseLeashedEntity = (reader: PacketFactory.PacketReader.t) => {
    let? Ok(messageType) = reader->readByte("messageType")
    switch messageType {
    | 0 =>
      let? Ok(slot) = reader->read7BitEncodedInt("slot")
      Ok(LeashedEntity(LeashedRemove({slot: slot})))
    | 1 =>
      let? Ok(slot) = reader->read7BitEncodedInt("slot")
      let? Ok(entityType) = reader->read7BitEncodedInt("entityType")
      let? Ok(anchorX) = reader->readInt16("anchorX")
      let? Ok(anchorY) = reader->readInt16("anchorY")
      let? Ok(bytesLeft) = reader->getBytesLeft
      let? Ok(payload) = reader->readBuffer(bytesLeft, "payload")
      Ok(LeashedEntity(LeashedFullSync({slot, entityType, anchorX, anchorY, payload})))
    | 2 =>
      let? Ok(slot) = reader->read7BitEncodedInt("slot")
      let? Ok(entityType) = reader->read7BitEncodedInt("entityType")
      let? Ok(bytesLeft) = reader->getBytesLeft
      let? Ok(payload) = reader->readBuffer(bytesLeft, "payload")
      Ok(LeashedEntity(LeashedPartialSync({slot, entityType, payload})))
    | _ =>
      Error({
        context: "PacketV1457_NetModuleLoad.parseLeashedEntity",
        error: JsError.make("Unknown leashed entity message type")->JsError.toJsExn,
      })
    }
  }

  let parseUnbreakableWallScan = (reader: PacketFactory.PacketReader.t) => {
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(insideUnbreakableWalls) = reader->readBool("insideUnbreakableWalls")
    Ok(UnbreakableWallScan({playerId, insideUnbreakableWalls}))
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
    | Some(NetModuleType.CreativeUnlocks) => reader->parseCreativeUnlocks
    | Some(NetModuleType.CreativePower) => reader->parseCreativePower
    | Some(NetModuleType.CreativeUnlocksPlayerReport) => reader->parseCreativeUnlocksPlayerReport
    | Some(NetModuleType.TeleportPylon) => reader->parseTeleportPylon
    | Some(NetModuleType.Particles) => reader->parseParticle
    | Some(NetModuleType.CreativePowerPermissions) => reader->parseCreativePowerPermission
    | Some(NetModuleType.Banners) => reader->parseBanners
    | Some(NetModuleType.CraftingRequests) => reader->parseCraftingRequests(fromServer)
    | Some(NetModuleType.LeashedEntity) => reader->parseLeashedEntity
    | Some(NetModuleType.UnbreakableWallScan) => reader->parseUnbreakableWallScan
    | None =>
      Error({
        context: "PacketV1457_NetModuleLoad.parse",
        error: JsError.make("Unknown net module type")->JsError.toJsExn,
      })
    }
  }
}

let toBuffer = Encode.toBuffer
let parse = Decode.parse
