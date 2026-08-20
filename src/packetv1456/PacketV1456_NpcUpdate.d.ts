/* TypeScript file generated from PacketV1456_NpcUpdate.res by genType. */

/* eslint-disable */
/* tslint:disable */

import type { readError } from "../ErrorAwarePacketReader.js";
import type { PackError } from "../ErrorAwarePacketWriter.js";

export type ai = [(undefined | number), (undefined | number), (undefined | number), (undefined | number)];

export type life =
  | "Max"
  | { TAG: "Byte"; _0: number }
  | { TAG: "Int16"; _0: number }
  | { TAG: "Int32"; _0: number };

export type t = {
  readonly npcSlotId: number;
  readonly npcTypeId: number;
  readonly x: number;
  readonly y: number;
  readonly vx: number;
  readonly vy: number;
  readonly target: number;
  readonly directionX: boolean;
  readonly directionY: boolean;
  readonly ai: ai;
  readonly spriteDirection: boolean;
  readonly life: life;
  readonly releaseOwner: (undefined | number);
  readonly playerCountScale: (undefined | number);
  readonly difficulty: (undefined | number);
  readonly spawnedFromStatue: boolean;
  readonly spawnNeedsSyncing: boolean;
  readonly shimmerTransparency: boolean;
};

export type parseOk = { TAG: "Ok"; _0: t };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer) => parse;
export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
