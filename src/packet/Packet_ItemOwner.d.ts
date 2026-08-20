/* TypeScript file generated from Packet_ItemOwner.res by genType. */

/* eslint-disable */
/* tslint:disable */

import type { readError } from "../ErrorAwarePacketReader.js";
import type { PackError } from "../ErrorAwarePacketWriter.js";
import type { Float_t as Point_Float_t } from "../Point.js";

export type t = {
  readonly itemDropId: number;
  readonly owner: number;
  readonly timeToKeepReservation: number;
  readonly grabDelayPlayer: number;
  readonly grabDelayTime: number;
  readonly position: Point_Float_t;
};

export type parseOk = { TAG: "Ok"; _0: t };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer) => parse;
export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
