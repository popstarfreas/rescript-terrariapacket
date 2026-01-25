@genType
type t = {
  typeId: int,
  tileType: int,
  x: int,
  y: int,
}

module Decode = {
  let {readInt16, readUInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(typeId) = reader->readInt16("typeId")
    let? Ok(tileType) = reader->readUInt16("tileType")
    let? Ok(x) = reader->readInt16("x")
    let? Ok(y) = reader->readInt16("y")
    Ok({typeId, tileType, x, y})
  }
}

module Encode = {
  let {packInt16, packUInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.TemporaryAnimationCreate->PacketType.toInt)
    ->packInt16(self.typeId, "typeId")
    ->packUInt16(self.tileType, "tileType")
    ->packInt16(self.x, "x")
    ->packInt16(self.y, "y")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
