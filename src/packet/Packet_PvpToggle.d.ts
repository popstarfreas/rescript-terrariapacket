/* TypeScript file generated from Packet_PvpToggle.resi by genType. */

/* eslint-disable */
/* tslint:disable */

export type t = { readonly playerId: number; readonly pvpEnabled: boolean };

export declare const parse: (_1: Buffer) => (undefined | t);

export declare const toBuffer: (_1: t) => Buffer;
