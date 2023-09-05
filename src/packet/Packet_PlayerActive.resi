@genType
type t = {
  playerId: int,
  active: bool,
}

@genType
let parse: NodeJs.Buffer.t => option<t>
@genType
let toBuffer: t => NodeJs.Buffer.t
