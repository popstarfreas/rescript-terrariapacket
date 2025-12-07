import type { readError } from "../ErrorAwarePacketReader";
import type { PackError } from "../ErrorAwarePacketWriter";
/* TypeScript file generated from Packet_DoorUse.res by genType. */

/* eslint-disable */
/* tslint:disable */

export type action =
  | "OpenDoor"
  | "CloseDoor"
  | "ShiftTrapdoorOpen"
  | "ShiftTrapdoorClose"
  | "ShiftTallGateOpen"
  | "ShiftTallGateClose";

export type t = {
  readonly action: action;
  readonly x: number;
  readonly y: number;
  readonly direction: number
};

export declare const actionToInt: (_1: action) => number;
export declare const actionFromInt: (_1: number) => action | undefined;

export declare const Decode: {
  readByte: typeof import("../ErrorAwarePacketReader").readByte;
  readInt16: typeof import("../ErrorAwarePacketReader").readInt16;
  parse: (_1: Buffer) => parse
};

export declare const Encode: {
  packByte: typeof import("../ErrorAwarePacketWriter").packByte;
  packInt16: typeof import("../ErrorAwarePacketWriter").packInt16;
  setType: typeof import("../ErrorAwarePacketWriter").setType;
  data: typeof import("../ErrorAwarePacketWriter").data;
  toBuffer: (_1: t) => toBuffer
};

export type parseOk = { TAG: "Ok"; _0: t };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer) => parse;
export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
