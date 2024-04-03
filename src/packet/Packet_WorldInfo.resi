@genType
module Option = Belt.Option
type eventInfo = {
  shadowOrbSmashed: bool,
  killedBoss1: bool,
  killedBoss2: bool,
  killedBoss3: bool,
  hardMode: bool,
  killedClown: bool,
  serverSidedCharacters: bool,
  killedPlantBoss: bool,
  killedMechBoss: bool,
  killedMechBoss2: bool,
  killedMechBoss3: bool,
  killedAnyMechBoss: bool,
  cloudBg: bool,
  crimson: bool,
  pumpkinMoon: bool,
  snowMoon: bool,
  expertMode: bool,
  fastForwardTime: bool,
  slimeRain: bool,
  killedKingSlime: bool,
  killedQueenBee: bool,
  killedFishron: bool,
  killedMartians: bool,
  killedAncientCultist: bool,
  killedMoonLord: bool,
  killedPumpking: bool,
  killedMounringWood: bool,
  killedIceQueen: bool,
  killedSantank: bool,
  killedEverscream: bool,
  killedGolem: bool,
  birthdayParty: bool,
  killedPirates: bool,
  killedFrostLegion: bool,
  killedGoblins: bool,
  sandstorm: bool,
  dungeonDefendersEvent: bool,
  killedDungeonDefendersTier1: bool,
  killedDungeonDefendersTier2: bool,
  killedDungeonDefendersTier3: bool,
  combatBookUsed: bool,
  manualLanterns: bool,
  killedSolarTower: bool,
  killedVortexTower: bool,
  killedNebulaTower: bool,
  killedStardustTower: bool,
  forceHalloween: bool,
  forceChristmas: bool,
  boughtCat: bool,
  boughtDog: bool,
  boughtBunny: bool,
  freeCake: bool,
  drunkWorld: bool,
  killedEmpressOfLight: bool,
  killedQueenSlime: bool,
  getGoodWorld: bool,
  tenthAnniversaryWorld: bool,
  dontStarveWorld: bool,
  downedDeerClops: bool,
  notTheBeesWorld: bool,
  remixWorld: bool,
  unlockedSlimeBlueSpawn: bool,
  combatBookVolumeTwoWasUsed: bool,
  peddlersSatchelWasUsed: bool,
  unlockedSlimeGreenSpawn: bool,
  unlockedSlimeOldSpawn: bool,
  unlockedSlimePurpleSpawn: bool,
  unlockedSlimeRainbowSpawn: bool,
  unlockedSlimeRedSpawn: bool,
  unlockedSlimeYellowSpawn: bool,
  unlockedSlimeCopperSpawn: bool,
  fastForwardTimeToDusk: bool,
  noTrapsWorld: bool,
  zenithWorld: bool,
  unlockedTruffleSpawn: bool,
}

@genType
type t = {
  time: int,
  dayAndMoonInfo: int,
  moonPhase: int,
  maxTilesX: int,
  maxTilesY: int,
  spawnX: int,
  spawnY: int,
  worldSurface: int,
  rockLayer: int,
  worldId: int,
  worldName: string,
  gameMode: int,
  worldUniqueId: Array16.t<int>,
  worldGeneratorVersion: NodeJs.BigInt.t,
  moonType: int,
  treeBackground: int,
  treeBackground2: int,
  treeBackground3: int,
  treeBackground4: int,
  corruptionBackground: int,
  jungleBackground: int,
  snowBackground: int,
  hallowBackground: int,
  crimsonBackground: int,
  desertBackground: int,
  oceanBackground: int,
  mushroomBackground: int,
  underworldBackground: int,
  iceBackStyle: int,
  jungleBackStyle: int,
  hellBackStyle: int,
  windSpeedSet: float,
  cloudNumber: int,
  tree1: int,
  tree2: int,
  tree3: int,
  treeStyle1: int,
  treeStyle2: int,
  treeStyle3: int,
  treeStyle4: int,
  caveBack1: int,
  caveBack2: int,
  caveBack3: int,
  caveBackStyle1: int,
  caveBackStyle2: int,
  caveBackStyle3: int,
  caveBackStyle4: int,
  forest1TreeTopStyle: int,
  forest2TreeTopStyle: int,
  forest3TreeTopStyle: int,
  forest4TreeTopStyle: int,
  corruptionTreeTopStyle: int,
  jungleTreeTopStyle: int,
  snowTreeTopStyle: int,
  hallowTreeTopStyle: int,
  crimsonTreeTopStyle: int,
  desertTreeTopStyle: int,
  oceanTreeTopStyle: int,
  glowingMushroomTreeTopStyle: int,
  underworldTreeTopStyle: int,
  rain: float,
  eventInfo: eventInfo,
  sundialCooldown: int,
  moondialCooldown: int,
  copperOreTier: int,
  ironOreTier: int,
  silverOreTier: int,
  goldOreTier: int,
  cobaltOreTier: int,
  mythrilOreTier: int,
  adamantiteOreTier: int,
  invasionType: int,
  lobbyId: NodeJs.BigInt.t,
  sandstormSeverity: float,
}

module Decode: {
  let readByte: PacketFactory.PacketReader.t => int
  let readInt16: PacketFactory.PacketReader.t => int
  let readInt32: PacketFactory.PacketReader.t => int
  let readUInt64: PacketFactory.PacketReader.t => NodeJs.BigInt.t
  let readString: PacketFactory.PacketReader.t => string
  let readBytes: (PacketFactory.PacketReader.t, int) => array<int>
  let readSingle: PacketFactory.PacketReader.t => float
  let readSByte: PacketFactory.PacketReader.t => int
  let readEventInfo: PacketFactory.PacketReader.t => eventInfo
  let parse: NodeJs.Buffer.t => option<t>
}
module Encode: {
  let packSingle: (PacketFactory.ManagedPacketWriter.t, float) => PacketFactory.ManagedPacketWriter.t
  let packInt32: (PacketFactory.ManagedPacketWriter.t, int) => PacketFactory.ManagedPacketWriter.t
  let packByte: (PacketFactory.ManagedPacketWriter.t, int) => PacketFactory.ManagedPacketWriter.t
  let packInt16: (PacketFactory.ManagedPacketWriter.t, int) => PacketFactory.ManagedPacketWriter.t
  let packUInt64: (
  PacketFactory.ManagedPacketWriter.t,
  NodeJs.BigInt.t,
) => PacketFactory.ManagedPacketWriter.t
  let packString: (PacketFactory.ManagedPacketWriter.t, string) => PacketFactory.ManagedPacketWriter.t
  let packSByte: (PacketFactory.ManagedPacketWriter.t, int) => PacketFactory.ManagedPacketWriter.t
  let packBytes: (
  PacketFactory.ManagedPacketWriter.t,
  array<int>,
) => PacketFactory.ManagedPacketWriter.t
  let setType: (
  PacketFactory.ManagedPacketWriter.untypedT,
  int,
) => PacketFactory.ManagedPacketWriter.t
  let data: PacketFactory.ManagedPacketWriter.t => NodeJs.Buffer.t
  let packEventInfo: (
  PacketFactory.ManagedPacketWriter.t,
  eventInfo,
) => PacketFactory.ManagedPacketWriter.t
  let toBuffer: t => NodeJs.Buffer.t
}

@genType
let parse: NodeJs.Buffer.t => option<t>
@genType
let toBuffer: t => NodeJs.Buffer.t
