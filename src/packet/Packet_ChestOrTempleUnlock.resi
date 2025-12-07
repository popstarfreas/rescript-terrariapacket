@genType
type unlockType =
  | Chest
  | TempleDoor
  | ChestLock

@genType
type t = {
  unlockType: unlockType,
  x: int,
  y: int,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
