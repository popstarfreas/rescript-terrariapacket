"use strict";
/* TypeScript file generated from Packet_PlayerSpawn.resi by genType. */
/* eslint-disable import/first */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBuffer = exports.parse = void 0;
const $$toJS454773700 = { "0": "ReviveFromDeath", "1": "SpawningIntoWorld", "2": "RecallFromItem" };
const $$toRE454773700 = { "ReviveFromDeath": 0, "SpawningIntoWorld": 1, "RecallFromItem": 2 };
// @ts-ignore: Implicit any on import
const Packet_PlayerSpawnBS = require('./Packet_PlayerSpawn.bs');
const parse = function (Arg1) {
    const result = Packet_PlayerSpawnBS.parse(Arg1);
    return (result == null ? result : { playerId: result.playerId, x: result.x, y: result.y, timeRemaining: result.timeRemaining, context: $$toJS454773700[result.context] });
};
exports.parse = parse;
const toBuffer = function (Arg1) {
    const result = Packet_PlayerSpawnBS.toBuffer({ playerId: Arg1.playerId, x: Arg1.x, y: Arg1.y, timeRemaining: Arg1.timeRemaining, context: $$toRE454773700[Arg1.context] });
    return result;
};
exports.toBuffer = toBuffer;
