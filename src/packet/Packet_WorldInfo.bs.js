// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Belt_Option = require("rescript/lib/js/belt_Option.js");
var Array16$TerrariaPacket = require("../Array16.bs.js");
var BitFlags$TerrariaPacket = require("../BitFlags.bs.js");
var PacketType$TerrariaPacket = require("../PacketType.bs.js");
var ManagedPacketWriter$PacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.bs.js");
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;

function readByte(prim) {
  return prim.readByte();
}

function readInt16(prim) {
  return prim.readInt16();
}

function readInt32(prim) {
  return prim.readInt32();
}

function readUInt64(prim) {
  return prim.readUInt64();
}

function readString(prim) {
  return prim.readString();
}

function readBytes(prim0, prim1) {
  return prim0.readBytes(prim1);
}

function readSingle(prim) {
  return prim.readSingle();
}

function readSByte(prim) {
  return prim.readSByte();
}

function readEventInfo(reader) {
  var eventInfo1 = BitFlags$TerrariaPacket.fromByte(reader.readByte());
  var eventInfo2 = BitFlags$TerrariaPacket.fromByte(reader.readByte());
  var eventInfo3 = BitFlags$TerrariaPacket.fromByte(reader.readByte());
  var eventInfo4 = BitFlags$TerrariaPacket.fromByte(reader.readByte());
  var eventInfo5 = BitFlags$TerrariaPacket.fromByte(reader.readByte());
  var eventInfo6 = BitFlags$TerrariaPacket.fromByte(reader.readByte());
  var eventInfo7 = BitFlags$TerrariaPacket.fromByte(reader.readByte());
  var eventInfo8 = BitFlags$TerrariaPacket.fromByte(reader.readByte());
  var eventInfo9 = BitFlags$TerrariaPacket.fromByte(reader.readByte());
  var eventInfo10 = BitFlags$TerrariaPacket.fromByte(reader.readByte());
  var shadowOrbSmashed = BitFlags$TerrariaPacket.flag1(eventInfo1);
  var killedBoss1 = BitFlags$TerrariaPacket.flag2(eventInfo1);
  var killedBoss2 = BitFlags$TerrariaPacket.flag3(eventInfo1);
  var killedBoss3 = BitFlags$TerrariaPacket.flag4(eventInfo1);
  var hardMode = BitFlags$TerrariaPacket.flag5(eventInfo1);
  var killedClown = BitFlags$TerrariaPacket.flag6(eventInfo1);
  var serverSidedCharacters = BitFlags$TerrariaPacket.flag7(eventInfo1);
  var killedPlantBoss = BitFlags$TerrariaPacket.flag8(eventInfo1);
  var killedMechBoss = BitFlags$TerrariaPacket.flag1(eventInfo2);
  var killedMechBoss2 = BitFlags$TerrariaPacket.flag2(eventInfo2);
  var killedMechBoss3 = BitFlags$TerrariaPacket.flag3(eventInfo2);
  var killedAnyMechBoss = BitFlags$TerrariaPacket.flag4(eventInfo2);
  var cloudBg = BitFlags$TerrariaPacket.flag5(eventInfo2);
  var crimson = BitFlags$TerrariaPacket.flag6(eventInfo2);
  var pumpkinMoon = BitFlags$TerrariaPacket.flag7(eventInfo2);
  var snowMoon = BitFlags$TerrariaPacket.flag8(eventInfo2);
  var expertMode = BitFlags$TerrariaPacket.flag1(eventInfo3);
  var fastForwardTime = BitFlags$TerrariaPacket.flag2(eventInfo3);
  var slimeRain = BitFlags$TerrariaPacket.flag3(eventInfo3);
  var killedKingSlime = BitFlags$TerrariaPacket.flag4(eventInfo3);
  var killedQueenBee = BitFlags$TerrariaPacket.flag5(eventInfo3);
  var killedFishron = BitFlags$TerrariaPacket.flag6(eventInfo3);
  var killedMartians = BitFlags$TerrariaPacket.flag7(eventInfo3);
  var killedAncientCultist = BitFlags$TerrariaPacket.flag8(eventInfo3);
  var killedMoonLord = BitFlags$TerrariaPacket.flag1(eventInfo4);
  var killedPumpking = BitFlags$TerrariaPacket.flag2(eventInfo4);
  var killedMounringWood = BitFlags$TerrariaPacket.flag3(eventInfo4);
  var killedIceQueen = BitFlags$TerrariaPacket.flag4(eventInfo4);
  var killedSantank = BitFlags$TerrariaPacket.flag5(eventInfo4);
  var killedEverscream = BitFlags$TerrariaPacket.flag6(eventInfo4);
  var killedGolem = BitFlags$TerrariaPacket.flag7(eventInfo4);
  var birthdayParty = BitFlags$TerrariaPacket.flag8(eventInfo4);
  var killedPirates = BitFlags$TerrariaPacket.flag1(eventInfo5);
  var killedFrostLegion = BitFlags$TerrariaPacket.flag2(eventInfo5);
  var killedGoblins = BitFlags$TerrariaPacket.flag3(eventInfo5);
  var sandstorm = BitFlags$TerrariaPacket.flag4(eventInfo5);
  var dungeonDefendersEvent = BitFlags$TerrariaPacket.flag5(eventInfo5);
  var killedDungeonDefendersTier1 = BitFlags$TerrariaPacket.flag6(eventInfo5);
  var killedDungeonDefendersTier2 = BitFlags$TerrariaPacket.flag7(eventInfo5);
  var killedDungeonDefendersTier3 = BitFlags$TerrariaPacket.flag8(eventInfo5);
  var combatBookUsed = BitFlags$TerrariaPacket.flag1(eventInfo6);
  var manualLanterns = BitFlags$TerrariaPacket.flag2(eventInfo6);
  var killedSolarTower = BitFlags$TerrariaPacket.flag3(eventInfo6);
  var killedVortexTower = BitFlags$TerrariaPacket.flag4(eventInfo6);
  var killedNebulaTower = BitFlags$TerrariaPacket.flag5(eventInfo6);
  var killedStardustTower = BitFlags$TerrariaPacket.flag6(eventInfo6);
  var forceHalloween = BitFlags$TerrariaPacket.flag7(eventInfo6);
  var forceChristmas = BitFlags$TerrariaPacket.flag8(eventInfo6);
  var boughtCat = BitFlags$TerrariaPacket.flag1(eventInfo7);
  var boughtDog = BitFlags$TerrariaPacket.flag2(eventInfo7);
  var boughtBunny = BitFlags$TerrariaPacket.flag3(eventInfo7);
  var freeCake = BitFlags$TerrariaPacket.flag4(eventInfo7);
  var drunkWorld = BitFlags$TerrariaPacket.flag5(eventInfo7);
  var killedEmpressOfLight = BitFlags$TerrariaPacket.flag6(eventInfo7);
  var killedQueenSlime = BitFlags$TerrariaPacket.flag7(eventInfo7);
  var getGoodWorld = BitFlags$TerrariaPacket.flag8(eventInfo7);
  var tenthAnniversaryWorld = BitFlags$TerrariaPacket.flag1(eventInfo8);
  var dontStarveWorld = BitFlags$TerrariaPacket.flag2(eventInfo8);
  var downedDeerClops = BitFlags$TerrariaPacket.flag3(eventInfo8);
  var notTheBeesWorld = BitFlags$TerrariaPacket.flag4(eventInfo8);
  var remixWorld = BitFlags$TerrariaPacket.flag5(eventInfo8);
  var unlockedSlimeBlueSpawn = BitFlags$TerrariaPacket.flag6(eventInfo8);
  var combatBookVolumeTwoWasUsed = BitFlags$TerrariaPacket.flag7(eventInfo8);
  var peddlersSatchelWasUsed = BitFlags$TerrariaPacket.flag8(eventInfo8);
  var unlockedSlimeGreenSpawn = BitFlags$TerrariaPacket.flag1(eventInfo9);
  var unlockedSlimeOldSpawn = BitFlags$TerrariaPacket.flag2(eventInfo9);
  var unlockedSlimePurpleSpawn = BitFlags$TerrariaPacket.flag3(eventInfo9);
  var unlockedSlimeRainbowSpawn = BitFlags$TerrariaPacket.flag4(eventInfo9);
  var unlockedSlimeRedSpawn = BitFlags$TerrariaPacket.flag5(eventInfo9);
  var unlockedSlimeYellowSpawn = BitFlags$TerrariaPacket.flag6(eventInfo9);
  var unlockedSlimeCopperSpawn = BitFlags$TerrariaPacket.flag7(eventInfo9);
  var fastForwardTimeToDusk = BitFlags$TerrariaPacket.flag8(eventInfo9);
  var noTrapsWorld = BitFlags$TerrariaPacket.flag1(eventInfo10);
  var zenithWorld = BitFlags$TerrariaPacket.flag2(eventInfo10);
  var unlockedTruffleSpawn = BitFlags$TerrariaPacket.flag3(eventInfo10);
  return {
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
          tenthAnniversaryWorld: tenthAnniversaryWorld,
          dontStarveWorld: dontStarveWorld,
          downedDeerClops: downedDeerClops,
          notTheBeesWorld: notTheBeesWorld,
          remixWorld: remixWorld,
          unlockedSlimeBlueSpawn: unlockedSlimeBlueSpawn,
          combatBookVolumeTwoWasUsed: combatBookVolumeTwoWasUsed,
          peddlersSatchelWasUsed: peddlersSatchelWasUsed,
          unlockedSlimeGreenSpawn: unlockedSlimeGreenSpawn,
          unlockedSlimeOldSpawn: unlockedSlimeOldSpawn,
          unlockedSlimePurpleSpawn: unlockedSlimePurpleSpawn,
          unlockedSlimeRainbowSpawn: unlockedSlimeRainbowSpawn,
          unlockedSlimeRedSpawn: unlockedSlimeRedSpawn,
          unlockedSlimeYellowSpawn: unlockedSlimeYellowSpawn,
          unlockedSlimeCopperSpawn: unlockedSlimeCopperSpawn,
          fastForwardTimeToDusk: fastForwardTimeToDusk,
          noTrapsWorld: noTrapsWorld,
          zenithWorld: zenithWorld,
          unlockedTruffleSpawn: unlockedTruffleSpawn
        };
}

