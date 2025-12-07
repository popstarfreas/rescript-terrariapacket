@genType
type action =
  | OpenDoor
  | CloseDoor
  | ShiftTrapdoorOpen
  | ShiftTrapdoorClose
  | ShiftTallGateOpen
  | ShiftTallGateClose

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>

