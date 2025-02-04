/* TypeScript file generated from Packet_PlayerHealth.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import * as Packet_PlayerHealthJS from './Packet_PlayerHealth.mjs'

import type { Buffer_t as NodeJs_Buffer_t } from '../../src/shims/NodeJs.shim.mts';

export type t = {
  readonly playerId: number;
  readonly health: number;
  readonly maxHealth: number
};

export const parse: (_1: NodeJs_Buffer_t) => (undefined | t) = Packet_PlayerHealthJS.parse as any;

export const toBuffer: (_1: t) => NodeJs_Buffer_t = Packet_PlayerHealthJS.toBuffer as any;
