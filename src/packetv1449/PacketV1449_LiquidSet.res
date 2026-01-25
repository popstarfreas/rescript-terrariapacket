@genType
type t = {
  x: int,
  y: int,
  liquid: int,
  liquidType: int,
}

module Decode = {
  let {readInt16, readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(x) = reader->readInt16("x")
    let? Ok(y) = reader->readInt16("y")
    let? Ok(liquid) = reader->readByte("liquid")
    let? Ok(liquidType) = reader->readByte("liquidType")
    Ok({x, y, liquid, liquidType})
  }
}

module Encode = {
  let {packInt16, packByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.LiquidSet->PacketType.toInt)
    ->packInt16(self.x, "x")
    ->packInt16(self.y, "y")
    ->packByte(self.liquid, "liquid")
    ->packByte(self.liquidType, "liquidType")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