function parse(payload) {
  var reader = new Packetreader(payload);
  var time = reader.readInt32();
  var dayAndMoonInfo = reader.readByte();
  var moonPhase = reader.readByte();
  var maxTilesX = reader.readInt16();
  var maxTilesY = reader.readInt16();
  var spawnX = reader.readInt16();
  var spawnY = reader.readInt16();
  var worldSurface = reader.readInt16();
  var rockLayer = reader.readInt16();
  var worldId = reader.readInt32();
  var worldName = reader.readString();
  var gameMode = reader.readByte();
  var worldUniqueId = Array16$TerrariaPacket.fromArray(reader.readBytes(16));
  var worldGeneratorVersion = reader.readUInt64();
  var moonType = reader.readByte();
  var treeBackground = reader.readByte();
  var treeBackground2 = reader.readByte();
  var treeBackground3 = reader.readByte();
  var treeBackground4 = reader.readByte();
  var corruptionBackground = reader.readByte();
  var jungleBackground = reader.readByte();
  var snowBackground = reader.readByte();
  var hallowBackground = reader.readByte();
  var crimsonBackground = reader.readByte();
  var desertBackground = reader.readByte();
  var oceanBackground = reader.readByte();
  var mushroomBackground = reader.readByte();
  var underworldBackground = reader.readByte();
  var iceBackStyle = reader.readByte();
  var jungleBackStyle = reader.readByte();
  var hellBackStyle = reader.readByte();
  var windSpeedSet = reader.readSingle();
  var cloudNumber = reader.readByte();
  var tree1 = reader.readInt32();
  var tree2 = reader.readInt32();
  var tree3 = reader.readInt32();
  var treeStyle1 = reader.readByte();
  var treeStyle2 = reader.readByte();
  var treeStyle3 = reader.readByte();
  var treeStyle4 = reader.readByte();
  var caveBack1 = reader.readInt32();
  var caveBack2 = reader.readInt32();
  var caveBack3 = reader.readInt32();
  var caveBackStyle1 = reader.readByte();
  var caveBackStyle2 = reader.readByte();
  var caveBackStyle3 = reader.readByte();
  var caveBackStyle4 = reader.readByte();
  var forest1TreeTopStyle = reader.readByte();
  var forest2TreeTopStyle = reader.readByte();
  var forest3TreeTopStyle = reader.readByte();
  var forest4TreeTopStyle = reader.readByte();
  var corruptionTreeTopStyle = reader.readByte();
  var jungleTreeTopStyle = reader.readByte();
  var snowTreeTopStyle = reader.readByte();
  var hallowTreeTopStyle = reader.readByte();
  var crimsonTreeTopStyle = reader.readByte();
  var desertTreeTopStyle = reader.readByte();
  var oceanTreeTopStyle = reader.readByte();
  var glowingMushroomTreeTopStyle = reader.readByte();
  var underworldTreeTopStyle = reader.readByte();
  var rain = reader.readSingle();
  var eventInfo = readEventInfo(reader);
  var sundialCooldown = reader.readByte();
  var moondialCooldown = reader.readByte();
  var copperOreTier = reader.readInt16();
  var ironOreTier = reader.readInt16();
  var silverOreTier = reader.readInt16();
  var goldOreTier = reader.readInt16();
  var cobaltOreTier = reader.readInt16();
  var mythrilOreTier = reader.readInt16();
  var adamantiteOreTier = reader.readInt16();
  var invasionType = reader.readSByte();
  var lobbyId = reader.readUInt64();
  var sandstormSeverity = reader.readSingle();
  return Belt_Option.map(worldUniqueId, (function (worldUniqueId) {
                return {
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
                        sundialCooldown: sundialCooldown,
                        moondialCooldown: moondialCooldown,
                        copperOreTier: copperOreTier,
                        ironOreTier: ironOreTier,
                        silverOreTier: silverOreTier,
                        goldOreTier: goldOreTier,
                        cobaltOreTier: cobaltOreTier,
                        mythrilOreTier: mythrilOreTier,
                        adamantiteOreTier: adamantiteOreTier,
                        invasionType: invasionType,
                        lobbyId: lobbyId,
                        sandstormSeverity: sandstormSeverity
                      };
              }));
}

