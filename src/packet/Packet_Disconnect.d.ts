import type { Buffer } from "buffer";
import type NetworkText from "@popstarfreas/packetfactory/networktext";

export type t = {
  readonly reason: NetworkText;
};

export declare function parse(payload: Buffer): t | undefined;
export declare function toBuffer(self: t): Buffer;
