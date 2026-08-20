import type { readError } from "../ErrorAwarePacketReader.js";
import type { PackError } from "../ErrorAwarePacketWriter.js";

export type PlatformId_t =
  | "None"
  | "Stadia"
  | "XBO"
  | "PSN"
  | "Editor"
  | "Nintendo"
  | "Steam"
  | "GameCenter";
export type t = { readonly playerId: number; readonly platformId: PlatformId_t };
export type parse = { TAG: "Ok"; _0: t } | { TAG: "Error"; _0: readError };
export declare const parse: (_1: Buffer) => parse;
export type toBuffer = { TAG: "Ok"; _0: Buffer } | { TAG: "Error"; _0: PackError };
export declare const toBuffer: (_1: t) => toBuffer;
