/* TypeScript file generated from Packet_TileSquareSend.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import type { PackError } from "../ErrorAwarePacketWriter";
import type { readError } from "../ErrorAwarePacketReader";

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

export type parseOk = { TAG: "Ok"; _0: (undefined | t) };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer) => parse;

export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
