"use strict";
/* TypeScript file generated from Packet_NpcUpdate.resi by genType. */
/* eslint-disable import/first */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBuffer = exports.parse = void 0;
const $$toJS608511962 = { "0": "Max" };
const $$toRE608511962 = { "Max": 0 };
// @ts-ignore: Implicit any on import
const Packet_NpcUpdateBS = require('./Packet_NpcUpdate.bs');
const parse = function (Arg1) {
    const result = Packet_NpcUpdateBS.parse(Arg1);
    return (result == null ? result : { npcSlotId: result.npcSlotId, npcTypeId: result.npcTypeId, x: result.x, y: result.y, vx: result.vx, vy: result.vy, target: result.target, directionX: result.directionX, directionY: result.directionY, ai: result.ai, spriteDirection: result.spriteDirection, life: typeof (result.life) === 'object'
            ? result.life.TAG === 0
                ? { tag: "Byte", value: result.life._0 }
                : result.life.TAG === 1
                    ? { tag: "Int16", value: result.life._0 }
                    : { tag: "Int32", value: result.life._0 }
            : $$toJS608511962[result.life], releaseOwner: result.releaseOwner, playerCountScale: result.playerCountScale, strengthMultiplier: result.strengthMultiplier, spawnedFromStatue: result.spawnedFromStatue });
};
exports.parse = parse;
const toBuffer = function (Arg1) {
    const result = Packet_NpcUpdateBS.toBuffer({ npcSlotId: Arg1.npcSlotId, npcTypeId: Arg1.npcTypeId, x: Arg1.x, y: Arg1.y, vx: Arg1.vx, vy: Arg1.vy, target: Arg1.target, directionX: Arg1.directionX, directionY: Arg1.directionY, ai: Arg1.ai, spriteDirection: Arg1.spriteDirection, life: typeof (Arg1.life) === 'object'
            ? Arg1.life.tag === "Byte"
                ? { TAG: 0, _0: Arg1.life.value }
                : Arg1.life.tag === "Int16"
                    ? { TAG: 1, _0: Arg1.life.value }
                    : { TAG: 2, _0: Arg1.life.value }
            : $$toRE608511962[Arg1.life], releaseOwner: Arg1.releaseOwner, playerCountScale: Arg1.playerCountScale, strengthMultiplier: Arg1.strengthMultiplier, spawnedFromStatue: Arg1.spawnedFromStatue });
    return result;
};
exports.toBuffer = toBuffer;
