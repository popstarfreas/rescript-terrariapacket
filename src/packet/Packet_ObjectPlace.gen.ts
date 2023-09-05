/* TypeScript file generated from Packet_ObjectPlace.resi by genType. */
/* eslint-disable import/first */


const $$toJS835251090: { [key: string]: any } = {"0": "Left", "1": "Right"};

const $$toRE835251090: { [key: string]: any } = {"Left": 0, "Right": 1};

// @ts-ignore: Implicit any on import
const Packet_ObjectPlaceBS = require('./Packet_ObjectPlace.bs');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

// tslint:disable-next-line:interface-over-type-literal
export type direction = "Left" | "Right";

// tslint:disable-next-line:interface-over-type-literal
export type t = {
  readonly x: number; 
  readonly y: number; 
  readonly objectType: number; 
  readonly style: number; 
  readonly alternate: number; 
  readonly random: number; 
  readonly direction: direction
};

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = function (Arg1: any) {
  const result = Packet_ObjectPlaceBS.parse(Arg1);
  return (result == null ? result : {x:result.x, y:result.y, objectType:result.objectType, style:result.style, alternate:result.alternate, random:result.random, direction:$$toJS835251090[result.direction]})
};

export const toBuffer: (_1:t) => NodeJs_Buffer_t = function (Arg1: any) {
  const result = Packet_ObjectPlaceBS.toBuffer({x:Arg1.x, y:Arg1.y, objectType:Arg1.objectType, style:Arg1.style, alternate:Arg1.alternate, random:Arg1.random, direction:$$toRE835251090[Arg1.direction]});
  return result
};
