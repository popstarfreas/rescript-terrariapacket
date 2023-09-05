/* TypeScript file generated from Packet_ClientUuid.resi by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
const Packet_ClientUuidBS = require('./Packet_ClientUuid.bs');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

// tslint:disable-next-line:interface-over-type-literal
export type t = { readonly uuid: string };

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = Packet_ClientUuidBS.parse;

export const toBuffer: (_1:t) => NodeJs_Buffer_t = Packet_ClientUuidBS.toBuffer;
