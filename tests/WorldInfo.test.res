open Zora

zoraBlock("should correctly parse and serialise WorldInfo", t => {
  let buffer = NodeJs.Buffer.fromStringWithEncoding(
    "a80007483f00000000d0206009b7100e037c0782072a09214a054c6f6262790221123b408994804ab40674ee13ee1d0501000000160100000504090708000305020402050201030002cdcc4c3f411c08000050120000491b000004010403d90a0000de0b0000ed1900000207000500040403000404020402040001000000000e2d9841023d60f404000006000700a700a800a900ffffffffffff000000000000000000ae9d273e00",
    NodeJs.StringEncoding.hex,
  )
  let result = Packet_WorldInfo.parse(buffer)

  switch result {
  | Ok(_data2) => Console.log(_data2)
  | Error(err) => t->fail(~msg=JsExn.message(err.error)->Option.getOrThrow)
  }
})

zoraBlock("should correctly parse and serialise WorldInfo", t => {
  let buffer = NodeJs.Buffer.fromStringWithEncoding(
    //"b3000706af00000101d02060094b0e4d024d02850314438021114461726b2047616d696e67202d2050764502ee8b9b66f3681d4289315c5a565b5e0801000000e6000000060407020002030102050204010102010100000000a16d0c00004f1400001f1d000001020403380700004f120000751600000104000601020403020301020502040101000000009e2fb841e13160e400000000a600a70009000800ffffffffffff0000000000000000000000000000",
    "b200073d3a00000001d02060094b0e4d024d02850314438021114461726b2047616d696e67202d2050764502ee8b9b66f3681d4289315c5a565b5e0801000000e6000000060407020002030102050204010102010100000000aa6d0c00004f1400001f1d000001020403380700004f120000751600000104000601020403020301020502040101000000009e3fb841e13160e400000000a600a70009000800ffffffffffff0000000000000000001269993e",
    NodeJs.StringEncoding.hex,
  )
  switch ParserConverter.convertFromV1449IfNeeded(~buffer, ~fromServer=true) {
  | Ok(PacketStructureIsSame) => t->fail(~msg="PacketStructureIsSame")
  | Ok(ConvertedToLatestVersion(WorldInfo(_) as packet)) => {
      let p = Packet.toBuffer(packet, true)
      switch p {
      | Ok(buffer) => {
          t->equal(buffer, buffer)

          let result = Packet_WorldInfo.parse(buffer)
          switch result {
          | Ok(data2) => Console.log(data2)
          | Error(err) => t->fail(~msg=Obj.magic(err))
          }
        }
      | Error(err) => t->fail(~msg=Obj.magic(err))
      | NotImplemented => t->fail(~msg="NotImplemented")
      }
    }
  | Ok(ConvertedToLatestVersion(_)) => t->fail(~msg="ConvertedToLatestVersion")
  | Error(err) => t->fail(~msg=Obj.magic(err))
  }
})
