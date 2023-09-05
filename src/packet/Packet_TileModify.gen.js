"use strict";
/* TypeScript file generated from Packet_TileModify.resi by genType. */
/* eslint-disable import/first */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBuffer = exports.parse = exports.Action_toInt = exports.Action_fromInt = void 0;
const $$toJS526392060 = { "0": "KillTile", "1": "PlaceTile", "2": "KillWall", "3": "PlaceWall", "4": "KillTileNoItem", "5": "PlaceWire", "6": "KillWire", "7": "PoundTile", "8": "PlaceActuator", "9": "KillActuator", "10": "PlaceWire2", "11": "KillWire2", "12": "PlaceWire3", "13": "KillWire3", "14": "SlopeTile", "15": "FrameTrack", "16": "PlaceWire4", "17": "KillWire4", "18": "PokeLogicGate", "19": "Actuate", "20": "KillTile2", "21": "ReplaceTile", "22": "ReplaceWall", "23": "SlopePoundTile" };
const $$toRE526392060 = { "KillTile": 0, "PlaceTile": 1, "KillWall": 2, "PlaceWall": 3, "KillTileNoItem": 4, "PlaceWire": 5, "KillWire": 6, "PoundTile": 7, "PlaceActuator": 8, "KillActuator": 9, "PlaceWire2": 10, "KillWire2": 11, "PlaceWire3": 12, "KillWire3": 13, "SlopeTile": 14, "FrameTrack": 15, "PlaceWire4": 16, "KillWire4": 17, "PokeLogicGate": 18, "Actuate": 19, "KillTile2": 20, "ReplaceTile": 21, "ReplaceWall": 22, "SlopePoundTile": 23 };
// @ts-ignore: Implicit any on import
const Packet_TileModifyBS = require('./Packet_TileModify.bs');
const Action_fromInt = function (Arg1) {
    const result = Packet_TileModifyBS.Action.fromInt(Arg1);
    return (result == null ? result : $$toJS526392060[result]);
};
exports.Action_fromInt = Action_fromInt;
const Action_toInt = function (Arg1) {
    const result = Packet_TileModifyBS.Action.toInt($$toRE526392060[Arg1]);
    return result;
};
exports.Action_toInt = Action_toInt;
const parse = function (Arg1) {
    const result = Packet_TileModifyBS.parse(Arg1);
    return (result == null ? result : { action: $$toJS526392060[result.action], tileX: result.tileX, tileY: result.tileY, value1: result.value1, value2: result.value2 });
};
exports.parse = parse;
const toBuffer = function (Arg1) {
    const result = Packet_TileModifyBS.toBuffer({ action: $$toRE526392060[Arg1.action], tileX: Arg1.tileX, tileY: Arg1.tileY, value1: Arg1.value1, value2: Arg1.value2 });
    return result;
};
exports.toBuffer = toBuffer;