var Decode = {
  readByte: readByte,
  readInt16: readInt16,
  readInt32: readInt32,
  readUInt64: readUInt64,
  readString: readString,
  readBytes: readBytes,
  readSingle: readSingle,
  readSByte: readSByte,
  readEventInfo: readEventInfo,
  parse: parse
};

function packSingle(prim0, prim1) {
  return prim0.packSingle(prim1);
}

function packInt32(prim0, prim1) {
  return prim0.packInt32(prim1);
}

function packByte(prim0, prim1) {
  return prim0.packByte(prim1);
}

function packInt16(prim0, prim1) {
  return prim0.packInt16(prim1);
}

function packUInt64(prim0, prim1) {
  return prim0.packUInt64(prim1);
}

function packString(prim0, prim1) {
  return prim0.packString(prim1);
}

function packSByte(prim0, prim1) {
  return prim0.packSByte(prim1);
}

function packBytes(prim0, prim1) {
  return prim0.packBytes(prim1);
}

function data(prim) {
  return prim.data;
}

function packEventInfo(writer, eventInfo) {
  var eventInfo1 = BitFlags$TerrariaPacket.fromFlags(eventInfo.shadowOrbSmashed, eventInfo.killedBoss1, eventInfo.killedBoss2, eventInfo.killedBoss3, eventInfo.hardMode, eventInfo.killedClown, eventInfo.serverSidedCharacters, eventInfo.killedPlantBoss);
  var eventInfo2 = BitFlags$TerrariaPacket.fromFlags(eventInfo.killedMechBoss, eventInfo.killedMechBoss2, eventInfo.killedMechBoss3, eventInfo.killedAnyMechBoss, eventInfo.cloudBg, eventInfo.crimson, eventInfo.pumpkinMoon, eventInfo.snowMoon);
  var eventInfo3 = BitFlags$TerrariaPacket.fromFlags(eventInfo.expertMode, eventInfo.fastForwardTime, eventInfo.slimeRain, eventInfo.killedKingSlime, eventInfo.killedQueenBee, eventInfo.killedFishron, eventInfo.killedMartians, eventInfo.killedAncientCultist);
  var eventInfo4 = BitFlags$TerrariaPacket.fromFlags(eventInfo.killedMoonLord, eventInfo.killedPumpking, eventInfo.killedMounringWood, eventInfo.killedIceQueen, eventInfo.killedSantank, eventInfo.killedEverscream, eventInfo.killedGolem, eventInfo.birthdayParty);
  var eventInfo5 = BitFlags$TerrariaPacket.fromFlags(eventInfo.killedPirates, eventInfo.killedFrostLegion, eventInfo.killedGoblins, eventInfo.sandstorm, eventInfo.dungeonDefendersEvent, eventInfo.killedDungeonDefendersTier1, eventInfo.killedDungeonDefendersTier2, eventInfo.killedDungeonDefendersTier3);
  var eventInfo6 = BitFlags$TerrariaPacket.fromFlags(eventInfo.combatBookUsed, eventInfo.manualLanterns, eventInfo.killedSolarTower, eventInfo.killedVortexTower, eventInfo.killedNebulaTower, eventInfo.killedStardustTower, eventInfo.forceHalloween, eventInfo.forceChristmas);
  var eventInfo7 = BitFlags$TerrariaPacket.fromFlags(eventInfo.boughtCat, eventInfo.boughtDog, eventInfo.boughtBunny, eventInfo.freeCake, eventInfo.drunkWorld, eventInfo.killedEmpressOfLight, eventInfo.killedQueenSlime, eventInfo.getGoodWorld);
  var eventInfo8 = BitFlags$TerrariaPacket.fromFlags(eventInfo.tenthAnniversaryWorld, eventInfo.dontStarveWorld, eventInfo.downedDeerClops, eventInfo.notTheBeesWorld, eventInfo.remixWorld, eventInfo.unlockedSlimeBlueSpawn, eventInfo.combatBookVolumeTwoWasUsed, eventInfo.peddlersSatchelWasUsed);
  var eventInfo9 = BitFlags$TerrariaPacket.fromFlags(eventInfo.unlockedSlimeGreenSpawn, eventInfo.unlockedSlimeOldSpawn, eventInfo.unlockedSlimePurpleSpawn, eventInfo.unlockedSlimeRainbowSpawn, eventInfo.unlockedSlimeRedSpawn, eventInfo.unlockedSlimeYellowSpawn, eventInfo.unlockedSlimeCopperSpawn, eventInfo.fastForwardTimeToDusk);
  var eventInfo10 = BitFlags$TerrariaPacket.fromFlags(eventInfo.noTrapsWorld, eventInfo.zenithWorld, eventInfo.unlockedTruffleSpawn, false, false, false, false, false);
  return writer.packByte(BitFlags$TerrariaPacket.toByte(eventInfo1)).packByte(BitFlags$TerrariaPacket.toByte(eventInfo2)).packByte(BitFlags$TerrariaPacket.toByte(eventInfo3)).packByte(BitFlags$TerrariaPacket.toByte(eventInfo4)).packByte(BitFlags$TerrariaPacket.toByte(eventInfo5)).packByte(BitFlags$TerrariaPacket.toByte(eventInfo6)).packByte(BitFlags$TerrariaPacket.toByte(eventInfo7)).packByte(BitFlags$TerrariaPacket.toByte(eventInfo8)).packByte(BitFlags$TerrariaPacket.toByte(eventInfo9)).packByte(BitFlags$TerrariaPacket.toByte(eventInfo10));
}

