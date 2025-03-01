/* TypeScript file generated from Packet_WorldInfo.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import * as Packet_WorldInfoJS from './Packet_WorldInfo.mjs'

import type { BigInt_t as NodeJs_BigInt_t } from '../../src/shims/NodeJs.shim.mts';

import type { Buffer_t as NodeJs_Buffer_t } from '../../src/shims/NodeJs.shim.mts';

import type { t as Array16_t } from '../../src/Array16.gen.mts';

export type eventInfo = {
  readonly shadowOrbSmashed: boolean;
  readonly killedBoss1: boolean;
  readonly killedBoss2: boolean;
  readonly killedBoss3: boolean;
  readonly hardMode: boolean;
  readonly killedClown: boolean;
  readonly serverSidedCharacters: boolean;
  readonly killedPlantBoss: boolean;
  readonly killedMechBoss: boolean;
  readonly killedMechBoss2: boolean;
  readonly killedMechBoss3: boolean;
  readonly killedAnyMechBoss: boolean;
  readonly cloudBg: boolean;
  readonly crimson: boolean;
  readonly pumpkinMoon: boolean;
  readonly snowMoon: boolean;
  readonly expertMode: boolean;
  readonly fastForwardTime: boolean;
  readonly slimeRain: boolean;
  readonly killedKingSlime: boolean;
  readonly killedQueenBee: boolean;
  readonly killedFishron: boolean;
  readonly killedMartians: boolean;
  readonly killedAncientCultist: boolean;
  readonly killedMoonLord: boolean;
  readonly killedPumpking: boolean;
  readonly killedMounringWood: boolean;
  readonly killedIceQueen: boolean;
  readonly killedSantank: boolean;
  readonly killedEverscream: boolean;
  readonly killedGolem: boolean;
  readonly birthdayParty: boolean;
  readonly killedPirates: boolean;
  readonly killedFrostLegion: boolean;
  readonly killedGoblins: boolean;
  readonly sandstorm: boolean;
  readonly dungeonDefendersEvent: boolean;
  readonly killedDungeonDefendersTier1: boolean;
  readonly killedDungeonDefendersTier2: boolean;
  readonly killedDungeonDefendersTier3: boolean;
  readonly combatBookUsed: boolean;
  readonly manualLanterns: boolean;
  readonly killedSolarTower: boolean;
  readonly killedVortexTower: boolean;
  readonly killedNebulaTower: boolean;
  readonly killedStardustTower: boolean;
  readonly forceHalloween: boolean;
  readonly forceChristmas: boolean;
  readonly boughtCat: boolean;
  readonly boughtDog: boolean;
  readonly boughtBunny: boolean;
  readonly freeCake: boolean;
  readonly drunkWorld: boolean;
  readonly killedEmpressOfLight: boolean;
  readonly killedQueenSlime: boolean;
  readonly getGoodWorld: boolean;
  readonly tenthAnniversaryWorld: boolean;
  readonly dontStarveWorld: boolean;
  readonly downedDeerClops: boolean;
  readonly notTheBeesWorld: boolean;
  readonly remixWorld: boolean;
  readonly unlockedSlimeBlueSpawn: boolean;
  readonly combatBookVolumeTwoWasUsed: boolean;
  readonly peddlersSatchelWasUsed: boolean;
  readonly unlockedSlimeGreenSpawn: boolean;
  readonly unlockedSlimeOldSpawn: boolean;
  readonly unlockedSlimePurpleSpawn: boolean;
  readonly unlockedSlimeRainbowSpawn: boolean;
  readonly unlockedSlimeRedSpawn: boolean;
  readonly unlockedSlimeYellowSpawn: boolean;
  readonly unlockedSlimeCopperSpawn: boolean;
  readonly fastForwardTimeToDusk: boolean;
  readonly noTrapsWorld: boolean;
  readonly zenithWorld: boolean;
  readonly unlockedTruffleSpawn: boolean
};

export type t = {
  readonly time: number;
  readonly dayAndMoonInfo: number;
  readonly moonPhase: number;
  readonly maxTilesX: number;
  readonly maxTilesY: number;
  readonly spawnX: number;
  readonly spawnY: number;
  readonly worldSurface: number;
  readonly rockLayer: number;
  readonly worldId: number;
  readonly worldName: string;
  readonly gameMode: number;
  readonly worldUniqueId: Array16_t<number>;
  readonly worldGeneratorVersion: NodeJs_BigInt_t;
  readonly moonType: number;
  readonly treeBackground: number;
  readonly treeBackground2: number;
  readonly treeBackground3: number;
  readonly treeBackground4: number;
  readonly corruptionBackground: number;
  readonly jungleBackground: number;
  readonly snowBackground: number;
  readonly hallowBackground: number;
  readonly crimsonBackground: number;
  readonly desertBackground: number;
  readonly oceanBackground: number;
  readonly mushroomBackground: number;
  readonly underworldBackground: number;
  readonly iceBackStyle: number;
  readonly jungleBackStyle: number;
  readonly hellBackStyle: number;
  readonly windSpeedSet: number;
  readonly cloudNumber: number;
  readonly tree1: number;
  readonly tree2: number;
  readonly tree3: number;
  readonly treeStyle1: number;
  readonly treeStyle2: number;
  readonly treeStyle3: number;
  readonly treeStyle4: number;
  readonly caveBack1: number;
  readonly caveBack2: number;
  readonly caveBack3: number;
  readonly caveBackStyle1: number;
  readonly caveBackStyle2: number;
  readonly caveBackStyle3: number;
  readonly caveBackStyle4: number;
  readonly forest1TreeTopStyle: number;
  readonly forest2TreeTopStyle: number;
  readonly forest3TreeTopStyle: number;
  readonly forest4TreeTopStyle: number;
  readonly corruptionTreeTopStyle: number;
  readonly jungleTreeTopStyle: number;
  readonly snowTreeTopStyle: number;
  readonly hallowTreeTopStyle: number;
  readonly crimsonTreeTopStyle: number;
  readonly desertTreeTopStyle: number;
  readonly oceanTreeTopStyle: number;
  readonly glowingMushroomTreeTopStyle: number;
  readonly underworldTreeTopStyle: number;
  readonly rain: number;
  readonly eventInfo: eventInfo;
  readonly sundialCooldown: number;
  readonly moondialCooldown: number;
  readonly copperOreTier: number;
  readonly ironOreTier: number;
  readonly silverOreTier: number;
  readonly goldOreTier: number;
  readonly cobaltOreTier: number;
  readonly mythrilOreTier: number;
  readonly adamantiteOreTier: number;
  readonly invasionType: number;
  readonly lobbyId: NodeJs_BigInt_t;
  readonly sandstormSeverity: number
};

export const parse: (_1: NodeJs_Buffer_t) => (undefined | t) = Packet_WorldInfoJS.parse as any;

export const toBuffer: (_1: t) => NodeJs_Buffer_t = Packet_WorldInfoJS.toBuffer as any;
