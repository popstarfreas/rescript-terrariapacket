/* TypeScript file generated from Packet_NetModuleLoad.res by genType. */

/* eslint-disable */
/* tslint:disable */

import type { readError } from "../ErrorAwarePacketReader.js";
import type { PackError } from "../ErrorAwarePacketWriter.js";
import type NetworkText from "@popstarfreas/packetfactory/networktext";
import type Color from "@popstarfreas/packetfactory/color";
import type { CreativePower } from "../CreativePowers.js";

export type commandId = string;
export type message = string;
export type playerId = number;

export type liquidChange = {
  readonly x: number;
  readonly y: number;
  readonly amount: number;
  readonly liquidType: number;
};

export type liquid = { readonly changes: liquidChange[] };

export type position = {
  readonly x: number;
  readonly y: number;
};

export type ambience = {
  readonly playerId: number;
  readonly seed: number;
  readonly skyEntityType: number;
};

export type killCount = number;

export type bestiaryUnlockType =
  | { TAG: "Kill"; _0: killCount }
  | "Sight"
  | "Chat";

export type bestiary = {
  readonly unlockType: bestiaryUnlockType;
  readonly npcId: number;
};

export type unlockReport = {
  readonly userId: number;
  readonly itemId: number;
  readonly researchedCount: number;
};

export type pylonAction = "Added" | "Removed" | "RequestTeleport";

export type teleportPylon = {
  readonly pylonAction: pylonAction;
  readonly x: number;
  readonly y: number;
  readonly pylonType: number;
};

export type particle = {
  readonly particleType: number;
  readonly x: number;
  readonly y: number;
  readonly vx: number;
  readonly vy: number;
  readonly shaderIndex: number;
  readonly invokedByPlayer: number;
};

export type powerLevel =
  | "LockedForEveryone"
  | "CanBeChangedByHostAlone"
  | "CanBeChangedByEveryone";

export type creativePowerPermission = {
  readonly powerType: number;
  readonly powerLevel: powerLevel;
};

export type bannerFullState = {
  readonly killCounts: number[];
  readonly claimableCounts: number[];
};

export type bannerKillCountUpdate = { readonly bannerId: number; readonly killCount: number };
export type bannerClaimCountUpdate = { readonly bannerId: number; readonly claimCount: number };
export type bannerClaimRequest = { readonly bannerId: number; readonly amount: number };
export type bannerClaimResponse = { readonly bannerId: number; readonly amount: number; readonly granted: boolean };

export type bannerMessage =
  | { TAG: "BannerFullState"; _0: bannerFullState }
  | { TAG: "BannerKillCountUpdate"; _0: bannerKillCountUpdate }
  | { TAG: "BannerClaimCountUpdate"; _0: bannerClaimCountUpdate }
  | { TAG: "BannerClaimRequest"; _0: bannerClaimRequest }
  | { TAG: "BannerClaimResponse"; _0: bannerClaimResponse };

export type craftingRequestItem = {
  readonly itemIdOrRecipeGroup: number;
  readonly stack: number;
};

export type craftingRequest = {
  readonly items: craftingRequestItem[];
  readonly chestIndexes: number[];
};

export type craftingResponse = { readonly approved: boolean };

export type craftingMessage =
  | { TAG: "CraftingRequest"; _0: craftingRequest }
  | { TAG: "CraftingResponse"; _0: craftingResponse };

export type sparseNpcTime = {
  readonly npcIndex: number;
  readonly time: number;
};

export type tagFullState = {
  readonly ownerId: number;
  readonly effectType: number;
  readonly timeLeft: sparseNpcTime[];
  readonly procTimeLeft: (undefined | sparseNpcTime[]);
};

export type tagChangeActiveEffect = { readonly ownerId: number; readonly effectType: number };
export type tagNpcChange = { readonly ownerId: number; readonly npcIndex: number };

export type tagEffectStateMessage =
  | { TAG: "TagFullState"; _0: tagFullState }
  | { TAG: "TagChangeActiveEffect"; _0: tagChangeActiveEffect }
  | { TAG: "TagApplyTagToNpc"; _0: tagNpcChange }
  | { TAG: "TagEnableProcOnNpc"; _0: tagNpcChange }
  | { TAG: "TagClearProcOnNpc"; _0: tagNpcChange };

export type leashedRemove = { readonly slot: number };
export type leashedFullSync = {
  readonly slot: number;
  readonly entityType: number;
  readonly anchorX: number;
  readonly anchorY: number;
  readonly payload: Buffer;
};
export type leashedPartialSync = { readonly slot: number; readonly entityType: number; readonly payload: Buffer };

export type leashedEntityMessage =
  | { TAG: "LeashedRemove"; _0: leashedRemove }
  | { TAG: "LeashedFullSync"; _0: leashedFullSync }
  | { TAG: "LeashedPartialSync"; _0: leashedPartialSync };

export type unbreakableWallScan = {
  readonly playerId: number;
  readonly insideUnbreakableWalls: boolean;
};

export type t =
  | { TAG: "Liquid"; _0: liquid }
  | { TAG: "ClientText"; _0: commandId; _1: message }
  | { TAG: "ServerText"; _0: playerId; _1: NetworkText; _2: Color }
  | { TAG: "Ping"; _0: position }
  | { TAG: "Ambience"; _0: ambience }
  | { TAG: "Bestiary"; _0: bestiary }
  | { TAG: "CreativePower"; _0: CreativePower }
  | { TAG: "CreativeUnlocksPlayerReport"; _0: unlockReport }
  | { TAG: "TeleportPylon"; _0: teleportPylon }
  | { TAG: "Particles"; _0: particle }
  | { TAG: "CreativePowerPermissions"; _0: creativePowerPermission }
  | { TAG: "Banners"; _0: bannerMessage }
  | { TAG: "CraftingRequests"; _0: craftingMessage }
  | { TAG: "TagEffectState"; _0: tagEffectStateMessage }
  | { TAG: "LeashedEntity"; _0: leashedEntityMessage }
  | { TAG: "UnbreakableWallScan"; _0: unbreakableWallScan };

export type parseOk = { TAG: "Ok"; _0: t };
export type parseError = { TAG: "Error"; _0: readError };
export type parse = parseOk | parseError;
export declare const parse: (_1: Buffer, fromServer: boolean) => parse;
export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;
export declare const toBuffer: (_1: t) => toBuffer;
