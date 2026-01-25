@genType
type t = unit
module Decode = {
  let parse = (_payload: NodeJs.Buffer.t) => {
    Ok()
  }
}

module Encode = {
  let {setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (_self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    Ok(
      PacketFactory.ManagedPacketWriter.make()
      ->setType(PacketType.WorldDataRequest->PacketType.toInt)
      ->data,
    )
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
