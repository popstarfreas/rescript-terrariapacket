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
  let {readByte, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(rawUnlockType) = reader->readByte("unlockType")
    let? Ok(unlockType) = switch rawUnlockType->unlockTypeFromInt {
    | Some(unlockType) => Ok(unlockType)
    | None =>
      Error({
        ErrorAwarePacketReader.context: "Packet_ChestOrTempleUnlock.parse",
        error: JsError.make("Unknown unlock type")->JsError.toJsExn,
      })
    }
    let? Ok(x) = reader->readInt16("x")
    let? Ok(y) = reader->readInt16("y")
    Ok({
      unlockType,
      x,
      y,
    })
  }
}

module Encode = {
  module Writer = ErrorAwarePacketWriter
  let {packByte, packInt16, setType, data} = module(Writer)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    Writer.make()
    ->setType(PacketType.ChestOrTempleUnlock->PacketType.toInt)
    ->packByte(self.unlockType->unlockTypeToInt, "unlockType")
    ->packInt16(self.x, "x")
    ->packInt16(self.y, "y")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
