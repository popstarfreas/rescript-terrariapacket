// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Belt_Option = require("rescript/lib/js/belt_Option.js");
var BitFlags$TerrariaPacket = require("../BitFlags.js");
var PacketType$TerrariaPacket = require("../PacketType.js");
var ManagedPacketWriter$PacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.js");
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;

function readSingle(prim) {
  return prim.readSingle();
}

function readInt16(prim) {
  return prim.readInt16();
}

function readByte(prim) {
  return prim.readByte();
}

function parse(payload) {
  var reader = new Packetreader(payload);
  var projectileId = reader.readInt16();
  var x = reader.readSingle();
  var y = reader.readSingle();
  var vx = reader.readSingle();
  var vy = reader.readSingle();
  var owner = reader.readByte();
  var projectileType = reader.readInt16();
  var flags = BitFlags$TerrariaPacket.fromByte(reader.readByte());
  var ai_0 = BitFlags$TerrariaPacket.flag1(flags) ? reader.readSingle() : undefined;
  var ai_1 = BitFlags$TerrariaPacket.flag2(flags) ? reader.readSingle() : undefined;
  var ai = [
    ai_0,
    ai_1
  ];
  var damage = BitFlags$TerrariaPacket.flag5(flags) ? reader.readInt16() : undefined;
  var knockback = BitFlags$TerrariaPacket.flag6(flags) ? reader.readSingle() : undefined;
  var originalDamage = BitFlags$TerrariaPacket.flag7(flags) ? reader.readInt16() : undefined;
  var projectileUuid = BitFlags$TerrariaPacket.flag8(flags) ? reader.readInt16() : undefined;
  return {
          projectileId: projectileId,
          x: x,
          y: y,
          vx: vx,
          vy: vy,
          owner: owner,
          projectileType: projectileType,
          ai: ai,
          damage: damage,
          knockback: knockback,
          originalDamage: originalDamage,
          projectileUuid: projectileUuid
        };
}

var Decode = {
  readSingle: readSingle,
  readInt16: readInt16,
  readByte: readByte,
  parse: parse
};

function packSingle(prim0, prim1) {
  return prim0.packSingle(prim1);
}

function packInt16(prim0, prim1) {
  return prim0.packInt16(prim1);
}

function packByte(prim0, prim1) {
  return prim0.packByte(prim1);
}

function data(prim) {
  return prim.data;
}

function packOptionalData(writer, self) {
  var match = self.ai;
  var ai1 = match[1];
  var ai0 = match[0];
  var bitFlags = BitFlags$TerrariaPacket.fromFlags(Belt_Option.isSome(ai0), Belt_Option.isSome(ai1), false, false, Belt_Option.isSome(self.damage), Belt_Option.isSome(self.knockback), Belt_Option.isSome(self.originalDamage), Belt_Option.isSome(self.projectileUuid));
  if (BitFlags$TerrariaPacket.flag1(bitFlags)) {
    writer.packSingle(ai0);
  }
  if (BitFlags$TerrariaPacket.flag2(bitFlags)) {
    writer.packSingle(ai1);
  }
  if (BitFlags$TerrariaPacket.flag5(bitFlags)) {
    writer.packInt16(self.damage);
  }
  if (BitFlags$TerrariaPacket.flag6(bitFlags)) {
    writer.packSingle(self.knockback);
  }
  if (BitFlags$TerrariaPacket.flag7(bitFlags)) {
    writer.packInt16(self.originalDamage);
  }
  if (BitFlags$TerrariaPacket.flag8(bitFlags)) {
    writer.packInt16(self.projectileUuid);
  }
  return writer;
}

function toBuffer(self) {
  return packOptionalData(ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt(/* ProjectileSync */23)).packInt16(self.projectileId).packSingle(self.x).packSingle(self.y).packSingle(self.vx).packSingle(self.vy).packByte(self.owner).packInt16(self.projectileType), self).data;
}

var Encode = {
  packSingle: packSingle,
  packInt16: packInt16,
  packByte: packByte,
  setType: ManagedPacketWriter$PacketFactory.setType,
  data: data,
  packOptionalData: packOptionalData,
  toBuffer: toBuffer
};

exports.Decode = Decode;
exports.Encode = Encode;
exports.parse = parse;
exports.toBuffer = toBuffer;
/* @popstarfreas/packetfactory/packetreader Not a pure module */
