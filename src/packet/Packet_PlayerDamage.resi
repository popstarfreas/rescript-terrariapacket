@genType
type t = {
  target: int,
  deathReason: PlayerDeathReason.t,
  damage: int,
  hitDirection: int,
  critical: bool,
  pvp: bool,
  cooldownCounter: int,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
