@genType
type t = {
  color: PacketFactory.Color.t,
  message: PacketFactory.NetworkText.t,
  widthLimit: int,
}
module Decode = {
  let {readInt16, readColor, readNetworkText} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(color) = reader->readColor("color")
    let? Ok(message) = reader->readNetworkText("message")
    let? Ok(widthLimit) = reader->readInt16("widthLimit")

    Ok({
      color,
      message,
      widthLimit,
    })
  }
}

module Encode = {
  let {setType, data, packColor, packNetworkText, packInt16} = module(ErrorAwarePacketWriter)
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
