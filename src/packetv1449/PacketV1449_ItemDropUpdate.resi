@genType
type t = {
  itemDropId: int,
  x: float,
  y: float,
  vx: float,
  vy: float,
  stack: int,
  prefix: int,
  noDelay: int,
  itemId: int,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
