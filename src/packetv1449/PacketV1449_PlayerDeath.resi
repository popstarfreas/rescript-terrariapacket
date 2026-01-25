@genType
type t = {
  playerId: int,
  deathReason: PlayerDeathReason.t,
  damage: int,
  hitDirection: int,
  pvp: bool,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
