// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml_obj = require("rescript/lib/js/caml_obj.js");
var Nodezlib = require("node:zlib");
var Belt_Array = require("rescript/lib/js/belt_Array.js");
var Belt_Option = require("rescript/lib/js/belt_Option.js");
var Belt_Result = require("rescript/lib/js/belt_Result.js");
var BitFlags$TerrariaPacket = require("../BitFlags.bs.js");
var ResultExt$TerrariaPacket = require("../ResultExt.bs.js");
var TileSolid$TerrariaPacket = require("../TileSolid.bs.js");
var PacketType$TerrariaPacket = require("../PacketType.bs.js");
var ManagedPacketWriter$PacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.bs.js");
var TileFrameImportant$TerrariaPacket = require("../TileFrameImportant.bs.js");
var Bufferreader = require("@popstarfreas/packetfactory/bufferreader").default;
var Bufferwriter = require("@popstarfreas/packetfactory/bufferwriter").default;
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;

function defaultTileCache() {
  return {
          activeTile: undefined,
          color: undefined,
          wallColor: undefined,
          wall: undefined,
          liquid: undefined,
          lava: false,
          honey: false,
          wire: false,
          wire2: false,
          wire3: false,
          wire4: false,
          halfBrick: false,
          slope: undefined,
          actuator: false,
          inActive: false
        };
}

function cacheToTile(cache) {
  return {
          activeTile: cache.activeTile,
          color: cache.color,
          wallColor: cache.wallColor,
          wall: cache.wall,
          liquid: cache.liquid,
          lava: cache.lava,
          honey: cache.honey,
          wire: cache.wire,
          wire2: cache.wire2,
          wire3: cache.wire3,
          wire4: cache.wire4,
          halfBrick: cache.halfBrick,
          slope: cache.slope,
          actuator: cache.actuator,
          inActive: cache.inActive
        };
}

function readString(prim) {
  return prim.readString();
}

function readInt16(prim) {
  return prim.readInt16();
}

function readUInt16(prim) {
  return prim.readUInt16();
}

function readInt32(prim) {
  return prim.readInt32();
}

function readByte(prim) {
  return prim.readByte();
}

function parse(reader) {
  var id = reader.readInt16();
  var x = reader.readInt16();
  var y = reader.readInt16();
  var name = reader.readString();
  return {
          id: id,
          x: x,
          y: y,
          name: name
        };
}

function packByte(prim0, prim1) {
  return prim0.packByte(prim1);
}

function packInt16(prim0, prim1) {
  return prim0.packInt16(prim1);
}

function packString(prim0, prim1) {
  return prim0.packString(prim1);
}

function pack(writer, chest) {
  return writer.packInt16(chest.id).packInt16(chest.x).packInt16(chest.y).packString(chest.name);
}

var Chest = {
  readString: readString,
  readInt16: readInt16,
  readUInt16: readUInt16,
  readInt32: readInt32,
  readByte: readByte,
  parse: parse,
  packByte: packByte,
  packInt16: packInt16,
  packString: packString,
  pack: pack
};

function readString$1(prim) {
  return prim.readString();
}

function readInt16$1(prim) {
  return prim.readInt16();
}

function readUInt16$1(prim) {
  return prim.readUInt16();
}

function readInt32$1(prim) {
  return prim.readInt32();
}

function readByte$1(prim) {
  return prim.readByte();
}

function parse$1(reader) {
  var id = reader.readInt16();
  var x = reader.readInt16();
  var y = reader.readInt16();
  var name = reader.readString();
  return {
          id: id,
          x: x,
          y: y,
          name: name
        };
}

function packByte$1(prim0, prim1) {
  return prim0.packByte(prim1);
}

function packInt16$1(prim0, prim1) {
  return prim0.packInt16(prim1);
}

function packString$1(prim0, prim1) {
  return prim0.packString(prim1);
}

function pack$1(writer, sign) {
  return writer.packInt16(sign.id).packInt16(sign.x).packInt16(sign.y).packString(sign.name);
}

var Sign = {
  readString: readString$1,
  readInt16: readInt16$1,
  readUInt16: readUInt16$1,
  readInt32: readInt32$1,
  readByte: readByte$1,
  parse: parse$1,
  packByte: packByte$1,
  packInt16: packInt16$1,
  packString: packString$1,
  pack: pack$1
};

