/* eslint-disable */
/* tslint:disable */

import type { parseResult } from './IParser.js';
import type { LazyPacket_t, t } from './PacketV1458.js';
import type { t as PacketTypeV1458 } from './PacketTypeV1458.js';

export declare const parse: (
  buffer: Buffer,
  fromServer: boolean,
  ignore?: PacketTypeV1458[],
) => parseResult<t>;

export declare const parseLazy: (
  buffer: Buffer,
  fromServer: boolean,
) => parseResult<LazyPacket_t>;
