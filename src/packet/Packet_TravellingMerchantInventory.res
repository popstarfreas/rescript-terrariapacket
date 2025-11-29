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
  module Writer = PacketFactory.ManagedPacketWriter
  let {packInt16, setType, data} = module(Writer)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    let writer = Writer.make()->setType(PacketType.TravellingMerchantInventory->PacketType.toInt)

    self.items->Array.forEach(item => writer->packInt16(item)->ignore)

    writer->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
