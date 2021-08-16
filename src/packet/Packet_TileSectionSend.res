module Int = Belt.Int
module Option = Belt.Option

type frame = {
  x: int,
  y: int,
}

type activeTile = {
  tileType: int,
  frame: option<frame>,
}

type liquid = {
  liquidValue: int,
  liquidType: int,
}

type tile = {
  activeTile: option<activeTile>,
  color: option<int>,
  wallColor: option<int>,
  wall: option<int>,
  liquid: option<int>,
  lava: bool,
  honey: bool,
  wire: bool,
  wire2: bool,
  wire3: bool,
  wire4: bool,
  halfBrick: bool,
  slope: option<int>,
  actuator: bool,
  inActive: bool,
}

type tileCache = {
  mutable activeTile: option<activeTile>,
  mutable color: option<int>,
  mutable wallColor: option<int>,
  mutable wall: option<int>,
  mutable liquid: option<int>,
  mutable lava: bool,
  mutable honey: bool,
  mutable wire: bool,
  mutable wire2: bool,
  mutable wire3: bool,
  mutable wire4: bool,
  mutable halfBrick: bool,
  mutable slope: option<int>,
  mutable actuator: bool,
  mutable inActive: bool,
}

let defaultTileCache = () => {
  activeTile: None,
  color: None,
  wallColor: None,
  wall: None,
  liquid: None,
  lava: false,
  honey: false,
  wire: false,
  wire2: false,
  wire3: false,
  wire4: false,
  halfBrick: false,
  slope: None,
  actuator: false,
  inActive: false,
}

let cacheToTile = (cache: tileCache): tile => {
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
  inActive: cache.inActive,
}

type t = {
  compressed: bool,
  height: int,
  width: int,
  tileX: int,
  tileY: int,
  tiles: array<array<tile>>,
}

let isTheSameAs = (self: tile, compTile: tile) => {
  self == compTile
}

module Decode = {
  let clearTileCache = (tile: tileCache) => {
    tile.activeTile = None
    tile.color = None
    tile.wallColor = None
    tile.wall = None
    tile.liquid = None
    tile.lava = false
    tile.honey = false
    tile.wire = false
    tile.wire2 = false
    tile.wire3 = false
    tile.wire4 = false
    tile.halfBrick = false
    tile.slope = None
    tile.actuator = false
    tile.inActive = false
  }

  module PacketReader = PacketFactory.PacketReader
  let {readBuffer, getBytesLeft} = module(PacketFactory.PacketReader)
  let {readString, readInt16, readUInt16, readInt32, readByte} = module(PacketFactory.BufferReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let compressed = reader->PacketReader.readByte == 1
    if compressed {
      let deflated = reader->readBuffer(reader->PacketFactory.PacketReader.getBytesLeft)
      let reader = PacketFactory.BufferReader.make(NodeJs.Zlib.inflateRawSync(deflated))
      let tileX = reader->readInt32
      let tileY = reader->readInt32
      let width = reader->readInt16
      let height = reader->readInt16
      let tiles: array<array<tile>> = []
      let tileCache = defaultTileCache()
      let rleCount = ref(0)
      if height < 0 || width < 0 {
        None
      } else {
        for _y in 0 to height - 1 {
          let row: array<tile> = []
          for _x in 0 to width - 1 {
            if rleCount.contents != 0 {
              decr(rleCount)
              row->Js.Array2.push(tileCache->cacheToTile)->ignore
            } else {
              clearTileCache(tileCache)
              let header5 = reader->readByte->BitFlags.fromByte
              let (header4, header3) = if header5->BitFlags.flag1 {
                let header4 = reader->readByte->BitFlags.fromByte
                let header3 = if header4->BitFlags.flag1 {
                  reader->readByte->BitFlags.fromByte
                } else {
                  BitFlags.fromByte(0)
                }
                (header4, header3)
              } else {
                (BitFlags.fromByte(0), BitFlags.fromByte(0))
              }

              let oldActive = tileCache.activeTile
              if header5->BitFlags.flag2 {
                let oldType =
                  tileCache.activeTile->Option.mapWithDefault(0, active => active.tileType)
                let tileType = if header5->BitFlags.flag6 {
                  let byte = reader->readByte
                  let secondByte = reader->readByte
                  secondByte->lsl(8)->lor(byte)
                } else {
                  reader->readByte
                }

                let frame = if TileFrameImportant.isImportant(tileType) {
                  let x = reader->readInt16
                  let y = reader->readInt16
                  Some({x: x, y: y})
                } else if oldActive->Option.isSome && tileType === oldType {
                  (oldActive->Option.getUnsafe).frame
                } else {
                  None
                }

                if tileType == 4 {
                  Js.log2(tileType, frame)
                }

                if header3->BitFlags.flag4 {
                  tileCache.color = Some(reader->readByte)
                }

                tileCache.activeTile = Some({
                  tileType: tileType,
                  frame: frame,
                })
              }

              if header5->BitFlags.flag3 {
                tileCache.wall = Some(reader->readByte)

                if header3->BitFlags.flag5 {
                  tileCache.wallColor = Some(reader->readByte)
                }
              }

              let liquidBits = header5->BitFlags.toByte->land(24)->lsr(3)
              if liquidBits != 0 {
                tileCache.liquid = Some(reader->readByte)
                if liquidBits > 1 {
                  if liquidBits == 2 {
                    tileCache.lava = true
                  } else {
                    tileCache.honey = true
                  }
                }
              }

              if header4->BitFlags.toByte > 1 {
                if header4->BitFlags.flag2 {
                  tileCache.wire = true
                }
                if header4->BitFlags.flag3 {
                  tileCache.wire2 = true
                }
                if header4->BitFlags.flag4 {
                  tileCache.wire3 = true
                }

                let slopeBits = header4->BitFlags.toByte->land(112)->lsr(4)
                if (
                  slopeBits != 0 &&
                    TileSolid.isSolid(
                      tileCache.activeTile->Option.mapWithDefault(0, tile => tile.tileType),
                    )
                ) {
                  if slopeBits == 1 {
                    tileCache.halfBrick = true
                  } else {
                    tileCache.slope = Some(slopeBits - 1)
                  }
                }
              }

              if header3->BitFlags.toByte > 0 {
                if header3->BitFlags.flag2 {
                  tileCache.actuator = true
                }
                if header3->BitFlags.flag3 {
                  tileCache.inActive = true
                }
                if header3->BitFlags.flag6 {
                  tileCache.wire4 = true
                }
                if header3->BitFlags.flag7 {
                  let byte = reader->readByte
                  tileCache.wall = Some(byte->lsl(8)->lor(tileCache.wall->Option.getUnsafe))
                }
              }

              let repeatCountBytes = header5->BitFlags.toByte->land(192)->lsr(6)
              switch repeatCountBytes {
              | 0 => rleCount.contents = 0
              | 1 => rleCount.contents = reader->readByte
              | _ => rleCount.contents = reader->readInt16
              }
              row->Js.Array2.push(tileCache->cacheToTile)->ignore
            }
          }
          tiles->Js.Array2.push(row)->ignore
        }

        Some({
          compressed: true,
          height: height,
          width: width,
          tileX: tileX,
          tileY: tileY,
          tiles: tiles,
        })
      }
    } else {
      None
    }
  }
}

