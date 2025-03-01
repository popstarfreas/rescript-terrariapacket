/* TypeScript file generated from Packet_PlayerInfo.resi by genType. */

/* eslint-disable */
/* tslint:disable */

import * as Packet_PlayerInfoJS from './Packet_PlayerInfo.mjs'

import type { Buffer_t as NodeJs_Buffer_t } from '../../src/shims/NodeJs.shim.mts';

import type { Color_t as PacketFactory_Color_t } from '../../src/shims/PacketFactory.shim.mts';

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
  readonly hairColor: PacketFactory_Color_t;
  readonly skinColor: PacketFactory_Color_t;
  readonly eyeColor: PacketFactory_Color_t;
  readonly shirtColor: PacketFactory_Color_t;
  readonly underShirtColor: PacketFactory_Color_t;
  readonly pantsColor: PacketFactory_Color_t;
  readonly shoeColor: PacketFactory_Color_t;
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

export const parse: (_1: NodeJs_Buffer_t) => (undefined | t) = Packet_PlayerInfoJS.parse as any;

export const toBuffer: (_1: t) => NodeJs_Buffer_t = Packet_PlayerInfoJS.toBuffer as any;
