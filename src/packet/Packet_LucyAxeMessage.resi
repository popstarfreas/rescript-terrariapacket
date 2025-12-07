@genType
type t = {
  source: int,
  variant: int,
  velocity: Point.t<float>,
  position: Point.t<int>,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
