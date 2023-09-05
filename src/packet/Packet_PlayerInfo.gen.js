"use strict";
/* TypeScript file generated from Packet_PlayerInfo.resi by genType. */
/* eslint-disable import/first */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBuffer = exports.parse = void 0;
const $$toJS268429998 = { "0": "Classic", "1": "Journey" };
const $$toRE268429998 = { "Classic": 0, "Journey": 1 };
const $$toJS744746585 = { "0": "Softcore", "1": "Mediumcore", "2": "Hardcore" };
const $$toRE744746585 = { "Softcore": 0, "Mediumcore": 1, "Hardcore": 2 };
// @ts-ignore: Implicit any on import
const Packet_PlayerInfoBS = require('./Packet_PlayerInfo.bs');
const parse = function (Arg1) {
    const result = Packet_PlayerInfoBS.parse(Arg1);
    return (result == null ? result : { playerId: result.playerId, skinVariant: result.skinVariant, hair: result.hair, name: result.name, hairDye: result.hairDye, hideVisuals: result.hideVisuals, hideVisuals2: result.hideVisuals2, hideMisc: result.hideMisc, hairColor: result.hairColor, skinColor: result.skinColor, eyeColor: result.eyeColor, shirtColor: result.shirtColor, underShirtColor: result.underShirtColor, pantsColor: result.pantsColor, shoeColor: result.shoeColor, difficulty: $$toJS744746585[result.difficulty], mode: $$toJS268429998[result.mode], extraAccessory: result.extraAccessory, usingBiomeTorches: result.usingBiomeTorches, unlockedBiomeTorches: result.unlockedBiomeTorches, happyFunTorchTime: result.happyFunTorchTime });
};
exports.parse = parse;
const toBuffer = function (Arg1) {
    const result = Packet_PlayerInfoBS.toBuffer({ playerId: Arg1.playerId, skinVariant: Arg1.skinVariant, hair: Arg1.hair, name: Arg1.name, hairDye: Arg1.hairDye, hideVisuals: Arg1.hideVisuals, hideVisuals2: Arg1.hideVisuals2, hideMisc: Arg1.hideMisc, hairColor: Arg1.hairColor, skinColor: Arg1.skinColor, eyeColor: Arg1.eyeColor, shirtColor: Arg1.shirtColor, underShirtColor: Arg1.underShirtColor, pantsColor: Arg1.pantsColor, shoeColor: Arg1.shoeColor, difficulty: $$toRE744746585[Arg1.difficulty], mode: $$toRE268429998[Arg1.mode], extraAccessory: Arg1.extraAccessory, usingBiomeTorches: Arg1.usingBiomeTorches, unlockedBiomeTorches: Arg1.unlockedBiomeTorches, happyFunTorchTime: Arg1.happyFunTorchTime });
    return result;
};
exports.toBuffer = toBuffer;
