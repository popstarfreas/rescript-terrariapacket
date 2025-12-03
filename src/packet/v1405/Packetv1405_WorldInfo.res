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
  killedMourningWood: bool,
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

  let readEventInfo = (reader: PacketFactory.PacketReader.t): result<
    eventInfo,
    ErrorAwarePacketReader.readError,
  > => {
    let? Ok(eventInfo1Raw) = reader->readByte("eventInfo1")
    let? Ok(eventInfo2Raw) = reader->readByte("eventInfo2")
    let? Ok(eventInfo3Raw) = reader->readByte("eventInfo3")
    let? Ok(eventInfo4Raw) = reader->readByte("eventInfo4")
    let? Ok(eventInfo5Raw) = reader->readByte("eventInfo5")
    let? Ok(eventInfo6Raw) = reader->readByte("eventInfo6")
    let? Ok(eventInfo7Raw) = reader->readByte("eventInfo7")

    let eventInfo1 = BitFlags.fromByte(eventInfo1Raw)
    let eventInfo2 = BitFlags.fromByte(eventInfo2Raw)
    let eventInfo3 = BitFlags.fromByte(eventInfo3Raw)
    let eventInfo4 = BitFlags.fromByte(eventInfo4Raw)
    let eventInfo5 = BitFlags.fromByte(eventInfo5Raw)
    let eventInfo6 = BitFlags.fromByte(eventInfo6Raw)
    let eventInfo7 = BitFlags.fromByte(eventInfo7Raw)

    Ok({
      shadowOrbSmashed: eventInfo1->BitFlags.flag1,
      killedBoss1: eventInfo1->BitFlags.flag2,
      killedBoss2: eventInfo1->BitFlags.flag3,
      killedBoss3: eventInfo1->BitFlags.flag4,
      hardMode: eventInfo1->BitFlags.flag5,
      killedClown: eventInfo1->BitFlags.flag6,
      serverSidedCharacters: eventInfo1->BitFlags.flag7,
      killedPlantBoss: eventInfo1->BitFlags.flag8,
      killedMechBoss: eventInfo2->BitFlags.flag1,
      killedMechBoss2: eventInfo2->BitFlags.flag2,
      killedMechBoss3: eventInfo2->BitFlags.flag3,
      killedAnyMechBoss: eventInfo2->BitFlags.flag4,
      cloudBg: eventInfo2->BitFlags.flag5,
      crimson: eventInfo2->BitFlags.flag6,
      pumpkinMoon: eventInfo2->BitFlags.flag7,
      snowMoon: eventInfo2->BitFlags.flag8,
      expertMode: eventInfo3->BitFlags.flag1,
      fastForwardTime: eventInfo3->BitFlags.flag2,
      slimeRain: eventInfo3->BitFlags.flag3,
      killedKingSlime: eventInfo3->BitFlags.flag4,
      killedQueenBee: eventInfo3->BitFlags.flag5,
      killedFishron: eventInfo3->BitFlags.flag6,
      killedMartians: eventInfo3->BitFlags.flag7,
      killedAncientCultist: eventInfo3->BitFlags.flag8,
      killedMoonLord: eventInfo4->BitFlags.flag1,
      killedPumpking: eventInfo4->BitFlags.flag2,
      killedMourningWood: eventInfo4->BitFlags.flag3,
      killedIceQueen: eventInfo4->BitFlags.flag4,
      killedSantank: eventInfo4->BitFlags.flag5,
      killedEverscream: eventInfo4->BitFlags.flag6,
      killedGolem: eventInfo4->BitFlags.flag7,
      birthdayParty: eventInfo4->BitFlags.flag8,
      killedPirates: eventInfo5->BitFlags.flag1,
      killedFrostLegion: eventInfo5->BitFlags.flag2,
      killedGoblins: eventInfo5->BitFlags.flag3,
      sandstorm: eventInfo5->BitFlags.flag4,
      dungeonDefendersEvent: eventInfo5->BitFlags.flag5,
      killedDungeonDefendersTier1: eventInfo5->BitFlags.flag6,
      killedDungeonDefendersTier2: eventInfo5->BitFlags.flag7,
      killedDungeonDefendersTier3: eventInfo5->BitFlags.flag8,
      combatBookUsed: eventInfo6->BitFlags.flag1,
      manualLanterns: eventInfo6->BitFlags.flag2,
      killedSolarTower: eventInfo6->BitFlags.flag3,
      killedVortexTower: eventInfo6->BitFlags.flag4,
      killedNebulaTower: eventInfo6->BitFlags.flag5,
      killedStardustTower: eventInfo6->BitFlags.flag6,
      forceHalloween: eventInfo6->BitFlags.flag7,
      forceChristmas: eventInfo6->BitFlags.flag8,
      boughtCat: eventInfo7->BitFlags.flag1,
      boughtDog: eventInfo7->BitFlags.flag2,
      boughtBunny: eventInfo7->BitFlags.flag3,
      freeCake: eventInfo7->BitFlags.flag4,
      drunkWorld: eventInfo7->BitFlags.flag5,
      killedEmpressOfLight: eventInfo7->BitFlags.flag6,
      killedQueenSlime: eventInfo7->BitFlags.flag7,
      getGoodWorld: eventInfo7->BitFlags.flag8,
    })
  }

  let optionToResult = (option: option<'a>, fn: unit => 'b): result<'a, 'b> => {
    switch option {
    | Some(value) => Ok(value)
    | None => Error(fn())
    }
  }

  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(time) = reader->readInt32("time")
    let? Ok(dayAndMoonInfo) = reader->readByte("dayAndMoonInfo")
    let? Ok(moonPhase) = reader->readByte("moonPhase")
    let? Ok(maxTilesX) = reader->readInt16("maxTilesX")
    let? Ok(maxTilesY) = reader->readInt16("maxTilesY")
    let? Ok(spawnX) = reader->readInt16("spawnX")
    let? Ok(spawnY) = reader->readInt16("spawnY")
    let? Ok(worldSurface) = reader->readInt16("worldSurface")
    let? Ok(rockLayer) = reader->readInt16("rockLayer")
    let? Ok(worldId) = reader->readInt32("worldId")
    let? Ok(worldName) = reader->readString("worldName")
    let? Ok(gameMode) = reader->readByte("gameMode")
    let? Ok(worldUniqueIdRaw) = reader->readBytes(16, "worldUniqueId")
    let? Ok(worldUniqueId) =
      worldUniqueIdRaw
      ->Array16.fromArray
      ->optionToResult(_ => {
        ErrorAwarePacketReader.context: "worldUniqueId",
        error: JsError.make("Expected 16 bytes")->JsError.toJsExn,
      })
    let? Ok(worldGeneratorVersion) = reader->readUInt64("worldGeneratorVersion")
    let? Ok(moonType) = reader->readByte("moonType")
    let? Ok(treeBackground) = reader->readByte("treeBackground")
    let? Ok(treeBackground2) = reader->readByte("treeBackground2")
    let? Ok(treeBackground3) = reader->readByte("treeBackground3")
    let? Ok(treeBackground4) = reader->readByte("treeBackground4")
    let? Ok(corruptionBackground) = reader->readByte("corruptionBackground")
    let? Ok(jungleBackground) = reader->readByte("jungleBackground")
    let? Ok(snowBackground) = reader->readByte("snowBackground")
    let? Ok(hallowBackground) = reader->readByte("hallowBackground")
    let? Ok(crimsonBackground) = reader->readByte("crimsonBackground")
    let? Ok(desertBackground) = reader->readByte("desertBackground")
    let? Ok(oceanBackground) = reader->readByte("oceanBackground")
    let? Ok(mushroomBackground) = reader->readByte("mushroomBackground")
    let? Ok(underworldBackground) = reader->readByte("underworldBackground")
    let? Ok(iceBackStyle) = reader->readByte("iceBackStyle")
    let? Ok(jungleBackStyle) = reader->readByte("jungleBackStyle")
    let? Ok(hellBackStyle) = reader->readByte("hellBackStyle")
    let? Ok(windSpeedSet) = reader->readSingle("windSpeedSet")
    let? Ok(cloudNumber) = reader->readByte("cloudNumber")
    let? Ok(tree1) = reader->readInt32("tree1")
    let? Ok(tree2) = reader->readInt32("tree2")
    let? Ok(tree3) = reader->readInt32("tree3")
    let? Ok(treeStyle1) = reader->readByte("treeStyle1")
    let? Ok(treeStyle2) = reader->readByte("treeStyle2")
    let? Ok(treeStyle3) = reader->readByte("treeStyle3")
    let? Ok(treeStyle4) = reader->readByte("treeStyle4")
    let? Ok(caveBack1) = reader->readInt32("caveBack1")
    let? Ok(caveBack2) = reader->readInt32("caveBack2")
    let? Ok(caveBack3) = reader->readInt32("caveBack3")
    let? Ok(caveBackStyle1) = reader->readByte("caveBackStyle1")
    let? Ok(caveBackStyle2) = reader->readByte("caveBackStyle2")
    let? Ok(caveBackStyle3) = reader->readByte("caveBackStyle3")
    let? Ok(caveBackStyle4) = reader->readByte("caveBackStyle4")
    let? Ok(forest1TreeTopStyle) = reader->readByte("forest1TreeTopStyle")
    let? Ok(forest2TreeTopStyle) = reader->readByte("forest2TreeTopStyle")
    let? Ok(forest3TreeTopStyle) = reader->readByte("forest3TreeTopStyle")
    let? Ok(forest4TreeTopStyle) = reader->readByte("forest4TreeTopStyle")
    let? Ok(corruptionTreeTopStyle) = reader->readByte("corruptionTreeTopStyle")
    let? Ok(jungleTreeTopStyle) = reader->readByte("jungleTreeTopStyle")
    let? Ok(snowTreeTopStyle) = reader->readByte("snowTreeTopStyle")
    let? Ok(hallowTreeTopStyle) = reader->readByte("hallowTreeTopStyle")
    let? Ok(crimsonTreeTopStyle) = reader->readByte("crimsonTreeTopStyle")
    let? Ok(desertTreeTopStyle) = reader->readByte("desertTreeTopStyle")
    let? Ok(oceanTreeTopStyle) = reader->readByte("oceanTreeTopStyle")
    let? Ok(glowingMushroomTreeTopStyle) = reader->readByte("glowingMushroomTreeTopStyle")
    let? Ok(underworldTreeTopStyle) = reader->readByte("underworldTreeTopStyle")
    let? Ok(rain) = reader->readSingle("rain")
    let? Ok(eventInfo) = reader->readEventInfo
    let? Ok(copperOreTier) = reader->readInt16("copperOreTier")
    let? Ok(ironOreTier) = reader->readInt16("ironOreTier")
    let? Ok(silverOreTier) = reader->readInt16("silverOreTier")
    let? Ok(goldOreTier) = reader->readInt16("goldOreTier")
    let? Ok(cobaltOreTier) = reader->readInt16("cobaltOreTier")
    let? Ok(mythrilOreTier) = reader->readInt16("mythrilOreTier")
    let? Ok(adamantiteOreTier) = reader->readInt16("adamantiteOreTier")
    let? Ok(invasionType) = reader->readSByte("invasionType")
    let? Ok(lobbyId) = reader->readUInt64("lobbyId")
    let? Ok(sandstormSeverity) = reader->readSingle("sandstormSeverity")

    Ok({
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
  } = module(ErrorAwarePacketWriter)
  let packEventInfo = (writer: ErrorAwarePacketWriter.t, eventInfo: eventInfo) => {
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
      ~flag3=eventInfo.killedMourningWood,
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
    ->packByte(eventInfo1->BitFlags.toByte, "eventInfo1")
    ->packByte(eventInfo2->BitFlags.toByte, "eventInfo2")
    ->packByte(eventInfo3->BitFlags.toByte, "eventInfo3")
    ->packByte(eventInfo4->BitFlags.toByte, "eventInfo4")
    ->packByte(eventInfo5->BitFlags.toByte, "eventInfo5")
    ->packByte(eventInfo6->BitFlags.toByte, "eventInfo6")
    ->packByte(eventInfo7->BitFlags.toByte, "eventInfo7")
  }

  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.WorldInfo->PacketType.toInt)
    ->packInt32(self.time, "time")
    ->packByte(self.dayAndMoonInfo, "dayAndMoonInfo")
    ->packByte(self.moonPhase, "moonPhase")
    ->packInt16(self.maxTilesX, "maxTilesX")
    ->packInt16(self.maxTilesY, "maxTilesY")
    ->packInt16(self.spawnX, "spawnX")
    ->packInt16(self.spawnY, "spawnY")
    ->packInt16(self.worldSurface, "worldSurface")
    ->packInt16(self.rockLayer, "rockLayer")
    ->packInt32(self.worldId, "worldId")
    ->packString(self.worldName, "worldName")
    ->packByte(self.gameMode, "gameMode")
    ->packBytes(self.worldUniqueId->Array16.asArray, "worldUniqueId")
    ->packUInt64(self.worldGeneratorVersion, "worldGeneratorVersion")
    ->packByte(self.moonType, "moonType")
    ->packByte(self.treeBackground, "treeBackground")
    ->packByte(self.treeBackground2, "treeBackground2")
    ->packByte(self.treeBackground3, "treeBackground3")
    ->packByte(self.treeBackground4, "treeBackground4")
    ->packByte(self.corruptionBackground, "corruptionBackground")
    ->packByte(self.jungleBackground, "jungleBackground")
    ->packByte(self.snowBackground, "snowBackground")
    ->packByte(self.hallowBackground, "hallowBackground")
    ->packByte(self.crimsonBackground, "crimsonBackground")
    ->packByte(self.desertBackground, "desertBackground")
    ->packByte(self.oceanBackground, "oceanBackground")
    ->packByte(self.mushroomBackground, "mushroomBackground")
    ->packByte(self.underworldBackground, "underworldBackground")
    ->packByte(self.iceBackStyle, "iceBackStyle")
    ->packByte(self.jungleBackStyle, "jungleBackStyle")
    ->packByte(self.hellBackStyle, "hellBackStyle")
    ->packSingle(self.windSpeedSet, "windSpeedSet")
    ->packByte(self.cloudNumber, "cloudNumber")
    ->packInt32(self.tree1, "tree1")
    ->packInt32(self.tree2, "tree2")
    ->packInt32(self.tree3, "tree3")
    ->packByte(self.treeStyle1, "treeStyle1")
    ->packByte(self.treeStyle2, "treeStyle2")
    ->packByte(self.treeStyle3, "treeStyle3")
    ->packByte(self.treeStyle4, "treeStyle4")
    ->packInt32(self.caveBack1, "caveBack1")
    ->packInt32(self.caveBack2, "caveBack2")
    ->packInt32(self.caveBack3, "caveBack3")
    ->packByte(self.caveBackStyle1, "caveBackStyle1")
    ->packByte(self.caveBackStyle2, "caveBackStyle2")
    ->packByte(self.caveBackStyle3, "caveBackStyle3")
    ->packByte(self.caveBackStyle4, "caveBackStyle4")
    ->packByte(self.forest1TreeTopStyle, "forest1TreeTopStyle")
    ->packByte(self.forest2TreeTopStyle, "forest2TreeTopStyle")
    ->packByte(self.forest3TreeTopStyle, "forest3TreeTopStyle")
    ->packByte(self.forest4TreeTopStyle, "forest4TreeTopStyle")
    ->packByte(self.corruptionTreeTopStyle, "corruptionTreeTopStyle")
    ->packByte(self.jungleTreeTopStyle, "jungleTreeTopStyle")
    ->packByte(self.snowTreeTopStyle, "snowTreeTopStyle")
    ->packByte(self.hallowTreeTopStyle, "hallowTreeTopStyle")
    ->packByte(self.crimsonTreeTopStyle, "crimsonTreeTopStyle")
    ->packByte(self.desertTreeTopStyle, "desertTreeTopStyle")
    ->packByte(self.oceanTreeTopStyle, "oceanTreeTopStyle")
    ->packByte(self.glowingMushroomTreeTopStyle, "glowingMushroomTreeTopStyle")
    ->packByte(self.underworldTreeTopStyle, "underworldTreeTopStyle")
    ->packSingle(self.rain, "rain")
    ->packEventInfo(self.eventInfo)
    ->packInt16(self.copperOreTier, "copperOreTier")
    ->packInt16(self.ironOreTier, "ironOreTier")
    ->packInt16(self.silverOreTier, "silverOreTier")
    ->packInt16(self.goldOreTier, "goldOreTier")
    ->packInt16(self.cobaltOreTier, "cobaltOreTier")
    ->packInt16(self.mythrilOreTier, "mythrilOreTier")
    ->packInt16(self.adamantiteOreTier, "adamantiteOreTier")
    ->packSByte(self.invasionType, "invasionType")
    ->packUInt64(self.lobbyId, "lobbyId")
    ->packSingle(self.sandstormSeverity, "sandstormSeverity")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
