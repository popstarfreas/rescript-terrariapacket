@genType
type t = {
  sectionX: int,
  sectionY: int,
}

module Decode = {
  let {readUInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(sectionX) = reader->readUInt16("sectionX")
    let? Ok(sectionY) = reader->readUInt16("sectionY")
    Ok({sectionX, sectionY})
  }
}

module Encode = {
  let {packUInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.SectionRequest->PacketType.toInt)
    ->packUInt16(self.sectionX, "sectionX")
    ->packUInt16(self.sectionY, "sectionY")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
