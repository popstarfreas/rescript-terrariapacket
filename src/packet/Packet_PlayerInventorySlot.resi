@genType
type t = {
  playerId: int,
  slot: int,
  stack: int,
  prefix: int,
  itemId: int,
}
@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
