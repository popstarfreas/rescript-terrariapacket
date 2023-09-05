/* TypeScript file generated from Packet_ItemOwner.resi by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
const Packet_ItemOwnerBS = require('./Packet_ItemOwner.bs');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

// tslint:disable-next-line:interface-over-type-literal
export type t = { readonly itemDropId: number; readonly owner: number };

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = Packet_ItemOwnerBS.parse;

export const toBuffer: (_1:t) => NodeJs_Buffer_t = Packet_ItemOwnerBS.toBuffer;
