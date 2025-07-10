/* TypeScript file generated from Packet_TileModify.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

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

export declare const Action_fromInt: (_1:number) => (undefined | Action_t);

export declare const Action_toInt: (_1:Action_t) => number;

export declare const parse: (_1:NodeJs_Buffer_t) => (undefined | t);

export declare const toBuffer: (_1:t) => NodeJs_Buffer_t;

export declare const Action: { toInt: (_1:Action_t) => number; fromInt: (_1:number) => (undefined | Action_t) };
