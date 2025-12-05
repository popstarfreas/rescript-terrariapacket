@genType
type t = {items: array<int>}

module Decode = {
  let {readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let items = []
    let rec readItems = idx =>
      if idx >= 40 {
        Ok()
      } else {
        let? Ok(item) = reader->readInt16(`item${Int.toString(idx + 1)}`)
        items->Array.push(item)
        readItems(idx + 1)
      }

    let? Ok(_) = readItems(0)

    Ok({items: items})
  }
}

module Encode = {
  module Writer = ErrorAwarePacketWriter
  let {packInt16, setType, data} = module(Writer)
  let packItems = (writer: Writer.t, items: array<int>): Writer.t => {
    let rec loop = (writer: Writer.t, idx: int): Writer.t =>
      if idx >= items->Array.length {
        writer
      } else {
        loop(
          writer->packInt16(
            items->Array.getUnsafe(idx),
            `item${(idx + 1)->Int.toString}`,
          ),
          idx + 1,
        )
      }
    loop(writer, 0)
  }

  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    if self.items->Array.length != 40 {
      Error({
        context: "Packet_TravellingMerchantInventory.toBuffer",
        error: JsError.make("Expected 40 items")->JsError.toJsExn,
      })
    } else {
      let writer = Writer.make()->setType(PacketType.TravellingMerchantInventory->PacketType.toInt)

      writer->packItems(self.items)->data
    }

  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
