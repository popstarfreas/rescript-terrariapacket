/* TypeScript file generated from PacketV1456_PlayerSpawn.res by genType. */

/* eslint-disable */
/* tslint:disable */

import type { readError } from "../ErrorAwarePacketReader.js";
import type { PackError } from "../ErrorAwarePacketWriter.js";

export type context =
  | "ReviveFromDeath"
  | "SpawningIntoWorld"
  | "RecallFromItem"
  | "TeamSwap"
  | { TAG: "Unknown"; _0: number };

export type t = {
  readonly playerId: number;
  readonly x: number;
  readonly y: number;
  readonly timeRemaining: number;
  readonly numberOfDeathsPve: number;
  readonly numberOfDeathsPvp: number;
  readonly team: number;
  readonly context: context;
};

export type parseOk = { TAG: "Ok"; _0: t };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer) => parse;
export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
