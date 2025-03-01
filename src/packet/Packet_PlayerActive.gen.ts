/* TypeScript file generated from Packet_PlayerActive.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import * as Packet_PlayerActiveJS from './Packet_PlayerActive.mjs'

import type { Buffer_t as NodeJs_Buffer_t } from '../../src/shims/NodeJs.shim.mts';

export type t = { readonly playerId: number; readonly active: boolean };

export const parse: (_1: NodeJs_Buffer_t) => (undefined | t) = Packet_PlayerActiveJS.parse as any;

export const toBuffer: (_1: t) => NodeJs_Buffer_t = Packet_PlayerActiveJS.toBuffer as any;
