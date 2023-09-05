/* TypeScript file generated from Packet_PlayerInventorySlot.resi by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
const Packet_PlayerInventorySlotBS = require('./Packet_PlayerInventorySlot.bs');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

// tslint:disable-next-line:interface-over-type-literal
export type t = {
  readonly playerId: number; 
  readonly slot: number; 
  readonly stack: number; 
  readonly prefix: number; 
  readonly itemId: number
};

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = Packet_PlayerInventorySlotBS.parse;

export const toBuffer: (_1:t) => NodeJs_Buffer_t = Packet_PlayerInventorySlotBS.toBuffer;
