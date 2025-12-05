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
  let {packByte, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t =>
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.Emoji->PacketType.toInt)
    ->packByte(self.playerId)
    ->packByte(self.emojiId)
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
