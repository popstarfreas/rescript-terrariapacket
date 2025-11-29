@genType
type t = {
  x: int,
  y: int,
  itemId: int,
  prefix: int,
  stack: int,
}

module Decode = {
  let {readByte, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(x) = reader->readInt16("x")
    let? Ok(y) = reader->readInt16("y")
    let? Ok(itemId) = reader->readInt16("itemId")
    let? Ok(prefix) = reader->readByte("prefix")
    let? Ok(stack) = reader->readInt16("stack")
    Ok({
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
    ->setType(PacketType.ItemFramePlace->PacketType.toInt)
    ->packInt16(self.x)
    ->packInt16(self.y)
    ->packInt16(self.itemId)
    ->packByte(self.prefix)
    ->packInt16(self.stack)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
