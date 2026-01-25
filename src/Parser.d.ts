/* eslint-disable */
/* tslint:disable */

import type { LazyPacket_t as Packet_LazyPacket_t } from './Packet.js';

import type { parseLazy as IParser_parseLazy } from './IParser.js';

import type { parse as IParser_parse } from './IParser.js';

import type { parseError as IParser_parseError } from './IParser.js';

import type { t as Packet_t } from './Packet.js';

export type convertIfNeeded =
  | { TAG: "PacketStructureIsSame" }
  | { TAG: "ConvertedToLatestVersion"; _0: Packet_t };

export type convertIfNeededResult =
  | { TAG: "Ok"; _0: convertIfNeeded }
  | { TAG: "Error"; _0: IParser_parseError };

export const parse: IParser_parse<Packet_t>

export const parseLazy: IParser_parseLazy<Packet_LazyPacket_t>

export const convertv1449IfNeeded: (buffer: Buffer, fromServer: boolean) => convertIfNeededResult
