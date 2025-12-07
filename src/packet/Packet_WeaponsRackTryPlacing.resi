@genType
type t = {
  x: int,
  y: int,
  itemId: int,
  prefix: int,
  stack: int,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>

