// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var ManagedPacketWriter$PacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.bs.js");
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;
var BitFlags$DarkgamingRescriptTerrariapacket = require("../BitFlags.bs.js");
var PacketType$DarkgamingRescriptTerrariapacket = require("../PacketType.bs.js");

function getDifficulty(difficultyFlags) {
  if (BitFlags$DarkgamingRescriptTerrariapacket.flag2(difficultyFlags)) {
    return /* Hardcore */2;
  } else if (BitFlags$DarkgamingRescriptTerrariapacket.flag1(difficultyFlags)) {
    return /* Mediumcore */1;
  } else {
    return /* Softcore */0;
  }
}

function parse(payload) {
  var reader = new Packetreader(payload);
  var playerId = reader.readByte();
  var skinVariant = reader.readByte();
  var hair = reader.readByte();
  var name = reader.readString();
  var hairDye = reader.readByte();
  var hideVisuals = reader.readByte();
  var hideVisuals2 = reader.readByte();
  var hideMisc = reader.readByte();
  var hairColor = reader.readColor();
  var skinColor = reader.readColor();
  var eyeColor = reader.readColor();
  var shirtColor = reader.readColor();
  var underShirtColor = reader.readColor();
  var pantsColor = reader.readColor();
  var shoeColor = reader.readColor();
  var difficultyFlags = BitFlags$DarkgamingRescriptTerrariapacket.fromByte(reader.readByte());
  var torchFlags = BitFlags$DarkgamingRescriptTerrariapacket.fromByte(reader.readByte());
  var difficulty = getDifficulty(difficultyFlags);
  var extraAccessory = BitFlags$DarkgamingRescriptTerrariapacket.flag3(difficultyFlags);
  var mode = BitFlags$DarkgamingRescriptTerrariapacket.flag4(difficultyFlags) ? /* Journey */1 : /* Classic */0;
  var usingBiomeTorches = BitFlags$DarkgamingRescriptTerrariapacket.flag1(torchFlags);
  var happyFunTorchTime = BitFlags$DarkgamingRescriptTerrariapacket.flag2(torchFlags);
  var unlockedBiomeTorches = BitFlags$DarkgamingRescriptTerrariapacket.flag3(torchFlags);
  return {
          playerId: playerId,
          skinVariant: skinVariant,
          hair: hair,
          name: name,
          hairDye: hairDye,
          hideVisuals: hideVisuals,
          hideVisuals2: hideVisuals2,
          hideMisc: hideMisc,
          hairColor: hairColor,
          skinColor: skinColor,
          eyeColor: eyeColor,
          shirtColor: shirtColor,
          underShirtColor: underShirtColor,
          pantsColor: pantsColor,
          shoeColor: shoeColor,
          difficulty: difficulty,
          mode: mode,
          extraAccessory: extraAccessory,
          usingBiomeTorches: usingBiomeTorches,
          unlockedBiomeTorches: unlockedBiomeTorches,
          happyFunTorchTime: happyFunTorchTime
        };
}

function packDifficultyFlags(writer, difficulty, extraAccessory, mode) {
  var $$byte = 0;
  $$byte = $$byte | difficulty;
  $$byte = $$byte | (
    extraAccessory ? 4 : 0
  );
  $$byte = $$byte | (
    mode === /* Journey */1 ? 8 : 0
  );
  return writer.packByte($$byte);
}

function packTorchFlags(writer, usingBiomeTorches, happyFunTorchTime, unlockedBiomeTorches) {
  var $$byte = 0;
  $$byte = $$byte | (
    usingBiomeTorches ? 1 : 0
  );
  $$byte = $$byte | (
    happyFunTorchTime ? 2 : 0
  );
  $$byte = $$byte | (
    unlockedBiomeTorches ? 4 : 0
  );
  return writer.packByte($$byte);
}

function toBuffer(self) {
  return packTorchFlags(packDifficultyFlags(ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$DarkgamingRescriptTerrariapacket.toInt(/* PlayerInfo */3)).packByte(self.playerId).packByte(self.skinVariant).packByte(self.hair).packString(self.name).packByte(self.hairDye).packByte(self.hideVisuals).packByte(self.hideVisuals2).packByte(self.hideMisc).packColor(self.hairColor).packColor(self.skinColor).packColor(self.eyeColor).packColor(self.shirtColor).packColor(self.underShirtColor).packColor(self.pantsColor).packColor(self.shoeColor), self.difficulty, self.extraAccessory, self.mode), self.usingBiomeTorches, self.happyFunTorchTime, self.unlockedBiomeTorches).data;
}

exports.parse = parse;
exports.toBuffer = toBuffer;
/* @popstarfreas/packetfactory/packetreader Not a pure module */
