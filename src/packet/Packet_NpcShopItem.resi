@genType
type t = {
  slot: int,
  itemId: int,
  stack: int,
  prefix: int,
  value: int,
  buyOnce: bool,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>

