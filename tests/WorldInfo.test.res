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
