/* TypeScript file generated from Packet_PlayerHealth.resi by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
const Packet_PlayerHealthBS = require('./Packet_PlayerHealth.bs');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

// tslint:disable-next-line:interface-over-type-literal
export type t = {
  readonly playerId: number; 
  readonly health: number; 
  readonly maxHealth: number
};

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = Packet_PlayerHealthBS.parse;

export const toBuffer: (_1:t) => NodeJs_Buffer_t = Packet_PlayerHealthBS.toBuffer;
