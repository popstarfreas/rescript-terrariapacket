open Zora

let toHex = buffer => NodeJs.Buffer.toStringWithEncoding(buffer, NodeJs.StringEncoding.hex)

let packedBuffer = (result: result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>, t) =>
  switch result {
  | Ok(buffer) => buffer
  | Error(error) => {
      t->fail(~msg=JsExn.message(error.error)->Option.getOr("Serialization failed"))
      NodeJs.Buffer.fromString("")
    }
  }

let value: PacketV1457_PiggyBankVoidLensUpdate.t = {
  playerId: 7,
  piggyBankProj: {
    projectileKey: {spawner: 2, index: 42, generation: 3},
    projectileType: 734,
  },
  voidLensChest: {
    projectileKey: {spawner: 0, index: 0, generation: 0},
    projectileType: 0,
  },
}

let expected = "10008e07022a0c00de02000000000000"

zoraBlock("1.4.5.7+ PiggyBankVoidLensUpdate uses two fixed projectile references", t => {
  let encoded = PacketV1457_PiggyBankVoidLensUpdate.toBuffer(value)->packedBuffer(t)
  t->equal(encoded->toHex, expected)

  switch PacketV1457_PiggyBankVoidLensUpdate.parse(encoded) {
  | Ok(decoded) => {
      t->equal(decoded.playerId, 7)
      t->equal(decoded.piggyBankProj.projectileKey, value.piggyBankProj.projectileKey)
      t->equal(decoded.piggyBankProj.projectileType, 734)
      t->equal(decoded.voidLensChest.projectileKey, value.voidLensChest.projectileKey)
      t->equal(decoded.voidLensChest.projectileType, 0)
    }
  | Error(error) => t->fail(~msg=error.context)
  }

  switch Packet.toBuffer(Packet.PiggyBankVoidLensUpdate(value), false) {
  | Ok(buffer) => t->equal(buffer->toHex, expected)
  | NotImplemented => t->fail(~msg="Expected aggregate serialization")
  | Error(error) =>
    t->fail(~msg=JsExn.message(error.error)->Option.getOr("Serialization failed"))
  }
})

zoraBlock("1.4.5.6 conversion translates the old optional tracker representation", t => {
  let oldValue: PacketV1456.PiggyBankVoidLensUpdate.t = {
    playerId: 7,
    piggyBankProj: Some({ownerIndex: 2, expectedIdentity: 42, expectedType: 734}),
    voidLensChest: None,
  }
  let oldBuffer = PacketV1456.PiggyBankVoidLensUpdate.toBuffer(oldValue)->packedBuffer(t)
  t->equal(oldBuffer->toHex, "0c008e0702002a00de02ffff")

  switch ParserConverterV1456.convertToLatestIfNeeded(~buffer=oldBuffer, ~fromServer=false) {
  | Ok(ConvertedToLatest(PiggyBankVoidLensUpdate(converted))) => {
      t->equal(converted.piggyBankProj.projectileKey, {spawner: 2, index: 42, generation: 0})
      t->equal(converted.piggyBankProj.projectileType, 734)
      t->equal(converted.voidLensChest.projectileKey, {spawner: 0, index: 0, generation: 0})
    }
  | _ => t->fail(~msg="Expected upgraded PiggyBankVoidLensUpdate")
  }

  let currentBuffer = PacketV1457_PiggyBankVoidLensUpdate.toBuffer(value)->packedBuffer(t)
  switch ParserConverterV1456.convertFromLatestIfNeeded(~buffer=currentBuffer, ~fromServer=false) {
  | Ok(ConvertedFromLatest(PiggyBankVoidLensUpdate(converted))) =>
    t->equal(PacketV1456.PiggyBankVoidLensUpdate.toBuffer(converted)->packedBuffer(t)->toHex, oldBuffer->toHex)
  | _ => t->fail(~msg="Expected downgraded PiggyBankVoidLensUpdate")
  }
})
