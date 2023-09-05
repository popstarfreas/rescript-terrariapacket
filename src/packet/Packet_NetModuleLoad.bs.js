// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var ManagedPacketWriter$PacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.bs.js");
var Networktext = require("@popstarfreas/packetfactory/networktext").default;
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;
var PacketType$DarkgamingRescriptTerrariapacket = require("../PacketType.bs.js");

function fromInt(n) {
  switch (n) {
    case 0 :
        return /* Liquid */0;
    case 1 :
        return /* Text */1;
    case 2 :
        return /* Ping */2;
    case 3 :
        return /* Ambience */3;
    case 4 :
        return /* Bestiary */4;
    case 5 :
        return /* CreativeUnlocks */5;
    case 6 :
        return /* CreativePower */6;
    case 7 :
        return /* CreativeUnlocksPlayerReport */7;
    case 8 :
        return /* TeleportPylon */8;
    case 9 :
        return /* Particles */9;
    case 10 :
        return /* CreativePowerPermissions */10;
    default:
      return ;
  }
}

function toInt(self) {
  return self;
}

var NetModuleType = {
  fromInt: fromInt,
  toInt: toInt
};

function toBuffer(self) {
  switch (self.TAG | 0) {
    case /* Liquid */0 :
        var liquid = self._0;
        var writer = ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$DarkgamingRescriptTerrariapacket.toInt(/* NetModuleLoad */77)).packUInt16(/* Liquid */0).packUInt16(liquid.changes.length);
        liquid.changes.forEach(function (change) {
              writer.packInt16(change.y).packInt16(change.x).packByte(change.amount).packByte(change.liquidType);
            });
        return writer.data;
    case /* ClientText */1 :
        var commandId = self._0;
        var message = self._1;
        return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$DarkgamingRescriptTerrariapacket.toInt(/* NetModuleLoad */77)).packUInt16(/* Text */1).packString(commandId).packString(message).data;
    case /* ServerText */2 :
        var playerId = self._0;
        var networkText = self._1;
        var color = self._2;
        return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$DarkgamingRescriptTerrariapacket.toInt(/* NetModuleLoad */77)).packUInt16(/* Text */1).packByte(playerId).packNetworkText(networkText).packColor(color).data;
    case /* Ping */3 :
        var ping = self._0;
        return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$DarkgamingRescriptTerrariapacket.toInt(/* NetModuleLoad */77)).packUInt16(/* Ping */2).packSingle(ping.x).packSingle(ping.y).data;
    case /* Ambience */4 :
        var ambience = self._0;
        return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$DarkgamingRescriptTerrariapacket.toInt(/* NetModuleLoad */77)).packUInt16(/* Ambience */3).packByte(ambience.playerId).packInt32(ambience.seed).packByte(ambience.skyEntityType).data;
    case /* Bestiary */5 :
        var bestiary = self._0;
        var writer$1 = ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$DarkgamingRescriptTerrariapacket.toInt(/* NetModuleLoad */77)).packUInt16(/* Bestiary */4);
        var _count = bestiary.unlockType;
        (
            typeof _count === "number" ? (
                _count !== 0 ? writer$1.packByte(2) : writer$1.packByte(1)
              ) : writer$1.packByte(0)
          ).packInt16(bestiary.npcId);
        var count = bestiary.unlockType;
        return (
                typeof count === "number" ? writer$1 : writer$1.packUInt16(count._0)
              ).data;
    default:
      return Buffer.allocUnsafe(0);
  }
}

