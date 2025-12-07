/* TypeScript file generated from Packet_PlayerDeath.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import type { t as PlayerDeathReason_t } from '../../src/PlayerDeathReason';
import type { readError } from "../ErrorAwarePacketReader";
import type { PackError } from "../ErrorAwarePacketWriter";

export type t = {
  readonly playerId: number;
  readonly deathReason: PlayerDeathReason_t;
  readonly damage: number;
  readonly hitDirection: number;
  readonly pvp: boolean
};

export type parseOk = { TAG: "Ok"; _0: t };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer) => parse;
export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
