@genType
type other =
  | FallDamage
  | Drowning
  | Lava
  | FallDamage2
  | DemonAltar
  | CompanionCube
  | Suffocation
  | Burning
  | Poison
  | Electrified
  | WallOfFleshEscape
  | WallOfFleshLicked
  | ChaosState
  | ChaosState2Male
  | ChaosState3Female

@genType
type t = {
  killerPlayerId: option<int>,
  killerNpcId: option<int>,
  killerProjectileId: option<int>,
  typeOfDeathOther: option<other>,
  projectileType: option<int>,
  itemType: option<int>,
  itemPrefix: option<int>,
  deathReason: option<string>,
}

let readDeathReason: ErrorAwarePacketReader.t => result<t, ErrorAwarePacketReader.readError>
let packDeathReason: (ErrorAwarePacketWriter.t, t) => ErrorAwarePacketWriter.t
