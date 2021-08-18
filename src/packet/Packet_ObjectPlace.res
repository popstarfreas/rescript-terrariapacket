type direction = Left | Right

type t = {
  x: int,
  y: int,
  objectType: int,
  style: int,
  alternate: int,
  random: int,
  direction: direction,
}

module Decode = {
  let {readInt16, readByte, readSByte} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let x = reader->readInt16
    let y = reader->readInt16
    let objectType = reader->readInt16
    let style = reader->readInt16
    let alternate = reader->readByte
    let random = reader->readSByte
    let direction = switch reader->readByte {
    | 0 => Left
    | _ => Right
    }
    Some({
      x: x,
      y: y,
      objectType: objectType,
      style: style,
      alternate: alternate,
      random: random,
      direction: direction,
    })
  }
}

module Encode = {
  module Writer = PacketFactory.ManagedPacketWriter
  let {packByte, packInt16, packSByte, setType, data} = module(Writer)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    Writer.make()
    ->setType(PacketType.ObjectPlace->PacketType.toInt)
    ->packInt16(self.x)
    ->packInt16(self.y)
    ->packInt16(self.objectType)
    ->packInt16(self.style)
    ->packByte(self.alternate)
    ->packSByte(self.random)
    ->packByte(
      switch self.direction {
      | Left => 0
      | Right => 1
      },
    )
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
