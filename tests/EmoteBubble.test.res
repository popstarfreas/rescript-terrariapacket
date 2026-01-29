open Zora

zoraBlock("should correctly parse EmoteBubble", t => {
  let data = NodeJs.Buffer.fromStringWithEncoding(
    "0d005be60b0000000200640088",
    NodeJs.StringEncoding.hex,
  )
  let v = PacketV1449_EmoteBubble.parse(data)->Result.getOrThrow
  t->ignoreValue(v)
})
