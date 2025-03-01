/* TypeScript file generated from Packet_PlayerDeath.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import * as Packet_PlayerDeathJS from './Packet_PlayerDeath.mjs'

import type { Buffer_t as NodeJs_Buffer_t } from '../../src/shims/NodeJs.shim.mts';

import type { t as PlayerDeathReason_t } from '../../src/PlayerDeathReason.gen.ts';

export type t = {
  readonly playerId: number;
  readonly deathReason: PlayerDeathReason_t;
  readonly damage: number;
  readonly hitDirection: number;
  readonly pvp: boolean
};

export const parse: (_1: NodeJs_Buffer_t) => (undefined | t) = Packet_PlayerDeathJS.parse as any;

export const toBuffer: (_1: t) => NodeJs_Buffer_t = Packet_PlayerDeathJS.toBuffer as any;
