type t = {
  x: int,
  y: int,
}

module Decode = {
  let {readByte, readInt16} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let x = reader->readInt16
    let y = reader->readInt16
    Some({
      x: x,
      y: y,
    })
  }
}

module Encode = {
  module Writer = PacketFactory.ManagedPacketWriter
  let {packByte, packInt16, setType, data} = module(Writer)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    Writer.make()
    ->setType(PacketType.ChestOrTempleUnlock->PacketType.toInt)
    ->packInt16(self.x)
    ->packInt16(self.y)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
