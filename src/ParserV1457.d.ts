/* eslint-disable */
/* tslint:disable */

import type { parseResult } from './IParser.js';
import type { LazyPacket_t, t } from './PacketV1457.js';
import type { t as PacketTypeV1457 } from './PacketTypeV1457.js';

export declare const parse: (
  buffer: Buffer,
  fromServer: boolean,
  ignore?: PacketTypeV1457[],
) => parseResult<t>;

export declare const parseLazy: (
  buffer: Buffer,
  fromServer: boolean,
) => parseResult<LazyPacket_t>;
