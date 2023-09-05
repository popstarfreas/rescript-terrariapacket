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
let parse: NodeJs.Buffer.t => option<t>
@genType
let toBuffer: t => NodeJs.Buffer.t
