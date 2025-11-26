@genType
type t = {items: array<int>}

module Decode = {
  let {readInt16} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let items = []
    for _ in 1 to 40 {
      items->Array.push(reader->readInt16)
    }

    Some({
      items: items,
    })
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
