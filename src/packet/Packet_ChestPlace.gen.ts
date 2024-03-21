/* TypeScript file generated from Packet_ChestPlace.resi by genType. */

/* eslint-disable */
/* tslint:disable */

const Packet_ChestPlaceJS = require('./Packet_ChestPlace.bs.js');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

export type Action_t = 
    "PlaceChest"
  | "KillChest"
  | "PlaceDresser"
  | "KillDresser"
  | "PlaceContainer"
  | "KillContainer";

export type t = {
  readonly action: Action_t; 
  readonly x: number; 
  readonly y: number; 
  readonly style: number; 
  readonly id: number
};

export const Action_toInt: (_1:Action_t) => number = Packet_ChestPlaceJS.Action.toInt as any;

export const Action_fromInt: (_1:number) => (undefined | Action_t) = Packet_ChestPlaceJS.Action.fromInt as any;

export const Action_toString: (_1:Action_t) => string = Packet_ChestPlaceJS.Action.toString as any;

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = Packet_ChestPlaceJS.parse as any;

export const toBuffer: (_1:t) => NodeJs_Buffer_t = Packet_ChestPlaceJS.toBuffer as any;

export const Action: {
  toInt: (_1:Action_t) => number; 
  toString: (_1:Action_t) => string; 
  fromInt: (_1:number) => (undefined | Action_t)
} = Packet_ChestPlaceJS.Action as any;
