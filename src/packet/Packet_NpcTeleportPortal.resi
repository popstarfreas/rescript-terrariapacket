@genType
type t = {
  npcId: int,
  portalColor: int,
  position: Point.t<float>,
  velocity: Point.t<float>,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>

