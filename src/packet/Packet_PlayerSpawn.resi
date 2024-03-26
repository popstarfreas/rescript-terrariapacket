@genType
type context =
  | ReviveFromDeath
  | SpawningIntoWorld
  | RecallFromItem

@genType
type t = {
  playerId: int,
  x: int,
  y: int,
  timeRemaining: int,
  numberOfDeathsPve: int,
  numberOfDeathsPvp: int,
  context: context,
}

@genType
let parse: NodeJs.Buffer.t => option<t>
@genType
let toBuffer: t => NodeJs.Buffer.t