function readString$2(prim) {
  return prim.readString();
}

function readInt16$2(prim) {
  return prim.readInt16();
}

function readUInt16$2(prim) {
  return prim.readUInt16();
}

function readInt32$2(prim) {
  return prim.readInt32();
}

function readByte$2(prim) {
  return prim.readByte();
}

function parseTrainingDummyKind(reader) {
  return {
          npcSlotId: reader.readInt16()
        };
}

function parseDisplayItem(reader) {
  var netId = reader.readInt16();
  var prefix = reader.readByte();
  var stack = reader.readInt16();
  return {
          netId: netId,
          prefix: prefix,
          stack: stack
        };
}

function parseLogicSensorKind(reader) {
  var checkType = reader.readByte();
  var on = reader.readByte() === 1;
  return {
          checkType: checkType,
          on: on
        };
}

function parseDisplayDollKind(reader) {
  var itemsFlags = BitFlags$TerrariaPacket.fromByte(reader.readByte());
  var dyeFlags = BitFlags$TerrariaPacket.fromByte(reader.readByte());
  var items = [];
  var dyes = [];
  for(var i = 0; i <= 7; ++i){
    if (BitFlags$TerrariaPacket.flagN(itemsFlags, i)) {
      items.push(parseDisplayItem(reader));
    } else {
      items.push(undefined);
    }
  }
  for(var i$1 = 0; i$1 <= 7; ++i$1){
    if (BitFlags$TerrariaPacket.flagN(dyeFlags, i$1)) {
      dyes.push(parseDisplayItem(reader));
    } else {
      dyes.push(undefined);
    }
  }
  return {
          items: items,
          dyes: dyes
        };
}

function parseHatRackKind(reader) {
  var flags = BitFlags$TerrariaPacket.fromByte(reader.readByte());
  var items = [];
  var dyes = [];
  for(var i = 0; i <= 1; ++i){
    if (BitFlags$TerrariaPacket.flagN(flags, i)) {
      items.push(parseDisplayItem(reader));
    } else {
      items.push(undefined);
    }
  }
  for(var i$1 = 0; i$1 <= 1; ++i$1){
    if (BitFlags$TerrariaPacket.flagN(flags, i$1 + 2 | 0)) {
      dyes.push(parseDisplayItem(reader));
    } else {
      dyes.push(undefined);
    }
  }
  return {
          items: items,
          dyes: dyes
        };
}

function parse$2(reader) {
  var entityType = reader.readByte();
  var x = reader.readInt16();
  var y = reader.readInt16();
  var entityKind;
  switch (entityType) {
    case 0 :
        entityKind = {
          TAG: "Ok",
          _0: {
            TAG: "TrainingDummy",
            _0: {
              npcSlotId: reader.readInt16()
            }
          }
        };
        break;
    case 1 :
        entityKind = {
          TAG: "Ok",
          _0: {
            TAG: "ItemFrame",
            _0: parseDisplayItem(reader)
          }
        };
        break;
    case 2 :
        entityKind = {
          TAG: "Ok",
          _0: {
            TAG: "LogicSensor",
            _0: parseLogicSensorKind(reader)
          }
        };
        break;
    case 3 :
        entityKind = {
          TAG: "Ok",
          _0: {
            TAG: "DisplayDoll",
            _0: parseDisplayDollKind(reader)
          }
        };
        break;
    case 4 :
        entityKind = {
          TAG: "Ok",
          _0: {
            TAG: "WeaponsRack",
            _0: parseDisplayItem(reader)
          }
        };
        break;
    case 5 :
        entityKind = {
          TAG: "Ok",
          _0: {
            TAG: "HatRack",
            _0: parseHatRackKind(reader)
          }
        };
        break;
    case 6 :
        entityKind = {
          TAG: "Ok",
          _0: {
            TAG: "FoodPlatter",
            _0: parseDisplayItem(reader)
          }
        };
        break;
    case 7 :
        entityKind = {
          TAG: "Ok",
          _0: {
            TAG: "TeleportationPylon",
            _0: undefined
          }
        };
        break;
    default:
      entityKind = {
        TAG: "Error",
        _0: "File \"Packet_TileSectionSend.res\", line 305, characters 17-24" + "Unknown entity kind. "
      };
  }
  return Belt_Result.map(entityKind, (function (entityKind) {
                return {
                        entityType: entityType,
                        x: x,
                        y: y,
                        entityKind: entityKind
                      };
              }));
}

