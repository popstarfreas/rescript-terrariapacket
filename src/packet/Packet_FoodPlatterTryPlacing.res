@genType
type t = {
  x: int,
  y: int,
  itemId: int,
  prefix: int,
  stack: int,
}

module Decode = {
  let {readByte, readInt16} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let x = reader->readInt16
    let y = reader->readInt16
    let itemId = reader->readInt16
    let prefix = reader->readByte
    let stack = reader->readInt16
    Some({
      x,
      y,
      itemId,
      prefix,
      stack,
    })
  }
}

module Encode = {
  module Writer = PacketFactory.ManagedPacketWriter
  let {packByte, packInt16, setType, data} = module(Writer)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    Writer.make()
    ->setType(PacketType.FoodPlatterTryPlacing->PacketType.toInt)
    ->packInt16(self.x)
    ->packInt16(self.y)
    ->packInt16(self.itemId)
    ->packInt16(self.prefix)
    ->packInt16(self.stack)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
