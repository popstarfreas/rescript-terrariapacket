/* TypeScript file generated from Parser.resi by genType. */

/* eslint-disable */
/* tslint:disable */

const ParserJS = require('./Parser.bs.js');

import type {LazyPacket_t as Packet_LazyPacket_t} from './Packet.gen';

import type {parseLazy as IParser_parseLazy} from './IParser.gen';

import type {parse as IParser_parse} from './IParser.gen';

import type {t as Packet_t} from './Packet.gen';

export const parse: IParser_parse<Packet_t> = ParserJS.parse as any;

export const parseLazy: IParser_parseLazy<Packet_LazyPacket_t> = ParserJS.parseLazy as any;
