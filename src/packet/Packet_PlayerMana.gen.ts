/* TypeScript file generated from Packet_PlayerMana.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import * as Packet_PlayerManaJS from './Packet_PlayerMana.mjs'

import type { Buffer_t as NodeJs_Buffer_t } from '../../src/shims/NodeJs.shim.mts';

export type t = {
  readonly playerId: number;
  readonly mana: number;
  readonly maxMana: number
};

export const parse: (_1: NodeJs_Buffer_t) => (undefined | t) = Packet_PlayerManaJS.parse as any;

export const toBuffer: (_1: t) => NodeJs_Buffer_t = Packet_PlayerManaJS.toBuffer as any;
