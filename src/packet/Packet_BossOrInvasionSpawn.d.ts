import type { readError } from "../ErrorAwarePacketReader.js";
import type { PackError } from "../ErrorAwarePacketWriter.js";
/* TypeScript file generated from Packet_BossOrInvasionSpawn.res by genType. */

/* eslint-disable */
/* tslint:disable */

export type spawnType = 
    "GoblinInvasion"
  | "FrostInvasion"
  | "PirateInvasion"
  | "PumpkinMoon"
  | "SnowMoon"
  | "Eclipse"
  | "MartianMoon"
  | "ImpendingDoom"
  | "BloodMoon"
  | "CombatBookUsed"
  | "BoughtCat"
  | "BoughtDog"
  | "BoughtBunny"
  | "BoughtSlime"
  | "MechQueen"
  | "CombatBookVolumeTwo"
  | "PeddlersSatchel"
  | { TAG: "Invasion"; _0: number }
  | { TAG: "Npc"; _0: number };

export type t = { readonly playerId: number; readonly spawnType: spawnType };

export type parseOk = { TAG: "Ok"; _0: t };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer) => parse;
export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