function packByte$2(prim0, prim1) {
  return prim0.packByte(prim1);
}

function packInt16$2(prim0, prim1) {
  return prim0.packInt16(prim1);
}

function packString$2(prim0, prim1) {
  return prim0.packString(prim1);
}

function packTrainingDummy(writer, trainingDummy) {
  return writer.packInt16(trainingDummy.npcSlotId);
}

function packDisplayItem(writer, displayItem) {
  return writer.packInt16(displayItem.netId).packByte(displayItem.prefix).packInt16(displayItem.stack);
}

function packLogicSensor(writer, logicSensorKind) {
  return writer.packByte(logicSensorKind.checkType).packByte(logicSensorKind.on ? 1 : 0);
}

function hasItem(arr, n) {
  return Belt_Option.isSome(Belt_Option.flatMap(Belt_Array.get(arr, n), (function (a) {
                    return a;
                  })));
}

function packDisplayDoll(writer, displayDollKind) {
  var itemFlags = BitFlags$TerrariaPacket.fromFlags(hasItem(displayDollKind.items, 0), hasItem(displayDollKind.items, 1), hasItem(displayDollKind.items, 2), hasItem(displayDollKind.items, 3), hasItem(displayDollKind.items, 4), hasItem(displayDollKind.items, 5), hasItem(displayDollKind.items, 6), hasItem(displayDollKind.items, 7));
  var dyeFlags = BitFlags$TerrariaPacket.fromFlags(hasItem(displayDollKind.dyes, 0), hasItem(displayDollKind.dyes, 1), hasItem(displayDollKind.dyes, 2), hasItem(displayDollKind.dyes, 3), hasItem(displayDollKind.dyes, 4), hasItem(displayDollKind.dyes, 5), hasItem(displayDollKind.dyes, 6), hasItem(displayDollKind.dyes, 7));
  writer.packByte(BitFlags$TerrariaPacket.toByte(itemFlags)).packByte(BitFlags$TerrariaPacket.toByte(dyeFlags));
  for(var i = 0; i <= 7; ++i){
    var item = Belt_Option.flatMap(Belt_Array.get(displayDollKind.items, i), (function (a) {
            return a;
          }));
    if (item !== undefined) {
      packDisplayItem(writer, item);
    }
    
  }
  for(var i$1 = 0; i$1 <= 7; ++i$1){
    var item$1 = Belt_Option.flatMap(Belt_Array.get(displayDollKind.dyes, i$1), (function (a) {
            return a;
          }));
    if (item$1 !== undefined) {
      packDisplayItem(writer, item$1);
    }
    
  }
  return writer;
}

function packHatRack(writer, hatRackKind) {
  var flags = BitFlags$TerrariaPacket.fromFlags(hasItem(hatRackKind.items, 0), hasItem(hatRackKind.items, 1), hasItem(hatRackKind.dyes, 2), hasItem(hatRackKind.dyes, 3), false, false, false, false);
  writer.packByte(BitFlags$TerrariaPacket.toByte(flags));
  for(var i = 0; i <= 1; ++i){
    var item = Belt_Option.flatMap(Belt_Array.get(hatRackKind.items, i), (function (a) {
            return a;
          }));
    if (item !== undefined) {
      packDisplayItem(writer, item);
    }
    
  }
  for(var i$1 = 0; i$1 <= 1; ++i$1){
    var item$1 = Belt_Option.flatMap(Belt_Array.get(hatRackKind.dyes, i$1), (function (a) {
            return a;
          }));
    if (item$1 !== undefined) {
      packDisplayItem(writer, item$1);
    }
    
  }
  return writer;
}

function packTeleportationPylon(writer, _teleportationPylonKind) {
  return writer;
}

function packEntityKind(writer, entityKind) {
  switch (entityKind.TAG) {
    case "DisplayDoll" :
        return packDisplayDoll(writer, entityKind._0);
    case "HatRack" :
        return packHatRack(writer, entityKind._0);
    case "LogicSensor" :
        return packLogicSensor(writer, entityKind._0);
    case "TeleportationPylon" :
        return writer;
    case "TrainingDummy" :
        return writer.packInt16(entityKind._0.npcSlotId);
    case "FoodPlatter" :
    case "ItemFrame" :
    case "WeaponsRack" :
        return packDisplayItem(writer, entityKind._0);
    
  }
}

