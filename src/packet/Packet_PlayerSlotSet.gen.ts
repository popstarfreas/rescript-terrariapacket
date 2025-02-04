/* TypeScript file generated from Packet_PlayerSlotSet.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import * as Packet_PlayerSlotSetJS from './Packet_PlayerSlotSet.mjs'

import type { Buffer_t as NodeJs_Buffer_t } from '../../src/shims/NodeJs.shim.mts';

export type t = number;

export const parse: (_1: NodeJs_Buffer_t) => (undefined | t) = Packet_PlayerSlotSetJS.parse as any;

export const toBuffer: (_1: t) => NodeJs_Buffer_t = Packet_PlayerSlotSetJS.toBuffer as any;
