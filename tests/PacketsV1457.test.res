open Zora

let bufferToHex = buffer => NodeJs.Buffer.toStringWithEncoding(buffer, NodeJs.StringEncoding.hex)

let packedBuffer = (
  result: result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>,
  t,
) =>
  switch result {
  | Ok(buffer) => buffer
  | Error(error) => {
      t->fail(~msg=JsExn.message(error.error)->Option.getOr("Packet serialization failed"))
      NodeJs.Buffer.fromString("")
    }
  }

let expectNotImplemented = (result, t) =>
  switch result {
  | Error(IParser.ParseError.NotImplemented) => t->ok(true)
  | Error(error) => t->fail(~msg=IParser.ParseError.toDisplayString(error))
  | Ok(_) => t->fail(~msg="Expected NotImplemented")
  }

zoraBlock("1.4.5.6 and 1.4.5.7 tail packet IDs remain distinct", t => {
  t->equal(PacketTypeV1456.ServerInfo->PacketTypeV1456.toInt, 162)
  t->equal(PacketTypeV1456.PlayerPlatformInfo->PacketTypeV1456.toInt, 163)
  t->equal(PacketType.DamageNPCAck->PacketType.toInt, 162)
  t->equal(PacketType.ServerInfo->PacketType.toInt, 163)
  t->equal(PacketType.PlayerPlatformInfo->PacketType.toInt, 164)

  let oldServer = PacketV1456_ServerInfo.toBuffer()->packedBuffer(t)
  let oldPlatform =
    PacketV1456_PlayerPlatformInfo.toBuffer({playerId: 7, platformId: Steam})->packedBuffer(t)
  let damageAck = PacketV1457_DamageNPCAck.toBuffer()->packedBuffer(t)
  let server = PacketV1457_ServerInfo.toBuffer()->packedBuffer(t)
  let platform = PacketV1457_PlayerPlatformInfo.toBuffer({playerId: 7, platformId: Steam})->packedBuffer(t)

  t->equal(oldServer->bufferToHex, "0300a2")
  t->equal(oldPlatform->bufferToHex, "0500a30706")
  t->equal(damageAck->bufferToHex, "0300a2")
  t->equal(server->bufferToHex, "0300a3")
  t->equal(platform->bufferToHex, "0500a40706")

  switch PacketV1456.toBuffer(PacketV1456.ServerInfo(), true) {
  | Ok(buffer) => t->equal(buffer->bufferToHex, "0300a2")
  | NotImplemented => t->fail(~msg="Expected v1.4.5.6 aggregate serialization")
  | Error(error) =>
    t->fail(~msg=JsExn.message(error.error)->Option.getOr("Packet serialization failed"))
  }

  switch Packet.toBuffer(Packet.DamageNPCAck(), true) {
  | Ok(buffer) => t->equal(buffer->bufferToHex, "0300a2")
  | NotImplemented => t->fail(~msg="Expected DamageNPCAck aggregate serialization")
  | Error(error) =>
    t->fail(~msg=JsExn.message(error.error)->Option.getOr("Packet serialization failed"))
  }

  switch Parser.parse(~buffer=damageAck, ~fromServer=true) {
  | Ok(Packet.DamageNPCAck(_)) => t->ok(true)
  | Ok(_) => t->fail(~msg="Expected DamageNPCAck")
  | Error(error) => t->fail(~msg=IParser.ParseError.toDisplayString(error))
  }

  switch ParserV1456.parseLazy(~buffer=oldServer, ~fromServer=true) {
  | Ok(packet) => t->equal(PacketV1456.LazyPacket.toPacketName(packet), "ServerInfo")
  | Error(error) => t->fail(~msg=IParser.ParseError.toDisplayString(error))
  }

  switch ParserConverterV1456.convertToLatestIfNeeded(~buffer=oldServer, ~fromServer=true) {
  | Ok(ParserConverterV1456.ConvertedToLatest(Packet.ServerInfo(_))) => t->ok(true)
  | Ok(_) => t->fail(~msg="Expected converted ServerInfo")
  | Error(error) => t->fail(~msg=IParser.ParseError.toDisplayString(error))
  }

  switch ParserConverterV1456.convertFromLatestIfNeeded(~buffer=server, ~fromServer=true) {
  | Ok(ParserConverterV1456.ConvertedFromLatest(PacketV1456.ServerInfo(_))) => t->ok(true)
  | Ok(_) => t->fail(~msg="Expected ServerInfo converted to v1.4.5.6")
  | Error(error) => t->fail(~msg=IParser.ParseError.toDisplayString(error))
  }

  switch ParserConverterV1456.convertFromLatestIfNeeded(~buffer=damageAck, ~fromServer=true) {
  | Ok(ParserConverterV1456.DiscardAsNotExists) => t->ok(true)
  | Ok(_) => t->fail(~msg="Expected DamageNPCAck to be discarded for v1.4.5.6")
  | Error(error) => t->fail(~msg=IParser.ParseError.toDisplayString(error))
  }
})