module Encode = {
  type lastTile = {
    tile: tile,
    mutable count: int,
  }

  type liquidBits = Zero | One | Two | Three

  let getLiquidBitFlags = (tile: tile): (bool, bool) => {
    let liquidBits: liquidBits = if tile.honey {
      Three
    } else if tile.lava {
      Two
    } else if tile.liquid->Option.isSome {
      One
    } else {
      Zero
    }
    switch liquidBits {
    | Zero => (false, false)
    | One => (false, true)
    | Two => (true, false)
    | Three => (true, true)
    }
  }

  let getSlopeBitFlags = (tile: tile): (bool, bool, bool) => {
    if tile.halfBrick {
      (false, false, true)
    } else {
      switch tile.slope {
      | None => (false, false, false)
      | Some(0) => (false, false, true)
      | Some(1) => (false, true, false)
      | Some(2) => (false, true, true)
      | Some(3) => (true, false, false)
      | Some(4) => (true, false, true)
      | Some(5) => (true, true, false)
      | Some(6) => (true, true, true)
      | Some(_) => (true, true, true)
      }
    }
  }

  let getRepeatCountByteLength = (repeatCount: int): int => {
    if repeatCount > 255 {
      2
    } else if repeatCount > 0 {
      1
    } else {
      0
    }
  }

  let getRepeatCountBitFlags = (repeatCount: int): (bool, bool) => {
    let repeatCountBytes = getRepeatCountByteLength(repeatCount)
    switch repeatCountBytes {
    | 0 => (false, false)
    | 1 => (false, true)
    | 2 => (true, false)
    | _ => (true, false)
    }
  }

  let {packByte, packInt16} = module(PacketFactory.BufferWriter)
  type bufferWriter = PacketFactory.BufferWriter.t

