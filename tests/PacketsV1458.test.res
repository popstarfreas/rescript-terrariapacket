open Zora

let fromHex = hex => NodeJs.Buffer.fromStringWithEncoding(hex, NodeJs.StringEncoding.hex)
let toHex = buffer => NodeJs.Buffer.toStringWithEncoding(buffer, NodeJs.StringEncoding.hex)

// WorldInfo with two extra spawn points, followed in v1458 by Int16 dungeon X/Y.
let worldInfoV1457Hex = "b00007483f00000000d0206009b7100e037c0782072a09214a054c6f6262790221123b408994804ab40674ee13ee1d0501000000160100000504090708000305020402050201030002cdcc4c3f411c08000050120000491b000004010403d90a0000de0b0000ed1900000207000500040403000404020402040001000000000e2d9841023d60f404000006000700a700a800a900ffffffffffff000000000000000000ae9d273e02ffffff7f007d0080"
let worldInfoV1458Hex = "b40007483f00000000d0206009b7100e037c0782072a09214a054c6f6262790221123b408994804ab40674ee13ee1d0501000000160100000504090708000305020402050201030002cdcc4c3f411c08000050120000491b000004010403d90a0000de0b0000ed1900000207000500040403000404020402040001000000000e2d9841023d60f404000006000700a700a800a900ffffffffffff000000000000000000ae9d273e02ffffff7f007d00803412c7cf"
let worldInfoV1457 = fromHex(worldInfoV1457Hex)
let worldInfoV1458 = fromHex(worldInfoV1458Hex)

let packedBuffer = (result: result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>, t) =>
  switch result {
  | Ok(buffer) => buffer
  | Error(error) => {
      t->fail(~msg=JsExn.message(error.error)->Option.getOr("Serialization failed"))
      NodeJs.Buffer.fromString("")
    }
  }

zoraBlock("1.4.5.8 WorldInfo appends signed dungeon coordinates after extra spawn points", t => {
  switch Packet.WorldInfo.parse(worldInfoV1458) {
  | Ok(value) => {
      t->equal(value.dungeonX, 4660)
      t->equal(value.dungeonY, -12345)
      t->equal(value.extraSpawnPoints, [{x: -1, y: 32767}, {x: 32000, y: -32768}])
      t->equal(Packet.WorldInfo.toBuffer(value)->packedBuffer(t)->toHex, worldInfoV1458Hex)
      switch Packet.toBuffer(Packet.WorldInfo(value), true) {
      | Ok(buffer) => t->equal(buffer->toHex, worldInfoV1458Hex)
      | _ => t->fail(~msg="Expected aggregate WorldInfo serialization")
      }
    }
  | Error(error) => t->fail(~msg=error.context)
  }
  switch Parser.parse(~buffer=worldInfoV1458, ~fromServer=true) {
  | Ok(WorldInfo(value)) => t->equal(value.dungeonY, -12345)
  | _ => t->fail(~msg="Expected latest WorldInfo")
  }
  switch Parser.parseLazy(~buffer=worldInfoV1458, ~fromServer=true) {
  | Ok(WorldInfo(value)) =>
    switch Lazy.get(value) {
    | Ok(value) => t->equal(value.dungeonX, 4660)
    | Error(error) => t->fail(~msg=error.context)
    }
  | _ => t->fail(~msg="Expected lazy latest WorldInfo")
  }
})

zoraBlock("1.4.5.7 retains the old WorldInfo layout and aggregate APIs", t => {
  switch ParserV1457.parse(~buffer=worldInfoV1457, ~fromServer=true) {
  | Ok(WorldInfo(value) as packet) => {
      t->equal(PacketV1457.WorldInfo.toBuffer(value)->packedBuffer(t)->toHex, worldInfoV1457Hex)
      switch PacketV1457.toBuffer(packet, true) {
      | Ok(buffer) => t->equal(buffer->toHex, worldInfoV1457Hex)
      | _ => t->fail(~msg="Expected historical aggregate WorldInfo serialization")
      }
    }
  | _ => t->fail(~msg="Expected historical WorldInfo")
  }
  switch ParserV1457.parseLazy(~buffer=worldInfoV1457, ~fromServer=true) {
  | Ok(WorldInfo(value)) =>
    switch Lazy.get(value) {
    | Ok(value) => t->equal(value.extraSpawnPoints->Array.length, 2)
    | Error(error) => t->fail(~msg=error.context)
    }
  | _ => t->fail(~msg="Expected lazy historical WorldInfo")
  }
  switch ParserV1457.parse(~buffer=worldInfoV1457, ~fromServer=true, ~ignore=[WorldInfo]) {
  | Error(IgnoredPacket) => t->ok(true)
  | _ => t->fail(~msg="Expected historical ignore filter")
  }
})

