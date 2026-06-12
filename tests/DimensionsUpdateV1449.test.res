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

zoraBlock("DimensionsUpdate parses and serialises RTT update packets", t => {
  let hex = "1a0043060003d8d600008813000060ea000015cd5b0700000000"
  let buffer = bufferFromHex(hex)

  switch PacketV1449_DimensionsUpdate.parse(buffer) {
  | Ok(PacketV1449_DimensionsUpdate.RttUpdate(rttUpdate) as packet) => {
      t->equal(rttUpdate.playerId, 3)
      t->equal(rttUpdate.clientRttMicros, 55000)
      t->equal(rttUpdate.serverRttMicros, 5000)
      t->equal(rttUpdate.overallRttMicros, 60000)
      t->equal(NodeJs.BigInt.toInt(rttUpdate.updatedAt), 123456789)

      switch PacketV1449_DimensionsUpdate.toBuffer(packet) {
      | Ok(encoded) => t->equal(bufferToHex(encoded), hex)
      | Error(err) => t->fail(~msg=errorMessage(err.error))
      }
    }
  | Ok(_) => t->fail(~msg="Expected RttUpdate")
  | Error(err) => t->fail(~msg=errorMessage(err.error))
  }
})
