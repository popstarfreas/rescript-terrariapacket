import type { readError } from "../ErrorAwarePacketReader.js";
import type { PackError } from "../ErrorAwarePacketWriter.js";
import type { t as ProjectileKey } from "../ProjectileKey.js";

export type TrackedProjectileReference_t = {
  readonly projectileKey: ProjectileKey;
  readonly projectileType: number;
};

export type t = {
  readonly playerId: number;
  readonly piggyBankProj: TrackedProjectileReference_t;
  readonly voidLensChest: TrackedProjectileReference_t;
};

export type parse = { TAG: "Ok"; _0: t } | { TAG: "Error"; _0: readError };
export declare const parse: (_1: Buffer) => parse;
export type toBuffer = { TAG: "Ok"; _0: Buffer } | { TAG: "Error"; _0: PackError };
export declare const toBuffer: (_1: t) => toBuffer;
