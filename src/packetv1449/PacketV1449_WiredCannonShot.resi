@genType
type t = {
  damage: int,
  knockback: float,
  x: int,
  y: int,
  angle: int,
  ammo: int,
  playerId: int,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
