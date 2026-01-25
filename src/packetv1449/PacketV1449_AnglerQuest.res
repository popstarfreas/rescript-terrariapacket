@genType
type t = {
  anglerQuest: int,
  anglerQuestFinished: bool,
}

module Decode = {
  let {readByte, readBool} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(anglerQuest) = reader->readByte("anglerQuest")
    let? Ok(anglerQuestFinished) = reader->readBool("anglerQuestFinished")
    Ok({anglerQuest, anglerQuestFinished})
  }
}

module Encode = {
  let {packByte, packBool, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t) => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.AnglerQuest->PacketType.toInt)
    ->packByte(self.anglerQuest, "anglerQuest")
    ->packBool(self.anglerQuestFinished, "anglerQuestFinished")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
