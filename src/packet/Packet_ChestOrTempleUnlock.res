@genType
type unlockType =
  | Chest
  | TempleDoor
  | ChestLock

let unlockTypeToInt = self =>
  switch self {
  | Chest => 1
  | TempleDoor => 2
  | ChestLock => 3
  }

let unlockTypeFromInt = self =>
  switch self {
  | 1 => Some(Chest)
  | 2 => Some(TempleDoor)
  | 3 => Some(ChestLock)
  | _ => None
  }

@genType
type t = {
  unlockType: unlockType,
  x: int,
  y: int,
}

module Decode = {
  let {readByte, readInt16} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let unlockType = reader->readByte->unlockTypeFromInt
    let x = reader->readInt16
    let y = reader->readInt16
    switch unlockType {
    | Some(unlockType) =>
      Some({
        unlockType,
        x,
        y,
      })
    | None => None
    }
  }
}

module Encode = {
  module Writer = PacketFactory.ManagedPacketWriter
  let {packByte, packInt16, setType, data} = module(Writer)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    Writer.make()
    ->setType(PacketType.ChestOrTempleUnlock->PacketType.toInt)
    ->packByte(self.unlockType->unlockTypeToInt)
    ->packInt16(self.x)
    ->packInt16(self.y)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
