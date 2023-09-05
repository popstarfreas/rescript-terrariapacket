/* TypeScript file generated from Packet_ConnectRequest.resi by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
const Packet_ConnectRequestBS = require('./Packet_ConnectRequest.bs');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

// tslint:disable-next-line:interface-over-type-literal
export type t = { readonly version: string };

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = Packet_ConnectRequestBS.parse;

export const toBuffer: (_1:t) => NodeJs_Buffer_t = Packet_ConnectRequestBS.toBuffer;
