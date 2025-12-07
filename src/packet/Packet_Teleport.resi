@genType
type teleportType =
  | Player
  | Npc
  | PlayerToPlayer

@genType
type t = {
  teleportType: teleportType,
  getPositionFromTarget: bool,
  targetId: int,
  x: float,
  y: float,
  style: int,
  extraInfo: option<int>,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>

