import type { readError } from "../ErrorAwarePacketReader";
import type { PackError } from "../ErrorAwarePacketWriter";
/* TypeScript file generated from Packet_ItemDropModify.res by genType. */

/* eslint-disable */
/* tslint:disable */

export type color = {
  readonly r: number;
  readonly g: number;
  readonly b: number;
  readonly a: number
};

export type t = {
  readonly itemId: number;
  readonly color: color | undefined;
  readonly damage: number | undefined;
  readonly knockback: number | undefined;
  readonly useAnimation: number | undefined;
  readonly useTime: number | undefined;
  readonly shoot: number | undefined;
  readonly shootSpeed: number | undefined;
  readonly width: number | undefined;
  readonly height: number | undefined;
  readonly scale: number | undefined;
  readonly ammo: number | undefined;
  readonly useAmmo: number | undefined;
  readonly notAmmo: boolean | undefined
};

export type parseOk = { TAG: "Ok"; _0: t };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer) => parse;
export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
