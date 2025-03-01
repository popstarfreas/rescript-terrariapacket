// Generated by ReScript, PLEASE EDIT WITH CARE

import * as PacketType$TerrariaPacket from "../PacketType.mjs";
import * as ManagedPacketWriter$PacketFactory from "@popstarfreas/packetfactory/src/ManagedPacketWriter.mjs";
import Packetreader from "@popstarfreas/packetfactory/packetreader";
import Packetwriter from "@popstarfreas/packetfactory/packetwriter";

function parse(payload) {
  var reader = new Packetreader(payload);
  var itemDropId = reader.readInt16();
  var owner = reader.readByte();
  return {
          itemDropId: itemDropId,
          owner: owner
        };
}

function toBuffer(self) {
  return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("ItemOwner")).packInt16(self.itemDropId).packByte(self.owner).data;
}

export {
  parse ,
  toBuffer ,
}
/* @popstarfreas/packetfactory/packetreader Not a pure module */
