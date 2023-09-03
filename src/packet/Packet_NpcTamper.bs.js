// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var PacketType$TerrariaPacket = require("../PacketType.bs.js");
var ManagedPacketWriter$PacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.bs.js");
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;

function fromInt(playerId) {
  if (playerId !== -1) {
    return /* PlayerId */{
            _0: playerId
          };
  } else {
    return /* All */0;
  }
}

function toInt(self) {
  if (self) {
    return self._0;
  } else {
    return -1;
  }
}

var Immunity = {
  fromInt: fromInt,
  toInt: toInt
};

function readUInt16(prim) {
  return prim.readUInt16();
}

function readByte(prim) {
  return prim.readByte();
}

function readInt32(prim) {
  return prim.readInt32();
}

function readInt16(prim) {
  return prim.readInt16();
}

function parse(payload) {
  var reader = new Packetreader(payload);
  var npcId = reader.readUInt16();
  var setNpcImmunity = reader.readByte() === 1;
  var immunityTime = setNpcImmunity ? reader.readInt32() : undefined;
  var immunityFromPlayerId = fromInt(reader.readInt16());
  return {
          npcId: npcId,
          immunityTime: immunityTime,
          immunityFromPlayerId: immunityFromPlayerId
        };
}

var Decode = {
  readUInt16: readUInt16,
  readByte: readByte,
  readInt32: readInt32,
  readInt16: readInt16,
  parse: parse
};

function packUInt16(prim0, prim1) {
  return prim0.packUInt16(prim1);
}

function packByte(prim0, prim1) {
  return prim0.packByte(prim1);
}

function packInt32(prim0, prim1) {
  return prim0.packInt32(prim1);
}

function packInt16(prim0, prim1) {
  return prim0.packInt16(prim1);
}

function data(prim) {
  return prim.data;
}

function packImmunityTime(writer, immunityTime) {
  if (immunityTime !== undefined) {
    return writer.packByte(1).packInt32(immunityTime);
  } else {
    return writer.packByte(0);
  }
}

function toBuffer(self) {
  return packImmunityTime(ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt(/* NpcTamper */126)).packUInt16(self.npcId), self.immunityTime).packInt16(toInt(self.immunityFromPlayerId)).data;
}

var Encode = {
  packUInt16: packUInt16,
  packByte: packByte,
  packInt32: packInt32,
  packInt16: packInt16,
  setType: ManagedPacketWriter$PacketFactory.setType,
  data: data,
  packImmunityTime: packImmunityTime,
  toBuffer: toBuffer
};

var $$Option;

exports.$$Option = $$Option;
exports.Immunity = Immunity;
exports.Decode = Decode;
exports.Encode = Encode;
exports.parse = parse;
exports.toBuffer = toBuffer;
/* @popstarfreas/packetfactory/packetreader Not a pure module */