/* TypeScript file generated from Packet_Teleport.res by genType. */

/* eslint-disable */
/* tslint:disable */

export type teleportType = "Player" | "Npc" | "PlayerToPlayer";

export type t = {
  readonly teleportType: teleportType; 
  readonly getPositionFromTarget: boolean; 
  readonly targetId: number; 
  readonly x: number; 
  readonly y: number; 
  readonly style: number; 
  readonly extraInfo: (undefined | number)
};
