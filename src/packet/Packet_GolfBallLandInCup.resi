@genType
type t = {
  playerId: int,
  cupX: int,
  cupY: int,
  projId: int,
  projType: int,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>

