@genType
type t = {
  playerId: int,
  x: int,
  y: int,
  pickPower: int,
}

module Decode = {
  let {readByte, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(x) = reader->readInt16("x")
    let? Ok(y) = reader->readInt16("y")
    let? Ok(pickPower) = reader->readByte("pickPower")
    Ok({playerId, x, y, pickPower})
  }
}

module Encode = {
  let {packByte, packInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.TilePickingSync->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packInt16(self.x, "x")
    ->packInt16(self.y, "y")
    ->packByte(self.pickPower, "pickPower")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
