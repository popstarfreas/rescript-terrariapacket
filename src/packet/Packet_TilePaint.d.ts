/* TypeScript file generated from Packet_TilePaint.resi by genType. */

/* eslint-disable */
/* tslint:disable */

export type t = {
  readonly x: number;
  readonly y: number;
  readonly color: number;
  readonly coat: number
};

export declare const parse: (_1: Buffer) => (undefined | t);

export declare const toBuffer: (_1: t) => Buffer;
