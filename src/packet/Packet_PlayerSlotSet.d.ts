/// <reference types="node" />
import { Buffer } from "buffer";

export type t = number;

export declare function parse(payload: Buffer): t;
export declare function toBuffer(self: t): Buffer;
