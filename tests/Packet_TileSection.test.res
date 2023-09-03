module TileSectionSend = Packet.TileSectionSend

open Zora

zoraBlock("Should be the same going after encode/decode", t => {
  let data = NodeJs.Fs.readFileSync("tests/send_section")
  //Js.Console.log(data->NodeJs.Buffer.readUint8(~offset=2))
  let p = TileSectionSend.parse(data)
  t->optionSome(p, (t, section) => {
    let data = TileSectionSend.toBuffer(section)
    let p = TileSectionSend.parse(data)
    t->optionSome(
      p,
      (t, section) => {
        let buf = TileSectionSend.toBuffer(section)
        Js.Console.log(data->NodeJs.Buffer.slice(~start=0, ~end_=20))
        Js.Console.log(buf->NodeJs.Buffer.slice(~start=0, ~end_=20))
        t->ok(
          buf->NodeJs.Buffer.toString === data->NodeJs.Buffer.toString,
          "Expected decode->encode to reproduce the same buffer",
        )
      },
    )
  })
})
