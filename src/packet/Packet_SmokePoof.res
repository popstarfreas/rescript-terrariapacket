@genType
type t = {packedPosition: int}

module Decode = {
  let {readUInt32} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(packedPosition) = reader->readUInt32("packedPosition")
    Ok({packedPosition: packedPosition})
  }
}

module Encode = {
  let {packUInt32, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.SmokePoof->PacketType.toInt)
    ->packUInt32(self.packedPosition, "packedPosition")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
