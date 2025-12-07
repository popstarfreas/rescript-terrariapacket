import type NetworkText from "@popstarfreas/packetfactory/networktext";
import type { readError } from "../ErrorAwarePacketReader";
import type { PackError } from "../ErrorAwarePacketWriter";

export type t = {
  readonly reason: NetworkText;
};

export type parseOk = { TAG: "Ok"; _0: t };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer) => parse;
export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
