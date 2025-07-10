/* TypeScript file generated from Packet_ItemOwner.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

export type t = { readonly itemDropId: number; readonly owner: number };

export declare const parse: (_1:NodeJs_Buffer_t) => (undefined | t);

export declare const toBuffer: (_1:t) => NodeJs_Buffer_t;
