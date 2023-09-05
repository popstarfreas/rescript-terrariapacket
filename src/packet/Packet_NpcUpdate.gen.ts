/* TypeScript file generated from Packet_NpcUpdate.resi by genType. */
/* eslint-disable import/first */


const $$toJS608511962: { [key: string]: any } = {"0": "Max"};

const $$toRE608511962: { [key: string]: any } = {"Max": 0};

// @ts-ignore: Implicit any on import
const Packet_NpcUpdateBS = require('./Packet_NpcUpdate.bs');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

// tslint:disable-next-line:interface-over-type-literal
export type ai = [(undefined | number), (undefined | number), (undefined | number), (undefined | number)];

// tslint:disable-next-line:interface-over-type-literal
export type life = 
    "Max"
  | { tag: "Byte"; value: number }
  | { tag: "Int16"; value: number }
  | { tag: "Int32"; value: number };

// tslint:disable-next-line:interface-over-type-literal
export type t = {
  readonly npcSlotId: number; 
  readonly npcTypeId: number; 
  readonly x: number; 
  readonly y: number; 
  readonly vx: number; 
  readonly vy: number; 
  readonly target: number; 
  readonly directionX: boolean; 
  readonly directionY: boolean; 
  readonly ai: ai; 
  readonly spriteDirection: boolean; 
  readonly life: life; 
  readonly releaseOwner: (undefined | number); 
  readonly playerCountScale: (undefined | number); 
  readonly strengthMultiplier: (undefined | number); 
  readonly spawnedFromStatue: boolean
};

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = function (Arg1: any) {
  const result = Packet_NpcUpdateBS.parse(Arg1);
  return (result == null ? result : {npcSlotId:result.npcSlotId, npcTypeId:result.npcTypeId, x:result.x, y:result.y, vx:result.vx, vy:result.vy, target:result.target, directionX:result.directionX, directionY:result.directionY, ai:result.ai, spriteDirection:result.spriteDirection, life:typeof(result.life) === 'object'
    ? result.life.TAG===0
      ? {tag:"Byte", value:result.life._0}
      : result.life.TAG===1
      ? {tag:"Int16", value:result.life._0}
      : {tag:"Int32", value:result.life._0}
    : $$toJS608511962[result.life], releaseOwner:result.releaseOwner, playerCountScale:result.playerCountScale, strengthMultiplier:result.strengthMultiplier, spawnedFromStatue:result.spawnedFromStatue})
};

export const toBuffer: (_1:t) => NodeJs_Buffer_t = function (Arg1: any) {
  const result = Packet_NpcUpdateBS.toBuffer({npcSlotId:Arg1.npcSlotId, npcTypeId:Arg1.npcTypeId, x:Arg1.x, y:Arg1.y, vx:Arg1.vx, vy:Arg1.vy, target:Arg1.target, directionX:Arg1.directionX, directionY:Arg1.directionY, ai:Arg1.ai, spriteDirection:Arg1.spriteDirection, life:typeof(Arg1.life) === 'object'
    ? Arg1.life.tag==="Byte"
      ? {TAG: 0, _0:Arg1.life.value} as any
      : Arg1.life.tag==="Int16"
      ? {TAG: 1, _0:Arg1.life.value} as any
      : {TAG: 2, _0:Arg1.life.value} as any
    : $$toRE608511962[Arg1.life], releaseOwner:Arg1.releaseOwner, playerCountScale:Arg1.playerCountScale, strengthMultiplier:Arg1.strengthMultiplier, spawnedFromStatue:Arg1.spawnedFromStatue});
  return result
};
