type t = {
  x: int,
  y: int,
  color: int,
}

module Decode = {
  let {readByte, readInt16} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let x = reader->readInt16
    let y = reader->readInt16
    let color = reader->readByte
    Some({
      x,
      y,
      color,
    })
  }
}

module Encode = {
  let {packByte, packInt16, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.PaintTile->PacketType.toInt)
    ->packInt16(self.x)
    ->packInt16(self.y)
    ->packByte(self.color)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
