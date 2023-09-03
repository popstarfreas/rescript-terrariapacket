type t = {
  itemDropId: int,
  x: float,
  y: float,
  vx: float,
  vy: float,
  stack: int,
  prefix: int,
  noDelay: int,
  itemId: int,
}

module Decode = {
  let {readInt16, readSingle, readByte} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let itemDropId = reader->readInt16
    let x = reader->readSingle
    let y = reader->readSingle
    let vx = reader->readSingle
    let vy = reader->readSingle
    let stack = reader->readInt16
    let prefix = reader->readByte
    let noDelay = reader->readByte
    let itemId = reader->readInt16
    Some({
      itemDropId,
      x,
      y,
      vx,
      vy,
      stack,
      prefix,
      noDelay,
      itemId,
    })
  }
}

module Encode = {
  let {packSingle, packInt16, packByte, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.ItemDropUpdate->PacketType.toInt)
    ->packInt16(self.itemDropId)
    ->packSingle(self.x)
    ->packSingle(self.y)
    ->packSingle(self.vx)
    ->packSingle(self.vy)
    ->packInt16(self.stack)
    ->packByte(self.prefix)
    ->packByte(self.noDelay)
    ->packInt16(self.itemId)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
