/* TypeScript file generated from Packet_PlayerBuffsSet.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import * as Packet_PlayerBuffsSetJS from './Packet_PlayerBuffsSet.mjs'

import type { Buffer_t as NodeJs_Buffer_t } from '../../src/shims/NodeJs.shim.mts';

export type t = { readonly playerId: number; readonly buffs: number[] };

export const parse: (_1: NodeJs_Buffer_t) => (undefined | t) = Packet_PlayerBuffsSetJS.parse as any;

export const toBuffer: (_1: t) => NodeJs_Buffer_t = Packet_PlayerBuffsSetJS.toBuffer as any;
