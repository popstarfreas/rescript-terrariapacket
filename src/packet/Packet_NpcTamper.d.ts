/* TypeScript file generated from Packet_NpcTamper.res by genType. */

/* eslint-disable */
/* tslint:disable */

export type Immunity_t = "All" | { TAG: "PlayerId"; _0: number };

export type t = {
  readonly npcId: number; 
  readonly immunityTime: (undefined | number); 
  readonly immunityFromPlayerId: (undefined | Immunity_t)
};
