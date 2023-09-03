@genType
type frame = {
  x: int,
  y: int,
}

@genType
type activeTile = {
  tileType: int,
  slope: int,
  frame: option<frame>,
}

@genType
type liquid = {
  liquidValue: int,
  liquidType: int,
}

@genType
type tile = {
  wire: bool,
  halfBrick: bool,
  actuator: bool,
  inActive: bool,
  wire2: bool,
  wire3: bool,
  wire4: bool,
  color: option<int>,
  wallColor: option<int>,
  activeTile: option<activeTile>,
  wall: option<int>,
  liquid: option<liquid>,
}

@genType
type t = {
  width: int,
  height: int,
  changeType: int,
  tileX: int,
  tileY: int,
  tiles: array<array<tile>>,
}

@genType
let parse: NodeJs.Buffer.t => option<t>
@genType
let toBuffer: t => NodeJs.Buffer.t
