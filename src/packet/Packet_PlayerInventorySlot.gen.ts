/* TypeScript file generated from Packet_PlayerInventorySlot.resi by genType. */

/* eslint-disable */
/* tslint:disable */

const Packet_PlayerInventorySlotJS = require('./Packet_PlayerInventorySlot.js');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

export type t = {
  readonly playerId: number; 
  readonly slot: number; 
  readonly stack: number; 
  readonly prefix: number; 
  readonly itemId: number
};

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = Packet_PlayerInventorySlotJS.parse as any;

export const toBuffer: (_1:t) => NodeJs_Buffer_t = Packet_PlayerInventorySlotJS.toBuffer as any;
