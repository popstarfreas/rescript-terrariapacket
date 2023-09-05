@genType
type t = {
  playerId: int,
  health: int,
  maxHealth: int,
}
@genType
let parse: NodeJs.Buffer.t => option<t>
@genType
let toBuffer: t => NodeJs.Buffer.t
