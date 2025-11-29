/* TypeScript file generated from Packet_ProjectileSync.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import type { PackError } from "../ErrorAwarePacketWriter";
import type { readError } from "../ErrorAwarePacketReader";

export type t = {
  readonly projectileId: number;
  readonly x: number;
  readonly y: number;
  readonly vx: number;
  readonly vy: number;
  readonly owner: number;
  readonly projectileType: number;
  readonly ai: [(undefined | number), (undefined | number), (undefined | number)];
  readonly bannerIdToRespondTo: (undefined | number);
  readonly damage: (undefined | number);
  readonly knockback: (undefined | number);
  readonly originalDamage: (undefined | number);
  readonly projectileUuid: (undefined | number)
};

export type parseOk = { TAG: "Ok"; _0: (undefined | t) };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer) => parse;

export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
