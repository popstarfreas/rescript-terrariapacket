/* TypeScript file generated from Packet_PlayerSlotSet.resi by genType. */

/* eslint-disable */
/* tslint:disable */

const Packet_PlayerSlotSetJS = require('./Packet_PlayerSlotSet.bs.js');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

export type t = number;

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = Packet_PlayerSlotSetJS.parse as any;

export const toBuffer: (_1:t) => NodeJs_Buffer_t = Packet_PlayerSlotSetJS.toBuffer as any;
