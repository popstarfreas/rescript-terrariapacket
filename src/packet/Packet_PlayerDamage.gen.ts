/* TypeScript file generated from Packet_PlayerDamage.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import * as Packet_PlayerDamageJS from './Packet_PlayerDamage.mjs'

import type { Buffer_t as NodeJs_Buffer_t } from '../../src/shims/NodeJs.shim.mts';

import type { t as PlayerDeathReason_t } from '../../src/PlayerDeathReason.gen.ts';

export type t = {
  readonly target: number;
  readonly deathReason: PlayerDeathReason_t;
  readonly damage: number;
  readonly hitDirection: number;
  readonly critical: boolean;
  readonly pvp: boolean;
  readonly cooldownCounter: number
};

export const parse: (_1: NodeJs_Buffer_t) => (undefined | t) = Packet_PlayerDamageJS.parse as any;

export const toBuffer: (_1: t) => NodeJs_Buffer_t = Packet_PlayerDamageJS.toBuffer as any;
