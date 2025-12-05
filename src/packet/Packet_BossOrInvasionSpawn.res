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

module Decode = {
  let {readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readInt16("playerId")
    let? Ok(rawSpawnType) = reader->readInt16("spawnType")
    let spawnType = switch rawSpawnType {
    | -1 => GoblinInvasion
    | -2 => FrostInvasion
    | -3 => PirateInvasion
    | -4 => PumpkinMoon
    | -5 => SnowMoon
    | -6 => Eclipse
    | -7 => MartianMoon
    | -8 => ImpendingDoom
    | -10 => BloodMoon
    | -11 => CombatBookUsed
    | -12 => BoughtCat
    | -13 => BoughtDog
    | -14 => BoughtBunny
    | -15 => BoughtSlime
    | -16 => MechQueen
    | -17 => CombatBookVolumeTwo
    | -18 => PeddlersSatchel
    | invasionType if invasionType < 0 => Invasion(-invasionType)
    | npcType => Npc(npcType)
    }

    Ok({
      playerId,
      spawnType,
    })
  }
}

module Encode = {
  module Writer = ErrorAwarePacketWriter
  let {packInt16, setType, data} = module(Writer)
  let packSpawnType = (writer: Writer.t, spawnType: spawnType): Writer.t =>
    switch spawnType {
    | GoblinInvasion => writer->packInt16(-1, "spawnType")
    | FrostInvasion => writer->packInt16(-2, "spawnType")
    | PirateInvasion => writer->packInt16(-3, "spawnType")
    | PumpkinMoon => writer->packInt16(-4, "spawnType")
    | SnowMoon => writer->packInt16(-5, "spawnType")
    | Eclipse => writer->packInt16(-6, "spawnType")
    | MartianMoon => writer->packInt16(-7, "spawnType")
    | ImpendingDoom => writer->packInt16(-8, "spawnType")
    | BloodMoon => writer->packInt16(-10, "spawnType")
    | CombatBookUsed => writer->packInt16(-11, "spawnType")
    | BoughtCat => writer->packInt16(-12, "spawnType")
    | BoughtDog => writer->packInt16(-13, "spawnType")
    | BoughtBunny => writer->packInt16(-14, "spawnType")
    | BoughtSlime => writer->packInt16(-15, "spawnType")
    | MechQueen => writer->packInt16(-16, "spawnType")
    | CombatBookVolumeTwo => writer->packInt16(-17, "spawnType")
    | PeddlersSatchel => writer->packInt16(-18, "spawnType")
    | Npc(npcType) => writer->packInt16(npcType, "spawnType")
    | Invasion(invasionType) => writer->packInt16(-invasionType, "spawnType")
    }

  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    Writer.make()
    ->setType(PacketType.BossOrInvasionSpawn->PacketType.toInt)
    ->packInt16(self.playerId, "playerId")
    ->packSpawnType(self.spawnType)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
