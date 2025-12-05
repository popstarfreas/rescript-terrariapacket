@genType @genType
type t = {
  x: int,
  y: int,
  npcType: int,
  style: int,
}

module Decode = {
  let {readByte, readInt16, readInt32} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(x) = reader->readInt32("x")
    let? Ok(y) = reader->readInt32("y")
    let? Ok(npcType) = reader->readInt16("npcType")
    let? Ok(style) = reader->readByte("style")
    Ok({
      x,
      y,
      npcType,
      style,
    })
  }
}

module Encode = {
  let {packByte, packInt16, packInt32, setType, data} = module(ErrorAwarePacketWriter)
  type writer = ErrorAwarePacketWriter.t
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.NpcRelease->PacketType.toInt)
    ->packInt32(self.x, "x")
    ->packInt32(self.y, "y")
    ->packInt16(self.npcType, "npcType")
    ->packByte(self.style, "style")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
