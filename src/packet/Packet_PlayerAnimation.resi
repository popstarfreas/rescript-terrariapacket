@genType
type t = {
  playerId: int,
  itemRotation: float,
  itemAnimation: int,
  itemAnimationMax: int,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
