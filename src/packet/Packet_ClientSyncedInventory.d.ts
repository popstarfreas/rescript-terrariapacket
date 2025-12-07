import type { readError } from "../ErrorAwarePacketReader";
/* TypeScript file generated from Packet_ClientSyncedInventory.res by genType. */

/* eslint-disable */
/* tslint:disable */

export type t = void;

export type parseOk = { TAG: "Ok"; _0: t };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer) => parse;
