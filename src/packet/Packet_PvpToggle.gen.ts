/* TypeScript file generated from Packet_PvpToggle.resi by genType. */

/* eslint-disable */
/* tslint:disable */

const Packet_PvpToggleJS = require('./Packet_PvpToggle.bs.js');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

export type t = { readonly playerId: number; readonly pvpEnabled: boolean };

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = Packet_PvpToggleJS.parse as any;

export const toBuffer: (_1:t) => NodeJs_Buffer_t = Packet_PvpToggleJS.toBuffer as any;
