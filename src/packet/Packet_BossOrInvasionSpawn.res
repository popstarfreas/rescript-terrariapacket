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
  | Npc(int)

@genType
type t = {
  playerId: int,
  spawnType: spawnType,
}

module Decode = {
  let {readInt16} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let playerId = reader->readInt16
    let spawnType = switch reader->readInt16 {
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
    | npcType => Npc(npcType)
    }

    Some({
      playerId,
      spawnType,
    })
  }
}

module Encode = {
  module Writer = PacketFactory.ManagedPacketWriter
  let {packInt16, setType, data} = module(Writer)
  let packSpawnType = (writer, spawnType) =>
    switch spawnType {
    | GoblinInvasion => writer->packInt16(-1)
    | FrostInvasion => writer->packInt16(-2)
    | PirateInvasion => writer->packInt16(-3)
    | PumpkinMoon => writer->packInt16(-4)
    | SnowMoon => writer->packInt16(-5)
    | Eclipse => writer->packInt16(-6)
    | MartianMoon => writer->packInt16(-7)
    | ImpendingDoom => writer->packInt16(-8)
    | BloodMoon => writer->packInt16(-10)
    | CombatBookUsed => writer->packInt16(-11)
    | BoughtCat => writer->packInt16(-12)
    | BoughtDog => writer->packInt16(-13)
    | BoughtBunny => writer->packInt16(-14)
    | Npc(npcType) => writer->packInt16(npcType)
    }

  let toBuffer = (self: t): NodeJs.Buffer.t => {
    Writer.make()
    ->setType(PacketType.BossOrInvasionSpawn->PacketType.toInt)
    ->packInt16(self.playerId)
    ->packSpawnType(self.spawnType)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
