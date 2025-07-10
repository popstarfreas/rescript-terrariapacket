/* TypeScript file generated from Packet_ProjectileSync.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

export type t = {
  readonly projectileId: number; 
  readonly x: number; 
  readonly y: number; 
  readonly vx: number; 
  readonly vy: number; 
  readonly owner: number; 
  readonly projectileType: number; 
  readonly ai: [(undefined | number), (undefined | number), (undefined | number)]; 
  readonly bannerIdToRespondTo: (undefined | number); 
  readonly damage: (undefined | number); 
  readonly knockback: (undefined | number); 
  readonly originalDamage: (undefined | number); 
  readonly projectileUuid: (undefined | number)
};

export declare const parse: (_1:NodeJs_Buffer_t) => (undefined | t);

export declare const toBuffer: (_1:t) => NodeJs_Buffer_t;
