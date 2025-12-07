import type { readError } from "../ErrorAwarePacketReader";
import type { PackError } from "../ErrorAwarePacketWriter";
/* TypeScript file generated from Packet_ChestPlace.resi by genType. */

/* eslint-disable */
/* tslint:disable */

export type Action_t =
  "PlaceChest"
  | "KillChest"
  | "PlaceDresser"
  | "KillDresser"
  | "PlaceContainer"
  | "KillContainer";

export type t = {
  readonly action: Action_t;
  readonly x: number;
  readonly y: number;
  readonly style: number;
  readonly id: number
};

export declare const Action_toInt: (_1: Action_t) => number;

export declare const Action_fromInt: (_1: number) => (undefined | Action_t);

export declare const Action_toString: (_1: Action_t) => string;

export declare const Action: {
  toInt: (_1: Action_t) => number;
  toString: (_1: Action_t) => string;
  fromInt: (_1: number) => (undefined | Action_t)
};

export type parseOk = { TAG: "Ok"; _0: t };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer) => parse;
export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
