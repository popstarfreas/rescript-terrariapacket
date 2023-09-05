/* TypeScript file generated from Packet_NetModuleLoad.resi by genType. */
/* eslint-disable import/first */


const $$toJS40962700: { [key: string]: any } = {"0": "Liquid", "1": "Text", "2": "Ping", "3": "Ambience", "4": "Bestiary", "5": "CreativeUnlocks", "6": "CreativePower", "7": "CreativeUnlocksPlayerReport", "8": "TeleportPylon", "9": "Particles", "10": "CreativePowerPermissions"};

const $$toRE40962700: { [key: string]: any } = {"Liquid": 0, "Text": 1, "Ping": 2, "Ambience": 3, "Bestiary": 4, "CreativeUnlocks": 5, "CreativePower": 6, "CreativeUnlocksPlayerReport": 7, "TeleportPylon": 8, "Particles": 9, "CreativePowerPermissions": 10};

const $$toJS591611441: { [key: string]: any } = {"0": "LockedForEveryone", "1": "CanBeChangedByHostAlone", "2": "CanBeChangedByEveryone"};

const $$toRE591611441: { [key: string]: any } = {"LockedForEveryone": 0, "CanBeChangedByHostAlone": 1, "CanBeChangedByEveryone": 2};

const $$toJS617958674: { [key: string]: any } = {"0": "Added", "1": "Removed", "2": "RequestTeleport"};

const $$toRE617958674: { [key: string]: any } = {"Added": 0, "Removed": 1, "RequestTeleport": 2};

const $$toJS799603092: { [key: string]: any } = {"0": "Sight", "1": "Chat"};

const $$toRE799603092: { [key: string]: any } = {"Sight": 0, "Chat": 1};

// @ts-ignore: Implicit any on import
const Curry = require('rescript/lib/js/curry.js');

// @ts-ignore: Implicit any on import
const Packet_NetModuleLoadBS = require('./Packet_NetModuleLoad.bs');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

import type {Color_t as PacketFactory_Color_t} from '../../src/shims/PacketFactory.shim';

import type {NetworkText_t as PacketFactory_NetworkText_t} from '../../src/shims/PacketFactory.shim';

// tslint:disable-next-line:interface-over-type-literal
export type commandId = string;

// tslint:disable-next-line:interface-over-type-literal
export type message = string;

// tslint:disable-next-line:interface-over-type-literal
export type playerId = number;

// tslint:disable-next-line:interface-over-type-literal
export type liquidChange = {
  readonly x: number; 
  readonly y: number; 
  readonly amount: number; 
  readonly liquidType: number
};

// tslint:disable-next-line:interface-over-type-literal
export type liquid = { readonly changes: liquidChange[] };

// tslint:disable-next-line:interface-over-type-literal
export type position = { readonly x: number; readonly y: number };

// tslint:disable-next-line:interface-over-type-literal
export type ambience = {
  readonly playerId: number; 
  readonly seed: number; 
  readonly skyEntityType: number
};

// tslint:disable-next-line:interface-over-type-literal
export type killCount = number;

// tslint:disable-next-line:interface-over-type-literal
export type bestiaryUnlockType = 
    "Sight"
  | "Chat"
  | { tag: "Kill"; value: killCount };

// tslint:disable-next-line:interface-over-type-literal
export type bestiary = { readonly unlockType: bestiaryUnlockType; readonly npcId: number };

// tslint:disable-next-line:interface-over-type-literal
export type creativeUnlock = { readonly itemId: number; readonly researchedCount: number };

// tslint:disable-next-line:interface-over-type-literal
export type creativePower = { readonly powerType: number };

// tslint:disable-next-line:interface-over-type-literal
export type unlockReport = { readonly itemId: number; readonly researchedCount: number };

// tslint:disable-next-line:interface-over-type-literal
export type pylonAction = "Added" | "Removed" | "RequestTeleport";

// tslint:disable-next-line:interface-over-type-literal
export type teleportPylon = {
  readonly pylonAction: pylonAction; 
  readonly x: number; 
  readonly y: number; 
  readonly pylonType: number
};

// tslint:disable-next-line:interface-over-type-literal
export type particle = {
  readonly particleType: number; 
  readonly x: number; 
  readonly y: number; 
  readonly vx: number; 
  readonly vy: number; 
  readonly shaderIndex: number; 
  readonly invokedByPlayer: number
};

// tslint:disable-next-line:interface-over-type-literal
export type powerLevel = 
    "LockedForEveryone"
  | "CanBeChangedByHostAlone"
  | "CanBeChangedByEveryone";

// tslint:disable-next-line:interface-over-type-literal
export type creativePowerPermission = { readonly powerType: number; readonly powerLevel: powerLevel };

