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
}

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
  worldUniqueId: array<int>,
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

module Decode = {
  let {
    readByte,
    readInt16,
    readInt32,
    readUInt64,
    readString,
    readBytes,
    readSingle,
    readSByte,
  } = module(PacketFactory.PacketReader)
  let readEventInfo = reader => {
    let eventInfo1 = BitFlags.fromByte(reader->readByte)
    let eventInfo2 = BitFlags.fromByte(reader->readByte)
    let eventInfo3 = BitFlags.fromByte(reader->readByte)
    let eventInfo4 = BitFlags.fromByte(reader->readByte)
    let eventInfo5 = BitFlags.fromByte(reader->readByte)
    let eventInfo6 = BitFlags.fromByte(reader->readByte)
    let eventInfo7 = BitFlags.fromByte(reader->readByte)
    let shadowOrbSmashed = eventInfo1->BitFlags.flag1
    let killedBoss1 = eventInfo1->BitFlags.flag2
    let killedBoss2 = eventInfo1->BitFlags.flag3
    let killedBoss3 = eventInfo1->BitFlags.flag4
    let hardMode = eventInfo1->BitFlags.flag5
    let killedClown = eventInfo1->BitFlags.flag6
    let serverSidedCharacters = eventInfo1->BitFlags.flag7
    let killedPlantBoss = eventInfo1->BitFlags.flag8
    let killedMechBoss = eventInfo2->BitFlags.flag1
    let killedMechBoss2 = eventInfo2->BitFlags.flag2
    let killedMechBoss3 = eventInfo2->BitFlags.flag3
    let killedAnyMechBoss = eventInfo2->BitFlags.flag4
    let cloudBg = eventInfo2->BitFlags.flag5
    let crimson = eventInfo2->BitFlags.flag6
    let pumpkinMoon = eventInfo2->BitFlags.flag7
    let snowMoon = eventInfo2->BitFlags.flag8
    let expertMode = eventInfo3->BitFlags.flag1
    let fastForwardTime = eventInfo3->BitFlags.flag2
    let slimeRain = eventInfo3->BitFlags.flag3
    let killedKingSlime = eventInfo3->BitFlags.flag4
    let killedQueenBee = eventInfo3->BitFlags.flag5
    let killedFishron = eventInfo3->BitFlags.flag6
    let killedMartians = eventInfo3->BitFlags.flag7
    let killedAncientCultist = eventInfo3->BitFlags.flag8
    let killedMoonLord = eventInfo4->BitFlags.flag1
    let killedPumpking = eventInfo4->BitFlags.flag2
    let killedMounringWood = eventInfo4->BitFlags.flag3
    let killedIceQueen = eventInfo4->BitFlags.flag4
    let killedSantank = eventInfo4->BitFlags.flag5
    let killedEverscream = eventInfo4->BitFlags.flag6
    let killedGolem = eventInfo4->BitFlags.flag7
    let birthdayParty = eventInfo4->BitFlags.flag8
    let killedPirates = eventInfo5->BitFlags.flag1
    let killedFrostLegion = eventInfo5->BitFlags.flag2
    let killedGoblins = eventInfo5->BitFlags.flag3
    let sandstorm = eventInfo5->BitFlags.flag4
    let dungeonDefendersEvent = eventInfo5->BitFlags.flag5
    let killedDungeonDefendersTier1 = eventInfo5->BitFlags.flag6
    let killedDungeonDefendersTier2 = eventInfo5->BitFlags.flag7
    let killedDungeonDefendersTier3 = eventInfo5->BitFlags.flag8
    let combatBookUsed = eventInfo6->BitFlags.flag1
    let manualLanterns = eventInfo6->BitFlags.flag2
    let killedSolarTower = eventInfo6->BitFlags.flag3
    let killedVortexTower = eventInfo6->BitFlags.flag4
    let killedNebulaTower = eventInfo6->BitFlags.flag5
    let killedStardustTower = eventInfo6->BitFlags.flag6
    let forceHalloween = eventInfo6->BitFlags.flag7
    let forceChristmas = eventInfo6->BitFlags.flag8
    let boughtCat = eventInfo7->BitFlags.flag1
    let boughtDog = eventInfo7->BitFlags.flag2
    let boughtBunny = eventInfo7->BitFlags.flag3
    let freeCake = eventInfo7->BitFlags.flag4
    let drunkWorld = eventInfo7->BitFlags.flag5
    let killedEmpressOfLight = eventInfo7->BitFlags.flag6
    let killedQueenSlime = eventInfo7->BitFlags.flag7
    let getGoodWorld = eventInfo7->BitFlags.flag8
    {
      shadowOrbSmashed: shadowOrbSmashed,
      killedBoss1: killedBoss1,
      killedBoss2: killedBoss2,
      killedBoss3: killedBoss3,
      hardMode: hardMode,
      killedClown: killedClown,
      serverSidedCharacters: serverSidedCharacters,
      killedPlantBoss: killedPlantBoss,
      killedMechBoss: killedMechBoss,
      killedMechBoss2: killedMechBoss2,
      killedMechBoss3: killedMechBoss3,
      killedAnyMechBoss: killedAnyMechBoss,
      cloudBg: cloudBg,
      crimson: crimson,
      pumpkinMoon: pumpkinMoon,
      snowMoon: snowMoon,
      expertMode: expertMode,
      fastForwardTime: fastForwardTime,
      slimeRain: slimeRain,
      killedKingSlime: killedKingSlime,
      killedQueenBee: killedQueenBee,
      killedFishron: killedFishron,
      killedMartians: killedMartians,
      killedAncientCultist: killedAncientCultist,
      killedMoonLord: killedMoonLord,
      killedPumpking: killedPumpking,
      killedMounringWood: killedMounringWood,
      killedIceQueen: killedIceQueen,
      killedSantank: killedSantank,
      killedEverscream: killedEverscream,
      killedGolem: killedGolem,
      birthdayParty: birthdayParty,
      killedPirates: killedPirates,
      killedFrostLegion: killedFrostLegion,
      killedGoblins: killedGoblins,
      sandstorm: sandstorm,
      dungeonDefendersEvent: dungeonDefendersEvent,
      killedDungeonDefendersTier1: killedDungeonDefendersTier1,
      killedDungeonDefendersTier2: killedDungeonDefendersTier2,
      killedDungeonDefendersTier3: killedDungeonDefendersTier3,
      combatBookUsed: combatBookUsed,
      manualLanterns: manualLanterns,
      killedSolarTower: killedSolarTower,
      killedVortexTower: killedVortexTower,
      killedNebulaTower: killedNebulaTower,
      killedStardustTower: killedStardustTower,
      forceHalloween: forceHalloween,
      forceChristmas: forceChristmas,
      boughtCat: boughtCat,
      boughtDog: boughtDog,
      boughtBunny: boughtBunny,
      freeCake: freeCake,
      drunkWorld: drunkWorld,
      killedEmpressOfLight: killedEmpressOfLight,
      killedQueenSlime: killedQueenSlime,
      getGoodWorld: getGoodWorld,
    }
  }

  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let time = reader->readInt32
    let dayAndMoonInfo = reader->readByte
    let moonPhase = reader->readByte
    let maxTilesX = reader->readInt16
    let maxTilesY = reader->readInt16
    let spawnX = reader->readInt16
    let spawnY = reader->readInt16
    let worldSurface = reader->readInt16
    let rockLayer = reader->readInt16
    let worldId = reader->readInt32
    let worldName = reader->readString
    let gameMode = reader->readByte
    let worldUniqueId = reader->readBytes(16)
    let worldGeneratorVersion = reader->readUInt64
    let moonType = reader->readByte
    let treeBackground = reader->readByte
    let treeBackground2 = reader->readByte
    let treeBackground3 = reader->readByte
    let treeBackground4 = reader->readByte
    let corruptionBackground = reader->readByte
    let jungleBackground = reader->readByte
    let snowBackground = reader->readByte
    let hallowBackground = reader->readByte
    let crimsonBackground = reader->readByte
    let desertBackground = reader->readByte
    let oceanBackground = reader->readByte
    let mushroomBackground = reader->readByte
    let underworldBackground = reader->readByte
    let iceBackStyle = reader->readByte
    let jungleBackStyle = reader->readByte
    let hellBackStyle = reader->readByte
    let windSpeedSet = reader->readSingle
    let cloudNumber = reader->readByte
    let tree1 = reader->readInt32
    let tree2 = reader->readInt32
    let tree3 = reader->readInt32
    let treeStyle1 = reader->readByte
    let treeStyle2 = reader->readByte
    let treeStyle3 = reader->readByte
    let treeStyle4 = reader->readByte
    let caveBack1 = reader->readInt32
    let caveBack2 = reader->readInt32
    let caveBack3 = reader->readInt32
    let caveBackStyle1 = reader->readByte
    let caveBackStyle2 = reader->readByte
    let caveBackStyle3 = reader->readByte
    let caveBackStyle4 = reader->readByte
    let forest1TreeTopStyle = reader->readByte
    let forest2TreeTopStyle = reader->readByte
    let forest3TreeTopStyle = reader->readByte
    let forest4TreeTopStyle = reader->readByte
    let corruptionTreeTopStyle = reader->readByte
    let jungleTreeTopStyle = reader->readByte
    let snowTreeTopStyle = reader->readByte
    let hallowTreeTopStyle = reader->readByte
    let crimsonTreeTopStyle = reader->readByte
    let desertTreeTopStyle = reader->readByte
    let oceanTreeTopStyle = reader->readByte
    let glowingMushroomTreeTopStyle = reader->readByte
    let underworldTreeTopStyle = reader->readByte
    let rain = reader->readSingle
    let eventInfo = reader->readEventInfo
    let copperOreTier = reader->readInt16
    let ironOreTier = reader->readInt16
    let silverOreTier = reader->readInt16
    let goldOreTier = reader->readInt16
    let cobaltOreTier = reader->readInt16
    let mythrilOreTier = reader->readInt16
    let adamantiteOreTier = reader->readInt16
    let invasionType = reader->readSByte
    let lobbyId = reader->readUInt64
    let sandstormSeverity = reader->readSingle
    Some({
      time: time,
      dayAndMoonInfo: dayAndMoonInfo,
      moonPhase: moonPhase,
      maxTilesX: maxTilesX,
      maxTilesY: maxTilesY,
      spawnX: spawnX,
      spawnY: spawnY,
      worldSurface: worldSurface,
      rockLayer: rockLayer,
      worldId: worldId,
      worldName: worldName,
      gameMode: gameMode,
      worldUniqueId: worldUniqueId,
      worldGeneratorVersion: worldGeneratorVersion,
      moonType: moonType,
      treeBackground: treeBackground,
      treeBackground2: treeBackground2,
      treeBackground3: treeBackground3,
      treeBackground4: treeBackground4,
      corruptionBackground: corruptionBackground,
      jungleBackground: jungleBackground,
      snowBackground: snowBackground,
      hallowBackground: hallowBackground,
      crimsonBackground: crimsonBackground,
      desertBackground: desertBackground,
      oceanBackground: oceanBackground,
      mushroomBackground: mushroomBackground,
      underworldBackground: underworldBackground,
      iceBackStyle: iceBackStyle,
      jungleBackStyle: jungleBackStyle,
      hellBackStyle: hellBackStyle,
      windSpeedSet: windSpeedSet,
      cloudNumber: cloudNumber,
      tree1: tree1,
      tree2: tree2,
      tree3: tree3,
      treeStyle1: treeStyle1,
      treeStyle2: treeStyle2,
      treeStyle3: treeStyle3,
      treeStyle4: treeStyle4,
      caveBack1: caveBack1,
      caveBack2: caveBack2,
      caveBack3: caveBack3,
      caveBackStyle1: caveBackStyle1,
      caveBackStyle2: caveBackStyle2,
      caveBackStyle3: caveBackStyle3,
      caveBackStyle4: caveBackStyle4,
      forest1TreeTopStyle: forest1TreeTopStyle,
      forest2TreeTopStyle: forest2TreeTopStyle,
      forest3TreeTopStyle: forest3TreeTopStyle,
      forest4TreeTopStyle: forest4TreeTopStyle,
      corruptionTreeTopStyle: corruptionTreeTopStyle,
      jungleTreeTopStyle: jungleTreeTopStyle,
      snowTreeTopStyle: snowTreeTopStyle,
      hallowTreeTopStyle: hallowTreeTopStyle,
      crimsonTreeTopStyle: crimsonTreeTopStyle,
      desertTreeTopStyle: desertTreeTopStyle,
      oceanTreeTopStyle: oceanTreeTopStyle,
      glowingMushroomTreeTopStyle: glowingMushroomTreeTopStyle,
      underworldTreeTopStyle: underworldTreeTopStyle,
      rain: rain,
      eventInfo: eventInfo,
      copperOreTier: copperOreTier,
      ironOreTier: ironOreTier,
      silverOreTier: silverOreTier,
      goldOreTier: goldOreTier,
      cobaltOreTier: cobaltOreTier,
      mythrilOreTier: mythrilOreTier,
      adamantiteOreTier: adamantiteOreTier,
      invasionType: invasionType,
      lobbyId: lobbyId,
      sandstormSeverity: sandstormSeverity,
    })
  }
}

