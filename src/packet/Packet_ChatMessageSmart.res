@genType
type t = {
  color: PacketFactory.Color.t,
  message: PacketFactory.NetworkText.t,
  widthLimit: int,
}
module Decode = {
  let {readInt16, readSingle, readColor, readNetworkText} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let color = reader->readColor("color")
    let message = reader->readNetworkText("message")
    let widthLimit = reader->readInt16("widthLimit")

    Some({
      color,
      message,
      widthLimit,
    })
  }
}

module Encode = {
  let {setType, data, packColor, packNetworkText, packInt16} = module(ErrorAwarePacketWriter)
  type writer = ErrorAwarePacketWriter.t // Assuming ManagedPacketWriter.t is compatible or ErrorAwarePacketWriter.t
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.ChatMessageSmart->PacketType.toInt)
    ->packColor(self.color, "color")
    ->packNetworkText(self.message, "message")
    ->packInt16(self.widthLimit, "widthLimit")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
