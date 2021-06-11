// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml_option = require("rescript/lib/js/caml_option.js");
var PacketType$TerrariaPacket = require("../PacketType.js");
var ManagedPacketWriter$PacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.js");
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;

function parse(_payload) {
  return Caml_option.some(undefined);
}

var Decode = {
  parse: parse
};

function data(prim) {
  return prim.data;
}

function toBuffer(_self) {
  return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt(/* WorldDataRequest */5)).data;
}

var Encode = {
  setType: ManagedPacketWriter$PacketFactory.setType,
  data: data,
  toBuffer: toBuffer
};

exports.Decode = Decode;
exports.Encode = Encode;
exports.parse = parse;
exports.toBuffer = toBuffer;
/* @popstarfreas/packetfactory/packetwriter Not a pure module */
