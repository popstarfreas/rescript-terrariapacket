@genType
type t = {
  playerId: int,
  deathReason: PlayerDeathReason.t,
  damage: int,
  hitDirection: int,
  pvp: bool,
}

@genType
let parse: NodeJs.Buffer.t => option<t>
@genType
let toBuffer: t => NodeJs.Buffer.t
