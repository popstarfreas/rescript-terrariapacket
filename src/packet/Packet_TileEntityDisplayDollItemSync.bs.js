// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var PacketType$TerrariaPacket = require("../PacketType.bs.js");
var ManagedPacketWriter$PacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.bs.js");
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;

function readByte(prim) {
  return prim.readByte();
}

function readInt32(prim) {
  return prim.readInt32();
}

function readUInt16(prim) {
  return prim.readUInt16();
}

function parse(payload) {
  var reader = new Packetreader(payload);
  var playerId = reader.readByte();
  var tileEntityId = reader.readInt32();
  var itemIndex = reader.readByte();
  var itemId = reader.readUInt16();
  var stack = reader.readUInt16();
  var prefix = reader.readByte();
  return {
          playerId: playerId,
          tileEntityId: tileEntityId,
          itemIndex: itemIndex,
          itemId: itemId,
          stack: stack,
          prefix: prefix
        };
}

var Decode = {
  readByte: readByte,
  readInt32: readInt32,
  readUInt16: readUInt16,
  parse: parse
};

function packByte(prim0, prim1) {
  return prim0.packByte(prim1);
}

function packInt32(prim0, prim1) {
  return prim0.packInt32(prim1);
}

function packUInt16(prim0, prim1) {
  return prim0.packUInt16(prim1);
}

function data(prim) {
  return prim.data;
}

function toBuffer(self) {
  return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("TileEntityDisplayDollItemSync")).packByte(self.playerId).packInt32(self.tileEntityId).packByte(self.itemIndex).packUInt16(self.itemId).packUInt16(self.stack).packByte(self.prefix).data;
}

var Encode = {
  Writer: undefined,
  packByte: packByte,
  packInt32: packInt32,
  packUInt16: packUInt16,
  setType: ManagedPacketWriter$PacketFactory.setType,
  data: data,
  toBuffer: toBuffer
};

exports.Decode = Decode;
exports.Encode = Encode;
exports.parse = parse;
exports.toBuffer = toBuffer;
/* @popstarfreas/packetfactory/packetreader Not a pure module */
