@genType
type t = {
  playerId: int,
  emojiId: int,
}

module Decode = {
  let {readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(emojiId) = reader->readByte("emojiId")
    Ok({playerId, emojiId})
  }
}

module Encode = {
  let {packByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.Emoji->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packByte(self.emojiId, "emojiId")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
