/* TypeScript file generated from Packet_TileEntityDisplayDollItemSync.res by genType. */

/* eslint-disable */
/* tslint:disable */

import type { readError } from "../ErrorAwarePacketReader.js";
import type { PackError } from "../ErrorAwarePacketWriter.js";

export type command =
  | "Equip"
  | "Dye"
  | "Pose"
  | "Misc";

export type itemData = {
  readonly itemId: number;
  readonly stack: number;
  readonly prefix: number;
};

export type data =
  | { TAG: "Item"; _0: itemData }
  | { TAG: "PoseValue"; _0: number };

export type t = {
  readonly playerId: number;
  readonly tileEntityId: number;
  readonly itemIndex: number;
  readonly command: command;
  readonly data: data;
};

export type parseOk = { TAG: "Ok"; _0: t };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer) => parse;
export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
