// TODO: Implement
type t = unit

module Decode = {
  let {readInt16} = module(ErrorAwarePacketReader)
  let parse = (_payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    Ok()
  }
}

module Encode = {
  let {packInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (_self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketTypeV1457.ServerInfo->PacketTypeV1457.toInt)
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