zoraBlock("1.4.5.8 reports missing dungeon coordinates in truncated WorldInfo", t => {
  for bytesPresent in 0 to 3 {
    let truncated = worldInfoV1458->NodeJs.Buffer.slice(~start=0, ~end_=176 + bytesPresent)
    let field = bytesPresent < 2 ? "dungeonX" : "dungeonY"
    switch Packet.WorldInfo.parse(truncated) {
    | Error(error) => t->equal(error.context, field)
    | Ok(_) => t->fail(~msg="Expected missing dungeon coordinate error")
    }
    switch Parser.parse(~buffer=truncated, ~fromServer=true) {
    | Error(ReaderError(error)) => t->equal(error.context, "Packet WorldInfo: " ++ field)
    | _ => t->fail(~msg="Expected contextual aggregate reader error")
    }
    switch Parser.parseLazy(~buffer=truncated, ~fromServer=true) {
    | Ok(WorldInfo(value)) =>
      switch Lazy.get(value) {
      | Error(error) => t->equal(error.context, "Packet WorldInfo: " ++ field)
      | Ok(_) => t->fail(~msg="Expected deferred reader error")
      }
    | _ => t->fail(~msg="Expected deferred contextual reader error")
    }
  }
})

zoraBlock("WorldInfo converts between 1.4.5.7 and 1.4.5.8 without changing older bytes", t => {
  switch ParserConverterV1457.convertToLatestIfNeeded(~buffer=worldInfoV1457, ~fromServer=true) {
  | Ok(ConvertedToLatest(WorldInfo(value))) => {
      t->equal(value.dungeonX, 0)
      t->equal(value.dungeonY, 0)
      t->equal(value.extraSpawnPoints->Array.length, 2)
      let encoded = Packet.WorldInfo.toBuffer(value)->packedBuffer(t)
      t->equal(encoded->NodeJs.Buffer.length, 180)
      t->equal(encoded->NodeJs.Buffer.sliceToEnd(~start=176)->toHex, "00000000")
    }
  | _ => t->fail(~msg="Expected upgraded WorldInfo with default dungeon coordinates")
  }
  switch ParserConverterV1457.convertFromLatestIfNeeded(~buffer=worldInfoV1458, ~fromServer=true) {
  | Ok(ConvertedFromLatest(WorldInfo(value))) =>
    t->equal(PacketV1457.WorldInfo.toBuffer(value)->packedBuffer(t)->toHex, worldInfoV1457Hex)
  | _ => t->fail(~msg="Expected WorldInfo converted back to the old layout")
  }
  switch ParserConverterV1456.convertToLatestIfNeeded(~buffer=worldInfoV1457, ~fromServer=true) {
  | Ok(ConvertedToLatest(WorldInfo(value))) => {
      t->equal(value.dungeonX, 0)
      t->equal(value.dungeonY, 0)
      let encoded = Packet.WorldInfo.toBuffer(value)->packedBuffer(t)
      switch ParserConverterV1456.convertFromLatestIfNeeded(~buffer=encoded, ~fromServer=true) {
      | Ok(ConvertedFromLatest(WorldInfo(old))) =>
        t->equal(PacketV1456.WorldInfo.toBuffer(old)->packedBuffer(t)->toHex, worldInfoV1457Hex)
      | _ => t->fail(~msg="Expected WorldInfo converted back to 1.4.5.6")
      }
    }
  | _ => t->fail(~msg="Expected 1.4.5.6 conversion to include new coordinate defaults")
  }
})

zoraBlock("1.4.5.8 keeps packet IDs and the generic connection version codec", t => {
  for id in 0 to 255 {
    let latest = PacketType.fromInt(id)->Option.map(PacketType.packetName)
    let previous = PacketTypeV1457.fromInt(id)->Option.map(PacketTypeV1457.packetName)
    t->equal(latest, previous)
  }
  let connection = Packet.ConnectRequest.toBuffer({version: "Terraria326"})->packedBuffer(t)
  t->equal(connection->toHex, "0f00010b5465727261726961333236")
  switch Parser.parse(~buffer=connection, ~fromServer=false) {
  | Ok(ConnectRequest(value)) => t->equal(value.version, "Terraria326")
  | _ => t->fail(~msg="Expected new handshake version")
  }
  let ack = fromHex("0300a2")
  switch ParserConverterV1457.convertToLatestIfNeeded(~buffer=ack, ~fromServer=true) {
  | Ok(PacketStructureIsSame) => t->ok(true)
  | _ => t->fail(~msg="Expected unchanged DamageNPCAck layout")
  }
  switch ParserConverterV1457.convertFromLatestIfNeeded(~buffer=ack, ~fromServer=true) {
  | Ok(PacketStructureIsSame) => t->ok(true)
  | _ => t->fail(~msg="Expected unchanged DamageNPCAck layout")
  }
})