zoraBlock("1.4.5.7 item reservation fields use 7-bit encoded integers", t => {
  let packet: PacketV1457_ItemOwner.t = {
    itemDropId: 0x1234,
    owner: 5,
    timeToKeepReservation: 300,
    grabDelayPlayer: 9,
    grabDelayTime: 16384,
    position: {x: 1.5, y: -2.25},
  }
  let encoded = PacketV1457_ItemOwner.toBuffer(packet)->packedBuffer(t)
  t->equal(encoded->bufferToHex, "140016341205ac02098080010000c03f000010c0")
  switch PacketV1457_ItemOwner.parse(encoded) {
  | Ok(parsed) => t->equal(parsed, packet)
  | Error(error) => t->fail(~msg=JsExn.message(error.error)->Option.getOr("Parse failed"))
  }
})

zoraBlock("1.4.5.7 projectile keys pack spawner, index and generation", t => {
  let key: ProjectileKey.t = {spawner: 0x12, index: 0x155, generation: 0x1234}
  let packed = key->ProjectileKey.toInt
  t->equal(packed, 1221678354)
  t->equal(ProjectileKey.fromInt(packed), key)

  let packet: PacketV1457_ProjectileDestroy.t = {
    projectileKey: key,
    position: {x: 1.5, y: -2.25},
  }
  let encoded = PacketV1457_ProjectileDestroy.toBuffer(packet)->packedBuffer(t)
  t->equal(encoded->bufferToHex, "0f001d1255d1480000c03f000010c0")
  switch PacketV1457_ProjectileDestroy.parse(encoded) {
  | Ok(parsed) => t->equal(parsed, packet)
  | Error(error) => t->fail(~msg=JsExn.message(error.error)->Option.getOr("Parse failed"))
  }

  let sync: PacketV1457_ProjectileSync.t = {
    projectileKey: key,
    position: {x: 1.5, y: -2.25},
    velocity: {x: 3.25, y: -4.5},
    projectileType: 321,
    ai: (Some(1.25), None, Some(2.5)),
    bannerIdToRespondTo: Some(500),
    damage: Some(-123),
    knockback: Some(6.75),
    originalDamage: Some(456),
  }
  let encodedSync = PacketV1457_ProjectileSync.toBuffer(sync)->packedBuffer(t)
  t->equal(
    encodedSync->bufferToHex,
    "2d001b1255d1480000c03f000010c000005040000090c041017d010000a03ff40185ff0000d840c80100002040",
  )
  switch PacketV1457_ProjectileSync.parse(encodedSync) {
  | Ok(parsed) => t->equal(parsed, sync)
  | Error(error) => t->fail(~msg=JsExn.message(error.error)->Option.getOr("Parse failed"))
  }
})

zoraBlock("1.4.5.7 simple changed packets use their new layouts", t => {
  t->equal(
    PacketV1457_NpcStrike.toBuffer({
      npcSlotId: 0x12,
      generation: 0x34,
      damage: 0x1234,
      knockback: 1.5,
      direction: 1,
      critical: true,
    })
    ->packedBuffer(t)
    ->bufferToHex,
    "0d001c123434120000c03f0201",
  )
  t->equal(
    PacketV1457_ItemOwnerRemove.toBuffer({itemDropId: 1234, forceAssignToServer: true})
    ->packedBuffer(t)
    ->bufferToHex,
    "060027d20401",
  )
  t->equal(
    PacketV1457_PlayerDodge.toBuffer({playerId: 9, dodge: MysticSash})
    ->packedBuffer(t)
    ->bufferToHex,
    "05003e0905",
  )
  t->equal(
    PacketV1457_NpcCatch.toBuffer({npcId: 1234})->packedBuffer(t)->bufferToHex,
    "050046d204",
  )
})

