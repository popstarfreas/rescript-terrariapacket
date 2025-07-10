/* TypeScript file generated from Packet_ObjectPlace.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

export type direction = "Left" | "Right";

export type t = {
  readonly x: number; 
  readonly y: number; 
  readonly objectType: number; 
  readonly style: number; 
  readonly alternate: number; 
  readonly random: number; 
  readonly direction: direction
};

export declare const parse: (_1:NodeJs_Buffer_t) => (undefined | t);

export declare const toBuffer: (_1:t) => NodeJs_Buffer_t;
