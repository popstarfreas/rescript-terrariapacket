@genType
type t = {
  x: int,
  y: int,
}

module Decode = {
  let {readInt32} = module(ErrorAwarePacketReader)

  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(x) = reader->readInt32("x")
    let? Ok(y) = reader->readInt32("y")
    Ok({x, y})
  }
}

module Encode = {
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    let {packInt32, setType, data} = module(ErrorAwarePacketWriter)
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.InitialTileSectionsRequest->PacketType.toInt)
    ->packInt32(self.x, "x")
    ->packInt32(self.y, "y")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
