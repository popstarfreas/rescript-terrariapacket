@genType
type t = {
  signId: int,
  x: int,
  y: int,
  text: string,
  playerId: int,
  deleteSign: bool,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>

