@genType
type action =
  | OpenDoor
  | CloseDoor
  | ShiftTrapdoorOpen
  | ShiftTrapdoorClose
  | ShiftTallGateOpen
  | ShiftTallGateClose

let actionToInt = self =>
  switch self {
  | OpenDoor => 0
  | CloseDoor => 1
  | ShiftTrapdoorOpen => 2
  | ShiftTrapdoorClose => 3
  | ShiftTallGateOpen => 4
  | ShiftTallGateClose => 5
  }

let actionFromInt = self =>
  switch self {
  | 0 => Some(OpenDoor)
  | 1 => Some(CloseDoor)
  | 2 => Some(ShiftTrapdoorOpen)
  | 3 => Some(ShiftTrapdoorClose)
  | 4 => Some(ShiftTallGateOpen)
  | 5 => Some(ShiftTallGateClose)
  | _ => None
  }

@genType
type t = {
  action: action,
  x: int,
  y: int,
  direction: int,
}

module Decode = {
  let {readByte, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(rawAction) = reader->readByte("action")
    let? Ok(x) = reader->readInt16("x")
    let? Ok(y) = reader->readInt16("y")
    let? Ok(directionRaw) = reader->readByte("direction")
    let action = switch rawAction->actionFromInt {
    | Some(action) => Ok(action)
    | None =>
      Error({
        ErrorAwarePacketReader.context: "Packet_DoorUse.parse.action",
        error: JsError.make("Unknown door action")->JsError.toJsExn,
      })
    }
    switch action {
    | Ok(action) =>
      Ok({
        action,
        x,
        y,
        direction: directionRaw == 0 ? -1 : 1,
      })
    | Error(err) => Error(err)
    }
  }
}

module Encode = {
  let {packByte, packInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.DoorUse->PacketType.toInt)
    ->packByte(self.action->actionToInt, "action")
    ->packInt16(self.x, "x")
    ->packInt16(self.y, "y")
    ->packByte(self.direction >= 0 ? 1 : 0, "direction")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
