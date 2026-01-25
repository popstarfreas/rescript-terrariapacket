@genType
type t = {
  playerId: int,
  level: int,
  x: float,
  y: float,
}

module Decode = {
  let {readByte, readUInt16, readSingle} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(level) = reader->readUInt16("level")
    let? Ok(x) = reader->readSingle("x")
    let? Ok(y) = reader->readSingle("y")
    Ok({playerId, level, x, y})
  }
}

module Encode = {
  let {packByte, packUInt16, packSingle, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.NebulaLevelUp->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packUInt16(self.level, "level")
    ->packSingle(self.x, "x")
    ->packSingle(self.y, "y")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
