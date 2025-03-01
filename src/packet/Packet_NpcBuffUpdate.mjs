// Generated by ReScript, PLEASE EDIT WITH CARE

import * as PervasivesU from "@rescript/std/lib/es6/pervasivesU.js";
import * as PacketType$TerrariaPacket from "../PacketType.mjs";
import * as ManagedPacketWriter$PacketFactory from "@popstarfreas/packetfactory/src/ManagedPacketWriter.mjs";
import Packetreader from "@popstarfreas/packetfactory/packetreader";
import Packetwriter from "@popstarfreas/packetfactory/packetwriter";

function readUInt16(prim) {
  return prim.readUInt16();
}

function readInt16(prim) {
  return prim.readInt16();
}

function readByte(prim) {
  return prim.readByte();
}

function parse(payload) {
  var reader = new Packetreader(payload);
  var npcId = reader.readInt16();
  var buffs = [];
  var buffTimes = [];
  for(var _i = 1; _i <= 20; ++_i){
    buffs.push(reader.readUInt16());
    buffTimes.push(reader.readInt16());
  }
  return {
          npcId: npcId,
          buffs: buffs,
          buffTimes: buffTimes
        };
}

var Decode = {
  readUInt16: readUInt16,
  readInt16: readInt16,
  readByte: readByte,
  parse: parse
};

function packByte(prim0, prim1) {
  return prim0.packByte(prim1);
}

function packInt16(prim0, prim1) {
  return prim0.packInt16(prim1);
}

function packUInt16(prim0, prim1) {
  return prim0.packUInt16(prim1);
}

function data(prim) {
  return prim.data;
}

function packBuffs(writer, buffs) {
  buffs.forEach(function (buff) {
        writer.packUInt16(buff);
      });
  return writer;
}

function packBuffTimes(writer, buffTimes) {
  buffTimes.forEach(function (buff) {
        writer.packInt16(buff);
      });
  return writer;
}

function toBuffer(self) {
  if (self.buffs.length !== 20) {
    PervasivesU.failwith("Expected 20 buffs, got " + self.buffs.length.toString());
  }
  return packBuffTimes(packBuffs(ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("NpcBuffUpdate")).packByte(self.npcId), self.buffs), self.buffTimes).data;
}

var Encode = {
  packByte: packByte,
  packInt16: packInt16,
  packUInt16: packUInt16,
  setType: ManagedPacketWriter$PacketFactory.setType,
  data: data,
  packBuffs: packBuffs,
  packBuffTimes: packBuffTimes,
  toBuffer: toBuffer
};

export {
  Decode ,
  Encode ,
  parse ,
  toBuffer ,
}
/* @popstarfreas/packetfactory/packetreader Not a pure module */
