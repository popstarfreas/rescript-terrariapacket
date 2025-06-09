import { PackError } from "../ErrorAwarePacketWriter";

import type { Color_t as PacketFactory_Color_t } from '../shims/PacketFactory.shim';

import type { NetworkText_t as PacketFactory_NetworkText_t } from '../shims/PacketFactory.shim';

import type { CreativePower } from '../CreativePowers';

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

export type NetModuleLoad =
  { TAG: "Liquid"; _0: liquid }
  | { TAG: "ClientText"; _0: commandId; _1: message }
  | { TAG: "ServerText"; _0: playerId; _1: PacketFactory_NetworkText_t; _2: PacketFactory_Color_t }
  | { TAG: "Ping"; _0: position }
  | { TAG: "Ambience"; _0: ambience }
  | { TAG: "Bestiary"; _0: bestiary }
  | { TAG: "CreativeUnlocks"; _0: creativeUnlock }
  | { TAG: "CreativePower"; _0: CreativePower }
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

export function parse(buffer: Buffer): NetModuleLoad | undefined;

export type toBufferOk = { TAG: "Ok"; _0: Buffer };
export type toBufferError = { TAG: "Error"; _0: PackError };
export type toBuffer = toBufferOk | toBufferError;

export function toBuffer(data: NetModuleLoad): toBuffer;
