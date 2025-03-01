// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Belt_Option from "@rescript/std/lib/es6/belt_Option.js";
import * as PacketType$TerrariaPacket from "../PacketType.mjs";
import * as ManagedPacketWriter$PacketFactory from "@popstarfreas/packetfactory/src/ManagedPacketWriter.mjs";
import Packetreader from "@popstarfreas/packetfactory/packetreader";
import Packetwriter from "@popstarfreas/packetfactory/packetwriter";

function fromInt(num) {
  switch (num) {
    case 0 :
        return "CreditsTimeRemainingSet";
    case 1 :
        return "CopperSlimeTransform";
    case 2 :
        return "ElderSlimeTransform";
    default:
      return ;
  }
}

function toInt(eventType) {
  switch (eventType) {
    case "CreditsTimeRemainingSet" :
        return 0;
    case "CopperSlimeTransform" :
        return 1;
    case "ElderSlimeTransform" :
        return 2;
    
  }
}

var EventType = {
  fromInt: fromInt,
  toInt: toInt
};

function readByte(prim) {
  return prim.readByte();
}

function readInt32(prim) {
  return prim.readInt32();
}

function parse(payload) {
  var reader = new Packetreader(payload);
  var eventType = reader.readByte();
  var value = reader.readInt32();
  return Belt_Option.map(fromInt(eventType), (function (eventType) {
                return {
                        eventType: eventType,
                        value: value
                      };
              }));
}

var Decode = {
  readByte: readByte,
  readInt32: readInt32,
  parse: parse
};

function packByte(prim0, prim1) {
  return prim0.packByte(prim1);
}

function packInt32(prim0, prim1) {
  return prim0.packInt32(prim1);
}

function data(prim) {
  return prim.data;
}

function toBuffer(self) {
  return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("CreditsOrSlimeTransform")).packByte(toInt(self.eventType)).packInt32(self.value).data;
}

var Encode = {
  Writer: undefined,
  packByte: packByte,
  packInt32: packInt32,
  setType: ManagedPacketWriter$PacketFactory.setType,
  data: data,
  toBuffer: toBuffer
};

var $$Option;

export {
  $$Option ,
  EventType ,
  Decode ,
  Encode ,
  parse ,
  toBuffer ,
}
/* @popstarfreas/packetfactory/packetreader Not a pure module */
