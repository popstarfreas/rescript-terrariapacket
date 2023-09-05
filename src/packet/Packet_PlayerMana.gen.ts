/* TypeScript file generated from Packet_PlayerMana.resi by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
const Packet_PlayerManaBS = require('./Packet_PlayerMana.bs');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

// tslint:disable-next-line:interface-over-type-literal
export type t = {
  readonly playerId: number; 
  readonly mana: number; 
  readonly maxMana: number
};

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = Packet_PlayerManaBS.parse;

export const toBuffer: (_1:t) => NodeJs_Buffer_t = Packet_PlayerManaBS.toBuffer;
