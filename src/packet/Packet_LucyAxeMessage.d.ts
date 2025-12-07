/* TypeScript file generated from Packet_LucyAxeMessage.res by genType. */

/* eslint-disable */
/* tslint:disable */

import type {t as Point_t} from '../../src/Point';
import type { readError } from "../ErrorAwarePacketReader";
import type { PackError } from "../ErrorAwarePacketWriter";

export type t = {
  readonly source: number; 
  readonly variant: number; 
  readonly velocity: Point_t<number>; 
  readonly position: Point_t<number>
};

export type parseOk = { TAG: "Ok"; _0: t };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer) => parse;
export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