module Encode = {
  let {
    packSingle,
    packInt32,
    packByte,
    packInt16,
    packUInt64,
    packString,
    packSByte,
    packBytes,
    setType,
    data,
  } = module(PacketFactory.ManagedPacketWriter)
  let packEventInfo = (writer, eventInfo: eventInfo) => {
    let eventInfo1 = BitFlags.fromFlags(
      ~flag1=eventInfo.shadowOrbSmashed,
      ~flag2=eventInfo.killedBoss1,
      ~flag3=eventInfo.killedBoss2,
      ~flag4=eventInfo.killedBoss3,
      ~flag5=eventInfo.hardMode,
      ~flag6=eventInfo.killedClown,
      ~flag7=eventInfo.serverSidedCharacters,
      ~flag8=eventInfo.killedPlantBoss,
    )
    let eventInfo2 = BitFlags.fromFlags(
      ~flag1=eventInfo.killedMechBoss,
      ~flag2=eventInfo.killedMechBoss2,
      ~flag3=eventInfo.killedMechBoss3,
      ~flag4=eventInfo.killedAnyMechBoss,
      ~flag5=eventInfo.cloudBg,
      ~flag6=eventInfo.crimson,
      ~flag7=eventInfo.pumpkinMoon,
      ~flag8=eventInfo.snowMoon,
    )
    let eventInfo3 = BitFlags.fromFlags(
      ~flag1=eventInfo.expertMode,
      ~flag2=eventInfo.fastForwardTime,
      ~flag3=eventInfo.slimeRain,
      ~flag4=eventInfo.killedKingSlime,
      ~flag5=eventInfo.killedQueenBee,
      ~flag6=eventInfo.killedFishron,
      ~flag7=eventInfo.killedMartians,
      ~flag8=eventInfo.killedAncientCultist,
    )
    let eventInfo4 = BitFlags.fromFlags(
      ~flag1=eventInfo.killedMoonLord,
      ~flag2=eventInfo.killedPumpking,
      ~flag3=eventInfo.killedMounringWood,
      ~flag4=eventInfo.killedIceQueen,
      ~flag5=eventInfo.killedSantank,
      ~flag6=eventInfo.killedEverscream,
      ~flag7=eventInfo.killedGolem,
      ~flag8=eventInfo.birthdayParty,
    )
    let eventInfo5 = BitFlags.fromFlags(
      ~flag1=eventInfo.killedPirates,
      ~flag2=eventInfo.killedFrostLegion,
      ~flag3=eventInfo.killedGoblins,
      ~flag4=eventInfo.sandstorm,
      ~flag5=eventInfo.dungeonDefendersEvent,
      ~flag6=eventInfo.killedDungeonDefendersTier1,
      ~flag7=eventInfo.killedDungeonDefendersTier2,
      ~flag8=eventInfo.killedDungeonDefendersTier3,
    )
    let eventInfo6 = BitFlags.fromFlags(
      ~flag1=eventInfo.combatBookUsed,
      ~flag2=eventInfo.manualLanterns,
      ~flag3=eventInfo.killedSolarTower,
      ~flag4=eventInfo.killedVortexTower,
      ~flag5=eventInfo.killedNebulaTower,
      ~flag6=eventInfo.killedStardustTower,
      ~flag7=eventInfo.forceHalloween,
      ~flag8=eventInfo.forceChristmas,
    )
    let eventInfo7 = BitFlags.fromFlags(
      ~flag1=eventInfo.boughtCat,
      ~flag2=eventInfo.boughtDog,
      ~flag3=eventInfo.boughtBunny,
      ~flag4=eventInfo.freeCake,
      ~flag5=eventInfo.drunkWorld,
      ~flag6=eventInfo.killedEmpressOfLight,
      ~flag7=eventInfo.killedQueenSlime,
      ~flag8=eventInfo.getGoodWorld,
    )
    writer
    ->packByte(eventInfo1->BitFlags.toByte)
    ->packByte(eventInfo2->BitFlags.toByte)
    ->packByte(eventInfo3->BitFlags.toByte)
    ->packByte(eventInfo4->BitFlags.toByte)
    ->packByte(eventInfo5->BitFlags.toByte)
    ->packByte(eventInfo6->BitFlags.toByte)
    ->packByte(eventInfo7->BitFlags.toByte)
  }

  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.WorldInfo->PacketType.toInt)
    ->packInt32(self.time)
    ->packByte(self.dayAndMoonInfo)
    ->packByte(self.moonPhase)
    ->packInt16(self.maxTilesX)
    ->packInt16(self.maxTilesY)
    ->packInt16(self.spawnX)
    ->packInt16(self.spawnY)
    ->packInt16(self.worldSurface)
    ->packInt16(self.rockLayer)
    ->packInt32(self.worldId)
    ->packString(self.worldName)
    ->packByte(self.gameMode)
    ->packBytes(self.worldUniqueId)
    ->packUInt64(self.worldGeneratorVersion)
    ->packByte(self.moonType)
    ->packByte(self.treeBackground)
    ->packByte(self.treeBackground2)
    ->packByte(self.treeBackground3)
    ->packByte(self.treeBackground4)
    ->packByte(self.corruptionBackground)
    ->packByte(self.jungleBackground)
    ->packByte(self.snowBackground)
    ->packByte(self.hallowBackground)
    ->packByte(self.crimsonBackground)
    ->packByte(self.desertBackground)
    ->packByte(self.oceanBackground)
    ->packByte(self.mushroomBackground)
    ->packByte(self.underworldBackground)
    ->packByte(self.iceBackStyle)
    ->packByte(self.jungleBackStyle)
    ->packByte(self.hellBackStyle)
    ->packSingle(self.windSpeedSet)
    ->packByte(self.cloudNumber)
    ->packInt32(self.tree1)
    ->packInt32(self.tree2)
    ->packInt32(self.tree3)
    ->packByte(self.treeStyle1)
    ->packByte(self.treeStyle2)
    ->packByte(self.treeStyle3)
    ->packByte(self.treeStyle4)
    ->packInt32(self.caveBack1)
    ->packInt32(self.caveBack2)
    ->packInt32(self.caveBack3)
    ->packByte(self.caveBackStyle1)
    ->packByte(self.caveBackStyle2)
    ->packByte(self.caveBackStyle3)
    ->packByte(self.caveBackStyle4)
    ->packByte(self.forest1TreeTopStyle)
    ->packByte(self.forest2TreeTopStyle)
    ->packByte(self.forest3TreeTopStyle)
    ->packByte(self.forest4TreeTopStyle)
    ->packByte(self.corruptionTreeTopStyle)
    ->packByte(self.jungleTreeTopStyle)
    ->packByte(self.snowTreeTopStyle)
    ->packByte(self.hallowTreeTopStyle)
    ->packByte(self.crimsonTreeTopStyle)
    ->packByte(self.desertTreeTopStyle)
    ->packByte(self.oceanTreeTopStyle)
    ->packByte(self.glowingMushroomTreeTopStyle)
    ->packByte(self.underworldTreeTopStyle)
    ->packSingle(self.rain)
    ->packEventInfo(self.eventInfo)
    ->packInt16(self.copperOreTier)
    ->packInt16(self.ironOreTier)
    ->packInt16(self.silverOreTier)
    ->packInt16(self.goldOreTier)
    ->packInt16(self.cobaltOreTier)
    ->packInt16(self.mythrilOreTier)
    ->packInt16(self.adamantiteOreTier)
    ->packSByte(self.invasionType)
    ->packUInt64(self.lobbyId)
    ->packSingle(self.sandstormSeverity)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
