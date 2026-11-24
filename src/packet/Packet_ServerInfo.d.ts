import type { readError } from "../ErrorAwarePacketReader.js";
import type { PackError } from "../ErrorAwarePacketWriter.js";

export type endpoint = { readonly address: string; readonly port: number };
export type t = "Request" | {
  TAG: "Response";
  readonly listenPort: number;
  readonly worldName: string;
  readonly hostName: string;
  readonly maxTilesX: number;
  readonly crimson: boolean;
  readonly gameMode: number;
  readonly maxPlayers: number;
  readonly activePlayers: number;
  readonly description: string;
  readonly externalEndpoint: endpoint | undefined;
};
export type parse = { TAG: "Ok"; _0: t } | { TAG: "Error"; _0: readError };
export declare const parse: (buffer: Buffer, fromServer: boolean) => parse;
export type toBuffer = { TAG: "Ok"; _0: Buffer } | { TAG: "Error"; _0: PackError };
export declare const toBuffer: (value: t, fromServer: boolean) => toBuffer;
