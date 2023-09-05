/* TypeScript file generated from Packet_PlayerBuffAdd.resi by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
const Packet_PlayerBuffAddBS = require('./Packet_PlayerBuffAdd.bs');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

// tslint:disable-next-line:interface-over-type-literal
export type t = {
  readonly playerId: number; 
  readonly buff: number; 
  readonly time: number
};

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = Packet_PlayerBuffAddBS.parse;

export const toBuffer: (_1:t) => NodeJs_Buffer_t = Packet_PlayerBuffAddBS.toBuffer;
