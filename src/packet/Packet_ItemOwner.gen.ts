/* TypeScript file generated from Packet_ItemOwner.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import Packet_ItemOwnerJS from './Packet_ItemOwner.mjs'

import type { Buffer_t as NodeJs_Buffer_t } from '../../src/shims/NodeJs.shim';

export type t = { readonly itemDropId: number; readonly owner: number };

export const parse: (_1: NodeJs_Buffer_t) => (undefined | t) = Packet_ItemOwnerJS.parse as any;

export const toBuffer: (_1: t) => NodeJs_Buffer_t = Packet_ItemOwnerJS.toBuffer as any;
