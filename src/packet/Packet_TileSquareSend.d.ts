/* TypeScript file generated from Packet_TileSquareSend.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

export type frame = { readonly x: number; readonly y: number };

export type activeTile = {
  readonly tileType: number; 
  readonly slope: number; 
  readonly frame: (undefined | frame)
};

export type liquid = { readonly liquidValue: number; readonly liquidType: number };

export type tile = {
  readonly wire: boolean; 
  readonly halfBrick: boolean; 
  readonly actuator: boolean; 
  readonly inActive: boolean; 
  readonly wire2: boolean; 
  readonly wire3: boolean; 
  readonly wire4: boolean; 
  readonly color: (undefined | number); 
  readonly wallColor: (undefined | number); 
  readonly activeTile: (undefined | activeTile); 
  readonly wall: (undefined | number); 
  readonly liquid: (undefined | liquid); 
  readonly coatHeader: number
};

export type t = {
  readonly width: number; 
  readonly height: number; 
  readonly changeType: number; 
  readonly tileX: number; 
  readonly tileY: number; 
  readonly tiles: Array<tile[]>
};

export declare const parse: (_1:NodeJs_Buffer_t) => (undefined | t);

export declare const toBuffer: (_1:t) => NodeJs_Buffer_t;
