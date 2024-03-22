// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Zora = require("@dusty-phillips/rescript-zora/src/Zora.bs.js");
var Zora$1 = require("zora");
var Belt_Array = require("rescript/lib/js/belt_Array.js");
var Belt_Option = require("rescript/lib/js/belt_Option.js");
var Array16$TerrariaPacket = require("../src/Array16.bs.js");
var Packet_WorldInfo$TerrariaPacket = require("../src/packet/Packet_WorldInfo.bs.js");

var worldInfo_worldUniqueId = Belt_Option.getExn(Array16$TerrariaPacket.fromArray(Belt_Array.make(16, 0)));

var worldInfo_worldGeneratorVersion = BigInt(0);

var worldInfo_eventInfo = {
  shadowOrbSmashed: false,
  killedBoss1: false,
  killedBoss2: false,
  killedBoss3: false,
  hardMode: false,
  killedClown: false,
  serverSidedCharacters: false,
  killedPlantBoss: false,
  killedMechBoss: false,
  killedMechBoss2: false,
  killedMechBoss3: false,
  killedAnyMechBoss: false,
  cloudBg: false,
  crimson: false,
  pumpkinMoon: false,
  snowMoon: false,
  expertMode: false,
  fastForwardTime: false,
  slimeRain: false,
  killedKingSlime: false,
  killedQueenBee: false,
  killedFishron: false,
  killedMartians: false,
  killedAncientCultist: false,
  killedMoonLord: false,
  killedPumpking: false,
  killedMounringWood: false,
  killedIceQueen: false,
  killedSantank: false,
  killedEverscream: false,
  killedGolem: false,
  birthdayParty: false,
  killedPirates: false,
  killedFrostLegion: false,
  killedGoblins: false,
  sandstorm: false,
  dungeonDefendersEvent: false,
  killedDungeonDefendersTier1: false,
  killedDungeonDefendersTier2: false,
  killedDungeonDefendersTier3: false,
  combatBookUsed: false,
  manualLanterns: false,
  killedSolarTower: false,
  killedVortexTower: false,
  killedNebulaTower: false,
  killedStardustTower: false,
  forceHalloween: false,
  forceChristmas: false,
  boughtCat: false,
  boughtDog: false,
  boughtBunny: false,
  freeCake: false,
  drunkWorld: false,
  killedEmpressOfLight: false,
  killedQueenSlime: false,
  getGoodWorld: false,
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
  unlockedTruffleSpawn: false
};

var worldInfo_lobbyId = BigInt(0);

var worldInfo = {
  time: 27000,
  dayAndMoonInfo: 1,
  moonPhase: 0,
  maxTilesX: 8400,
  maxTilesY: 2400,
  spawnX: 1,
  spawnY: 2,
  worldSurface: 745,
  rockLayer: 1009,
  worldId: 1786675403,
  worldName: "Dark Gaming",
  gameMode: 2,
  worldUniqueId: worldInfo_worldUniqueId,
  worldGeneratorVersion: worldInfo_worldGeneratorVersion,
  moonType: 0,
  treeBackground: 0,
  treeBackground2: 0,
  treeBackground3: 0,
  treeBackground4: 0,
  corruptionBackground: 0,
  jungleBackground: 0,
  snowBackground: 0,
  hallowBackground: 0,
  crimsonBackground: 0,
  desertBackground: 0,
  oceanBackground: 0,
  mushroomBackground: 0,
  underworldBackground: 0,
  iceBackStyle: 0,
  jungleBackStyle: 0,
  hellBackStyle: 0,
  windSpeedSet: 0.0,
  cloudNumber: 0,
  tree1: 0,
  tree2: 0,
  tree3: 0,
  treeStyle1: 0,
  treeStyle2: 0,
  treeStyle3: 0,
  treeStyle4: 0,
  caveBack1: 0,
  caveBack2: 0,
  caveBack3: 0,
  caveBackStyle1: 0,
  caveBackStyle2: 0,
  caveBackStyle3: 0,
  caveBackStyle4: 0,
  forest1TreeTopStyle: 0,
  forest2TreeTopStyle: 0,
  forest3TreeTopStyle: 0,
  forest4TreeTopStyle: 0,
  corruptionTreeTopStyle: 0,
  jungleTreeTopStyle: 0,
  snowTreeTopStyle: 0,
  hallowTreeTopStyle: 0,
  crimsonTreeTopStyle: 0,
  desertTreeTopStyle: 0,
  oceanTreeTopStyle: 0,
  glowingMushroomTreeTopStyle: 0,
  underworldTreeTopStyle: 0,
  rain: 0.0,
  eventInfo: worldInfo_eventInfo,
  copperOreTier: 7,
  ironOreTier: 6,
  silverOreTier: 9,
  goldOreTier: 8,
  cobaltOreTier: 107,
  mythrilOreTier: 108,
  adamantiteOreTier: 111,
  invasionType: 0,
  lobbyId: worldInfo_lobbyId,
  sandstormSeverity: 0.0
};

Zora$1.test("Should be the same going after encode/decode", (function (t) {
        var rawWorldInfo = Packet_WorldInfo$TerrariaPacket.toBuffer(worldInfo);
        var newWorldInfo = Packet_WorldInfo$TerrariaPacket.parse(rawWorldInfo);
        Zora.optionSome(t, newWorldInfo, (function (t, newWorldInfo) {
                t.equal(worldInfo, newWorldInfo, "hi");
              }));
      }));

var WorldInfo;

exports.WorldInfo = WorldInfo;
exports.worldInfo = worldInfo;
/* worldInfo Not a pure module */