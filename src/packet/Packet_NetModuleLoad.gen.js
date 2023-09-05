"use strict";
/* TypeScript file generated from Packet_NetModuleLoad.resi by genType. */
/* eslint-disable import/first */
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = exports.toBuffer = exports.NetModuleType_toInt = exports.NetModuleType_fromInt = void 0;
const $$toJS40962700 = { "0": "Liquid", "1": "Text", "2": "Ping", "3": "Ambience", "4": "Bestiary", "5": "CreativeUnlocks", "6": "CreativePower", "7": "CreativeUnlocksPlayerReport", "8": "TeleportPylon", "9": "Particles", "10": "CreativePowerPermissions" };
const $$toRE40962700 = { "Liquid": 0, "Text": 1, "Ping": 2, "Ambience": 3, "Bestiary": 4, "CreativeUnlocks": 5, "CreativePower": 6, "CreativeUnlocksPlayerReport": 7, "TeleportPylon": 8, "Particles": 9, "CreativePowerPermissions": 10 };
const $$toJS591611441 = { "0": "LockedForEveryone", "1": "CanBeChangedByHostAlone", "2": "CanBeChangedByEveryone" };
const $$toRE591611441 = { "LockedForEveryone": 0, "CanBeChangedByHostAlone": 1, "CanBeChangedByEveryone": 2 };
const $$toJS617958674 = { "0": "Added", "1": "Removed", "2": "RequestTeleport" };
const $$toRE617958674 = { "Added": 0, "Removed": 1, "RequestTeleport": 2 };
const $$toJS799603092 = { "0": "Sight", "1": "Chat" };
const $$toRE799603092 = { "Sight": 0, "Chat": 1 };
// @ts-ignore: Implicit any on import
const Curry = require('rescript/lib/js/curry.js');
// @ts-ignore: Implicit any on import
const Packet_NetModuleLoadBS = require('./Packet_NetModuleLoad.bs');
const NetModuleType_fromInt = function (Arg1) {
    const result = Packet_NetModuleLoadBS.NetModuleType.fromInt(Arg1);
    return (result == null ? result : $$toJS40962700[result]);
};
exports.NetModuleType_fromInt = NetModuleType_fromInt;
const NetModuleType_toInt = function (Arg1) {
    const result = Packet_NetModuleLoadBS.NetModuleType.toInt($$toRE40962700[Arg1]);
    return result;
};
exports.NetModuleType_toInt = NetModuleType_toInt;
const toBuffer = function (Arg1) {
    const result = Packet_NetModuleLoadBS.toBuffer(Arg1.tag === "Liquid"
        ? { TAG: 0, _0: Arg1.value }
        : Arg1.tag === "ClientText"
            ? { TAG: 1, _0: Arg1.value[0], _1: Arg1.value[1] }
            : Arg1.tag === "ServerText"
                ? { TAG: 2, _0: Arg1.value[0], _1: Arg1.value[1], _2: Arg1.value[2] }
                : Arg1.tag === "Ping"
                    ? { TAG: 3, _0: Arg1.value }
                    : Arg1.tag === "Ambience"
                        ? { TAG: 4, _0: Arg1.value }
                        : Arg1.tag === "Bestiary"
                            ? { TAG: 5, _0: { unlockType: typeof (Arg1.value.unlockType) === 'object'
                                        ? { TAG: 0, _0: Arg1.value.unlockType.value }
                                        : $$toRE799603092[Arg1.value.unlockType], npcId: Arg1.value.npcId } }
                            : Arg1.tag === "CreativeUnlocks"
                                ? { TAG: 6, _0: Arg1.value }
                                : Arg1.tag === "CreativePower"
                                    ? { TAG: 7, _0: Arg1.value }
                                    : Arg1.tag === "CreativeUnlocksPlayerReport"
                                        ? { TAG: 8, _0: Arg1.value }
                                        : Arg1.tag === "TeleportPylon"
                                            ? { TAG: 9, _0: { pylonAction: $$toRE617958674[Arg1.value.pylonAction], x: Arg1.value.x, y: Arg1.value.y, pylonType: Arg1.value.pylonType } }
                                            : Arg1.tag === "Particles"
                                                ? { TAG: 10, _0: Arg1.value }
                                                : { TAG: 11, _0: { powerType: Arg1.value.powerType, powerLevel: $$toRE591611441[Arg1.value.powerLevel] } });
    return result;
};
exports.toBuffer = toBuffer;
const parse = function (Arg1, Arg2) {
    const result = Curry._2(Packet_NetModuleLoadBS.parse, Arg1, Arg2.fromServer);
    return (result == null ? result : result.TAG === 0
        ? { tag: "Liquid", value: result._0 }
        : result.TAG === 1
            ? { tag: "ClientText", value: [result._0, result._1] }
            : result.TAG === 2
                ? { tag: "ServerText", value: [result._0, result._1, result._2] }
                : result.TAG === 3
                    ? { tag: "Ping", value: result._0 }
                    : result.TAG === 4
                        ? { tag: "Ambience", value: result._0 }
                        : result.TAG === 5
                            ? { tag: "Bestiary", value: { unlockType: typeof (result._0.unlockType) === 'object'
                                        ? { tag: "Kill", value: result._0.unlockType._0 }
                                        : $$toJS799603092[result._0.unlockType], npcId: result._0.npcId } }
                            : result.TAG === 6
                                ? { tag: "CreativeUnlocks", value: result._0 }
                                : result.TAG === 7
                                    ? { tag: "CreativePower", value: result._0 }
                                    : result.TAG === 8
                                        ? { tag: "CreativeUnlocksPlayerReport", value: result._0 }
                                        : result.TAG === 9
                                            ? { tag: "TeleportPylon", value: { pylonAction: $$toJS617958674[result._0.pylonAction], x: result._0.x, y: result._0.y, pylonType: result._0.pylonType } }
                                            : result.TAG === 10
                                                ? { tag: "Particles", value: result._0 }
                                                : { tag: "CreativePowerPermissions", value: { powerType: result._0.powerType, powerLevel: $$toJS591611441[result._0.powerLevel] } });
};
exports.parse = parse;
