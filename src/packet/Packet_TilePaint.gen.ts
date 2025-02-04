/* TypeScript file generated from Packet_TilePaint.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import * as Packet_TilePaintJS from './Packet_TilePaint.mjs'

import type { Buffer_t as NodeJs_Buffer_t } from '../../src/shims/NodeJs.shim.mts';

export type t = {
  readonly x: number;
  readonly y: number;
  readonly color: number;
  readonly coat: number
};

export const parse: (_1: NodeJs_Buffer_t) => (undefined | t) = Packet_TilePaintJS.parse as any;

export const toBuffer: (_1: t) => NodeJs_Buffer_t = Packet_TilePaintJS.toBuffer as any;
