type t = {
  source: int,
  variant: int,
  velocity: Point.t<float>,
  position: Point.t<int>,
}

module Decode = {
  let {readByte, readSingle, readInt32} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let source = reader->readByte
    let variant = reader->readByte
    let velocity = {Point.x: reader->readSingle, y: reader->readSingle}
    let position = {Point.x: reader->readInt32, y: reader->readInt32}

    Some({
      source,
      variant,
      velocity,
      position,
    })
  }
}

module Encode = {
  module Writer = PacketFactory.ManagedPacketWriter
  let {packByte, packInt32, packSingle, setType, data} = module(Writer)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    Writer.make()
    ->setType(PacketType.LucyAxeMessage->PacketType.toInt)
    ->packByte(self.source)
    ->packByte(self.variant)
    ->packSingle(self.velocity.x)
    ->packSingle(self.velocity.y)
    ->packInt32(self.position.x)
    ->packInt32(self.position.y)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
