@genType
type t = {
  progress: int,
  progressMax: int,
  icon: int,
  wave: int,
}

module Decode = {
  let {readInt32, readSByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(progress) = reader->readInt32("progress")
    let? Ok(progressMax) = reader->readInt32("progressMax")
    let? Ok(icon) = reader->readSByte("icon")
    let? Ok(wave) = reader->readSByte("wave")
    Ok({progress, progressMax, icon, wave})
  }
}

module Encode = {
  let {packInt32, packSByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.InvasionProgressReport->PacketType.toInt)
    ->packInt32(self.progress, "progress")
    ->packInt32(self.progressMax, "progressMax")
    ->packSByte(self.icon, "icon")
    ->packSByte(self.wave, "wave")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
