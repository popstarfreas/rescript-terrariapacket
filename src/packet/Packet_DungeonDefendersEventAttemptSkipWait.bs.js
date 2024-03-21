// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml_option = require("rescript/lib/js/caml_option.js");
var PacketType$TerrariaPacket = require("../PacketType.bs.js");
var ManagedPacketWriter$PacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.bs.js");
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;

function parse(_payload) {
  return Caml_option.some(undefined);
}

var Decode = {
  parse: parse
};

function packByte(prim0, prim1) {
  return prim0.packByte(prim1);
}

function packInt32(prim0, prim1) {
  return prim0.packInt32(prim1);
}

function packSingle(prim0, prim1) {
  return prim0.packSingle(prim1);
}

function data(prim) {
  return prim.data;
}

function toBuffer(_self) {
  return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("DungeonDefendersEventAttemptSkipWait")).data;
}

var Encode = {
  Writer: undefined,
  packByte: packByte,
  packInt32: packInt32,
  packSingle: packSingle,
  setType: ManagedPacketWriter$PacketFactory.setType,
  data: data,
  toBuffer: toBuffer
};

exports.Decode = Decode;
exports.Encode = Encode;
exports.parse = parse;
exports.toBuffer = toBuffer;
/* @popstarfreas/packetfactory/packetwriter Not a pure module */
