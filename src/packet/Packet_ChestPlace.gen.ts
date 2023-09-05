/* TypeScript file generated from Packet_ChestPlace.resi by genType. */
/* eslint-disable import/first */


const $$toJS1010518829: { [key: string]: any } = {"0": "PlaceChest", "1": "KillChest", "2": "PlaceDresser", "3": "KillDresser", "4": "PlaceContainer", "5": "KillContainer"};

const $$toRE1010518829: { [key: string]: any } = {"PlaceChest": 0, "KillChest": 1, "PlaceDresser": 2, "KillDresser": 3, "PlaceContainer": 4, "KillContainer": 5};

// @ts-ignore: Implicit any on import
const Packet_ChestPlaceBS = require('./Packet_ChestPlace.bs');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

// tslint:disable-next-line:interface-over-type-literal
export type Action_t = 
    "PlaceChest"
  | "KillChest"
  | "PlaceDresser"
  | "KillDresser"
  | "PlaceContainer"
  | "KillContainer";

// tslint:disable-next-line:interface-over-type-literal
export type t = {
  readonly action: Action_t; 
  readonly x: number; 
  readonly y: number; 
  readonly style: number; 
  readonly id: number
};

export const Action_toInt: (_1:Action_t) => number = function (Arg1: any) {
  const result = Packet_ChestPlaceBS.Action.toInt($$toRE1010518829[Arg1]);
  return result
};

export const Action_fromInt: (_1:number) => (undefined | Action_t) = function (Arg1: any) {
  const result = Packet_ChestPlaceBS.Action.fromInt(Arg1);
  return (result == null ? result : $$toJS1010518829[result])
};

export const Action_toString: (_1:Action_t) => string = function (Arg1: any) {
  const result = Packet_ChestPlaceBS.Action.toString($$toRE1010518829[Arg1]);
  return result
};

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = function (Arg1: any) {
  const result = Packet_ChestPlaceBS.parse(Arg1);
  return (result == null ? result : {action:$$toJS1010518829[result.action], x:result.x, y:result.y, style:result.style, id:result.id})
};

export const toBuffer: (_1:t) => NodeJs_Buffer_t = function (Arg1: any) {
  const result = Packet_ChestPlaceBS.toBuffer({action:$$toRE1010518829[Arg1.action], x:Arg1.x, y:Arg1.y, style:Arg1.style, id:Arg1.id});
  return result
};
