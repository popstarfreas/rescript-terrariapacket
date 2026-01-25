@genType
type t = {
  x: float,
  y: float,
  color: PacketFactory.Color.t,
  text: PacketFactory.NetworkText.t,
}

module Decode = {
  let {readSingle, readColor, readNetworkText} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(x) = reader->readSingle("x")
    let? Ok(y) = reader->readSingle("y")
    let? Ok(color) = reader->readColor("color")
    let? Ok(text) = reader->readNetworkText("text")
    Ok({x, y, color, text})
  }
}

module Encode = {
  let {packSingle, packColor, packNetworkText, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.CombatTextCreate->PacketType.toInt)
    ->packSingle(self.x, "x")
    ->packSingle(self.y, "y")
    ->packColor(self.color, "color")
    ->packNetworkText(self.text, "text")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
