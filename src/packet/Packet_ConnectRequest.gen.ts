/* TypeScript file generated from Packet_ConnectRequest.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import Packet_ConnectRequestJS from './Packet_ConnectRequest.mjs'

import type { Buffer_t as NodeJs_Buffer_t } from '../../src/shims/NodeJs.shim';

export type t = { readonly version: string };

export const parse: (_1: NodeJs_Buffer_t) => (undefined | t) = Packet_ConnectRequestJS.parse as any;

export const toBuffer: (_1: t) => NodeJs_Buffer_t = Packet_ConnectRequestJS.toBuffer as any;
