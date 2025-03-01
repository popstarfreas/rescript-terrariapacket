// Generated by ReScript, PLEASE EDIT WITH CARE

import * as BitFlags$TerrariaPacket from "../BitFlags.mjs";
import * as PacketType$TerrariaPacket from "../PacketType.mjs";
import * as PlayerDeathReason$TerrariaPacket from "../PlayerDeathReason.mjs";
import * as ManagedPacketWriter$PacketFactory from "@popstarfreas/packetfactory/src/ManagedPacketWriter.mjs";
import Packetreader from "@popstarfreas/packetfactory/packetreader";
import Packetwriter from "@popstarfreas/packetfactory/packetwriter";

function readDamageFlags(reader) {
  var flags = BitFlags$TerrariaPacket.fromByte(reader.readByte());
  return {
          critical: BitFlags$TerrariaPacket.flag1(flags),
          pvp: BitFlags$TerrariaPacket.flag2(flags)
        };
}

function parse(payload) {
  var reader = new Packetreader(payload);
  var target = reader.readByte();
  var deathReason = PlayerDeathReason$TerrariaPacket.readDeathReason(reader);
  var damage = reader.readInt16();
  var hitDirection = reader.readByte();
  var damageFlags = readDamageFlags(reader);
  var critical = damageFlags.critical;
  var pvp = damageFlags.pvp;
  var cooldownCounter = reader.readSByte();
  return {
          target: target,
          deathReason: deathReason,
          damage: damage,
          hitDirection: hitDirection,
          critical: critical,
          pvp: pvp,
          cooldownCounter: cooldownCounter
        };
}

function toBuffer(self) {
  var damageFlags = function (self) {
    return BitFlags$TerrariaPacket.toByte(BitFlags$TerrariaPacket.fromFlags(self.critical, self.pvp, false, false, false, false, false, false));
  };
  return PlayerDeathReason$TerrariaPacket.packDeathReason(ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("PlayerDamage")).packByte(self.target), self.deathReason).packInt16(self.damage).packByte(self.hitDirection).packByte(damageFlags(self)).packSByte(self.cooldownCounter).data;
}

export {
  parse ,
  toBuffer ,
}
/* @popstarfreas/packetfactory/packetreader Not a pure module */
