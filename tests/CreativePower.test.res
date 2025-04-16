open Zora
zoraBlock("should correctly parse and serialise FarPlacementRangePower", t => {
  let hex = "28005206000b0000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f"
  let buffer = NodeJs.Buffer.fromStringWithEncoding(hex, NodeJs.StringEncoding.hex)
  let p = Packet.NetModuleLoad.parse(buffer, ~fromServer=true)
  switch p {
  | Some(netModuleLoad) =>
    switch netModuleLoad {
    | CreativePower(FarPlacementRangePower(Everyone(values))) => t->ok(values->Array.every(v => v))
    | _ => t->fail(~msg="Failed to parse packet")
    }
    let hexOutput =
      Packet.NetModuleLoad.toBuffer(netModuleLoad)->NodeJs.Buffer.toStringWithEncoding(
        NodeJs.StringEncoding.hex,
      )
    t->equal(hex, hexOutput)
  | None => t->fail(~msg="Failed to parse packet")
  }
})

zoraBlock("should correctly parse and serialise GodmodePower", t => {
  let hex = "28005206000500000100000000000000000000000000000000000000000000000000000000000000"
  let buffer = NodeJs.Buffer.fromStringWithEncoding(hex, NodeJs.StringEncoding.hex)
  let p = Packet.NetModuleLoad.parse(buffer, ~fromServer=true)
  switch p {
  | Some(netModuleLoad) =>
    switch netModuleLoad {
    | CreativePower(GodmodePower(Everyone(values))) =>
      t->ok(values->Array.sliceToEnd(~start=1)->Array.every(v => !v))
      t->equal(values[0], Some(true))
    | _ => t->fail(~msg="Failed to parse packet")
    }
    let hexOutput =
      Packet.NetModuleLoad.toBuffer(netModuleLoad)->NodeJs.Buffer.toStringWithEncoding(
        NodeJs.StringEncoding.hex,
      )
    t->equal(hex, hexOutput)
  | None => t->fail(~msg="Failed to parse packet")
  }
})
