@genType
type t = {
  solar: int,
  vortex: int,
  nebula: int,
  stardust: int,
}

module Decode = {
  let {readUInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(solar) = reader->readUInt16("solar")
    let? Ok(vortex) = reader->readUInt16("vortex")
    let? Ok(nebula) = reader->readUInt16("nebula")
    let? Ok(stardust) = reader->readUInt16("stardust")
    Ok({solar, vortex, nebula, stardust})
  }
}

module Encode = {
  let {packUInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.ShieldStrengthsUpdate->PacketType.toInt)
    ->packUInt16(self.solar, "solar")
    ->packUInt16(self.vortex, "vortex")
    ->packUInt16(self.nebula, "nebula")
    ->packUInt16(self.stardust, "stardust")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
