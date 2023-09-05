@genType
type t = {
  playerId: int,
  slot: int,
  stack: int,
  prefix: int,
  itemId: int,
}
@genType
let parse: NodeJs.Buffer.t => option<t>
@genType
let toBuffer: t => NodeJs.Buffer.t
