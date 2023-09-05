@genType
type direction = Left | Right

@genType
type t = {
  x: int,
  y: int,
  objectType: int,
  style: int,
  alternate: int,
  random: int,
  direction: direction,
}

@genType
let parse: NodeJs.Buffer.t => option<t>
@genType
let toBuffer: t => NodeJs.Buffer.t
