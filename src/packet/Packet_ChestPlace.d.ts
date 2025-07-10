/* TypeScript file generated from Packet_ChestPlace.resi by genType. */

/* eslint-disable */
/* tslint:disable */

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

export declare const Action_toInt: (_1:Action_t) => number;

export declare const Action_fromInt: (_1:number) => (undefined | Action_t);

export declare const Action_toString: (_1:Action_t) => string;

export declare const parse: (_1:NodeJs_Buffer_t) => (undefined | t);

export declare const toBuffer: (_1:t) => NodeJs_Buffer_t;

export declare const Action: {
  toInt: (_1:Action_t) => number; 
  toString: (_1:Action_t) => string; 
  fromInt: (_1:number) => (undefined | Action_t)
};