let convertEventInfoToLatest = (self: eventInfo): Packet.WorldInfo.eventInfo => {
  shadowOrbSmashed: self.shadowOrbSmashed,
  killedBoss1: self.killedBoss1,
  killedBoss2: self.killedBoss2,
  killedBoss3: self.killedBoss3,
  hardMode: self.hardMode,
  killedClown: self.killedClown,
  serverSidedCharacters: self.serverSidedCharacters,
  killedPlantBoss: self.killedPlantBoss,
  killedMechBoss: self.killedMechBoss,
  killedMechBoss2: self.killedMechBoss2,
  killedMechBoss3: self.killedMechBoss3,
  killedAnyMechBoss: self.killedAnyMechBoss,
  cloudBg: self.cloudBg,
  crimson: self.crimson,
  pumpkinMoon: self.pumpkinMoon,
  snowMoon: self.snowMoon,
  expertMode: self.expertMode,
  fastForwardTime: self.fastForwardTime,
  slimeRain: self.slimeRain,
  killedKingSlime: self.killedKingSlime,
  killedQueenBee: self.killedQueenBee,
  killedFishron: self.killedFishron,
  killedMartians: self.killedMartians,
  killedAncientCultist: self.killedAncientCultist,
  killedMoonLord: self.killedMoonLord,
  killedPumpking: self.killedPumpking,
  killedMounringWood: self.killedMounringWood,
  killedIceQueen: self.killedIceQueen,
  killedSantank: self.killedSantank,
  killedEverscream: self.killedEverscream,
  killedGolem: self.killedGolem,
  birthdayParty: self.birthdayParty,
  killedPirates: self.killedPirates,
  killedFrostLegion: self.killedFrostLegion,
  killedGoblins: self.killedGoblins,
  sandstorm: self.sandstorm,
  dungeonDefendersEvent: self.dungeonDefendersEvent,
  killedDungeonDefendersTier1: self.killedDungeonDefendersTier1,
  killedDungeonDefendersTier2: self.killedDungeonDefendersTier2,
  killedDungeonDefendersTier3: self.killedDungeonDefendersTier3,
  combatBookUsed: self.combatBookUsed,
  manualLanterns: self.manualLanterns,
  killedSolarTower: self.killedSolarTower,
  killedVortexTower: self.killedVortexTower,
  killedNebulaTower: self.killedNebulaTower,
  killedStardustTower: self.killedStardustTower,
  forceHalloween: self.forceHalloween,
  forceChristmas: self.forceChristmas,
  boughtCat: self.boughtCat,
  boughtDog: self.boughtDog,
  boughtBunny: self.boughtBunny,
  freeCake: self.freeCake,
  drunkWorld: self.drunkWorld,
  killedEmpressOfLight: self.killedEmpressOfLight,
  killedQueenSlime: self.killedQueenSlime,
  getGoodWorld: self.getGoodWorld,
  tenthAnniversaryWorld: false,
}

