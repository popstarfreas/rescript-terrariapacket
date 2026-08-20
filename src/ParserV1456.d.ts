/* eslint-disable */
/* tslint:disable */

import type { parseResult } from './IParser.js';
import type { LazyPacket_t, t } from './PacketV1456.js';
import type { t as PacketTypeV1456 } from './PacketTypeV1456.js';

export declare const parse: (
  buffer: Buffer,
  fromServer: boolean,
  ignore?: PacketTypeV1456[],
) => parseResult<t>;

export declare const parseLazy: (
  buffer: Buffer,
  fromServer: boolean,
) => parseResult<LazyPacket_t>;
