/* TypeScript file generated from Packet_PlayerSpawn.resi by genType. */
/* eslint-disable import/first */


const $$toJS454773700: { [key: string]: any } = {"0": "ReviveFromDeath", "1": "SpawningIntoWorld", "2": "RecallFromItem"};

const $$toRE454773700: { [key: string]: any } = {"ReviveFromDeath": 0, "SpawningIntoWorld": 1, "RecallFromItem": 2};

// @ts-ignore: Implicit any on import
const Packet_PlayerSpawnBS = require('./Packet_PlayerSpawn.bs');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

// tslint:disable-next-line:interface-over-type-literal
export type context = 
    "ReviveFromDeath"
  | "SpawningIntoWorld"
  | "RecallFromItem";

// tslint:disable-next-line:interface-over-type-literal
export type t = {
  readonly playerId: number; 
  readonly x: number; 
  readonly y: number; 
  readonly timeRemaining: number; 
  readonly context: context
};

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = function (Arg1: any) {
  const result = Packet_PlayerSpawnBS.parse(Arg1);
  return (result == null ? result : {playerId:result.playerId, x:result.x, y:result.y, timeRemaining:result.timeRemaining, context:$$toJS454773700[result.context]})
};

export const toBuffer: (_1:t) => NodeJs_Buffer_t = function (Arg1: any) {
  const result = Packet_PlayerSpawnBS.toBuffer({playerId:Arg1.playerId, x:Arg1.x, y:Arg1.y, timeRemaining:Arg1.timeRemaining, context:$$toRE454773700[Arg1.context]});
  return result
};
