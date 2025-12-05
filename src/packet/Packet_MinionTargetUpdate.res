@genType
type t = {
  playerId: int,
  x: float,
  y: float,
}

module Decode = {
  let {readByte, readSingle} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(x) = reader->readSingle("x")
    let? Ok(y) = reader->readSingle("y")
    Ok({playerId, x, y})
  }
}

module Encode = {
  let {packByte, packSingle, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.MinionTargetUpdate->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packSingle(self.x, "x")
    ->packSingle(self.y, "y")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
