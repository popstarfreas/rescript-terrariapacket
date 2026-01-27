@genType
type t = {
  playerId: int,
  targetPlayerId: int,
}

module Decode = {
  let {readByte, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(targetPlayerId) = reader->readInt16("targetPlayerId")
    Ok({playerId, targetPlayerId})
  }
}

module Encode = {
  let {packByte, packInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.PlayerSpectate->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packInt16(self.targetPlayerId, "targetPlayerId")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
