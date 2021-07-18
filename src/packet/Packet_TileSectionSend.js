// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Zlib = require("zlib");
var Caml_obj = require("rescript/lib/js/caml_obj.js");
var Caml_array = require("rescript/lib/js/caml_array.js");
var Belt_Option = require("rescript/lib/js/belt_Option.js");
var BitFlags$TerrariaPacket = require("../BitFlags.js");
var TileSolid$TerrariaPacket = require("../TileSolid.js");
var PacketType$TerrariaPacket = require("../PacketType.js");
var ManagedPacketWriter$PacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.js");
var TileFrameImportant$TerrariaPacket = require("../TileFrameImportant.js");
var Bufferreader = require("@popstarfreas/packetfactory/bufferreader").default;
var Bufferwriter = require("@popstarfreas/packetfactory/bufferwriter").default;
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;

function defaultTileCache(param) {
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

var isTheSameAs = Caml_obj.caml_equal;

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

function parse(payload) {
  var reader = new Packetreader(payload);
  var compressed = reader.readByte() === 1;
  if (!compressed) {
    return ;
  }
  var deflated = reader.readBuffer(reader.bytesLeft);
  var reader$1 = new Bufferreader(Zlib.inflateRawSync(deflated));
  var tileX = reader$1.readInt32();
  var tileY = reader$1.readInt32();
  var width = reader$1.readInt16();
  var height = reader$1.readInt16();
  var tiles = [];
  var tileCache = defaultTileCache(undefined);
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
          if (tileType === 4) {
            console.log(tileType, frame);
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
  return {
          compressed: true,
          height: height,
          width: width,
          tileX: tileX,
          tileY: tileY,
          tiles: tiles
        };
}

var Decode = {
  clearTileCache: clearTileCache,
  PacketReader: undefined,
  readBuffer: readBuffer,
  getBytesLeft: getBytesLeft,
  readString: readString,
  readInt16: readInt16,
  readUInt16: readUInt16,
  readInt32: readInt32,
  readByte: readByte,
  parse: parse
};

function getLiquidBitFlags(tile) {
  var liquidBits = tile.honey ? /* Three */3 : (
      tile.lava ? /* Two */2 : (
          Belt_Option.isSome(tile.liquid) ? /* One */1 : /* Zero */0
        )
    );
  switch (liquidBits) {
    case /* Zero */0 :
        return [
                false,
                false
              ];
    case /* One */1 :
        return [
                false,
                true
              ];
    case /* Two */2 :
        return [
                true,
                false
              ];
    case /* Three */3 :
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

function packInt16(prim0, prim1) {
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
    if (Caml_obj.caml_equal(tile, last.tile)) {
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

function packByte(prim0, prim1) {
  return prim0.packByte(prim1);
}

function packBuffer(prim0, prim1) {
  return prim0.packBuffer(prim1);
}

function data(prim) {
  return prim.data;
}

function toBuffer(self) {
  var packetWriter = ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt(/* TileSectionSend */9)).packByte(1);
  var writer = new Bufferwriter(Buffer.allocUnsafe(64000));
  writer.packInt32(self.tileX).packInt32(self.tileY).packInt16(self.width).packInt16(self.height);
  var lastTile = {
    contents: undefined
  };
  for(var y = 0 ,y_finish = self.height; y < y_finish; ++y){
    for(var x = 0 ,x_finish = self.width; x < x_finish; ++x){
      var tile = Caml_array.get(Caml_array.get(self.tiles, y), x);
      decidePackTile(writer, lastTile, tile);
    }
  }
  var lastTile$1 = lastTile.contents;
  if (lastTile$1 !== undefined) {
    packTile(writer, lastTile$1.tile, lastTile$1.count);
  }
  writer.packInt16(0);
  writer.packInt16(0);
  writer.packInt16(0);
  return packetWriter.packBuffer(Zlib.deflateRawSync(writer.slicedData)).data;
}

var Encode = {
  getLiquidBitFlags: getLiquidBitFlags,
  getSlopeBitFlags: getSlopeBitFlags,
  getRepeatCountByteLength: getRepeatCountByteLength,
  getRepeatCountBitFlags: getRepeatCountBitFlags,
  packInt16: packInt16,
  packTile: packTile,
  decidePackTile: decidePackTile,
  packByte: packByte,
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
exports.isTheSameAs = isTheSameAs;
exports.Decode = Decode;
exports.Encode = Encode;
exports.parse = parse;
exports.toBuffer = toBuffer;
/* zlib Not a pure module */
