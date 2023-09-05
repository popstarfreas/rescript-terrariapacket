/* TypeScript file generated from Packet_PlayerActive.resi by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
const Packet_PlayerActiveBS = require('./Packet_PlayerActive.bs');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

// tslint:disable-next-line:interface-over-type-literal
export type t = { readonly playerId: number; readonly active: boolean };

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = Packet_PlayerActiveBS.parse;

export const toBuffer: (_1:t) => NodeJs_Buffer_t = Packet_PlayerActiveBS.toBuffer;
