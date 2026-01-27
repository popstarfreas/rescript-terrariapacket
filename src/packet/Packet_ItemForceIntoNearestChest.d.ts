/* TypeScript file generated from Packet_ItemForceIntoNearestChest.res by genType. */

/* eslint-disable */
/* tslint:disable */

import type { readError } from "../ErrorAwarePacketReader.js";
import type { PackError } from "../ErrorAwarePacketWriter.js";

export type clientRequest = {
  readonly slotIds: number[];
  readonly smartStack: boolean;
};

export type serverBlockedChests = { readonly chestIds: number[] };

export type t =
  | { TAG: "ClientRequest"; _0: clientRequest }
  | { TAG: "ServerBlockedChests"; _0: serverBlockedChests };

export type parseOk = { TAG: "Ok"; _0: t };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer, _2: boolean) => parse;
export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
