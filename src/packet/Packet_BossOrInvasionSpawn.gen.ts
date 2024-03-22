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
  | { TAG: "Npc"; _0: number };

export type t = { readonly playerId: number; readonly spawnType: spawnType };
