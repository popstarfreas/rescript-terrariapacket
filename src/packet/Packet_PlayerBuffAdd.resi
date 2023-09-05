@genType
type t = {
  playerId: int,
  buff: int,
  time: int,
}

@genType
let parse: NodeJs.Buffer.t => option<t>
@genType
let toBuffer: t => NodeJs.Buffer.t
