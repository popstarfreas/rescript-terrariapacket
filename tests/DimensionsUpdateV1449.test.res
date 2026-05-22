open Zora

let bufferFromHex = hex => NodeJs.Buffer.fromStringWithEncoding(hex, NodeJs.StringEncoding.hex)

let bufferToHex = buffer => NodeJs.Buffer.toStringWithEncoding(buffer, NodeJs.StringEncoding.hex)

let errorMessage = error =>
  switch JsExn.message(error) {
  | Some(message) => message
  | None => "Unknown error"
  }

let assertSwitchServerManualRoundTrip = (t, ~hex, ~expectedServerName) => {
  let buffer = bufferFromHex(hex)

  switch PacketV1449_DimensionsUpdate.parse(buffer) {
  | Ok(PacketV1449_DimensionsUpdate.SwitchServerManual({ip, port, serverName}) as packet) => {
      t->equal(ip, "127.0.0.1")
      t->equal(port, 7777)
      t->equal(serverName, expectedServerName)

      switch PacketV1449_DimensionsUpdate.toBuffer(packet) {
      | Ok(encoded) => t->equal(bufferToHex(encoded), hex)
      | Error(err) => t->fail(~msg=errorMessage(err.error))
      }
    }
  | Ok(_) => t->fail(~msg="Expected SwitchServerManual")
  | Error(err) => t->fail(~msg=errorMessage(err.error))
  }
}

zoraBlock("DimensionsUpdate parses and serialises legacy SwitchServerManual packets", t => {
  assertSwitchServerManualRoundTrip(
    t,
    ~hex="1100430300093132372e302e302e31611e",
    ~expectedServerName=None,
  )
})

zoraBlock("DimensionsUpdate parses and serialises SwitchServerManual packets with serverName", t => {
  assertSwitchServerManualRoundTrip(
    t,
    ~hex="1700430300093132372e302e302e31611e054c6f626279",
    ~expectedServerName=Some("Lobby"),
  )
})
