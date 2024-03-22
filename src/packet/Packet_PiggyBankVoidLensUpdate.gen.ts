/* TypeScript file generated from Packet_PiggyBankVoidLensUpdate.res by genType. */

/* eslint-disable */
/* tslint:disable */

export type TrackedProjectileReference_t = { readonly expectedIdentity: number; readonly expectedType: number };

export type t = {
  readonly playerId: number; 
  readonly piggyBankProj: (undefined | TrackedProjectileReference_t); 
  readonly voidLensChest: (undefined | TrackedProjectileReference_t)
};
