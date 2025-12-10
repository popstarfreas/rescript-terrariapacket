/* TypeScript file generated from Packet_PlayerDamage.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import type { t as PlayerDeathReason_t } from '../../src/PlayerDeathReason.js';
import type { readError } from "../ErrorAwarePacketReader.js";
import type { PackError } from "../ErrorAwarePacketWriter.js";

export type t = {
  readonly target: number;
  readonly deathReason: PlayerDeathReason_t;
  readonly damage: number;
  readonly hitDirection: number;
  readonly critical: boolean;
  readonly pvp: boolean;
  readonly cooldownCounter: number
};

export type parseOk = { TAG: "Ok"; _0: t };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer) => parse;
export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
