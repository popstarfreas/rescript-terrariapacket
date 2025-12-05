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
  let {packByte, packInt32, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.AnglerQuestsCompletedAmount->PacketType.toInt)
    ->packByte(self.playerId)
    ->packInt32(self.anglerQuestsFinished)
    ->packInt32(self.golferScoreAccumulated)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