let convertToLatest = (self: t): Packet.WorldInfo.t => {
  time: self.time,
  dayAndMoonInfo: self.dayAndMoonInfo,
  moonPhase: self.moonPhase,
  maxTilesX: self.maxTilesX,
  maxTilesY: self.maxTilesY,
  spawnX: self.spawnX,
  spawnY: self.spawnY,
  worldSurface: self.worldSurface,
  rockLayer: self.rockLayer,
  worldId: self.worldId,
  worldName: self.worldName,
  gameMode: self.gameMode,
  worldUniqueId: self.worldUniqueId,
  worldGeneratorVersion: self.worldGeneratorVersion,
  moonType: self.moonType,
  treeBackground: self.treeBackground,
  treeBackground2: self.treeBackground2,
  treeBackground3: self.treeBackground3,
  treeBackground4: self.treeBackground4,
  corruptionBackground: self.corruptionBackground,
  jungleBackground: self.jungleBackground,
  snowBackground: self.snowBackground,
  hallowBackground: self.hallowBackground,
  crimsonBackground: self.crimsonBackground,
  desertBackground: self.desertBackground,
  oceanBackground: self.oceanBackground,
  mushroomBackground: self.mushroomBackground,
  underworldBackground: self.underworldBackground,
  iceBackStyle: self.iceBackStyle,
  jungleBackStyle: self.jungleBackStyle,
  hellBackStyle: self.hellBackStyle,
  windSpeedSet: self.windSpeedSet,
  cloudNumber: self.cloudNumber,
  tree1: self.tree1,
  tree2: self.tree2,
  tree3: self.tree3,
  treeStyle1: self.treeStyle1,
  treeStyle2: self.treeStyle2,
  treeStyle3: self.treeStyle3,
  treeStyle4: self.treeStyle4,
  caveBack1: self.caveBack1,
  caveBack2: self.caveBack2,
  caveBack3: self.caveBack3,
  caveBackStyle1: self.caveBackStyle1,
  caveBackStyle2: self.caveBackStyle2,
  caveBackStyle3: self.caveBackStyle3,
  caveBackStyle4: self.caveBackStyle4,
  forest1TreeTopStyle: self.forest1TreeTopStyle,
  forest2TreeTopStyle: self.forest2TreeTopStyle,
  forest3TreeTopStyle: self.forest3TreeTopStyle,
  forest4TreeTopStyle: self.forest4TreeTopStyle,
  corruptionTreeTopStyle: self.corruptionTreeTopStyle,
  jungleTreeTopStyle: self.jungleTreeTopStyle,
  snowTreeTopStyle: self.snowTreeTopStyle,
  hallowTreeTopStyle: self.hallowTreeTopStyle,
  crimsonTreeTopStyle: self.crimsonTreeTopStyle,
  desertTreeTopStyle: self.desertTreeTopStyle,
  oceanTreeTopStyle: self.oceanTreeTopStyle,
  glowingMushroomTreeTopStyle: self.glowingMushroomTreeTopStyle,
  underworldTreeTopStyle: self.underworldTreeTopStyle,
  rain: self.rain,
  eventInfo: convertEventInfoToLatest(self.eventInfo),
  copperOreTier: self.copperOreTier,
  ironOreTier: self.ironOreTier,
  silverOreTier: self.silverOreTier,
  goldOreTier: self.goldOreTier,
  cobaltOreTier: self.cobaltOreTier,
  mythrilOreTier: self.mythrilOreTier,
  adamantiteOreTier: self.adamantiteOreTier,
  invasionType: self.invasionType,
  lobbyId: self.lobbyId,
  sandstormSeverity: self.sandstormSeverity,
}

