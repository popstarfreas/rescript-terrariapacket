module Action: {
  @genType
  type t =
    | KillTile
    | PlaceTile
    | KillWall
    | PlaceWall
    | KillTileNoItem
    | PlaceWire
    | KillWire
    | PoundTile
    | PlaceActuator
    | KillActuator
    | PlaceWire2
    | KillWire2
    | PlaceWire3
    | KillWire3
    | SlopeTile
    | FrameTrack
    | PlaceWire4
    | KillWire4
    | PokeLogicGate
    | Actuate
    | KillTile2
    | ReplaceTile
    | ReplaceWall
    | SlopePoundTile

  @genType
  let fromInt: int => option<t>
  @genType
  let toInt: t => int
}

@genType
type t = {
  action: Action.t,
  tileX: int,
  tileY: int,
  value1: int,
  value2: int,
}

@genType
let parse: NodeJs.Buffer.t => option<t>
@genType
let toBuffer: t => NodeJs.Buffer.t
