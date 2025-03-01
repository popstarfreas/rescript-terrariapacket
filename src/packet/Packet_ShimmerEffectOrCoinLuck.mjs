// Generated by ReScript, PLEASE EDIT WITH CARE

import * as PacketType$TerrariaPacket from "../PacketType.mjs";
import * as ManagedPacketWriter$PacketFactory from "@popstarfreas/packetfactory/src/ManagedPacketWriter.mjs";
import Packetreader from "@popstarfreas/packetfactory/packetreader";
import Packetwriter from "@popstarfreas/packetfactory/packetwriter";

function readByte(prim) {
  return prim.readByte();
}

function readInt32(prim) {
  return prim.readInt32();
}

function readSingle(prim) {
  return prim.readSingle();
}

function parse(payload) {
  var reader = new Packetreader(payload);
  var match = reader.readByte();
  switch (match) {
    case 0 :
        return {
                TAG: "ShimmerEffect",
                _0: reader.readSingle(),
                _1: reader.readSingle()
              };
    case 1 :
        return {
                TAG: "CoinLuck",
                _0: {
                  position: {
                    x: reader.readSingle(),
                    y: reader.readSingle()
                  },
                  amount: reader.readInt32()
                }
              };
    case 2 :
        return {
                TAG: "NewShimmerEffect",
                _0: reader.readInt32()
              };
    default:
      return ;
  }
}

var Decode = {
  readByte: readByte,
  readInt32: readInt32,
  readSingle: readSingle,
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

function toBuffer(self) {
  var writer = ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("ShimmerEffectOrCoinLuck"));
  var tmp;
  switch (self.TAG) {
    case "ShimmerEffect" :
        tmp = writer.packByte(0).packSingle(self._0).packSingle(self._1);
        break;
    case "CoinLuck" :
        var match = self._0;
        var position = match.position;
        tmp = writer.packByte(1).packSingle(position.x).packSingle(position.y).packInt32(match.amount);
        break;
    case "NewShimmerEffect" :
        tmp = writer.packByte(2).packInt32(self._0);
        break;
    
  }
  return tmp.data;
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

export {
  Decode ,
  Encode ,
  parse ,
  toBuffer ,
}
/* @popstarfreas/packetfactory/packetreader Not a pure module */
