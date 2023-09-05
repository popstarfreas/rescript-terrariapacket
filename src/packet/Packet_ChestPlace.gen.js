"use strict";
/* TypeScript file generated from Packet_ChestPlace.resi by genType. */
/* eslint-disable import/first */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBuffer = exports.parse = exports.Action_toString = exports.Action_fromInt = exports.Action_toInt = void 0;
const $$toJS1010518829 = { "0": "PlaceChest", "1": "KillChest", "2": "PlaceDresser", "3": "KillDresser", "4": "PlaceContainer", "5": "KillContainer" };
const $$toRE1010518829 = { "PlaceChest": 0, "KillChest": 1, "PlaceDresser": 2, "KillDresser": 3, "PlaceContainer": 4, "KillContainer": 5 };
// @ts-ignore: Implicit any on import
const Packet_ChestPlaceBS = require('./Packet_ChestPlace.bs');
const Action_toInt = function (Arg1) {
    const result = Packet_ChestPlaceBS.Action.toInt($$toRE1010518829[Arg1]);
    return result;
};
exports.Action_toInt = Action_toInt;
const Action_fromInt = function (Arg1) {
    const result = Packet_ChestPlaceBS.Action.fromInt(Arg1);
    return (result == null ? result : $$toJS1010518829[result]);
};
exports.Action_fromInt = Action_fromInt;
const Action_toString = function (Arg1) {
    const result = Packet_ChestPlaceBS.Action.toString($$toRE1010518829[Arg1]);
    return result;
};
exports.Action_toString = Action_toString;
const parse = function (Arg1) {
    const result = Packet_ChestPlaceBS.parse(Arg1);
    return (result == null ? result : { action: $$toJS1010518829[result.action], x: result.x, y: result.y, style: result.style, id: result.id });
};
exports.parse = parse;
const toBuffer = function (Arg1) {
    const result = Packet_ChestPlaceBS.toBuffer({ action: $$toRE1010518829[Arg1.action], x: Arg1.x, y: Arg1.y, style: Arg1.style, id: Arg1.id });
    return result;
};
exports.toBuffer = toBuffer;
