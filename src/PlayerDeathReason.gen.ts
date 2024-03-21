/* TypeScript file generated from PlayerDeathReason.resi by genType. */

/* eslint-disable */
/* tslint:disable */

export type other = 
    "FallDamage"
  | "Drowning"
  | "Lava"
  | "FallDamage2"
  | "DemonAltar"
  | "CompanionCube"
  | "Suffocation"
  | "Burning"
  | "Poison"
  | "Electrified"
  | "WallOfFleshEscape"
  | "WallOfFleshLicked"
  | "ChaosState"
  | "ChaosState2Male"
  | "ChaosState3Female";

export type t = {
  readonly killerPlayerId: (undefined | number); 
  readonly killerNpcId: (undefined | number); 
  readonly killerProjectileId: (undefined | number); 
  readonly typeOfDeathOther: (undefined | other); 
  readonly projectileType: (undefined | number); 
  readonly itemType: (undefined | number); 
  readonly itemPrefix: (undefined | number); 
  readonly deathReason: (undefined | string)
};