function pack$2(writer, entity) {
  return packEntityKind(writer.packByte(entity.entityType).packInt16(entity.x).packInt16(entity.y), entity.entityKind);
}

var Entity = {
  readString: readString$2,
  readInt16: readInt16$2,
  readUInt16: readUInt16$2,
  readInt32: readInt32$2,
  readByte: readByte$2,
  parseTrainingDummyKind: parseTrainingDummyKind,
  parseDisplayItem: parseDisplayItem,
  parseItemFrameKind: parseDisplayItem,
  parseLogicSensorKind: parseLogicSensorKind,
  parseDisplayDollKind: parseDisplayDollKind,
  parseWeaponsRackKind: parseDisplayItem,
  parseHatRackKind: parseHatRackKind,
  parseFoodPlatterKind: parseDisplayItem,
  parse: parse$2,
  packByte: packByte$2,
  packInt16: packInt16$2,
  packString: packString$2,
  packTrainingDummy: packTrainingDummy,
  packDisplayItem: packDisplayItem,
  packItemFrame: packDisplayItem,
  packLogicSensor: packLogicSensor,
  hasItem: hasItem,
  packDisplayDoll: packDisplayDoll,
  packWeaponsRack: packDisplayItem,
  packHatRack: packHatRack,
  packFoodPlatter: packDisplayItem,
  packTeleportationPylon: packTeleportationPylon,
  packEntityKind: packEntityKind,
  pack: pack$2
};

var isTheSameAs = Caml_obj.equal;

function clearTileCache(tile) {
  tile.activeTile = undefined;
  tile.color = undefined;
  tile.wallColor = undefined;
  tile.wall = undefined;
  tile.liquid = undefined;
  tile.lava = false;
  tile.honey = false;
  tile.wire = false;
  tile.wire2 = false;
  tile.wire3 = false;
  tile.wire4 = false;
  tile.halfBrick = false;
  tile.slope = undefined;
  tile.actuator = false;
  tile.inActive = false;
}

function readBuffer(prim0, prim1) {
  return prim0.readBuffer(prim1);
}

function getBytesLeft(prim) {
  return prim.bytesLeft;
}

function readString$3(prim) {
  return prim.readString();
}

function readInt16$3(prim) {
  return prim.readInt16();
}

function readUInt16$3(prim) {
  return prim.readUInt16();
}

function readInt32$3(prim) {
  return prim.readInt32();
}

function readByte$3(prim) {
  return prim.readByte();
}

