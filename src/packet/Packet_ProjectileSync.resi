@genType
type t = {
  projectileId: int,
  x: float,
  y: float,
  vx: float,
  vy: float,
  owner: int,
  projectileType: int,
  ai: (option<float>, option<float>, option<float>),
  bannerIdToRespondTo: option<int>,
  damage: option<int>,
  knockback: option<float>,
  originalDamage: option<int>,
  projectileUuid: option<int>,
}

@genType
let parse: NodeJs.Buffer.t => option<t>
@genType
let toBuffer: t => NodeJs.Buffer.t
