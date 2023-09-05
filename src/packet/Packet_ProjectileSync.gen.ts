/* TypeScript file generated from Packet_ProjectileSync.resi by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
const Packet_ProjectileSyncBS = require('./Packet_ProjectileSync.bs');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

// tslint:disable-next-line:interface-over-type-literal
export type t = {
  readonly projectileId: number; 
  readonly x: number; 
  readonly y: number; 
  readonly vx: number; 
  readonly vy: number; 
  readonly owner: number; 
  readonly projectileType: number; 
  readonly ai: [(undefined | number), (undefined | number)]; 
  readonly damage: (undefined | number); 
  readonly knockback: (undefined | number); 
  readonly originalDamage: (undefined | number); 
  readonly projectileUuid: (undefined | number)
};

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = Packet_ProjectileSyncBS.parse;

export const toBuffer: (_1:t) => NodeJs_Buffer_t = Packet_ProjectileSyncBS.toBuffer;