let eventInfoToLatest = (self: eventInfo): Packet.WorldInfo.eventInfo => {
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
  killedMourningWood: self.killedMourningWood,
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
  dontStarveWorld: false,
  downedDeerClops: false,
  notTheBeesWorld: false,
  remixWorld: false,
  unlockedSlimeBlueSpawn: false,
  combatBookVolumeTwoWasUsed: false,
  peddlersSatchelWasUsed: false,
  unlockedSlimeGreenSpawn: false,
  unlockedSlimeOldSpawn: false,
  unlockedSlimePurpleSpawn: false,
  unlockedSlimeRainbowSpawn: false,
  unlockedSlimeRedSpawn: false,
  unlockedSlimeYellowSpawn: false,
  unlockedSlimeCopperSpawn: false,
  fastForwardTimeToDusk: false,
  noTrapsWorld: false,
  zenithWorld: false,
  unlockedTruffleSpawn: false,
}

let toLatest = (self: t): Packet.WorldInfo.t => {
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
  eventInfo: eventInfoToLatest(self.eventInfo),
  sundialCooldown: 0,
  moondialCooldown: 0,
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

let eventInfoFromLatest = (self: Packet.WorldInfo.eventInfo): eventInfo => {
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
  killedMourningWood: self.killedMourningWood,
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

let fromLatest = (self: Packet.WorldInfo.t): option<t> => Some({
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
  eventInfo: eventInfoFromLatest(self.eventInfo),
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
