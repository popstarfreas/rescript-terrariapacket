@genType
type t = {
  source: int,
  variant: int,
  velocity: Point.t<float>,
  position: Point.t<int>,
}

module Decode = {
  let {readByte, readSingle, readInt32} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(source) = reader->readByte("source")
    let? Ok(variant) = reader->readByte("variant")
    let? Ok(velocityX) = reader->readSingle("velocityX")
    let? Ok(velocityY) = reader->readSingle("velocityY")
    let velocity = {Point.x: velocityX, y: velocityY}
    let? Ok(positionX) = reader->readInt32("positionX")
    let? Ok(positionY) = reader->readInt32("positionY")
    let position = {Point.x: positionX, y: positionY}

    Ok({
      source,
      variant,
      velocity,
      position,
    })
  }
}

module Encode = {
  module Writer = ErrorAwarePacketWriter
  let {packByte, packInt32, packSingle, setType, data} = module(Writer)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    Writer.make()
    ->setType(PacketType.LucyAxeMessage->PacketType.toInt)
    ->packByte(self.source, "source")
    ->packByte(self.variant, "variant")
    ->packSingle(self.velocity.x, "velocityX")
    ->packSingle(self.velocity.y, "velocityY")
    ->packInt32(self.position.x, "positionX")
    ->packInt32(self.position.y, "positionY")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
