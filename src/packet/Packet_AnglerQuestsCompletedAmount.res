@genType
type t = {
  playerId: int,
  anglerQuestsFinished: int,
  golferScoreAccumulated: int,
}

module Decode = {
  let {readByte, readInt32} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(anglerQuestsFinished) = reader->readInt32("anglerQuestsFinished")
    let? Ok(golferScoreAccumulated) = reader->readInt32("golferScoreAccumulated")
    Ok({
      playerId,
      anglerQuestsFinished,
      golferScoreAccumulated,
    })
  }
}

module Encode = {
  let {packByte, packInt32, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.AnglerQuestsCompletedAmount->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packInt32(self.anglerQuestsFinished, "anglerQuestsFinished")
    ->packInt32(self.golferScoreAccumulated, "golferScoreAccumulated")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
