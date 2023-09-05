module Action: {
  @genType
  type t =
    | PlaceChest
    | KillChest
    | PlaceDresser
    | KillDresser
    | PlaceContainer
    | KillContainer

  @genType
  let toInt: t => int
  @genType
  let fromInt: int => option<t>
  @genType
  let toString: t => string
}

@genType
type t = {
  action: Action.t,
  x: int,
  y: int,
  style: int,
  id: int,
}

@genType
let parse: NodeJs.Buffer.t => option<t>
@genType
let toBuffer: t => NodeJs.Buffer.t
