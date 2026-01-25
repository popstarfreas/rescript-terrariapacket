@genType
type t = {
  good: int,
  evil: int,
  blood: int,
}

module Decode = {
  let {readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(good) = reader->readByte("good")
    let? Ok(evil) = reader->readByte("evil")
    let? Ok(blood) = reader->readByte("blood")
    Ok({good, evil, blood})
  }
}

module Encode = {
  let {packByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.GoodEvilUpdate->PacketType.toInt)
    ->packByte(self.good, "good")
    ->packByte(self.evil, "evil")
    ->packByte(self.blood, "blood")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
