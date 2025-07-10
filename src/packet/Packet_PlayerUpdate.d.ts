/* TypeScript file generated from Packet_PlayerUpdate.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import type { t as Point_t } from '../../src/Point';

export type direction = "Left" | "Right";

export type potionOfReturn = { readonly originalUsePosition: Point_t<number>; readonly homePosition: Point_t<number> };

export type control = {
  readonly isHoldingUp: boolean;
  readonly isHoldingDown: boolean;
  readonly isHoldingLeft: boolean;
  readonly isHoldingRight: boolean;
  readonly isHoldingJump: boolean;
  readonly isHoldingItemUse: boolean
};

export type pulleyDirection = "One" | "Two";

export type gravityDirection = "Normal" | "Inverted";

export type t = {
  readonly playerId: number;
  readonly control: control;
  readonly direction: direction;
  readonly pulleyDirection: (undefined | pulleyDirection);
  readonly vortexStealthActive: boolean;
  readonly gravityDirection: gravityDirection;
  readonly shouldGuard: boolean;
  readonly ghost: boolean;
  readonly selectedItem: number;
  readonly position: Point_t<number>;
  readonly velocity: (undefined | Point_t<number>);
  readonly potionOfReturn: (undefined | potionOfReturn);
  readonly tryKeepingHoveringUp: boolean;
  readonly isVoidVaultEnabled: boolean;
  readonly isSitting: boolean;
  readonly hasFinishedAnyDd2Event: boolean;
  readonly isPettingAnimal: boolean;
  readonly isTheAnimalBeingPetSmall: boolean;
  readonly tryKeepingHoveringDown: boolean;
  readonly isSleeping: boolean
};

export declare const parse: (_1: Buffer) => (undefined | t);

export declare const toBuffer: (_1: t) => Buffer;
