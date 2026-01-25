import type { readError } from "../ErrorAwarePacketReader.js";
import type { PackError } from "../ErrorAwarePacketWriter.js";
/* TypeScript file generated from Packet_Zones.res by genType. */

/* eslint-disable */
/* tslint:disable */

export type t = {
  readonly playerId: number;
  readonly zone1: number;
  readonly zone2: number;
  readonly zone3: number;
  readonly zone4: number;
  readonly zone5: number
};

export type parseOk = { TAG: "Ok"; _0: t };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer) => parse;
export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
