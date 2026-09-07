/* TypeScript file generated from PacketV1457_PlayerUpdate.res by genType. */

/* eslint-disable */
/* tslint:disable */

import type { readError } from "../ErrorAwarePacketReader.js";
import type { PackError } from "../ErrorAwarePacketWriter.js";
import type { Float_t as Point_Float_t } from "../Point.js";

export type direction = "Left" | "Right";

export type potionOfReturn = {
  readonly originalUsePosition: Point_Float_t;
  readonly homePosition: Point_Float_t;
};

export type control = {
  readonly isHoldingUp: boolean;
  readonly isHoldingDown: boolean;
  readonly isHoldingLeft: boolean;
  readonly isHoldingRight: boolean;
  readonly isHoldingJump: boolean;
  readonly isHoldingItemUse: boolean;
  readonly isHoldingDash: boolean;
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
  readonly shieldRaised: boolean;
  readonly ghost: boolean;
  readonly selectedItem: number;
  readonly position: Point_Float_t;
  readonly velocity: (undefined | Point_Float_t);
  readonly mountType: (undefined | number);
  readonly potionOfReturn: (undefined | potionOfReturn);
  readonly tryKeepingHoveringUp: boolean;
  readonly isVoidVaultEnabled: boolean;
  readonly isSitting: boolean;
  readonly hasFinishedAnyDd2Event: boolean;
  readonly isPettingAnimal: boolean;
  readonly isTheAnimalBeingPetSmall: boolean;
  readonly tryKeepingHoveringDown: boolean;
  readonly isSleeping: boolean;
  readonly autoReuseAllWeapons: boolean;
  readonly controlDownHold: boolean;
  readonly isOperatingAnotherEntity: boolean;
  readonly controlUseTile: boolean;
  readonly netCameraTarget: (undefined | Point_Float_t);
  readonly lastItemUseAttemptSuccess: boolean;
  readonly snappingStoneLightUp: boolean;
};

export type parseOk = { TAG: "Ok"; _0: t };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer) => parse;
export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