zoraBlock("1.4.5.7 conversion reports invalid headers and WorldInfo payloads", t => {
  for length in 0 to 2 {
    let buffer = worldInfoV1457->NodeJs.Buffer.slice(~start=0, ~end_=length)
    switch ParserConverterV1457.convertToLatestIfNeeded(~buffer, ~fromServer=true) {
    | Error(InvalidPacketLength(actual)) => t->equal(actual, length)
    | _ => t->fail(~msg="Expected old header length error")
    }
    switch ParserConverterV1457.convertFromLatestIfNeeded(~buffer, ~fromServer=true) {
    | Error(InvalidPacketLength(actual)) => t->equal(actual, length)
    | _ => t->fail(~msg="Expected latest header length error")
    }
  }
  let unknown = fromHex("0300ff")
  switch ParserConverterV1457.convertToLatestIfNeeded(~buffer=unknown, ~fromServer=true) {
  | Error(InvalidPacketType(255)) => t->ok(true)
  | _ => t->fail(~msg="Expected unknown old packet type")
  }
  switch ParserConverterV1457.convertFromLatestIfNeeded(~buffer=unknown, ~fromServer=true) {
  | Error(InvalidPacketType(255)) => t->ok(true)
  | _ => t->fail(~msg="Expected unknown latest packet type")
  }
  switch ParserConverterV1457.convertToLatestIfNeeded(~buffer=worldInfoV1457, ~fromServer=false) {
  | Error(WorldInfoFromClient) => t->ok(true)
  | _ => t->fail(~msg="Expected old WorldInfo direction error")
  }
  switch ParserConverterV1457.convertFromLatestIfNeeded(~buffer=worldInfoV1458, ~fromServer=false) {
  | Error(WorldInfoFromClient) => t->ok(true)
  | _ => t->fail(~msg="Expected latest WorldInfo direction error")
  }
  switch ParserConverterV1457.convertFromLatestIfNeeded(~buffer=worldInfoV1457, ~fromServer=true) {
  | Error(ReaderError(error)) => t->equal(error.context, "Packet WorldInfo: dungeonX")
  | _ => t->fail(~msg="Expected missing dungeon coordinate error during conversion")
  }
})

zoraBlock("1.4.5.8 cavern-monster sync is server-only while historical behavior is preserved", t => {
  let buffer = fromHex("0f0088010002000300040005000600")
  switch Parser.parse(~buffer, ~fromServer=false) {
  | Error(CavernMonsterTypeSyncFromClient) => t->ok(true)
  | _ => t->fail(~msg="Expected server-only direction error")
  }
  switch Parser.parseLazy(~buffer, ~fromServer=false) {
  | Error(CavernMonsterTypeSyncFromClient) => t->ok(true)
  | _ => t->fail(~msg="Expected lazy server-only direction error")
  }
  switch Parser.parse(~buffer, ~fromServer=true) {
  | Ok(CavernMonsterTypeSync(value) as packet) => {
      t->equal(value, [[1, 2, 3], [4, 5, 6]])
      switch Packet.toBuffer(packet, false) {
      | Error(_) => t->ok(true)
      | _ => t->fail(~msg="Expected client serialization to be rejected")
      }
      switch Packet.toBuffer(packet, true) {
      | Ok(encoded) => t->equal(encoded->toHex, buffer->toHex)
      | _ => t->fail(~msg="Expected server serialization")
      }
    }
  | _ => t->fail(~msg="Expected server cavern-monster sync")
  }
  switch ParserV1457.parse(~buffer, ~fromServer=false) {
  | Ok(CavernMonsterTypeSync(_) as packet) =>
    switch PacketV1457.toBuffer(packet, false) {
    | Ok(encoded) => t->equal(encoded->toHex, buffer->toHex)
    | _ => t->fail(~msg="Expected historical client serialization")
    }
  | _ => t->fail(~msg="Expected historical client packet to remain accepted")
  }
  switch ParserConverterV1457.convertToLatestIfNeeded(~buffer, ~fromServer=false) {
  | Ok(DiscardAsNotExists) => t->ok(true)
  | _ => t->fail(~msg="Expected unsupported client packet to be discarded")
  }
  switch ParserConverterV1456.convertToLatestIfNeeded(~buffer, ~fromServer=false) {
  | Ok(DiscardAsNotExists) => t->ok(true)
  | _ => t->fail(~msg="Expected 1.4.5.6 client packet to be discarded")
  }
  switch ParserConverter.convertFromV1449IfNeeded(~buffer, ~fromServer=false) {
  | Ok(DiscardAsNotExists) => t->ok(true)
  | _ => t->fail(~msg="Expected 1.4.4.9 client packet to be discarded")
  }
  let truncated = buffer->NodeJs.Buffer.slice(~start=0, ~end_=14)
  switch Parser.parse(~buffer=truncated, ~fromServer=true) {
  | Error(ReaderError(error)) => t->equal(error.context, "Packet CavernMonsterTypeSync: monster_1_2")
  | _ => t->fail(~msg="Expected error for missing cavern-monster data")
  }
})
