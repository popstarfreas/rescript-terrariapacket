@genType
type t = {
  playerId: int,
  tileEntityId: int,
  itemIndex: int,
  itemId: int,
  stack: int,
  prefix: int,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>

