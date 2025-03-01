/* TypeScript file generated from Packet_ItemDropUpdate.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import * as Packet_ItemDropUpdateJS from './Packet_ItemDropUpdate.mjs'

import type { Buffer_t as NodeJs_Buffer_t } from '../../src/shims/NodeJs.shim.mts';

export type t = {
  readonly itemDropId: number;
  readonly x: number;
  readonly y: number;
  readonly vx: number;
  readonly vy: number;
  readonly stack: number;
  readonly prefix: number;
  readonly noDelay: number;
  readonly itemId: number
};

export const parse: (_1: NodeJs_Buffer_t) => (undefined | t) = Packet_ItemDropUpdateJS.parse as any;

export const toBuffer: (_1: t) => NodeJs_Buffer_t = Packet_ItemDropUpdateJS.toBuffer as any;
