@genType
type t = {
  x: int,
  y: int,
  active: bool,
}

module Decode = {
  let {readInt16, readBool} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(x) = reader->readInt16("x")
    let? Ok(y) = reader->readInt16("y")
    let? Ok(active) = reader->readBool("active")
    Ok({x, y, active})
  }
}

module Encode = {
  let {packInt16, packBool, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.GemLockToggle->PacketType.toInt)
    ->packInt16(self.x, "x")
    ->packInt16(self.y, "y")
    ->packBool(self.active, "active")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