function toBuffer(self) {
  return packEventInfo(ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("WorldInfo")).packInt32(self.time).packByte(self.dayAndMoonInfo).packByte(self.moonPhase).packInt16(self.maxTilesX).packInt16(self.maxTilesY).packInt16(self.spawnX).packInt16(self.spawnY).packInt16(self.worldSurface).packInt16(self.rockLayer).packInt32(self.worldId).packString(self.worldName).packByte(self.gameMode).packBytes(Array16$TerrariaPacket.asArray(self.worldUniqueId)).packUInt64(self.worldGeneratorVersion).packByte(self.moonType).packByte(self.treeBackground).packByte(self.treeBackground2).packByte(self.treeBackground3).packByte(self.treeBackground4).packByte(self.corruptionBackground).packByte(self.jungleBackground).packByte(self.snowBackground).packByte(self.hallowBackground).packByte(self.crimsonBackground).packByte(self.desertBackground).packByte(self.oceanBackground).packByte(self.mushroomBackground).packByte(self.underworldBackground).packByte(self.iceBackStyle).packByte(self.jungleBackStyle).packByte(self.hellBackStyle).packSingle(self.windSpeedSet).packByte(self.cloudNumber).packInt32(self.tree1).packInt32(self.tree2).packInt32(self.tree3).packByte(self.treeStyle1).packByte(self.treeStyle2).packByte(self.treeStyle3).packByte(self.treeStyle4).packInt32(self.caveBack1).packInt32(self.caveBack2).packInt32(self.caveBack3).packByte(self.caveBackStyle1).packByte(self.caveBackStyle2).packByte(self.caveBackStyle3).packByte(self.caveBackStyle4).packByte(self.forest1TreeTopStyle).packByte(self.forest2TreeTopStyle).packByte(self.forest3TreeTopStyle).packByte(self.forest4TreeTopStyle).packByte(self.corruptionTreeTopStyle).packByte(self.jungleTreeTopStyle).packByte(self.snowTreeTopStyle).packByte(self.hallowTreeTopStyle).packByte(self.crimsonTreeTopStyle).packByte(self.desertTreeTopStyle).packByte(self.oceanTreeTopStyle).packByte(self.glowingMushroomTreeTopStyle).packByte(self.underworldTreeTopStyle).packSingle(self.rain), self.eventInfo).packByte(self.sundialCooldown).packByte(self.moondialCooldown).packInt16(self.copperOreTier).packInt16(self.ironOreTier).packInt16(self.silverOreTier).packInt16(self.goldOreTier).packInt16(self.cobaltOreTier).packInt16(self.mythrilOreTier).packInt16(self.adamantiteOreTier).packSByte(self.invasionType).packUInt64(self.lobbyId).packSingle(self.sandstormSeverity).data;
}

var Encode = {
  packSingle: packSingle,
  packInt32: packInt32,
  packByte: packByte,
  packInt16: packInt16,
  packUInt64: packUInt64,
  packString: packString,
  packSByte: packSByte,
  packBytes: packBytes,
  setType: ManagedPacketWriter$PacketFactory.setType,
  data: data,
  packEventInfo: packEventInfo,
  toBuffer: toBuffer
};

var $$Option;

exports.$$Option = $$Option;
exports.Decode = Decode;
exports.Encode = Encode;
exports.parse = parse;
exports.toBuffer = toBuffer;
/* @popstarfreas/packetfactory/packetreader Not a pure module */
