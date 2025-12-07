import type { readError } from "../ErrorAwarePacketReader";
/* Minimal types for unused packet */

export type t = undefined;

export type parseOk = { TAG: "Ok"; _0: t };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer) => parse;
