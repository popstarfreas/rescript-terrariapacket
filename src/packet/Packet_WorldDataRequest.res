type t = unit
module Decode = {
  let parse = (_payload: NodeJs.Buffer.t) => {
    Some()
  }
}

module Encode = {
  let {setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (_self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.WorldDataRequest->PacketType.toInt)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
