import type { readError } from "../ErrorAwarePacketReader";
import type { PackError } from "../ErrorAwarePacketWriter";
/* TypeScript file generated from Packet_DimensionsUpdate.resi by genType. */

/* eslint-disable */
/* tslint:disable */

export type ip = string;

export type dimensionName = string;

export type port = number;

export type t =
  | "GamemodesJoinMode"
  | { TAG: "RealIpAddress"; _0: ip }
  | { TAG: "SwitchServer"; _0: dimensionName }
  | { TAG: "SwitchServerManual"; _0: ip; _1: port };

export type UpdateType_t =
  | "RealIpAddress"
  | "GamemodesJoinMode"
  | "SwitchServer"
  | "SwitchServerManual";

export declare const UpdateType: {
  toInt: (_1: UpdateType_t) => number;
  fromInt: (_1: number) => UpdateType_t | undefined
};

export type parseOk = { TAG: "Ok"; _0: t };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer) => parse;
export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
