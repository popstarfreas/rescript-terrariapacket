@genType
type t = {
  itemDropId: int,
  position: Point.t<float>,
}

module Decode = {
  let {readInt16, readSingle} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(itemDropId) = reader->readInt16("itemDropId")
    let? Ok(positionX) = reader->readSingle("positionX")
    let? Ok(positionY) = reader->readSingle("positionY")
    Ok({itemDropId, position: {x: positionX, y: positionY}})
  }
}

module Encode = {
  let {packInt16, packSingle, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketTypeV1456.ItemDropPosition->PacketTypeV1456.toInt)
    ->packInt16(self.itemDropId, "itemDropId")
    ->packSingle(self.position.x, "positionX")
    ->packSingle(self.position.y, "positionY")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
