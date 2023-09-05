@genType
type t = {
  x: int,
  y: int,
  color: int,
}

@genType
let parse: NodeJs.Buffer.t => option<t>
@genType
let toBuffer: t => NodeJs.Buffer.t
