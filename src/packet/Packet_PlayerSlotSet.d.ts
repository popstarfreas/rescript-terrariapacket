/// <reference types="node" />
export type t = number;

export declare function parse(payload: Buffer): t;
export declare function toBuffer(self: t): Buffer;
