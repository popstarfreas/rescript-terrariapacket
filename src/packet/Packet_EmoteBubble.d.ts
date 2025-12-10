import type { readError } from "../ErrorAwarePacketReader.js";
import type { PackError } from "../ErrorAwarePacketWriter.js";
/* TypeScript file generated from Packet_EmoteBubble.res by genType. */

/* eslint-disable */
/* tslint:disable */

export type anchor =
  | "Remove"
  | {
      TAG: "Anchor";
      _0: {
        readonly anchorType: number;
        readonly anchorMeta: number;
        readonly time: number;
        readonly emote: number;
        readonly metadata: number | undefined
      }
    };

export type t = { readonly id: number; readonly anchor: anchor };

export type parseOk = { TAG: "Ok"; _0: t };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer) => parse;
export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
