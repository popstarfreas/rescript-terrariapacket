// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var ManagedPacketWriter$PacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.bs.js");
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;
var PacketType$DarkgamingRescriptTerrariapacket = require("../PacketType.bs.js");

function readInt16(prim) {
  return prim.readInt16();
}

function parse(payload) {
  var reader = new Packetreader(payload);
  var playerId = reader.readInt16();
  var npcType = reader.readInt16();
  var spawnType;
  switch (npcType) {
    case -14 :
        spawnType = /* BoughtBunny */12;
        break;
    case -13 :
        spawnType = /* BoughtDog */11;
        break;
    case -12 :
        spawnType = /* BoughtCat */10;
        break;
    case -11 :
        spawnType = /* CombatBookUsed */9;
        break;
    case -10 :
        spawnType = /* BloodMoon */8;
        break;
    case -9 :
        spawnType = /* Npc */{
          _0: npcType
        };
        break;
    case -8 :
        spawnType = /* ImpendingDoom */7;
        break;
    case -7 :
        spawnType = /* MartianMoon */6;
        break;
    case -6 :
        spawnType = /* Eclipse */5;
        break;
    case -5 :
        spawnType = /* SnowMoon */4;
        break;
    case -4 :
        spawnType = /* PumpkinMoon */3;
        break;
    case -3 :
        spawnType = /* PirateInvasion */2;
        break;
    case -2 :
        spawnType = /* FrostInvasion */1;
        break;
    case -1 :
        spawnType = /* GoblinInvasion */0;
        break;
    default:
      spawnType = /* Npc */{
        _0: npcType
      };
  }
  return {
          playerId: playerId,
          spawnType: spawnType
        };
}

var Decode = {
  readInt16: readInt16,
  parse: parse
};

function packInt16(prim0, prim1) {
  return prim0.packInt16(prim1);
}

function data(prim) {
  return prim.data;
}

function packSpawnType(writer, spawnType) {
  if (typeof spawnType !== "number") {
    return writer.packInt16(spawnType._0);
  }
  switch (spawnType) {
    case /* GoblinInvasion */0 :
        return writer.packInt16(-1);
    case /* FrostInvasion */1 :
        return writer.packInt16(-2);
    case /* PirateInvasion */2 :
        return writer.packInt16(-3);
    case /* PumpkinMoon */3 :
        return writer.packInt16(-4);
    case /* SnowMoon */4 :
        return writer.packInt16(-5);
    case /* Eclipse */5 :
        return writer.packInt16(-6);
    case /* MartianMoon */6 :
        return writer.packInt16(-7);
    case /* ImpendingDoom */7 :
        return writer.packInt16(-8);
    case /* BloodMoon */8 :
        return writer.packInt16(-10);
    case /* CombatBookUsed */9 :
        return writer.packInt16(-11);
    case /* BoughtCat */10 :
        return writer.packInt16(-12);
    case /* BoughtDog */11 :
        return writer.packInt16(-13);
    case /* BoughtBunny */12 :
        return writer.packInt16(-14);
    
  }
}

function toBuffer(self) {
  return packSpawnType(ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$DarkgamingRescriptTerrariapacket.toInt(/* BossOrInvasionSpawn */56)).packInt16(self.playerId), self.spawnType).data;
}

var Encode = {
  Writer: undefined,
  packInt16: packInt16,
  setType: ManagedPacketWriter$PacketFactory.setType,
  data: data,
  packSpawnType: packSpawnType,
  toBuffer: toBuffer
};

exports.Decode = Decode;
exports.Encode = Encode;
exports.parse = parse;
exports.toBuffer = toBuffer;
/* @popstarfreas/packetfactory/packetreader Not a pure module */
