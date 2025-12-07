import type { readError } from "../ErrorAwarePacketReader";
import type { PackError } from "../ErrorAwarePacketWriter";
/* TypeScript file generated from Packet_Teleport.res by genType. */

/* eslint-disable */
/* tslint:disable */

export type teleportType = "Player" | "Npc" | "PlayerToPlayer";

export type t = {
  readonly teleportType: teleportType; 
  readonly getPositionFromTarget: boolean; 
  readonly targetId: number; 
  readonly x: number; 
  readonly y: number; 
  readonly style: number; 
  readonly extraInfo: (undefined | number)
};

export type parseOk = { TAG: "Ok"; _0: t };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer) => parse;
export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
