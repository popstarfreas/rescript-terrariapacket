/// <reference types="node" />
import { Buffer } from "buffer";

export type T = {
    readonly playerId: number;
    readonly slot: number;
    readonly stack: number;
    readonly prefix: number;
    readonly itemId: number;
};

export function parse(payload: Buffer): T;
export function toBuffer(self: T): Buffer;
