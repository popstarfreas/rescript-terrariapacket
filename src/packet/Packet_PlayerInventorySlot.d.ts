/// <reference types="node" />
import { Buffer } from "buffer";

export type t = {
  readonly playerId: number;
  readonly slot: number;
  readonly stack: number;
  readonly prefix: number;
  readonly itemId: number;
};

export function parse(payload: Buffer): t;
export function toBuffer(self: t): Buffer;
