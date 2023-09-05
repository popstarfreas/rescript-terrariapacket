/* TypeScript file generated from Packet_TileModify.resi by genType. */
/* eslint-disable import/first */


const $$toJS526392060: { [key: string]: any } = {"0": "KillTile", "1": "PlaceTile", "2": "KillWall", "3": "PlaceWall", "4": "KillTileNoItem", "5": "PlaceWire", "6": "KillWire", "7": "PoundTile", "8": "PlaceActuator", "9": "KillActuator", "10": "PlaceWire2", "11": "KillWire2", "12": "PlaceWire3", "13": "KillWire3", "14": "SlopeTile", "15": "FrameTrack", "16": "PlaceWire4", "17": "KillWire4", "18": "PokeLogicGate", "19": "Actuate", "20": "KillTile2", "21": "ReplaceTile", "22": "ReplaceWall", "23": "SlopePoundTile"};

const $$toRE526392060: { [key: string]: any } = {"KillTile": 0, "PlaceTile": 1, "KillWall": 2, "PlaceWall": 3, "KillTileNoItem": 4, "PlaceWire": 5, "KillWire": 6, "PoundTile": 7, "PlaceActuator": 8, "KillActuator": 9, "PlaceWire2": 10, "KillWire2": 11, "PlaceWire3": 12, "KillWire3": 13, "SlopeTile": 14, "FrameTrack": 15, "PlaceWire4": 16, "KillWire4": 17, "PokeLogicGate": 18, "Actuate": 19, "KillTile2": 20, "ReplaceTile": 21, "ReplaceWall": 22, "SlopePoundTile": 23};

// @ts-ignore: Implicit any on import
const Packet_TileModifyBS = require('./Packet_TileModify.bs');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

// tslint:disable-next-line:interface-over-type-literal
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

// tslint:disable-next-line:interface-over-type-literal
export type t = {
  readonly action: Action_t; 
  readonly tileX: number; 
  readonly tileY: number; 
  readonly value1: number; 
  readonly value2: number
};

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = function (Arg1: any) {
  const result = Packet_TileModifyBS.parse(Arg1);
  return (result == null ? result : {action:$$toJS526392060[result.action], tileX:result.tileX, tileY:result.tileY, value1:result.value1, value2:result.value2})
};

export const toBuffer: (_1:t) => NodeJs_Buffer_t = function (Arg1: any) {
  const result = Packet_TileModifyBS.toBuffer({action:$$toRE526392060[Arg1.action], tileX:Arg1.tileX, tileY:Arg1.tileY, value1:Arg1.value1, value2:Arg1.value2});
  return result
};
