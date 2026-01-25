@genType
type t = {
  x: float,
  y: float,
  color: PacketFactory.Color.t,
  amount: int,
}

module Decode = {
  let {readSingle, readColor, readInt32} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(x) = reader->readSingle("x")
    let? Ok(y) = reader->readSingle("y")
    let? Ok(color) = reader->readColor("color")
    let? Ok(amount) = reader->readInt32("amount")
    Ok({x, y, color, amount})
  }
}

module Encode = {
  let {packSingle, packColor, packInt32, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.CombatNumberCreate->PacketType.toInt)
    ->packSingle(self.x, "x")
    ->packSingle(self.y, "y")
    ->packColor(self.color, "color")
    ->packInt32(self.amount, "amount")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
