/* TypeScript file generated from Packet_PlayerSpawn.resi by genType. */

/* eslint-disable */
/* tslint:disable */

const Packet_PlayerSpawnJS = require('./Packet_PlayerSpawn.js');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

export type context = 
    "ReviveFromDeath"
  | "SpawningIntoWorld"
  | "RecallFromItem";

export type t = {
  readonly playerId: number; 
  readonly x: number; 
  readonly y: number; 
  readonly timeRemaining: number; 
  readonly numberOfDeathsPve: number; 
  readonly numberOfDeathsPvp: number; 
  readonly context: context
};

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = Packet_PlayerSpawnJS.parse as any;

export const toBuffer: (_1:t) => NodeJs_Buffer_t = Packet_PlayerSpawnJS.toBuffer as any;
