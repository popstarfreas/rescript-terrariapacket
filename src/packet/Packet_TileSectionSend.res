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
  height: int,
  width: int,
  tileX: int,
  tileY: int,
  tiles: array<array<tile>>,
}

module Decode = {
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
        for (_y in 0 to height - 1) {
          let row: array<tile> = []
          for (_x in 0 to width - 1) {
            if rleCount.contents != 0 {
              decr(rleCount)
              row->Js.Array2.push(tileCache->cacheToTile)->ignore
            } else {
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
                let oldType = tileCache.activeTile->Option.mapWithDefault(0, active => active.tileType)
                let tileType = if header5->BitFlags.flag6 {
                  let byte = reader->readByte
                  let secondByte = reader->readByte
                  (secondByte->lsl(8))->lor(byte)
                } else {
                  reader->readByte
                }

                let frame = if TileFrameImportant.isImportant(tileType) {
                  let x = reader->readInt16
                  let y = reader->readInt16
                  Some({ x, y })
                } else if oldActive->Option.isSome && tileType === oldType {
                  (oldActive->Option.getUnsafe).frame
                } else {
                  None
                }

                if header3->BitFlags.flag4 {
                  tileCache.color = Some(reader->readByte)
                }

                tileCache.activeTile = Some({
                  tileType,
                  frame,
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
                if slopeBits != 0 && TileSolid.isSolid(tileCache.activeTile->Option.mapWithDefault(0, tile => tile.tileType)) {
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
            }
          }
          tiles->Js.Array2.push(row)->ignore
        }

        Some({
          height: height,
          width: width,
          tileX: tileX,
          tileY: tileY,
          tiles: tiles
        })
      }
    } else {
      None
    }
  }
}

module Encode = {
}

let parse = Decode.parse
