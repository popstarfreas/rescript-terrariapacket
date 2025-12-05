@genType
type t = unit

module Decode = {
  let parse = (_payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => Ok()
}

module Encode = {
  let {setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (_self: t): NodeJs.Buffer.t =>
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.ClientFinishConnectingToServer->PacketType.toInt)
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
