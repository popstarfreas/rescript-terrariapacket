/* TypeScript file generated from Packet_PlayerBuffsSet.resi by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
const Packet_PlayerBuffsSetBS = require('./Packet_PlayerBuffsSet.bs');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

// tslint:disable-next-line:interface-over-type-literal
export type t = { readonly playerId: number; readonly buffs: number[] };

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = Packet_PlayerBuffsSetBS.parse;

export const toBuffer: (_1:t) => NodeJs_Buffer_t = Packet_PlayerBuffsSetBS.toBuffer;
