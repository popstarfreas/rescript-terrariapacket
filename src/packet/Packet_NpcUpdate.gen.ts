/* TypeScript file generated from Packet_NpcUpdate.resi by genType. */

/* eslint-disable */
/* tslint:disable */

const Packet_NpcUpdateJS = require('./Packet_NpcUpdate.js');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

export type ai = [(undefined | number), (undefined | number), (undefined | number), (undefined | number)];

export type life = 
    "Max"
  | { TAG: "Byte"; _0: number }
  | { TAG: "Int16"; _0: number }
  | { TAG: "Int32"; _0: number };

export type t = {
  readonly npcSlotId: number; 
  readonly npcTypeId: number; 
  readonly x: number; 
  readonly y: number; 
  readonly vx: number; 
  readonly vy: number; 
  readonly target: number; 
  readonly directionX: boolean; 
  readonly directionY: boolean; 
  readonly ai: ai; 
  readonly spriteDirection: boolean; 
  readonly life: life; 
  readonly releaseOwner: (undefined | number); 
  readonly playerCountScale: (undefined | number); 
  readonly strengthMultiplier: (undefined | number); 
  readonly spawnedFromStatue: boolean
};

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = Packet_NpcUpdateJS.parse as any;

export const toBuffer: (_1:t) => NodeJs_Buffer_t = Packet_NpcUpdateJS.toBuffer as any;