let convertEventInfoFromLatest = (self: Packet.WorldInfo.eventInfo): eventInfo => {
  shadowOrbSmashed: self.shadowOrbSmashed,
  killedBoss1: self.killedBoss1,
  killedBoss2: self.killedBoss2,
  killedBoss3: self.killedBoss3,
  hardMode: self.hardMode,
  killedClown: self.killedClown,
  serverSidedCharacters: self.serverSidedCharacters,
  killedPlantBoss: self.killedPlantBoss,
  killedMechBoss: self.killedMechBoss,
  killedMechBoss2: self.killedMechBoss2,
  killedMechBoss3: self.killedMechBoss3,
  killedAnyMechBoss: self.killedAnyMechBoss,
  cloudBg: self.cloudBg,
  crimson: self.crimson,
  pumpkinMoon: self.pumpkinMoon,
  snowMoon: self.snowMoon,
  expertMode: self.expertMode,
  fastForwardTime: self.fastForwardTime,
  slimeRain: self.slimeRain,
  killedKingSlime: self.killedKingSlime,
  killedQueenBee: self.killedQueenBee,
  killedFishron: self.killedFishron,
  killedMartians: self.killedMartians,
  killedAncientCultist: self.killedAncientCultist,
  killedMoonLord: self.killedMoonLord,
  killedPumpking: self.killedPumpking,
  killedMounringWood: self.killedMounringWood,
  killedIceQueen: self.killedIceQueen,
  killedSantank: self.killedSantank,
  killedEverscream: self.killedEverscream,
  killedGolem: self.killedGolem,
  birthdayParty: self.birthdayParty,
  killedPirates: self.killedPirates,
  killedFrostLegion: self.killedFrostLegion,
  killedGoblins: self.killedGoblins,
  sandstorm: self.sandstorm,
  dungeonDefendersEvent: self.dungeonDefendersEvent,
  killedDungeonDefendersTier1: self.killedDungeonDefendersTier1,
  killedDungeonDefendersTier2: self.killedDungeonDefendersTier2,
  killedDungeonDefendersTier3: self.killedDungeonDefendersTier3,
  combatBookUsed: self.combatBookUsed,
  manualLanterns: self.manualLanterns,
  killedSolarTower: self.killedSolarTower,
  killedVortexTower: self.killedVortexTower,
  killedNebulaTower: self.killedNebulaTower,
  killedStardustTower: self.killedStardustTower,
  forceHalloween: self.forceHalloween,
  forceChristmas: self.forceChristmas,
  boughtCat: self.boughtCat,
  boughtDog: self.boughtDog,
  boughtBunny: self.boughtBunny,
  freeCake: self.freeCake,
  drunkWorld: self.drunkWorld,
  killedEmpressOfLight: self.killedEmpressOfLight,
  killedQueenSlime: self.killedQueenSlime,
  getGoodWorld: self.getGoodWorld,
}