function parse$3(payload) {
  var reader = new Packetreader(payload);
  var deflated = reader.readBuffer(reader.bytesLeft);
  var reader$1 = new Bufferreader(Nodezlib.inflateRawSync(deflated));
  var tileX = reader$1.readInt32();
  var tileY = reader$1.readInt32();
  var width = reader$1.readInt16();
  var height = reader$1.readInt16();
  var tiles = [];
  var tileCache = defaultTileCache();
  var rleCount = 0;
  if (height < 0 || width < 0) {
    return ;
  }
  for(var _y = 0; _y < height; ++_y){
    var row = [];
    for(var _x = 0; _x < width; ++_x){
      if (rleCount !== 0) {
        rleCount = rleCount - 1 | 0;
        row.push(cacheToTile(tileCache));
      } else {
        clearTileCache(tileCache);
        var header5 = BitFlags$TerrariaPacket.fromByte(reader$1.readByte());
        var match;
        if (BitFlags$TerrariaPacket.flag1(header5)) {
          var header4 = BitFlags$TerrariaPacket.fromByte(reader$1.readByte());
          var header3 = BitFlags$TerrariaPacket.flag1(header4) ? BitFlags$TerrariaPacket.fromByte(reader$1.readByte()) : BitFlags$TerrariaPacket.fromByte(0);
          match = [
            header4,
            header3
          ];
        } else {
          match = [
            BitFlags$TerrariaPacket.fromByte(0),
            BitFlags$TerrariaPacket.fromByte(0)
          ];
        }
        var header3$1 = match[1];
        var header4$1 = match[0];
        var oldActive = tileCache.activeTile;
        if (BitFlags$TerrariaPacket.flag2(header5)) {
          var oldType = Belt_Option.mapWithDefault(tileCache.activeTile, 0, (function (active) {
                  return active.tileType;
                }));
          var tileType;
          if (BitFlags$TerrariaPacket.flag6(header5)) {
            var $$byte = reader$1.readByte();
            var secondByte = reader$1.readByte();
            tileType = (secondByte << 8) | $$byte;
          } else {
            tileType = reader$1.readByte();
          }
          var frame;
          if (TileFrameImportant$TerrariaPacket.isImportant(tileType)) {
            var x = reader$1.readInt16();
            var y = reader$1.readInt16();
            frame = {
              x: x,
              y: y
            };
          } else {
            frame = Belt_Option.isSome(oldActive) && tileType === oldType ? oldActive.frame : undefined;
          }
          if (BitFlags$TerrariaPacket.flag4(header3$1)) {
            tileCache.color = reader$1.readByte();
          }
          tileCache.activeTile = {
            tileType: tileType,
            frame: frame
          };
        }
        if (BitFlags$TerrariaPacket.flag3(header5)) {
          tileCache.wall = reader$1.readByte();
          if (BitFlags$TerrariaPacket.flag5(header3$1)) {
            tileCache.wallColor = reader$1.readByte();
          }
          
        }
        var liquidBits = ((BitFlags$TerrariaPacket.toByte(header5) & 24) >>> 3);
        if (liquidBits !== 0) {
          tileCache.liquid = reader$1.readByte();
          if (liquidBits > 1) {
            if (liquidBits === 2) {
              tileCache.lava = true;
            } else {
              tileCache.honey = true;
            }
          }
          
        }
        if (BitFlags$TerrariaPacket.toByte(header4$1) > 1) {
          if (BitFlags$TerrariaPacket.flag2(header4$1)) {
            tileCache.wire = true;
          }
          if (BitFlags$TerrariaPacket.flag3(header4$1)) {
            tileCache.wire2 = true;
          }
          if (BitFlags$TerrariaPacket.flag4(header4$1)) {
            tileCache.wire3 = true;
          }
          var slopeBits = ((BitFlags$TerrariaPacket.toByte(header4$1) & 112) >>> 4);
          if (slopeBits !== 0 && TileSolid$TerrariaPacket.isSolid(Belt_Option.mapWithDefault(tileCache.activeTile, 0, (function (tile) {
                        return tile.tileType;
                      })))) {
            if (slopeBits === 1) {
              tileCache.halfBrick = true;
            } else {
              tileCache.slope = slopeBits - 1 | 0;
            }
          }
          
        }
        if (BitFlags$TerrariaPacket.toByte(header3$1) > 0) {
          if (BitFlags$TerrariaPacket.flag2(header3$1)) {
            tileCache.actuator = true;
          }
          if (BitFlags$TerrariaPacket.flag3(header3$1)) {
            tileCache.inActive = true;
          }
          if (BitFlags$TerrariaPacket.flag6(header3$1)) {
            tileCache.wire4 = true;
          }
          if (BitFlags$TerrariaPacket.flag7(header3$1)) {
            var $$byte$1 = reader$1.readByte();
            tileCache.wall = ($$byte$1 << 8) | tileCache.wall;
          }
          
        }
        var repeatCountBytes = ((BitFlags$TerrariaPacket.toByte(header5) & 192) >>> 6);
        rleCount = repeatCountBytes !== 0 ? (
            repeatCountBytes !== 1 ? reader$1.readInt16() : reader$1.readByte()
          ) : 0;
        row.push(cacheToTile(tileCache));
      }
    }
    tiles.push(row);
  }
  var chestCount = reader$1.readInt16();
  var chests = Belt_Array.make(chestCount, 0).map(function (param) {
        return parse(reader$1);
      });
  var signCount = reader$1.readInt16();
  var signs = Belt_Array.make(signCount, 0).map(function (param) {
        return parse$1(reader$1);
      });
  var entityCount = reader$1.readInt16();
  var entities = ResultExt$TerrariaPacket.allOkOrError(Belt_Array.make(entityCount, 0).map(function (param) {
            return parse$2(reader$1);
          }));
  if (entities.TAG === "Ok") {
    return {
            height: height,
            width: width,
            tileX: tileX,
            tileY: tileY,
            tiles: tiles,
            chests: chests,
            signs: signs,
            entities: entities._0
          };
  }
  
}

