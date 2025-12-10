/* TypeScript file generated from Packet_CombatTextCreate.res by genType. */

import type { PackError } from "../ErrorAwarePacketWriter.js";
import type { readError } from "../ErrorAwarePacketReader.js";
import Color from "@popstarfreas/packetfactory/color";
import type NetworkText from "@popstarfreas/packetfactory/networktext";

/* eslint-disable */
/* tslint:disable */

export type t = {
  readonly x: number;
  readonly y: number;
  readonly color: Color;
  readonly text: NetworkText
};

export type parseOk = { TAG: "Ok"; _0: t };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer) => parse;
export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
