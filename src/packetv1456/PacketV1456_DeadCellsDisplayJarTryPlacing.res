@genType
type t = {
  x: int,
  y: int,
  itemType: int,
  prefix: int,
  stack: int,
}

module Decode = {
  let {readInt16, readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(x) = reader->readInt16("x")
    let? Ok(y) = reader->readInt16("y")
    let? Ok(itemType) = reader->readInt16("itemType")
    let? Ok(prefix) = reader->readByte("prefix")
    let? Ok(stack) = reader->readInt16("stack")
    Ok({x, y, itemType, prefix, stack})
  }
}

module Encode = {
  let {packInt16, packByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketTypeV1456.DeadCellsDisplayJarTryPlacing->PacketTypeV1456.toInt)
    ->packInt16(self.x, "x")
    ->packInt16(self.y, "y")
    ->packInt16(self.itemType, "itemType")
    ->packByte(self.prefix, "prefix")
    ->packInt16(self.stack, "stack")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
