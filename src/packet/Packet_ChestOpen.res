@genType
type t = {
  x: int,
  y: int,
}

module Decode = {
  let {readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(x) = reader->readInt16("x")
    let? Ok(y) = reader->readInt16("y")
    Ok({x, y})
  }
}

module Encode = {
  let {packInt16, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t =>
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.ChestOpen->PacketType.toInt)
    ->packInt16(self.x)
    ->packInt16(self.y)
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
