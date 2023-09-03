// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var PacketType$TerrariaPacket = require("../PacketType.bs.js");
var ManagedPacketWriter$PacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.bs.js");
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;

function readInt16(prim) {
  return prim.readInt16();
}

function parse(payload) {
  var reader = new Packetreader(payload);
  var items = [];
  for(var _for = 1; _for <= 40; ++_for){
    items.push(reader.readInt16());
  }
  return {
          items: items
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

function toBuffer(self) {
  var writer = ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt(/* TravellingMerchantInventory */67));
  self.items.forEach(function (item) {
        writer.packInt16(item);
      });
  return writer.data;
}

var Encode = {
  Writer: undefined,
  packInt16: packInt16,
  setType: ManagedPacketWriter$PacketFactory.setType,
  data: data,
  toBuffer: toBuffer
};

exports.Decode = Decode;
exports.Encode = Encode;
exports.parse = parse;
exports.toBuffer = toBuffer;
/* @popstarfreas/packetfactory/packetreader Not a pure module */