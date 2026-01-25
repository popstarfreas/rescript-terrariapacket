@genType
type t = {markerId: int}

module Decode = {
  let {readInt32} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(markerId) = reader->readInt32("markerId")
    Ok({markerId: markerId})
  }
}

module Encode = {
  let {packInt32, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.RevengeMarkerRemove->PacketType.toInt)
    ->packInt32(self.markerId, "markerId")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
