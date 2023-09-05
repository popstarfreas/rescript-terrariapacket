@genType
type t = {
  itemDropId: int,
  x: float,
  y: float,
  vx: float,
  vy: float,
  stack: int,
  prefix: int,
  noDelay: int,
  itemId: int,
}

@genType
let parse: NodeJs.Buffer.t => option<t>
@genType
let toBuffer: t => NodeJs.Buffer.t
