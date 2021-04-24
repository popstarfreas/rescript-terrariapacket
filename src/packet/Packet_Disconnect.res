type t = {reason: PacketFactory.NetworkText.t}

module Decode = {
  let {readNetworkText} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let reason = reader->readNetworkText
    Some({reason: reason})
  }
}

module Encode = {
  let {packNetworkText, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.Disconnect->PacketType.toInt)
    ->packNetworkText(self.reason)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
