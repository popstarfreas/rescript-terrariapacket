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

type worldUniqueId = Array16.t<int>

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
  worldUniqueId: worldUniqueId,
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
  } = module(ErrorAwarePacketReader)
  let readEventInfo = reader => {
    let eventInfo1 = BitFlags.fromByte(reader->readByte("eventInfo1"))
    let eventInfo2 = BitFlags.fromByte(reader->readByte("eventInfo2"))
    let eventInfo3 = BitFlags.fromByte(reader->readByte("eventInfo3"))
    let eventInfo4 = BitFlags.fromByte(reader->readByte("eventInfo4"))
    let eventInfo5 = BitFlags.fromByte(reader->readByte("eventInfo5"))
    let eventInfo6 = BitFlags.fromByte(reader->readByte("eventInfo6"))
    let eventInfo7 = BitFlags.fromByte(reader->readByte("eventInfo7"))
    let eventInfo8 = BitFlags.fromByte(reader->readByte("eventInfo8"))
    let eventInfo9 = BitFlags.fromByte(reader->readByte("eventInfo9"))
    let eventInfo10 = BitFlags.fromByte(reader->readByte("eventInfo10"))
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
    let tenthAnniversaryWorld = eventInfo8->BitFlags.flag1
    let dontStarveWorld = eventInfo8->BitFlags.flag2
    let downedDeerClops = eventInfo8->BitFlags.flag3
    let notTheBeesWorld = eventInfo8->BitFlags.flag4
    let remixWorld = eventInfo8->BitFlags.flag5
    let unlockedSlimeBlueSpawn = eventInfo8->BitFlags.flag6
    let combatBookVolumeTwoWasUsed = eventInfo8->BitFlags.flag7
    let peddlersSatchelWasUsed = eventInfo8->BitFlags.flag8
    let unlockedSlimeGreenSpawn = eventInfo9->BitFlags.flag1
    let unlockedSlimeOldSpawn = eventInfo9->BitFlags.flag2
    let unlockedSlimePurpleSpawn = eventInfo9->BitFlags.flag3
    let unlockedSlimeRainbowSpawn = eventInfo9->BitFlags.flag4
    let unlockedSlimeRedSpawn = eventInfo9->BitFlags.flag5
    let unlockedSlimeYellowSpawn = eventInfo9->BitFlags.flag6
    let unlockedSlimeCopperSpawn = eventInfo9->BitFlags.flag7
    let fastForwardTimeToDusk = eventInfo9->BitFlags.flag8
    let noTrapsWorld = eventInfo10->BitFlags.flag1
    let zenithWorld = eventInfo10->BitFlags.flag2
    let unlockedTruffleSpawn = eventInfo10->BitFlags.flag3

    {
      shadowOrbSmashed,
      killedBoss1,
      killedBoss2,
      killedBoss3,
      hardMode,
      killedClown,
      serverSidedCharacters,
      killedPlantBoss,
      killedMechBoss,
      killedMechBoss2,
      killedMechBoss3,
      killedAnyMechBoss,
      cloudBg,
      crimson,
      pumpkinMoon,
      snowMoon,
      expertMode,
      fastForwardTime,
      slimeRain,
      killedKingSlime,
      killedQueenBee,
      killedFishron,
      killedMartians,
      killedAncientCultist,
      killedMoonLord,
      killedPumpking,
      killedMounringWood,
      killedIceQueen,
      killedSantank,
      killedEverscream,
      killedGolem,
      birthdayParty,
      killedPirates,
      killedFrostLegion,
      killedGoblins,
      sandstorm,
      dungeonDefendersEvent,
      killedDungeonDefendersTier1,
      killedDungeonDefendersTier2,
      killedDungeonDefendersTier3,
      combatBookUsed,
      manualLanterns,
      killedSolarTower,
      killedVortexTower,
      killedNebulaTower,
      killedStardustTower,
      forceHalloween,
      forceChristmas,
      boughtCat,
      boughtDog,
      boughtBunny,
      freeCake,
      drunkWorld,
      killedEmpressOfLight,
      killedQueenSlime,
      getGoodWorld,
      tenthAnniversaryWorld,
      dontStarveWorld,
      downedDeerClops,
      notTheBeesWorld,
      remixWorld,
      unlockedSlimeBlueSpawn,
      combatBookVolumeTwoWasUsed,
      peddlersSatchelWasUsed,
      unlockedSlimeGreenSpawn,
      unlockedSlimeOldSpawn,
      unlockedSlimePurpleSpawn,
      unlockedSlimeRainbowSpawn,
      unlockedSlimeRedSpawn,
      unlockedSlimeYellowSpawn,
      unlockedSlimeCopperSpawn,
      fastForwardTimeToDusk,
      noTrapsWorld,
      zenithWorld,
      unlockedTruffleSpawn,
    }
  }

  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let time = reader->readInt32("time")
    let dayAndMoonInfo = reader->readByte("dayAndMoonInfo")
    let moonPhase = reader->readByte("moonPhase")
    let maxTilesX = reader->readInt16("maxTilesX")
    let maxTilesY = reader->readInt16("maxTilesY")
    let spawnX = reader->readInt16("spawnX")
    let spawnY = reader->readInt16("spawnY")
    let worldSurface = reader->readInt16("worldSurface")
    let rockLayer = reader->readInt16("rockLayer")
    let worldId = reader->readInt32("worldId")
    let worldName = reader->readString("worldName")
    let gameMode = reader->readByte("gameMode")
    let worldUniqueId = Array16.fromArray(reader->readBytes(16, "worldUniqueId"))
    let worldGeneratorVersion = reader->readUInt64("worldGeneratorVersion")
    let moonType = reader->readByte("moonType")
    let treeBackground = reader->readByte("treeBackground")
    let treeBackground2 = reader->readByte("treeBackground2")
    let treeBackground3 = reader->readByte("treeBackground3")
    let treeBackground4 = reader->readByte("treeBackground4")
    let corruptionBackground = reader->readByte("corruptionBackground")
    let jungleBackground = reader->readByte("jungleBackground")
    let snowBackground = reader->readByte("snowBackground")
    let hallowBackground = reader->readByte("hallowBackground")
    let crimsonBackground = reader->readByte("crimsonBackground")
    let desertBackground = reader->readByte("desertBackground")
    let oceanBackground = reader->readByte("oceanBackground")
    let mushroomBackground = reader->readByte("mushroomBackground")
    let underworldBackground = reader->readByte("underworldBackground")
    let iceBackStyle = reader->readByte("iceBackStyle")
    let jungleBackStyle = reader->readByte("jungleBackStyle")
    let hellBackStyle = reader->readByte("hellBackStyle")
    let windSpeedSet = reader->readSingle("windSpeedSet")
    let cloudNumber = reader->readByte("cloudNumber")
    let tree1 = reader->readInt32("tree1")
    let tree2 = reader->readInt32("tree2")
    let tree3 = reader->readInt32("tree3")
    let treeStyle1 = reader->readByte("treeStyle1")
    let treeStyle2 = reader->readByte("treeStyle2")
    let treeStyle3 = reader->readByte("treeStyle3")
    let treeStyle4 = reader->readByte("treeStyle4")
    let caveBack1 = reader->readInt32("caveBack1")
    let caveBack2 = reader->readInt32("caveBack2")
    let caveBack3 = reader->readInt32("caveBack3")
    let caveBackStyle1 = reader->readByte("caveBackStyle1")
    let caveBackStyle2 = reader->readByte("caveBackStyle2")
    let caveBackStyle3 = reader->readByte("caveBackStyle3")
    let caveBackStyle4 = reader->readByte("caveBackStyle4")
    let forest1TreeTopStyle = reader->readByte("forest1TreeTopStyle")
    let forest2TreeTopStyle = reader->readByte("forest2TreeTopStyle")
    let forest3TreeTopStyle = reader->readByte("forest3TreeTopStyle")
    let forest4TreeTopStyle = reader->readByte("forest4TreeTopStyle")
    let corruptionTreeTopStyle = reader->readByte("corruptionTreeTopStyle")
    let jungleTreeTopStyle = reader->readByte("jungleTreeTopStyle")
    let snowTreeTopStyle = reader->readByte("snowTreeTopStyle")
    let hallowTreeTopStyle = reader->readByte("hallowTreeTopStyle")
    let crimsonTreeTopStyle = reader->readByte("crimsonTreeTopStyle")
    let desertTreeTopStyle = reader->readByte("desertTreeTopStyle")
    let oceanTreeTopStyle = reader->readByte("oceanTreeTopStyle")
    let glowingMushroomTreeTopStyle = reader->readByte("glowingMushroomTreeTopStyle")
    let underworldTreeTopStyle = reader->readByte("underworldTreeTopStyle")
    let rain = reader->readSingle("rain")
    let eventInfo = reader->readEventInfo
    let sundialCooldown = reader->readByte("sundialCooldown")
    let moondialCooldown = reader->readByte("moondialCooldown")
    let copperOreTier = reader->readInt16("copperOreTier")
    let ironOreTier = reader->readInt16("ironOreTier")
    let silverOreTier = reader->readInt16("silverOreTier")
    let goldOreTier = reader->readInt16("goldOreTier")
    let cobaltOreTier = reader->readInt16("cobaltOreTier")
    let mythrilOreTier = reader->readInt16("mythrilOreTier")
    let adamantiteOreTier = reader->readInt16("adamantiteOreTier")
    let invasionType = reader->readSByte("invasionType")
    let lobbyId = reader->readUInt64("lobbyId")
    let sandstormSeverity = reader->readSingle("sandstormSeverity")
    worldUniqueId->Option.map(worldUniqueId => {
      time,
      dayAndMoonInfo,
      moonPhase,
      maxTilesX,
      maxTilesY,
      spawnX,
      spawnY,
      worldSurface,
      rockLayer,
      worldId,
      worldName,
      gameMode,
      worldUniqueId,
      worldGeneratorVersion,
      moonType,
      treeBackground,
      treeBackground2,
      treeBackground3,
      treeBackground4,
      corruptionBackground,
      jungleBackground,
      snowBackground,
      hallowBackground,
      crimsonBackground,
      desertBackground,
      oceanBackground,
      mushroomBackground,
      underworldBackground,
      iceBackStyle,
      jungleBackStyle,
      hellBackStyle,
      windSpeedSet,
      cloudNumber,
      tree1,
      tree2,
      tree3,
      treeStyle1,
      treeStyle2,
      treeStyle3,
      treeStyle4,
      caveBack1,
      caveBack2,
      caveBack3,
      caveBackStyle1,
      caveBackStyle2,
      caveBackStyle3,
      caveBackStyle4,
      forest1TreeTopStyle,
      forest2TreeTopStyle,
      forest3TreeTopStyle,
      forest4TreeTopStyle,
      corruptionTreeTopStyle,
      jungleTreeTopStyle,
      snowTreeTopStyle,
      hallowTreeTopStyle,
      crimsonTreeTopStyle,
      desertTreeTopStyle,
      oceanTreeTopStyle,
      glowingMushroomTreeTopStyle,
      underworldTreeTopStyle,
      rain,
      eventInfo,
      sundialCooldown,
      moondialCooldown,
      copperOreTier,
      ironOreTier,
      silverOreTier,
      goldOreTier,
      cobaltOreTier,
      mythrilOreTier,
      adamantiteOreTier,
      invasionType,
      lobbyId,
      sandstormSeverity,
    })
  }
}

