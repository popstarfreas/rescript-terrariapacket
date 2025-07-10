/* TypeScript file generated from Packet_ShimmerEffectOrCoinLuck.res by genType. */

/* eslint-disable */
/* tslint:disable */

import type {t as Point_t} from '../../src/Point';

export type coinLuck = { readonly position: Point_t<number>; readonly amount: number };

export type t = 
    { TAG: "ShimmerEffect"; _0: number; _1: number }
  | { TAG: "CoinLuck"; _0: coinLuck }
  | { TAG: "NewShimmerEffect"; _0: number };
