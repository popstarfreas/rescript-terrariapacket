// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var PacketWriter$PacketFactory = require("@popstarfreas/packetfactory/src/PacketWriter.bs.js");
var ManagedPacketWriter$PacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.bs.js");
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;
var PacketType$DarkgamingRescriptTerrariapacket = require("../../PacketType.bs.js");
var Dumbpacketwriter = require("@popstarfreas/packetfactory/dumbpacketwriter").default;

function readString(prim) {
  return prim.readString();
}

function parse(payload) {
  var reader = new Packetreader(payload);
  var version = reader.readString();
  return {
          version: version
        };
}

var Decode = {
  readString: readString,
  parse: parse
};

function packIntoBufferUnsafe(self, buffer) {
  return PacketWriter$PacketFactory.setType(new Dumbpacketwriter(buffer), PacketType$DarkgamingRescriptTerrariapacket.toInt(/* ConnectRequest */0)).packString(self.version).packedLength;
}

function packString(prim0, prim1) {
  return prim0.packString(prim1);
}

function data(prim) {
  return prim.data;
}

function toBuffer(self) {
  return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$DarkgamingRescriptTerrariapacket.toInt(/* ConnectRequest */0)).packString(self.version).data;
}

var Encode = {
  packIntoBufferUnsafe: packIntoBufferUnsafe,
  packString: packString,
  setType: ManagedPacketWriter$PacketFactory.setType,
  data: data,
  toBuffer: toBuffer
};

exports.Decode = Decode;
exports.Encode = Encode;
exports.parse = parse;
exports.toBuffer = toBuffer;
/* @popstarfreas/packetfactory/packetreader Not a pure module */
