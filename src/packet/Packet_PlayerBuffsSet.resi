@genType
type t = {
  playerId: int,
  buffs: array<int>,
}

@genType
let parse: NodeJs.Buffer.t => option<t>
@genType
let toBuffer: t => NodeJs.Buffer.t