zoraBlock("1.4.5.7 player update carries dash and snapping-stone flags", t => {
  let packet: PacketV1457_PlayerUpdate.t = {
    playerId: 1,
    control: {
      isHoldingUp: false,
      isHoldingDown: false,
      isHoldingLeft: false,
      isHoldingRight: false,
      isHoldingJump: false,
      isHoldingItemUse: false,
      isHoldingDash: true,
    },
    direction: Left,
    pulleyDirection: None,
    vortexStealthActive: false,
    gravityDirection: Normal,
    shieldRaised: false,
    ghost: false,
    selectedItem: 2,
    position: {x: 1.0, y: 2.0},
    velocity: None,
    mountType: None,
    potionOfReturn: None,
    tryKeepingHoveringUp: false,
    isVoidVaultEnabled: false,
    isSitting: false,
    hasFinishedAnyDd2Event: false,
    isPettingAnimal: false,
    isTheAnimalBeingPetSmall: false,
    tryKeepingHoveringDown: false,
    isSleeping: false,
    autoReuseAllWeapons: false,
    controlDownHold: false,
    isOperatingAnotherEntity: false,
    controlUseTile: false,
    netCameraTarget: None,
    lastItemUseAttemptSuccess: false,
    snappingStoneLightUp: true,
  }
  let encoded = PacketV1457_PlayerUpdate.toBuffer(packet)->packedBuffer(t)
  t->equal(encoded->bufferToHex, "11000d0180100080020000803f00000040")
  switch PacketV1457_PlayerUpdate.parse(encoded) {
  | Ok(parsed) => t->equal(parsed, packet)
  | Error(error) => t->fail(~msg=JsExn.message(error.error)->Option.getOr("Parse failed"))
  }
})

zoraBlock("1.4.5.7 merges shimmer and protection into item-drop flags", t => {
  let packet: PacketV1457_ItemDropUpdate.t = {
    itemDropId: 8,
    position: {x: 1.0, y: 2.0},
    velocity: {x: 3.0, y: 4.0},
    stack: 5,
    prefix: 6,
    ownership: GrabDelayForAllPlayers,
    itemId: 7,
    shimmer: Some({shimmered: true, shimmerTime: 8.5}),
    enemyGrabDelayTime: Some(9),
  }
  let encoded = PacketV1457_ItemDropUpdate.toBuffer(packet)->packedBuffer(t)
  switch PacketV1457_ItemDropUpdate.parse(encoded) {
  | Ok(parsed) => t->equal(parsed, packet)
  | Error(error) => t->fail(~msg=JsExn.message(error.error)->Option.getOr("Parse failed"))
  }

  let creativeUnlock =
    PacketV1457_NetModuleLoad.CreativeUnlocks({itemId: 1234, sacrificeCount: 42})
  let encodedCreative = PacketV1457_NetModuleLoad.toBuffer(creativeUnlock)->packedBuffer(t)
  t->equal(encodedCreative->bufferToHex, "0900520500d2042a00")
  switch PacketV1457_NetModuleLoad.parse(encodedCreative, ~fromServer=true) {
  | Ok(parsed) => t->equal(parsed, creativeUnlock)
  | Error(error) => t->fail(~msg=JsExn.message(error.error)->Option.getOr("Parse failed"))
  }

  switch ParserConverterV1456.convertFromLatestIfNeeded(
    ~buffer=encodedCreative,
    ~fromServer=true,
  ) {
  | Ok(ParserConverterV1456.DiscardAsNotExists) => t->ok(true)
  | Ok(_) => t->fail(~msg="Expected the new CreativeUnlocks module to be discarded for v1.4.5.6")
  | Error(error) => t->fail(~msg=IParser.ParseError.toDisplayString(error))
  }
})

