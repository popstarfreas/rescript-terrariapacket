@gentype
type t = unit

module Decode = {
  let {} = module(PacketFactory.PacketReader)
  let parse = (_payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => Ok()
}

module Encode = {
  module Writer = PacketFactory.ManagedPacketWriter
  let {packByte, packInt32, packSingle, setType, data} = module(Writer)
  let toBuffer = (_self: t): NodeJs.Buffer.t => {
    Writer.make()
    ->setType(PacketType.HaveDryadDoStardewAnimation->PacketType.toInt)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
