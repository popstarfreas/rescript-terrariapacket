import type { readError } from "../ErrorAwarePacketReader.js";
import type { PackError } from "../ErrorAwarePacketWriter.js";

import type { t as ProjectileKey } from "../ProjectileKey.js";
export type target =
  | { TAG: "Npc" | "Player"; _0: number }
  | { TAG: "Projectile"; _0: ProjectileKey }
  | "Unanchored";
export type anchor = "Remove" | {
  TAG: "Anchor";
  readonly target: target;
  readonly time: number;
  readonly emote: number;
};
export type t = { readonly id: number; readonly anchor: anchor };
export type parse = { TAG: "Ok"; _0: t } | { TAG: "Error"; _0: readError };
export declare const parse: (_1: Buffer) => parse;
export type toBuffer = { TAG: "Ok"; _0: Buffer } | { TAG: "Error"; _0: PackError };
export declare const toBuffer: (_1: t) => toBuffer;
