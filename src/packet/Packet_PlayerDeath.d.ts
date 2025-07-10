/* TypeScript file generated from Packet_PlayerDeath.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import type { t as PlayerDeathReason_t } from '../../src/PlayerDeathReason';

export type t = {
  readonly playerId: number;
  readonly deathReason: PlayerDeathReason_t;
  readonly damage: number;
  readonly hitDirection: number;
  readonly pvp: boolean
};

export declare const parse: (_1: Buffer) => (undefined | t);

export declare const toBuffer: (_1: t) => Buffer;
