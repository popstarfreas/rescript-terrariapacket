@genType
type ai = (option<float>, option<float>, option<float>, option<float>)
@genType
type life =
  | Max
  | Byte(int)
  | Int16(int)
  | Int32(int)

@genType
type t = {
  npcSlotId: int,
  npcTypeId: int,
  x: float,
  y: float,
  vx: float,
  vy: float,
  target: int,
  directionX: bool,
  directionY: bool,
  ai: ai,
  spriteDirection: bool,
  life: life,
  releaseOwner: option<int>,
  playerCountScale: option<int>,
  strengthMultiplier: option<float>,
  spawnedFromStatue: bool,
}

@genType
let parse: NodeJs.Buffer.t => option<t>
@genType
let toBuffer: t => NodeJs.Buffer.t