var Decode = {
  clearTileCache: clearTileCache,
  PacketReader: undefined,
  readBuffer: readBuffer,
  getBytesLeft: getBytesLeft,
  readString: readString$3,
  readInt16: readInt16$3,
  readUInt16: readUInt16$3,
  readInt32: readInt32$3,
  readByte: readByte$3,
  parse: parse$3
};

function getLiquidBitFlags(tile) {
  var liquidBits = tile.honey ? "Three" : (
      tile.lava ? "Two" : (
          Belt_Option.isSome(tile.liquid) ? "One" : "Zero"
        )
    );
  switch (liquidBits) {
    case "Zero" :
        return [
                false,
                false
              ];
    case "One" :
        return [
                false,
                true
              ];
    case "Two" :
        return [
                true,
                false
              ];
    case "Three" :
        return [
                true,
                true
              ];
    
  }
}

function getSlopeBitFlags(tile) {
  if (tile.halfBrick) {
    return [
            false,
            false,
            true
          ];
  }
  var match = tile.slope;
  if (match === undefined) {
    return [
            false,
            false,
            false
          ];
  }
  switch (match) {
    case 0 :
        return [
                false,
                false,
                true
              ];
    case 1 :
        return [
                false,
                true,
                false
              ];
    case 2 :
        return [
                false,
                true,
                true
              ];
    case 3 :
        return [
                true,
                false,
                false
              ];
    case 4 :
        return [
                true,
                false,
                true
              ];
    case 5 :
        return [
                true,
                true,
                false
              ];
    case 6 :
        return [
                true,
                true,
                true
              ];
    default:
      return [
              true,
              true,
              true
            ];
  }
}

function getRepeatCountByteLength(repeatCount) {
  if (repeatCount > 255) {
    return 2;
  } else if (repeatCount > 0) {
    return 1;
  } else {
    return 0;
  }
}

function getRepeatCountBitFlags(repeatCount) {
  var repeatCountBytes = getRepeatCountByteLength(repeatCount);
  switch (repeatCountBytes) {
    case 0 :
        return [
                false,
                false
              ];
    case 1 :
        return [
                false,
                true
              ];
    case 2 :
        return [
                true,
                false
              ];
    default:
      return [
              true,
              false
            ];
  }
}

function packInt16$3(prim0, prim1) {
  return prim0.packInt16(prim1);
}

function packTile(writer, tile, repeatCount) {
  var wall = tile.wall;
  var header3 = BitFlags$TerrariaPacket.fromFlags(false, tile.actuator, tile.inActive, Belt_Option.isSome(tile.color), Belt_Option.isSome(tile.wall) && Belt_Option.isSome(tile.wallColor), tile.wire4, wall !== undefined ? wall > 255 : false, false);
  var match = getSlopeBitFlags(tile);
  var header4 = BitFlags$TerrariaPacket.fromFlags(BitFlags$TerrariaPacket.toByte(header3) > 0, tile.wire, tile.wire2, tile.wire3, match[2], match[1], match[0], false);
  var match$1 = getLiquidBitFlags(tile);
  var match$2 = getRepeatCountBitFlags(repeatCount);
  var activeTile = tile.activeTile;
  var tileFlags = BitFlags$TerrariaPacket.fromFlags(BitFlags$TerrariaPacket.toByte(header4) > 0, Belt_Option.isSome(tile.activeTile), Belt_Option.isSome(tile.wall), match$1[1], match$1[0], activeTile !== undefined ? activeTile.tileType > 255 : false, match$2[1], match$2[0]);
  writer.packByte(BitFlags$TerrariaPacket.toByte(tileFlags));
  if (BitFlags$TerrariaPacket.flag1(tileFlags)) {
    writer.packByte(BitFlags$TerrariaPacket.toByte(header4));
    if (BitFlags$TerrariaPacket.flag1(header4)) {
      writer.packByte(BitFlags$TerrariaPacket.toByte(header3));
    }
    
  }
  var activeTile$1 = tile.activeTile;
  if (activeTile$1 !== undefined) {
    if (BitFlags$TerrariaPacket.flag6(tileFlags)) {
      writer.packByte(activeTile$1.tileType & 255);
      writer.packByte(((activeTile$1.tileType & 65280) >>> 8));
    } else {
      writer.packByte(activeTile$1.tileType);
    }
    var match$3 = activeTile$1.frame;
    if (match$3 !== undefined) {
      writer.packInt16(match$3.x);
      writer.packInt16(match$3.y);
    }
    var color = tile.color;
    if (color !== undefined) {
      writer.packByte(color);
    }
    
  }
  var wall$1 = tile.wall;
  if (wall$1 !== undefined) {
    writer.packByte(wall$1 & 255);
    var wallColor = tile.wallColor;
    if (wallColor !== undefined) {
      writer.packByte(wallColor);
    }
    
  }
  var liquid = tile.liquid;
  if (liquid !== undefined) {
    writer.packByte(liquid);
  }
  var wall$2 = tile.wall;
  if (wall$2 !== undefined && wall$2 > 255) {
    writer.packByte((wall$2 >>> 8));
  }
  var match$4 = getRepeatCountByteLength(repeatCount);
  if (match$4 !== 0) {
    if (match$4 !== 1) {
      writer.packInt16(repeatCount);
    } else {
      writer.packByte(repeatCount);
    }
  }
  return writer;
}

