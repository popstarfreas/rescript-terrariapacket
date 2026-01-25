@genType
type t = {
  npcId: int,
  playerId: int,
}

module Decode = {
  let {readInt16, readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(npcId) = reader->readInt16("npcId")
    let? Ok(playerId) = reader->readByte("playerId")
    Ok({npcId, playerId})
  }
}

module Encode = {
  let {packInt16, packByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.NpcItemStrike->PacketType.toInt)
    ->packInt16(self.npcId, "npcId")
    ->packByte(self.playerId, "playerId")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
