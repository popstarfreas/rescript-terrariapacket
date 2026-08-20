import type { parseError } from "./IParser.js";
import type { t as Packet } from "./Packet.js";
import type { t as PacketV1456 } from "./PacketV1456.js";

export type toLatestIfNeeded =
  | "PacketStructureIsSame"
  | { TAG: "ConvertedToLatest"; _0: Packet }
  | "DiscardAsNotExists";

export type fromLatestIfNeeded =
  | "PacketStructureIsSame"
  | { TAG: "ConvertedFromLatest"; _0: PacketV1456 }
  | "DiscardAsNotExists";

export type result<a> = { TAG: "Ok"; _0: a } | { TAG: "Error"; _0: parseError };

export declare const convertToLatestIfNeeded: (
  buffer: Buffer,
  fromServer: boolean,
) => result<toLatestIfNeeded>;

export declare const convertFromLatestIfNeeded: (
  buffer: Buffer,
  fromServer: boolean,
) => result<fromLatestIfNeeded>;
