/* TypeScript file generated from Packet_PlayerDeath.resi by genType. */
/* eslint-disable import/first */


const $$toJS762101292: { [key: string]: any } = {"0": "FallDamage", "1": "Drowning", "2": "Lava", "3": "FallDamage2", "4": "DemonAltar", "5": "CompanionCube", "6": "Suffocation", "7": "Burning", "8": "Poison", "9": "Electrified", "10": "WallOfFleshEscape", "11": "WallOfFleshLicked", "12": "ChaosState", "13": "ChaosState2Male", "14": "ChaosState3Female"};

const $$toRE762101292: { [key: string]: any } = {"FallDamage": 0, "Drowning": 1, "Lava": 2, "FallDamage2": 3, "DemonAltar": 4, "CompanionCube": 5, "Suffocation": 6, "Burning": 7, "Poison": 8, "Electrified": 9, "WallOfFleshEscape": 10, "WallOfFleshLicked": 11, "ChaosState": 12, "ChaosState2Male": 13, "ChaosState3Female": 14};

// @ts-ignore: Implicit any on import
const Packet_PlayerDeathBS = require('./Packet_PlayerDeath.bs');

import type {Buffer_t as NodeJs_Buffer_t} from '../../src/shims/NodeJs.shim';

import type {t as PlayerDeathReason_t} from '../../src/PlayerDeathReason.gen';

// tslint:disable-next-line:interface-over-type-literal
export type t = {
  readonly playerId: number; 
  readonly deathReason: PlayerDeathReason_t; 
  readonly damage: number; 
  readonly hitDirection: number; 
  readonly pvp: boolean
};

export const parse: (_1:NodeJs_Buffer_t) => (undefined | t) = function (Arg1: any) {
  const result = Packet_PlayerDeathBS.parse(Arg1);
  return (result == null ? result : {playerId:result.playerId, deathReason:{killerPlayerId:result.deathReason.killerPlayerId, killerNpcId:result.deathReason.killerNpcId, killerProjectileId:result.deathReason.killerProjectileId, typeOfDeathOther:(result.deathReason.typeOfDeathOther == null ? result.deathReason.typeOfDeathOther : $$toJS762101292[result.deathReason.typeOfDeathOther]), projectileType:result.deathReason.projectileType, itemType:result.deathReason.itemType, itemPrefix:result.deathReason.itemPrefix, deathReason:result.deathReason.deathReason}, damage:result.damage, hitDirection:result.hitDirection, pvp:result.pvp})
};

export const toBuffer: (_1:t) => NodeJs_Buffer_t = function (Arg1: any) {
  const result = Packet_PlayerDeathBS.toBuffer({playerId:Arg1.playerId, deathReason:{killerPlayerId:Arg1.deathReason.killerPlayerId, killerNpcId:Arg1.deathReason.killerNpcId, killerProjectileId:Arg1.deathReason.killerProjectileId, typeOfDeathOther:(Arg1.deathReason.typeOfDeathOther == null ? Arg1.deathReason.typeOfDeathOther : $$toRE762101292[Arg1.deathReason.typeOfDeathOther]), projectileType:Arg1.deathReason.projectileType, itemType:Arg1.deathReason.itemType, itemPrefix:Arg1.deathReason.itemPrefix, deathReason:Arg1.deathReason.deathReason}, damage:Arg1.damage, hitDirection:Arg1.hitDirection, pvp:Arg1.pvp});
  return result
};
