import type { t as Packet_ItemDropUpdate } from "./Packet_ItemDropUpdate"

export type t = Packet_ItemDropUpdate;

export declare function parse(payload: Buffer): t | undefined;
export declare function toBuffer(self: t): Buffer;
