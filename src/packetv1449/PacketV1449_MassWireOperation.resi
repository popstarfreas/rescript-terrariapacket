@genType
type t = {
  startX: int,
  startY: int,
  endX: int,
  endY: int,
  toolMode: int,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
