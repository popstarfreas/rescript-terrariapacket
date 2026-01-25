@genType
type t = {
  action: int,
  x: int,
  y: int,
  style: int,
  treeType: int,
}

module Decode = {
  let {readByte, readInt32, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(action) = reader->readByte("action")
    let? Ok(x) = reader->readInt32("x")
    let? Ok(y) = reader->readInt32("y")
    let? Ok(style) = reader->readByte("style")
    let? Ok(treeType) = reader->readInt16("treeType")
    Ok({action, x, y, style, treeType})
  }
}

module Encode = {
  let {packByte, packInt32, packInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.TreeGrowFx->PacketType.toInt)
    ->packByte(self.action, "action")
    ->packInt32(self.x, "x")
    ->packInt32(self.y, "y")
    ->packByte(self.style, "style")
    ->packInt16(self.treeType, "treeType")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