zoraBlock("latest parser rejects retired packets while the 1.4.5.6 parser accepts them", t => {
  let npcItemStrike =
    PacketV1449_NpcItemStrike.toBuffer({npcId: 12, playerId: 3})->packedBuffer(t)
  let shimmered: PacketV1449_ItemDropShimmeredUpdate.t = {
    itemDropId: 1,
    x: 2.0,
    y: 3.0,
    vx: 4.0,
    vy: 5.0,
    stack: 6,
    prefix: 7,
    noDelay: 0,
    itemId: 8,
    shimmered: true,
    shimmeredTime: 9.0,
  }
  let protected: PacketV1449_ItemDropProtectedUpdate.t = {
    itemDropId: 10,
    x: 11.0,
    y: 12.0,
    vx: 13.0,
    vy: 14.0,
    stack: 15,
    prefix: 16,
    noDelay: 1,
    itemId: 17,
    timeLeftInWhichTheItemCannotBeTakenByEnemies: 18,
  }
  let shimmeredBuffer = PacketV1449_ItemDropShimmeredUpdate.toBuffer(shimmered)->packedBuffer(t)
  let protectedBuffer = PacketV1449_ItemDropProtectedUpdate.toBuffer(protected)->packedBuffer(t)

  switch ParserV1456.parse(~buffer=npcItemStrike, ~fromServer=false) {
  | Ok(PacketV1456.NpcItemStrike(value)) => t->equal(value.playerId, 3)
  | Ok(_) => t->fail(~msg="Expected v1.4.5.6 NpcItemStrike")
  | Error(error) => t->fail(~msg=IParser.ParseError.toDisplayString(error))
  }
  switch ParserV1456.parse(~buffer=shimmeredBuffer, ~fromServer=true) {
  | Ok(PacketV1456.ItemDropShimmeredUpdate(value)) => t->equal(value.shimmeredTime, 9.0)
  | Ok(_) => t->fail(~msg="Expected v1.4.5.6 ItemDropShimmeredUpdate")
  | Error(error) => t->fail(~msg=IParser.ParseError.toDisplayString(error))
  }
  switch ParserV1456.parse(~buffer=protectedBuffer, ~fromServer=true) {
  | Ok(PacketV1456.ItemDropProtectedUpdate(value)) =>
    t->equal(value.timeLeftInWhichTheItemCannotBeTakenByEnemies, 18)
  | Ok(_) => t->fail(~msg="Expected v1.4.5.6 ItemDropProtectedUpdate")
  | Error(error) => t->fail(~msg=IParser.ParseError.toDisplayString(error))
  }

  Parser.parse(~buffer=npcItemStrike, ~fromServer=false)->expectNotImplemented(t)
  Parser.parse(~buffer=shimmeredBuffer, ~fromServer=true)->expectNotImplemented(t)
  Parser.parse(~buffer=protectedBuffer, ~fromServer=true)->expectNotImplemented(t)

  switch ParserConverterV1456.convertToLatestIfNeeded(
    ~buffer=shimmeredBuffer,
    ~fromServer=true,
  ) {
  | Ok(ParserConverterV1456.ConvertedToLatest(Packet.ItemDropUpdate(value))) =>
    t->equal(value.shimmer, Some({shimmered: true, shimmerTime: 9.0}))
  | Ok(_) => t->fail(~msg="Expected merged ItemDropUpdate")
  | Error(error) => t->fail(~msg=IParser.ParseError.toDisplayString(error))
  }

  switch ParserConverter.convertFromV1449IfNeeded(
    ~buffer=shimmeredBuffer,
    ~fromServer=true,
  ) {
  | Ok(ParserConverter.ConvertedToLatestVersion(Packet.ItemDropUpdate(value))) =>
    t->equal(value.shimmer, Some({shimmered: true, shimmerTime: 9.0}))
  | Ok(_) => t->fail(~msg="Expected v1.4.4.9 item-drop conversion")
  | Error(error) => t->fail(~msg=IParser.ParseError.toDisplayString(error))
  }

  switch ParserConverter.convertFromV1449IfNeeded(
    ~buffer=npcItemStrike,
    ~fromServer=false,
  ) {
  | Ok(ParserConverter.DiscardAsNotExists) => t->ok(true)
  | Ok(_) => t->fail(~msg="Expected retired packet to be discarded")
  | Error(error) => t->fail(~msg=IParser.ParseError.toDisplayString(error))
  }
})
