/* TypeScript file generated from CreativePowers.resi by genType. */

/* eslint-disable */
/* tslint:disable */

const CreativePowersJS = require('./CreativePowers.bs.js');

export type PerPlayerSliderPower_t = { readonly playerId: number; readonly value: number };

export type PerPlayerTogglePower_t = 
    { TAG: "Everyone"; _0: boolean[] }
  | { TAG: "Player"; _0: number; _1: boolean };

export type t = 
    "StartDayImmediately"
  | "StartNoonImmediately"
  | "StartNightImmediately"
  | "StartMidnightImmediately"
  | { TAG: "FreezeTime"; _0: boolean }
  | { TAG: "GodmodePower"; _0: PerPlayerTogglePower_t }
  | { TAG: "ModifyWindDirectionAndStrength"; _0: number }
  | { TAG: "ModifyRainPower"; _0: number }
  | { TAG: "ModifyTimeRate"; _0: number }
  | { TAG: "FreezeRainPower"; _0: boolean }
  | { TAG: "FreezeWindDirectionAndStrength"; _0: boolean }
  | { TAG: "FarPlacementRangePower"; _0: PerPlayerTogglePower_t }
  | { TAG: "DifficultySliderPower"; _0: number }
  | { TAG: "StopBiomeSpreadPower"; _0: boolean }
  | { TAG: "SpawnRateSliderPerPlayerPower"; _0: PerPlayerSliderPower_t };

export type CreativePowerType_t = 
    "FreezeTime"
  | "StartDayImmediately"
  | "StartNoonImmediately"
  | "StartNightImmediately"
  | "StartMidnightImmediately"
  | "GodmodePower"
  | "ModifyWindDirectionAndStrength"
  | "ModifyRainPower"
  | "ModifyTimeRate"
  | "FreezeRainPower"
  | "FreezeWindDirectionAndStrength"
  | "FarPlacementRangePower"
  | "DifficultySliderPower"
  | "StopBiomeSpreadPower"
  | "SpawnRateSliderPerPlayerPower";

export const CreativePowerType_fromInt: (_1:number) => (undefined | CreativePowerType_t) = CreativePowersJS.CreativePowerType.fromInt as any;

export const CreativePowerType_toInt: (_1:CreativePowerType_t) => number = CreativePowersJS.CreativePowerType.toInt as any;

export const CreativePowerType: { toInt: (_1:CreativePowerType_t) => number; fromInt: (_1:number) => (undefined | CreativePowerType_t) } = CreativePowersJS.CreativePowerType as any;
