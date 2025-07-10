/* TypeScript file generated from Packet_TileModify.resi by genType. */

/* eslint-disable */
/* tslint:disable */

const Packet_TileModifyJS = require('./Packet_TileModify.js');

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

export const Action_fromInt: (_1:number) => (undefined | Action_t) = Packet_TileModifyJS.Action.fromInt as any;

export const Action_toInt: (_1:Action_t) => number = Packet_TileModifyJS.Action.toInt as any;

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = Packet_TileModifyJS.parse as any;

export const toBuffer: (_1:t) => NodeJs_Buffer_t = Packet_TileModifyJS.toBuffer as any;

export const Action: { toInt: (_1:Action_t) => number; fromInt: (_1:number) => (undefined | Action_t) } = Packet_TileModifyJS.Action as any;