// tslint:disable-next-line:interface-over-type-literal
export type t = 
    { tag: "Liquid"; value: liquid }
  | { tag: "ClientText"; value: [commandId, message] }
  | { tag: "ServerText"; value: [playerId, PacketFactory_NetworkText_t, PacketFactory_Color_t] }
  | { tag: "Ping"; value: position }
  | { tag: "Ambience"; value: ambience }
  | { tag: "Bestiary"; value: bestiary }
  | { tag: "CreativeUnlocks"; value: creativeUnlock }
  | { tag: "CreativePower"; value: creativePower }
  | { tag: "CreativeUnlocksPlayerReport"; value: unlockReport }
  | { tag: "TeleportPylon"; value: teleportPylon }
  | { tag: "Particles"; value: particle }
  | { tag: "CreativePowerPermissions"; value: creativePowerPermission };

// tslint:disable-next-line:interface-over-type-literal
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

export const NetModuleType_fromInt: (_1:number) => (undefined | NetModuleType_t) = function (Arg1: any) {
  const result = Packet_NetModuleLoadBS.NetModuleType.fromInt(Arg1);
  return (result == null ? result : $$toJS40962700[result])
};

export const NetModuleType_toInt: (_1:NetModuleType_t) => number = function (Arg1: any) {
  const result = Packet_NetModuleLoadBS.NetModuleType.toInt($$toRE40962700[Arg1]);
  return result
};

export const toBuffer: (_1:t) => NodeJs_Buffer_t = function (Arg1: any) {
  const result = Packet_NetModuleLoadBS.toBuffer(Arg1.tag==="Liquid"
    ? {TAG: 0, _0:Arg1.value} as any
    : Arg1.tag==="ClientText"
    ? {TAG: 1, _0:Arg1.value[0], _1:Arg1.value[1]} as any
    : Arg1.tag==="ServerText"
    ? {TAG: 2, _0:Arg1.value[0], _1:Arg1.value[1], _2:Arg1.value[2]} as any
    : Arg1.tag==="Ping"
    ? {TAG: 3, _0:Arg1.value} as any
    : Arg1.tag==="Ambience"
    ? {TAG: 4, _0:Arg1.value} as any
    : Arg1.tag==="Bestiary"
    ? {TAG: 5, _0:{unlockType:typeof(Arg1.value.unlockType) === 'object'
    ? {TAG: 0, _0:Arg1.value.unlockType.value} as any
    : $$toRE799603092[Arg1.value.unlockType], npcId:Arg1.value.npcId}} as any
    : Arg1.tag==="CreativeUnlocks"
    ? {TAG: 6, _0:Arg1.value} as any
    : Arg1.tag==="CreativePower"
    ? {TAG: 7, _0:Arg1.value} as any
    : Arg1.tag==="CreativeUnlocksPlayerReport"
    ? {TAG: 8, _0:Arg1.value} as any
    : Arg1.tag==="TeleportPylon"
    ? {TAG: 9, _0:{pylonAction:$$toRE617958674[Arg1.value.pylonAction], x:Arg1.value.x, y:Arg1.value.y, pylonType:Arg1.value.pylonType}} as any
    : Arg1.tag==="Particles"
    ? {TAG: 10, _0:Arg1.value} as any
    : {TAG: 11, _0:{powerType:Arg1.value.powerType, powerLevel:$$toRE591611441[Arg1.value.powerLevel]}} as any);
  return result
};

export const parse: (_1:NodeJs_Buffer_t, _2:boolean) => (undefined | t) = function (Arg1: any, Arg2: any) {
  const result = Curry._2(Packet_NetModuleLoadBS.parse, Arg1, Arg2);
  return (result == null ? result : result.TAG===0
    ? {tag:"Liquid", value:result._0}
    : result.TAG===1
    ? {tag:"ClientText", value:[result._0, result._1]}
    : result.TAG===2
    ? {tag:"ServerText", value:[result._0, result._1, result._2]}
    : result.TAG===3
    ? {tag:"Ping", value:result._0}
    : result.TAG===4
    ? {tag:"Ambience", value:result._0}
    : result.TAG===5
    ? {tag:"Bestiary", value:{unlockType:typeof(result._0.unlockType) === 'object'
    ? {tag:"Kill", value:result._0.unlockType._0}
    : $$toJS799603092[result._0.unlockType], npcId:result._0.npcId}}
    : result.TAG===6
    ? {tag:"CreativeUnlocks", value:result._0}
    : result.TAG===7
    ? {tag:"CreativePower", value:result._0}
    : result.TAG===8
    ? {tag:"CreativeUnlocksPlayerReport", value:result._0}
    : result.TAG===9
    ? {tag:"TeleportPylon", value:{pylonAction:$$toJS617958674[result._0.pylonAction], x:result._0.x, y:result._0.y, pylonType:result._0.pylonType}}
    : result.TAG===10
    ? {tag:"Particles", value:result._0}
    : {tag:"CreativePowerPermissions", value:{powerType:result._0.powerType, powerLevel:$$toJS591611441[result._0.powerLevel]}})
};
