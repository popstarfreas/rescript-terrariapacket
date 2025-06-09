/* TypeScript file generated from Packet_PlayerBuffAdd.resi by genType. */

/* eslint-disable */
/* tslint:disable */

const Packet_PlayerBuffAddJS = require('./Packet_PlayerBuffAdd.js');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

export type t = {
  readonly playerId: number; 
  readonly buff: number; 
  readonly time: number
};

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = Packet_PlayerBuffAddJS.parse as any;

export const toBuffer: (_1:t) => NodeJs_Buffer_t = Packet_PlayerBuffAddJS.toBuffer as any;
