@genType
type t = {reason: PacketFactory.NetworkText.t}

module Decode = {
  let {readNetworkText} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(reason) = reader->readNetworkText("reason")
    Ok({reason: reason})
  }
}

module Encode = {
  let {packNetworkText, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.Disconnect->PacketType.toInt)
    ->packNetworkText(self.reason, "reason")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
