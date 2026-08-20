@genType
type t = {
  spawner: int,
  index: int,
  generation: int,
}

let fromInt: int => t
let toInt: t => int
