/* TypeScript file generated from Packet_PlayerInfo.resi by genType. */

import type { PackError } from "../ErrorAwarePacketWriter";
import Color from "@popstarfreas/packetfactory/color";

/* eslint-disable */
/* tslint:disable */

export type difficulty = "Softcore" | "Mediumcore" | "Hardcore";

export type mode = "Classic" | "Journey";

export type t = {
  readonly playerId: number;
  readonly skinVariant: number;
  readonly hair: number;
  readonly name: string;
  readonly hairDye: number;
  readonly hideVisuals: number;
  readonly hideVisuals2: number;
  readonly hideMisc: number;
  readonly hairColor: Color;
  readonly skinColor: Color;
  readonly eyeColor: Color;
  readonly shirtColor: Color;
  readonly underShirtColor: Color;
  readonly pantsColor: Color;
  readonly shoeColor: Color;
  readonly difficulty: difficulty;
  readonly mode: mode;
  readonly extraAccessory: boolean;
  readonly usingBiomeTorches: boolean;
  readonly unlockedBiomeTorches: boolean;
  readonly happyFunTorchTime: boolean;
  readonly unlockedSuperCart: boolean;
  readonly enabledSuperCart: boolean;
  readonly usedAegisCrystal: boolean;
  readonly usedAegisFruit: boolean;
  readonly usedArcaneCrystal: boolean;
  readonly usedGalaxyPearl: boolean;
  readonly usedGummyWorm: boolean;
  readonly usedAmbrosia: boolean;
  readonly ateArtisanBread: boolean
};

export declare const parse: (_1: Buffer) => (undefined | t);

export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
