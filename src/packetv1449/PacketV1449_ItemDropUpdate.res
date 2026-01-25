type t = {
  itemDropId: int,
  x: float,
  y: float,
  vx: float,
  vy: float,
  stack: int,
  prefix: int,
  noDelay: int,
  itemId: int,
}

module Decode = {
  let {readInt16, readSingle, readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(itemDropId) = reader->readInt16("itemDropId")
    let? Ok(x) = reader->readSingle("x")
    let? Ok(y) = reader->readSingle("y")
    let? Ok(vx) = reader->readSingle("vx")
    let? Ok(vy) = reader->readSingle("vy")
    let? Ok(stack) = reader->readInt16("stack")
    let? Ok(prefix) = reader->readByte("prefix")
    let? Ok(noDelay) = reader->readByte("noDelay")
    let? Ok(itemId) = reader->readInt16("itemId")
    Ok({
      itemDropId,
      x,
      y,
      vx,
      vy,
      stack,
      prefix,
      noDelay,
      itemId,
    })
  }
}

module Encode = {
  let {packSingle, packInt16, packByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.ItemDropUpdate->PacketType.toInt)
    ->packInt16(self.itemDropId, "itemDropId")
    ->packSingle(self.x, "x")
    ->packSingle(self.y, "y")
    ->packSingle(self.vx, "vx")
    ->packSingle(self.vy, "vy")
    ->packInt16(self.stack, "stack")
    ->packByte(self.prefix, "prefix")
    ->packByte(self.noDelay, "noDelay")
    ->packInt16(self.itemId, "itemId")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
