import type { readError } from "../ErrorAwarePacketReader";
import type { PackError } from "../ErrorAwarePacketWriter";
/* TypeScript file generated from Packet_NpcTamper.res by genType. */

/* eslint-disable */
/* tslint:disable */

export type Immunity_t = "All" | { TAG: "PlayerId"; _0: number };

export type t = {
  readonly npcId: number; 
  readonly immunityTime: (undefined | number); 
  readonly immunityFromPlayerId: (undefined | Immunity_t)
};

export type parseOk = { TAG: "Ok"; _0: t };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer) => parse;
export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
