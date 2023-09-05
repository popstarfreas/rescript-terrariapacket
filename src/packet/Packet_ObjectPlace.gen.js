"use strict";
/* TypeScript file generated from Packet_ObjectPlace.resi by genType. */
/* eslint-disable import/first */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBuffer = exports.parse = void 0;
const $$toJS835251090 = { "0": "Left", "1": "Right" };
const $$toRE835251090 = { "Left": 0, "Right": 1 };
// @ts-ignore: Implicit any on import
const Packet_ObjectPlaceBS = require('./Packet_ObjectPlace.bs');
const parse = function (Arg1) {
    const result = Packet_ObjectPlaceBS.parse(Arg1);
    return (result == null ? result : { x: result.x, y: result.y, objectType: result.objectType, style: result.style, alternate: result.alternate, random: result.random, direction: $$toJS835251090[result.direction] });
};
exports.parse = parse;
const toBuffer = function (Arg1) {
    const result = Packet_ObjectPlaceBS.toBuffer({ x: Arg1.x, y: Arg1.y, objectType: Arg1.objectType, style: Arg1.style, alternate: Arg1.alternate, random: Arg1.random, direction: $$toRE835251090[Arg1.direction] });
    return result;
};
exports.toBuffer = toBuffer;