  let packTile = (writer: bufferWriter, tile: tile, repeatCount: int): bufferWriter => {
    let header3 = BitFlags.fromFlags(
      ~flag1=false /* nothing? */,
      ~flag2=tile.actuator,
      ~flag3=tile.inActive,
      ~flag4=tile.color->Option.isSome,
      ~flag5=tile.wall->Option.isSome && tile.wallColor->Option.isSome,
      ~flag6=tile.wire4,
      ~flag7=switch tile.wall {
      | Some(wall) => wall > 255
      | None => false
      },
      ~flag8=false /* nothing? */,
    )
    let (slopeBitFlag3, slopeBitFlag2, slopeBitFlag1) = getSlopeBitFlags(tile)
    let header4 = BitFlags.fromFlags(
      ~flag1=header3->BitFlags.toByte > 0,
      ~flag2=tile.wire,
      ~flag3=tile.wire2,
      ~flag4=tile.wire3,
      ~flag5=slopeBitFlag1,
      ~flag6=slopeBitFlag2,
      ~flag7=slopeBitFlag3,
      ~flag8=false /* nothing? */,
    )
    let (liquidBitFlag2, liquidBitFlag1) = getLiquidBitFlags(tile)
    let (repeatCountBitFlag2, repeatCountBitFlag1) = getRepeatCountBitFlags(repeatCount)
    let tileFlags = BitFlags.fromFlags(
      ~flag1=header4->BitFlags.toByte > 0,
      ~flag2=tile.activeTile->Option.isSome,
      ~flag3=tile.wall->Option.isSome,
      ~flag4=liquidBitFlag1,
      ~flag5=liquidBitFlag2,
      ~flag6=switch tile.activeTile {
      | Some(activeTile) => activeTile.tileType > 255
      | None => false
      },
      ~flag7=repeatCountBitFlag1,
      ~flag8=repeatCountBitFlag2,
    )
    let _: bufferWriter = writer->packByte(tileFlags->BitFlags.toByte)
    if tileFlags->BitFlags.flag1 {
      let _: bufferWriter = writer->packByte(header4->BitFlags.toByte)
      if header4->BitFlags.flag1 {
        let _: bufferWriter = writer->packByte(header3->BitFlags.toByte)
      }
    }

    switch tile.activeTile {
    | Some(activeTile) => {
        if tileFlags->BitFlags.flag6 {
          let _: bufferWriter = writer->packByte(activeTile.tileType->land(255))
          let _: bufferWriter = writer->packByte(activeTile.tileType->land(65280)->lsr(8))
        } else {
          let _: bufferWriter = writer->packByte(activeTile.tileType)
        }

        switch activeTile.frame {
        | Some({x, y}) => {
            let _: bufferWriter = writer->packInt16(x)
            let _: bufferWriter = writer->packInt16(y)
          }
        | None => ()
        }

        switch tile.color {
        | Some(color) =>
          let _: bufferWriter = writer->packByte(color)
        | None => ()
        }
      }
    | None => ()
    }

    switch tile.wall {
    | Some(wall) => {
        let _: bufferWriter = writer->packByte(wall->land(255))
        switch tile.wallColor {
        | Some(wallColor) =>
          let _: bufferWriter = writer->packByte(wallColor)
        | None => ()
        }
      }
    | None => ()
    }

    switch tile.liquid {
    | Some(liquid) =>
      let _: bufferWriter = writer->packByte(liquid)
    | None => ()
    }

    switch tile.wall {
    | Some(wall) if wall > 255 =>
      let _: bufferWriter = writer->packByte(wall->lsr(8))
    | Some(_) | None => ()
    }

    switch getRepeatCountByteLength(repeatCount) {
    | 0 => ()
    | 1 =>
      let _: bufferWriter = writer->packByte(repeatCount)
    | _ =>
      let _: bufferWriter = writer->packInt16(repeatCount)
    }

    writer
  }

  let decidePackTile = (
    writer: bufferWriter,
    lastTile: ref<option<lastTile>>,
    tile: tile,
  ): unit => {
    switch lastTile.contents {
    | Some(last) =>
      if tile->isTheSameAs(last.tile) {
        last.count = last.count + 1
      } else {
        let _: bufferWriter = writer->packTile(last.tile, last.count)
        lastTile := Some({tile: tile, count: 0})
      }
    | None => lastTile := Some({tile: tile, count: 0})
    }
  }

  let {packByte, packBuffer, setType, data} = module(PacketFactory.ManagedPacketWriter)
  module BufferWriter = PacketFactory.BufferWriter

  let toBuffer = (self: t): NodeJs.Buffer.t => {
    let packetWriter =
      PacketFactory.ManagedPacketWriter.make()
      ->setType(PacketType.TileSectionSend->PacketType.toInt)
      ->packByte(1) // Force compressed

    let writer = BufferWriter.make(NodeJs.Buffer.allocUnsafe(64_000))
    let _: bufferWriter =
      writer
      ->BufferWriter.packInt32(self.tileX)
      ->BufferWriter.packInt32(self.tileY)
      ->BufferWriter.packInt16(self.width)
      ->BufferWriter.packInt16(self.height)

    let lastTile = ref(None)
    for y in 0 to self.height - 1 {
      for x in 0 to self.width - 1 {
        let tile = self.tiles[y][x]
        writer->decidePackTile(lastTile, tile)
      }
    }

    switch lastTile.contents {
    | Some(lastTile) => {
        let _: bufferWriter = writer->packTile(lastTile.tile, lastTile.count)
      }
    | None => ()
    }

    let _: bufferWriter = writer->packInt16(0) // chests length TODO: implement chest writing
    let _: bufferWriter = writer->packInt16(0) // signs length TODO: implement sign writing
    let _: bufferWriter = writer->packInt16(0) // target dummies length TODO: implement target dummy writing

    packetWriter->packBuffer(NodeJs.Zlib.deflateRawSync(writer->BufferWriter.slicedData))->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
