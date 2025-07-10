/* TypeScript file generated from Packet_PlayerDamage.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import type { t as PlayerDeathReason_t } from '../../src/PlayerDeathReason';

export type t = {
  readonly target: number;
  readonly deathReason: PlayerDeathReason_t;
  readonly damage: number;
  readonly hitDirection: number;
  readonly critical: boolean;
  readonly pvp: boolean;
  readonly cooldownCounter: number
};

export declare const parse: (_1: Buffer) => (undefined | t);

export declare const toBuffer: (_1: t) => Buffer;