function parse(payload, fromServer) {
  var reader = new Packetreader(payload);
  var moduleType = reader.readUInt16();
  var match = fromInt(moduleType);
  if (match === undefined) {
    return ;
  }
  switch (match) {
    case /* Liquid */0 :
        var changesCount = reader.readUInt16();
        var changes = [];
        for(var _for = 0; _for < changesCount; ++_for){
          var y = reader.readInt16();
          var x = reader.readInt16();
          var amount = reader.readByte();
          var liquidType = reader.readByte();
          changes.push({
                x: x,
                y: y,
                amount: amount,
                liquidType: liquidType
              });
        }
        return {
                TAG: /* Liquid */0,
                _0: {
                  changes: changes
                }
              };
    case /* Text */1 :
        if (fromServer) {
          var playerId = reader.readByte();
          var mode = reader.readByte();
          var message = reader.readString();
          var color = reader.readColor();
          return {
                  TAG: /* ServerText */2,
                  _0: playerId,
                  _1: new Networktext(mode, message),
                  _2: color
                };
        }
        var commandId = reader.readString();
        var message$1 = reader.readString();
        return {
                TAG: /* ClientText */1,
                _0: commandId,
                _1: message$1
              };
    case /* Ping */2 :
        var x$1 = reader.readSingle();
        var y$1 = reader.readSingle();
        return {
                TAG: /* Ping */3,
                _0: {
                  x: x$1,
                  y: y$1
                }
              };
    case /* Ambience */3 :
        var playerId$1 = reader.readByte();
        var seed = reader.readInt32();
        var skyEntityType = reader.readByte();
        return {
                TAG: /* Ambience */4,
                _0: {
                  playerId: playerId$1,
                  seed: seed,
                  skyEntityType: skyEntityType
                }
              };
    case /* Bestiary */4 :
        var rawBestiaryUnlockType = reader.readByte();
        var npcId = reader.readInt16();
        var bestiaryUnlockType;
        switch (rawBestiaryUnlockType) {
          case 0 :
              bestiaryUnlockType = /* Kill */{
                _0: reader.readUInt16()
              };
              break;
          case 1 :
              bestiaryUnlockType = /* Sight */0;
              break;
          case 2 :
              bestiaryUnlockType = /* Chat */1;
              break;
          default:
            bestiaryUnlockType = undefined;
        }
        if (bestiaryUnlockType !== undefined) {
          return {
                  TAG: /* Bestiary */5,
                  _0: {
                    unlockType: bestiaryUnlockType,
                    npcId: npcId
                  }
                };
        } else {
          return ;
        }
    case /* CreativeUnlocks */5 :
        var itemId = reader.readInt16();
        var researchedCount = reader.readUInt16();
        return {
                TAG: /* CreativeUnlocks */6,
                _0: {
                  itemId: itemId,
                  researchedCount: researchedCount
                }
              };
    case /* CreativePower */6 :
        var powerType = reader.readUInt16();
        return {
                TAG: /* CreativePower */7,
                _0: {
                  powerType: powerType
                }
              };
    case /* CreativeUnlocksPlayerReport */7 :
        reader.readByte();
        var itemId$1 = reader.readUInt16();
        var researchedCount$1 = reader.readUInt16();
        return {
                TAG: /* CreativeUnlocksPlayerReport */8,
                _0: {
                  itemId: itemId$1,
                  researchedCount: researchedCount$1
                }
              };
    case /* TeleportPylon */8 :
        var rawPylonAction = reader.readByte();
        var x$2 = reader.readInt16();
        var y$2 = reader.readInt16();
        var pylonType = reader.readByte();
        var pylonAction;
        switch (rawPylonAction) {
          case 0 :
              pylonAction = /* Added */0;
              break;
          case 1 :
              pylonAction = /* Removed */1;
              break;
          case 2 :
              pylonAction = /* RequestTeleport */2;
              break;
          default:
            pylonAction = undefined;
        }
        if (pylonAction !== undefined) {
          return {
                  TAG: /* TeleportPylon */9,
                  _0: {
                    pylonAction: pylonAction,
                    x: x$2,
                    y: y$2,
                    pylonType: pylonType
                  }
                };
        } else {
          return ;
        }
    case /* Particles */9 :
        var particleType = reader.readByte();
        var x$3 = reader.readSingle();
        var y$3 = reader.readSingle();
        var vx = reader.readSingle();
        var vy = reader.readSingle();
        var shaderIndex = reader.readInt32();
        var invokedByPlayer = reader.readByte();
        return {
                TAG: /* Particles */10,
                _0: {
                  particleType: particleType,
                  x: x$3,
                  y: y$3,
                  vx: vx,
                  vy: vy,
                  shaderIndex: shaderIndex,
                  invokedByPlayer: invokedByPlayer
                }
              };
    case /* CreativePowerPermissions */10 :
        reader.readByte();
        var powerType$1 = reader.readUInt16();
        var rawPowerLevel = reader.readByte();
        var powerLevel;
        switch (rawPowerLevel) {
          case 0 :
              powerLevel = /* LockedForEveryone */0;
              break;
          case 1 :
              powerLevel = /* CanBeChangedByHostAlone */1;
              break;
          case 2 :
              powerLevel = /* CanBeChangedByEveryone */2;
              break;
          default:
            powerLevel = undefined;
        }
        if (powerLevel !== undefined) {
          return {
                  TAG: /* CreativePowerPermissions */11,
                  _0: {
                    powerType: powerType$1,
                    powerLevel: powerLevel
                  }
                };
        } else {
          return ;
        }
    
  }
}

exports.NetModuleType = NetModuleType;
exports.toBuffer = toBuffer;
exports.parse = parse;
/* @popstarfreas/packetfactory/networktext Not a pure module */