module Encode = {
  let {packInt16, packByte} = module(ErrorAwarePacketWriter)
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
    let eventInfo8 = BitFlags.fromFlags(
      ~flag1=eventInfo.tenthAnniversaryWorld,
      ~flag2=eventInfo.dontStarveWorld,
      ~flag3=eventInfo.downedDeerClops,
      ~flag4=eventInfo.notTheBeesWorld,
      ~flag5=eventInfo.remixWorld,
      ~flag6=eventInfo.unlockedSlimeBlueSpawn,
      ~flag7=eventInfo.combatBookVolumeTwoWasUsed,
      ~flag8=eventInfo.peddlersSatchelWasUsed,
    )
    let eventInfo9 = BitFlags.fromFlags(
      ~flag1=eventInfo.unlockedSlimeGreenSpawn,
      ~flag2=eventInfo.unlockedSlimeOldSpawn,
      ~flag3=eventInfo.unlockedSlimePurpleSpawn,
      ~flag4=eventInfo.unlockedSlimeRainbowSpawn,
      ~flag5=eventInfo.unlockedSlimeRedSpawn,
      ~flag6=eventInfo.unlockedSlimeYellowSpawn,
      ~flag7=eventInfo.unlockedSlimeCopperSpawn,
      ~flag8=eventInfo.fastForwardTimeToDusk,
    )
    let eventInfo10 = BitFlags.fromFlags(
      ~flag1=eventInfo.noTrapsWorld,
      ~flag2=eventInfo.zenithWorld,
      ~flag3=eventInfo.unlockedTruffleSpawn,
      ~flag4=false,
      ~flag5=false,
      ~flag6=false,
      ~flag7=false,
      ~flag8=false,
    )
    writer
    ->packByte(eventInfo1->BitFlags.toByte, "eventInfo1")
    ->packByte(eventInfo2->BitFlags.toByte, "eventInfo2")
    ->packByte(eventInfo3->BitFlags.toByte, "eventInfo3")
    ->packByte(eventInfo4->BitFlags.toByte, "eventInfo4")
    ->packByte(eventInfo5->BitFlags.toByte, "eventInfo5")
    ->packByte(eventInfo6->BitFlags.toByte, "eventInfo6")
    ->packByte(eventInfo7->BitFlags.toByte, "eventInfo7")
    ->packByte(eventInfo8->BitFlags.toByte, "eventInfo8")
    ->packByte(eventInfo9->BitFlags.toByte, "eventInfo9")
    ->packByte(eventInfo10->BitFlags.toByte, "eventInfo10")
  }

  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->ErrorAwarePacketWriter.setType(PacketType.WorldInfo->PacketType.toInt)
    ->ErrorAwarePacketWriter.packInt32(self.time, "time")
    ->packByte(self.dayAndMoonInfo, "dayAndMoonInfo")
    ->ErrorAwarePacketWriter.packByte(self.moonPhase, "moonPhase")
    ->ErrorAwarePacketWriter.packInt16(self.maxTilesX, "maxTilesX")
    ->packInt16(self.maxTilesY, "maxTilesY")
    ->ErrorAwarePacketWriter.packInt16(self.spawnX, "spawnX")
    ->ErrorAwarePacketWriter.packInt16(self.spawnY, "spawnY")
    ->ErrorAwarePacketWriter.packInt16(self.worldSurface, "worldSurface")
    ->ErrorAwarePacketWriter.packInt16(self.rockLayer, "rockLayer")
    ->ErrorAwarePacketWriter.packInt32(self.worldId, "worldId")
    ->ErrorAwarePacketWriter.packString(self.worldName, "worldName")
    ->ErrorAwarePacketWriter.packByte(self.gameMode, "gameMode")
    ->ErrorAwarePacketWriter.packBytes(self.worldUniqueId->Array16.asArray, "worldUniqueId")
    ->ErrorAwarePacketWriter.packUInt64(self.worldGeneratorVersion, "worldGeneratorVersion")
    ->ErrorAwarePacketWriter.packByte(self.moonType, "moonType")
    ->ErrorAwarePacketWriter.packByte(self.treeBackground, "treeBackground")
    ->ErrorAwarePacketWriter.packByte(self.treeBackground2, "treeBackground2")
    ->ErrorAwarePacketWriter.packByte(self.treeBackground3, "treeBackground3")
    ->ErrorAwarePacketWriter.packByte(self.treeBackground4, "treeBackground4")
    ->ErrorAwarePacketWriter.packByte(self.corruptionBackground, "corruptionBackground")
    ->ErrorAwarePacketWriter.packByte(self.jungleBackground, "jungleBackground")
    ->ErrorAwarePacketWriter.packByte(self.snowBackground, "snowBackground")
    ->ErrorAwarePacketWriter.packByte(self.hallowBackground, "hallowBackground")
    ->ErrorAwarePacketWriter.packByte(self.crimsonBackground, "crimsonBackground")
    ->ErrorAwarePacketWriter.packByte(self.desertBackground, "desertBackground")
    ->ErrorAwarePacketWriter.packByte(self.oceanBackground, "oceanBackground")
    ->ErrorAwarePacketWriter.packByte(self.mushroomBackground, "mushroomBackground")
    ->ErrorAwarePacketWriter.packByte(self.underworldBackground, "underworldBackground")
    ->ErrorAwarePacketWriter.packByte(self.iceBackStyle, "iceBackStyle")
    ->ErrorAwarePacketWriter.packByte(self.jungleBackStyle, "jungleBackStyle")
    ->ErrorAwarePacketWriter.packByte(self.hellBackStyle, "hellBackStyle")
    ->ErrorAwarePacketWriter.packSingle(self.windSpeedSet, "windSpeedSet")
    ->ErrorAwarePacketWriter.packByte(self.cloudNumber, "cloudNumber")
    ->ErrorAwarePacketWriter.packInt32(self.tree1, "tree1")
    ->ErrorAwarePacketWriter.packInt32(self.tree2, "tree2")
    ->ErrorAwarePacketWriter.packInt32(self.tree3, "tree3")
    ->ErrorAwarePacketWriter.packByte(self.treeStyle1, "treeStyle1")
    ->ErrorAwarePacketWriter.packByte(self.treeStyle2, "treeStyle2")
    ->ErrorAwarePacketWriter.packByte(self.treeStyle3, "treeStyle3")
    ->ErrorAwarePacketWriter.packByte(self.treeStyle4, "treeStyle4")
    ->ErrorAwarePacketWriter.packInt32(self.caveBack1, "caveBack1")
    ->ErrorAwarePacketWriter.packInt32(self.caveBack2, "caveBack2")
    ->ErrorAwarePacketWriter.packInt32(self.caveBack3, "caveBack3")
    ->ErrorAwarePacketWriter.packByte(self.caveBackStyle1, "caveBackStyle1")
    ->ErrorAwarePacketWriter.packByte(self.caveBackStyle2, "caveBackStyle2")
    ->ErrorAwarePacketWriter.packByte(self.caveBackStyle3, "caveBackStyle3")
    ->ErrorAwarePacketWriter.packByte(self.caveBackStyle4, "caveBackStyle4")
    ->ErrorAwarePacketWriter.packByte(self.forest1TreeTopStyle, "forest1TreeTopStyle")
    ->ErrorAwarePacketWriter.packByte(self.forest2TreeTopStyle, "forest2TreeTopStyle")
    ->ErrorAwarePacketWriter.packByte(self.forest3TreeTopStyle, "forest3TreeTopStyle")
    ->ErrorAwarePacketWriter.packByte(self.forest4TreeTopStyle, "forest4TreeTopStyle")
    ->ErrorAwarePacketWriter.packByte(self.corruptionTreeTopStyle, "corruptionTreeTopStyle")
    ->ErrorAwarePacketWriter.packByte(self.jungleTreeTopStyle, "jungleTreeTopStyle")
    ->ErrorAwarePacketWriter.packByte(self.snowTreeTopStyle, "snowTreeTopStyle")
    ->ErrorAwarePacketWriter.packByte(self.hallowTreeTopStyle, "hallowTreeTopStyle")
    ->ErrorAwarePacketWriter.packByte(self.crimsonTreeTopStyle, "crimsonTreeTopStyle")
    ->ErrorAwarePacketWriter.packByte(self.desertTreeTopStyle, "desertTreeTopStyle")
    ->ErrorAwarePacketWriter.packByte(self.oceanTreeTopStyle, "oceanTreeTopStyle")
    ->ErrorAwarePacketWriter.packByte(
      self.glowingMushroomTreeTopStyle,
      "glowingMushroomTreeTopStyle",
    )
    ->ErrorAwarePacketWriter.packByte(self.underworldTreeTopStyle, "underworldTreeTopStyle")
    ->ErrorAwarePacketWriter.packSingle(self.rain, "rain")
    ->packEventInfo(self.eventInfo)
    ->ErrorAwarePacketWriter.packByte(self.sundialCooldown, "sundialCooldown")
    ->ErrorAwarePacketWriter.packByte(self.moondialCooldown, "moondialCooldown")
    ->ErrorAwarePacketWriter.packInt16(self.copperOreTier, "copperOreTier")
    ->ErrorAwarePacketWriter.packInt16(self.ironOreTier, "ironOreTier")
    ->ErrorAwarePacketWriter.packInt16(self.silverOreTier, "silverOreTier")
    ->ErrorAwarePacketWriter.packInt16(self.goldOreTier, "goldOreTier")
    ->ErrorAwarePacketWriter.packInt16(self.cobaltOreTier, "cobaltOreTier")
    ->ErrorAwarePacketWriter.packInt16(self.mythrilOreTier, "mythrilOreTier")
    ->ErrorAwarePacketWriter.packInt16(self.adamantiteOreTier, "adamantiteOreTier")
    ->ErrorAwarePacketWriter.packSByte(self.invasionType, "invasionType")
    ->ErrorAwarePacketWriter.packUInt64(self.lobbyId, "lobbyId")
    ->ErrorAwarePacketWriter.packSingle(self.sandstormSeverity, "sandstormSeverity")
    ->ErrorAwarePacketWriter.data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
