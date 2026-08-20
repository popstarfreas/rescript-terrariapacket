@genType
type t = unit

module Decode = {
  let parse = (_payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => Ok(())
}

module Encode = {
  let {setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (_self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketTypeV1456.Ping->PacketTypeV1456.toInt)
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
