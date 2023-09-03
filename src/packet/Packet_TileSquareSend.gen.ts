/* TypeScript file generated from Packet_TileSquareSend.resi by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
const Packet_TileSquareSendBS = require('./Packet_TileSquareSend.bs');

import type {Buffer_t as NodeJs_Buffer_t} from '@popstarfreas/rescript-nodejs/NodeJs.gen';

// tslint:disable-next-line:interface-over-type-literal
export type frame = { readonly x: number; readonly y: number };

// tslint:disable-next-line:interface-over-type-literal
export type activeTile = {
  readonly tileType: number; 
  readonly slope: number; 
  readonly frame: (undefined | frame)
};

// tslint:disable-next-line:interface-over-type-literal
export type liquid = { readonly liquidValue: number; readonly liquidType: number };

// tslint:disable-next-line:interface-over-type-literal
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
  readonly liquid: (undefined | liquid)
};

// tslint:disable-next-line:interface-over-type-literal
export type t = {
  readonly width: number; 
  readonly height: number; 
  readonly changeType: number; 
  readonly tileX: number; 
  readonly tileY: number; 
  readonly tiles: Array<tile[]>
};

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = Packet_TileSquareSendBS.parse;

export const toBuffer: (_1:t) => NodeJs_Buffer_t = Packet_TileSquareSendBS.toBuffer;
