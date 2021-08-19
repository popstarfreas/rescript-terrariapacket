type unlockType =
  | Chest
  | TempleDoor

type t = {
  unlockType: unlockType,
  x: int,
  y: int,
}

module Decode = {
  let {readByte, readInt16} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let unlockType = switch reader->readByte {
      | 1 => Chest
      | _ => TempleDoor
    }
    let x = reader->readInt16
    let y = reader->readInt16
    Some({
      unlockType,
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
    ->packByte(self.unlockType == Chest ? 1 : 2)
    ->packInt16(self.x)
    ->packInt16(self.y)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
