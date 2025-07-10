/* TypeScript file generated from Packet_ObjectPlace.resi by genType. */

/* eslint-disable */
/* tslint:disable */

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

export declare const parse: (_1: Buffer) => (undefined | t);

export declare const toBuffer: (_1: t) => Buffer;
