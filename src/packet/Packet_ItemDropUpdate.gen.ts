/* TypeScript file generated from Packet_ItemDropUpdate.resi by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
const Packet_ItemDropUpdateBS = require('./Packet_ItemDropUpdate.bs');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

// tslint:disable-next-line:interface-over-type-literal
export type t = {
  readonly itemDropId: number; 
  readonly x: number; 
  readonly y: number; 
  readonly vx: number; 
  readonly vy: number; 
  readonly stack: number; 
  readonly prefix: number; 
  readonly noDelay: number; 
  readonly itemId: number
};

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = Packet_ItemDropUpdateBS.parse;

export const toBuffer: (_1:t) => NodeJs_Buffer_t = Packet_ItemDropUpdateBS.toBuffer;