let convertFromLatest = (self: Packet.WorldInfo.t): option<t> => Some({
  time: self.time,
  dayAndMoonInfo: self.dayAndMoonInfo,
  moonPhase: self.moonPhase,
  maxTilesX: self.maxTilesX,
  maxTilesY: self.maxTilesY,
  spawnX: self.spawnX,
  spawnY: self.spawnY,
  worldSurface: self.worldSurface,
  rockLayer: self.rockLayer,
  worldId: self.worldId,
  worldName: self.worldName,
  gameMode: self.gameMode,
  worldUniqueId: self.worldUniqueId,
  worldGeneratorVersion: self.worldGeneratorVersion,
  moonType: self.moonType,
  treeBackground: self.treeBackground,
  treeBackground2: self.treeBackground2,
  treeBackground3: self.treeBackground3,
  treeBackground4: self.treeBackground4,
  corruptionBackground: self.corruptionBackground,
  jungleBackground: self.jungleBackground,
  snowBackground: self.snowBackground,
  hallowBackground: self.hallowBackground,
  crimsonBackground: self.crimsonBackground,
  desertBackground: self.desertBackground,
  oceanBackground: self.oceanBackground,
  mushroomBackground: self.mushroomBackground,
  underworldBackground: self.underworldBackground,
  iceBackStyle: self.iceBackStyle,
  jungleBackStyle: self.jungleBackStyle,
  hellBackStyle: self.hellBackStyle,
  windSpeedSet: self.windSpeedSet,
  cloudNumber: self.cloudNumber,
  tree1: self.tree1,
  tree2: self.tree2,
  tree3: self.tree3,
  treeStyle1: self.treeStyle1,
  treeStyle2: self.treeStyle2,
  treeStyle3: self.treeStyle3,
  treeStyle4: self.treeStyle4,
  caveBack1: self.caveBack1,
  caveBack2: self.caveBack2,
  caveBack3: self.caveBack3,
  caveBackStyle1: self.caveBackStyle1,
  caveBackStyle2: self.caveBackStyle2,
  caveBackStyle3: self.caveBackStyle3,
  caveBackStyle4: self.caveBackStyle4,
  forest1TreeTopStyle: self.forest1TreeTopStyle,
  forest2TreeTopStyle: self.forest2TreeTopStyle,
  forest3TreeTopStyle: self.forest3TreeTopStyle,
  forest4TreeTopStyle: self.forest4TreeTopStyle,
  corruptionTreeTopStyle: self.corruptionTreeTopStyle,
  jungleTreeTopStyle: self.jungleTreeTopStyle,
  snowTreeTopStyle: self.snowTreeTopStyle,
  hallowTreeTopStyle: self.hallowTreeTopStyle,
  crimsonTreeTopStyle: self.crimsonTreeTopStyle,
  desertTreeTopStyle: self.desertTreeTopStyle,
  oceanTreeTopStyle: self.oceanTreeTopStyle,
  glowingMushroomTreeTopStyle: self.glowingMushroomTreeTopStyle,
  underworldTreeTopStyle: self.underworldTreeTopStyle,
  rain: self.rain,
  eventInfo: convertEventInfoFromLatest(self.eventInfo),
  copperOreTier: self.copperOreTier,
  ironOreTier: self.ironOreTier,
  silverOreTier: self.silverOreTier,
  goldOreTier: self.goldOreTier,
  cobaltOreTier: self.cobaltOreTier,
  mythrilOreTier: self.mythrilOreTier,
  adamantiteOreTier: self.adamantiteOreTier,
  invasionType: self.invasionType,
  lobbyId: self.lobbyId,
  sandstormSeverity: self.sandstormSeverity,
})
