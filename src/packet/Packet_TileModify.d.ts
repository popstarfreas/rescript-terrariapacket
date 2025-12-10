import type { readError } from "../ErrorAwarePacketReader.js";
import type { PackError } from "../ErrorAwarePacketWriter.js";
/* TypeScript file generated from Packet_TileModify.resi by genType. */

/* eslint-disable */
/* tslint:disable */

export type Action_t =
  "KillTile"
  | "PlaceTile"
  | "KillWall"
  | "PlaceWall"
  | "KillTileNoItem"
  | "PlaceWire"
  | "KillWire"
  | "PoundTile"
  | "PlaceActuator"
  | "KillActuator"
  | "PlaceWire2"
  | "KillWire2"
  | "PlaceWire3"
  | "KillWire3"
  | "SlopeTile"
  | "FrameTrack"
  | "PlaceWire4"
  | "KillWire4"
  | "PokeLogicGate"
  | "Actuate"
  | "KillTile2"
  | "ReplaceTile"
  | "ReplaceWall"
  | "SlopePoundTile";

export type t = {
  readonly action: Action_t;
  readonly tileX: number;
  readonly tileY: number;
  readonly value1: number;
  readonly value2: number
};

export declare const Action: { toInt: (_1: Action_t) => number; fromInt: (_1: number) => (undefined | Action_t) };

export type parseOk = { TAG: "Ok"; _0: t };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer) => parse;
export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
