@genType
type t = {
  npcSlotId: int,
  extraValue: int,
  x: float,
  y: float,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
