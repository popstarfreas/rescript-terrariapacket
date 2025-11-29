type t = {
  x: int,
  y: int,
  color: int,
  coat: int,
}

module Decode = {
  let {readByte, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(x) = reader->readInt16("x")
    let? Ok(y) = reader->readInt16("y")
    let? Ok(color) = reader->readByte("color")
    let? Ok(coat) = reader->readByte("coat")
    Ok({
      x,
      y,
      color,
      coat,
    })
  }
}

module Encode = {
  let {packByte, packInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.TilePaint->PacketType.toInt)
    ->packInt16(self.x, "x")
    ->packInt16(self.y, "y")
    ->packByte(self.color, "color")
    ->packByte(self.coat, "coat")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
