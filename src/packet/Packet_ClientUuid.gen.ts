/* TypeScript file generated from Packet_ClientUuid.resi by genType. */

/* eslint-disable */
/* tslint:disable */

const Packet_ClientUuidJS = require('./Packet_ClientUuid.bs.js');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

export type t = { readonly uuid: string };

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = Packet_ClientUuidJS.parse as any;

export const toBuffer: (_1:t) => NodeJs_Buffer_t = Packet_ClientUuidJS.toBuffer as any;
