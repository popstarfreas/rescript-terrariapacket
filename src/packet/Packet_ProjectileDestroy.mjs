// Generated by ReScript, PLEASE EDIT WITH CARE

import * as PacketType$TerrariaPacket from "../PacketType.mjs";
import * as ManagedPacketWriter$PacketFactory from "@popstarfreas/packetfactory/src/ManagedPacketWriter.mjs";
import Packetreader from "@popstarfreas/packetfactory/packetreader";
import Packetwriter from "@popstarfreas/packetfactory/packetwriter";

function readByte(prim) {
  return prim.readByte();
}

function readInt16(prim) {
  return prim.readInt16();
}

function parse(payload) {
  var reader = new Packetreader(payload);
  var projectileId = reader.readInt16();
  var owner = reader.readByte();
  return {
          projectileId: projectileId,
          owner: owner
        };
}

var Decode = {
  readByte: readByte,
  readInt16: readInt16,
  parse: parse
};

function packByte(prim0, prim1) {
  return prim0.packByte(prim1);
}

function packInt16(prim0, prim1) {
  return prim0.packInt16(prim1);
}

function data(prim) {
  return prim.data;
}

function toBuffer(self) {
  return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("ProjectileDestroy")).packInt16(self.projectileId).packByte(self.owner).data;
}

var Encode = {
  packByte: packByte,
  packInt16: packInt16,
  setType: ManagedPacketWriter$PacketFactory.setType,
  data: data,
  toBuffer: toBuffer
};

export {
  Decode ,
  Encode ,
  parse ,
  toBuffer ,
}
/* @popstarfreas/packetfactory/packetreader Not a pure module */
