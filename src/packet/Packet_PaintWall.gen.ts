/* TypeScript file generated from Packet_PaintWall.resi by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
const Packet_PaintWallBS = require('./Packet_PaintWall.bs');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

// tslint:disable-next-line:interface-over-type-literal
export type t = {
  readonly x: number; 
  readonly y: number; 
  readonly color: number
};

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = Packet_PaintWallBS.parse;

export const toBuffer: (_1:t) => NodeJs_Buffer_t = Packet_PaintWallBS.toBuffer;