function decidePackTile(writer, lastTile, tile) {
  var last = lastTile.contents;
  if (last !== undefined) {
    if (Caml_obj.equal(tile, last.tile)) {
      last.count = last.count + 1 | 0;
    } else {
      packTile(writer, last.tile, last.count);
      lastTile.contents = {
        tile: tile,
        count: 0
      };
    }
  } else {
    lastTile.contents = {
      tile: tile,
      count: 0
    };
  }
}

function packByte$3(prim0, prim1) {
  return prim0.packByte(prim1);
}

function packBuffer(prim0, prim1) {
  return prim0.packBuffer(prim1);
}

function data(prim) {
  return prim.data;
}

function toBuffer(self) {
  var packetWriter = ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("TileSectionSend"));
  var writer = new Bufferwriter(Buffer.allocUnsafe(64000));
  writer.packInt32(self.tileX).packInt32(self.tileY).packInt16(self.width).packInt16(self.height);
  var lastTile = {
    contents: undefined
  };
  for(var y = 0 ,y_finish = self.height; y < y_finish; ++y){
    for(var x = 0 ,x_finish = self.width; x < x_finish; ++x){
      var tile = self.tiles[y][x];
      decidePackTile(writer, lastTile, tile);
    }
  }
  var lastTile$1 = lastTile.contents;
  if (lastTile$1 !== undefined) {
    packTile(writer, lastTile$1.tile, lastTile$1.count);
  }
  writer.packInt16(self.chests.length);
  self.chests.forEach(function (chest) {
        pack(writer, chest);
      });
  writer.packInt16(self.signs.length);
  self.signs.forEach(function (sign) {
        pack$1(writer, sign);
      });
  writer.packInt16(self.entities.length);
  self.entities.forEach(function (entity) {
        pack$2(writer, entity);
      });
  return packetWriter.packBuffer(Nodezlib.deflateRawSync(writer.slicedData)).data;
}

var Encode = {
  getLiquidBitFlags: getLiquidBitFlags,
  getSlopeBitFlags: getSlopeBitFlags,
  getRepeatCountByteLength: getRepeatCountByteLength,
  getRepeatCountBitFlags: getRepeatCountBitFlags,
  packInt16: packInt16$3,
  packTile: packTile,
  decidePackTile: decidePackTile,
  packByte: packByte$3,
  packBuffer: packBuffer,
  setType: ManagedPacketWriter$PacketFactory.setType,
  data: data,
  BufferWriter: undefined,
  toBuffer: toBuffer
};

var Int;

var $$Option;

exports.Int = Int;
exports.$$Option = $$Option;
exports.defaultTileCache = defaultTileCache;
exports.cacheToTile = cacheToTile;
exports.Chest = Chest;
exports.Sign = Sign;
exports.Entity = Entity;
exports.isTheSameAs = isTheSameAs;
exports.Decode = Decode;
exports.Encode = Encode;
exports.parse = parse$3;
exports.toBuffer = toBuffer;
/* node:zlib Not a pure module */
