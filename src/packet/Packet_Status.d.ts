/* TypeScript file generated from Packet_Status.resi by genType. */

import NetworkText from "@popstarfreas/packetfactory/networktext";
import type { readError } from "../ErrorAwarePacketReader.js";
import type { PackError } from "../ErrorAwarePacketWriter.js";

/* eslint-disable */
/* tslint:disable */

export type flags = {
  readonly hideStatusTextPercent: boolean;
  readonly statusTextHasShadows: boolean;
  readonly runCheckBytes: boolean
};

export type t = {
  readonly max: number;
  readonly text: NetworkText;
  readonly flags: flags
};

export type parseOk = { TAG: "Ok"; _0: t };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer) => parse;
export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
