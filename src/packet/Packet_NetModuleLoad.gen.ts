/* TypeScript file generated from Packet_NetModuleLoad.resi by genType. */

/* eslint-disable */
/* tslint:disable */

const Packet_NetModuleLoadJS = require('./Packet_NetModuleLoad.bs.js');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

import type {Color_t as PacketFactory_Color_t} from '../../src/shims/PacketFactory.shim';

import type {NetworkText_t as PacketFactory_NetworkText_t} from '../../src/shims/PacketFactory.shim';

export type commandId = string;

export type message = string;

export type playerId = number;

export type liquidChange = {
  readonly x: number; 
  readonly y: number; 
  readonly amount: number; 
  readonly liquidType: number
};

export type liquid = { readonly changes: liquidChange[] };

export type position = { readonly x: number; readonly y: number };

export type ambience = {
  readonly playerId: number; 
  readonly seed: number; 
  readonly skyEntityType: number
};

export type killCount = number;

export type bestiaryUnlockType = 
    "Sight"
  | "Chat"
  | { TAG: "Kill"; _0: killCount };

export type bestiary = { readonly unlockType: bestiaryUnlockType; readonly npcId: number };

export type creativeUnlock = { readonly itemId: number; readonly researchedCount: number };

export type creativePower = { readonly powerType: number };

export type unlockReport = { readonly itemId: number; readonly researchedCount: number };

export type pylonAction = "Added" | "Removed" | "RequestTeleport";

export type teleportPylon = {
  readonly pylonAction: pylonAction; 
  readonly x: number; 
  readonly y: number; 
  readonly pylonType: number
};

export type particle = {
  readonly particleType: number; 
  readonly x: number; 
  readonly y: number; 
  readonly vx: number; 
  readonly vy: number; 
  readonly shaderIndex: number; 
  readonly invokedByPlayer: number
};

export type powerLevel = 
    "LockedForEveryone"
  | "CanBeChangedByHostAlone"
  | "CanBeChangedByEveryone";

export type creativePowerPermission = { readonly powerType: number; readonly powerLevel: powerLevel };

export type t = 
    { TAG: "Liquid"; _0: liquid }
  | { TAG: "ClientText"; _0: commandId; _1: message }
  | { TAG: "ServerText"; _0: playerId; _1: PacketFactory_NetworkText_t; _2: PacketFactory_Color_t }
  | { TAG: "Ping"; _0: position }
  | { TAG: "Ambience"; _0: ambience }
  | { TAG: "Bestiary"; _0: bestiary }
  | { TAG: "CreativeUnlocks"; _0: creativeUnlock }
  | { TAG: "CreativePower"; _0: creativePower }
  | { TAG: "CreativeUnlocksPlayerReport"; _0: unlockReport }
  | { TAG: "TeleportPylon"; _0: teleportPylon }
  | { TAG: "Particles"; _0: particle }
  | { TAG: "CreativePowerPermissions"; _0: creativePowerPermission };

export type NetModuleType_t = 
    "Liquid"
  | "Text"
  | "Ping"
  | "Ambience"
  | "Bestiary"
  | "CreativeUnlocks"
  | "CreativePower"
  | "CreativeUnlocksPlayerReport"
  | "TeleportPylon"
  | "Particles"
  | "CreativePowerPermissions";

export const NetModuleType_fromInt: (_1:number) => (undefined | NetModuleType_t) = Packet_NetModuleLoadJS.NetModuleType.fromInt as any;

export const NetModuleType_toInt: (_1:NetModuleType_t) => number = Packet_NetModuleLoadJS.NetModuleType.toInt as any;

export const toBuffer: (_1:t) => NodeJs_Buffer_t = Packet_NetModuleLoadJS.toBuffer as any;

export const parse: (_1:NodeJs_Buffer_t, fromServer:boolean) => (undefined | t) = Packet_NetModuleLoadJS.parse as any;

export const NetModuleType: { toInt: (_1:NetModuleType_t) => number; fromInt: (_1:number) => (undefined | NetModuleType_t) } = Packet_NetModuleLoadJS.NetModuleType as any;
