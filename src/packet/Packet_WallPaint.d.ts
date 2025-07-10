/* TypeScript file generated from Packet_WallPaint.resi by genType. */

/* eslint-disable */
/* tslint:disable */

export type t = {
  readonly x: number;
  readonly y: number;
  readonly color: number;
  readonly coat: number
};

export const parse: (_1: Buffer) => (undefined | t)

export const toBuffer: (_1: t) => Buffer
