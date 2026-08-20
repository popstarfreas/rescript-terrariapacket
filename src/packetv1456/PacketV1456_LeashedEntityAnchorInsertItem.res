@genType
type t = {
  x: int,
  y: int,
  itemType: int,
}

module Decode = {
  let {readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(x) = reader->readInt16("x")
    let? Ok(y) = reader->readInt16("y")
    let? Ok(itemType) = reader->readInt16("itemType")
    Ok({x, y, itemType})
  }
}

module Encode = {
  let {packInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketTypeV1456.LeashedEntityAnchorInsertItem->PacketTypeV1456.toInt)
    ->packInt16(self.x, "x")
    ->packInt16(self.y, "y")
    ->packInt16(self.itemType, "itemType")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
