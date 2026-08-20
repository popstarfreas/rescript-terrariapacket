/* TypeScript file generated from PacketV1456_ShimmerEffectOrCoinLuck.res by genType. */

/* eslint-disable */
/* tslint:disable */

import type { readError } from "../ErrorAwarePacketReader.js";
import type { PackError } from "../ErrorAwarePacketWriter.js";
import type { t as Point_t } from "../Point.js";

export type coinLuck = {
  readonly position: Point_t<number>;
  readonly amount: number;
};

export type t =
  | { TAG: "ShimmerEffect"; _0: number; _1: number }
  | { TAG: "CoinLuck"; _0: coinLuck };

export type parseOk = { TAG: "Ok"; _0: t };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer) => parse;
export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
