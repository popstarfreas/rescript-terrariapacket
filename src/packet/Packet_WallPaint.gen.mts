/* TypeScript file generated from Packet_WallPaint.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import * as Packet_WallPaintJS from './Packet_WallPaint.mjs'

import type { Buffer_t as NodeJs_Buffer_t } from '../../src/shims/NodeJs.shim.mts';

export type t = {
  readonly x: number;
  readonly y: number;
  readonly color: number;
  readonly coat: number
};

export const parse: (_1: NodeJs_Buffer_t) => (undefined | t) = Packet_WallPaintJS.parse as any;

export const toBuffer: (_1: t) => NodeJs_Buffer_t = Packet_WallPaintJS.toBuffer as any;
