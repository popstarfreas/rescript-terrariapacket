@genType
type spawnType =
  | GoblinInvasion
  | FrostInvasion
  | PirateInvasion
  | PumpkinMoon
  | SnowMoon
  | Eclipse
  | MartianMoon
  | ImpendingDoom
  | BloodMoon
  | CombatBookUsed
  | BoughtCat
  | BoughtDog
  | BoughtBunny
  | BoughtSlime
  | MechQueen
  | CombatBookVolumeTwo
  | PeddlersSatchel
  | Invasion(int)
  | Npc(int)

@genType
type t = {
  playerId: int,
  spawnType: spawnType,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
