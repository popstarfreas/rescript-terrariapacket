module Int = Belt.Int
module Option = Belt.Option

@genType
type frame = {
  x: int,
  y: int,
}

@genType
type activeTile = {
  tileType: int,
  frame: option<frame>,
}

@genType
type liquid = {
  liquidValue: int,
  liquidType: int,
}

@genType
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
  coatHeader: int,
}

@genType
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
  mutable coatHeader: int,
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
  coatHeader: 0,
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
  coatHeader: cache.coatHeader,
}

module Chest = {
  let {readString, readInt16} = module(ErrorAwareBufferReader)
  @genType
  type t = {
    id: int,
    x: int,
    y: int,
    name: string,
  }

  let parse = (reader): t => {
    let id = reader->readInt16("id")
    let x = reader->readInt16("x")
    let y = reader->readInt16("y")
    let name = reader->readString("name")
    {id, x, y, name}
  }

  let {packInt16, packString} = module(ErrorAwareBufferWriter)
  type bufferWriter = ErrorAwareBufferWriter.t

  let pack = (writer: bufferWriter, chest): bufferWriter => {
    writer
    ->packInt16(chest.id, "id")
    ->packInt16(chest.x, "x")
    ->packInt16(chest.y, "y")
    ->packString(chest.name, "name")
  }
}

module Sign = {
  let {readString, readInt16} = module(ErrorAwareBufferReader)
  @genType
  type t = {
    id: int,
    x: int,
    y: int,
    name: string,
  }

  let parse = (reader): t => {
    let id = reader->readInt16("id")
    let x = reader->readInt16("x")
    let y = reader->readInt16("y")
    let name = reader->readString("name")

    {id, x, y, name}
  }

  let {packInt16, packString} = module(ErrorAwareBufferWriter)
  type bufferWriter = ErrorAwareBufferWriter.t

  let pack = (writer, sign): bufferWriter => {
    writer
    ->packInt16(sign.id, "id")
    ->packInt16(sign.x, "x")
    ->packInt16(sign.y, "y")
    ->packString(sign.name, "name")
  }
}

module Entity = {
  let {readInt16, readByte} = module(ErrorAwareBufferReader)
  @genType
  type displayItem = {
    netId: int,
    prefix: int,
    stack: int,
  }

  @genType
  type displayDoll = {
    items: array<option<displayItem>>,
    dyes: array<option<displayItem>>,
  }

  @genType
  type foodPlatter = displayItem
  @genType
  type hatRack = {
    items: array<option<displayItem>>,
    dyes: array<option<displayItem>>,
  }

  @genType
  type itemFrame = displayItem
  @genType
  type logicSensor = {
    checkType: int,
    on: bool,
  }
  @genType
  type teleportationPylon = unit
  @genType
  type trainingDummy = {npcSlotId: int}
  @genType
  type weaponsRack = displayItem

  @genType
  type kind =
    | DisplayDoll(displayDoll)
    | FoodPlatter(foodPlatter)
    | HatRack(hatRack)
    | ItemFrame(itemFrame)
    | LogicSensor(logicSensor)
    | TeleportationPylon(teleportationPylon)
    | TrainingDummy(trainingDummy)
    | WeaponsRack(weaponsRack)

  @genType
  type t = {
    entityType: int,
    x: int,
    y: int,
    entityKind: kind,
  }

  let parseTrainingDummyKind = (reader): trainingDummy => {
    npcSlotId: reader->readInt16("npcSlotId"),
  }

  let parseDisplayItem = (reader): displayItem => {
    let netId = reader->readInt16("netId")
    let prefix = reader->readByte("prefix")
    let stack = reader->readInt16("stack")

    {
      netId,
      prefix,
      stack,
    }
  }

  let parseItemFrameKind = parseDisplayItem

  let parseLogicSensorKind = (reader): logicSensor => {
    let checkType = reader->readByte("checkType")
    let on = reader->readByte("on") == 1

    {
      checkType,
      on,
    }
  }

  let parseDisplayDollKind = (reader): displayDoll => {
    let itemsFlags = BitFlags.fromByte(reader->readByte("itemsFlags"))
    let dyeFlags = BitFlags.fromByte(reader->readByte("dyeFlags"))
    let items = []
    let dyes = []

    for i in 0 to 7 {
      if itemsFlags->BitFlags.flagN(i) {
        items->Array.push(Some(parseDisplayItem(reader)))
      } else {
        items->Array.push(None)
      }
    }

    for i in 0 to 7 {
      if dyeFlags->BitFlags.flagN(i) {
        dyes->Array.push(Some(parseDisplayItem(reader)))
      } else {
        dyes->Array.push(None)
      }
    }

    {
      items,
      dyes,
    }
  }

  let parseWeaponsRackKind = parseDisplayItem

  let parseHatRackKind = (reader): hatRack => {
    let flags = BitFlags.fromByte(reader->readByte("flags"))
    let items = []
    let dyes = []

    for i in 0 to 1 {
      if flags->BitFlags.flagN(i) {
        items->Array.push(Some(parseDisplayItem(reader)))
      } else {
        items->Array.push(None)
      }
    }

    for i in 0 to 1 {
      if flags->BitFlags.flagN(i + 2) {
        dyes->Array.push(Some(parseDisplayItem(reader)))
      } else {
        dyes->Array.push(None)
      }
    }

    {
      items,
      dyes,
    }
  }

  let parseFoodPlatterKind = parseDisplayItem

  let parse = (reader): result<t, string> => {
    let entityType = reader->readByte("entityType")
    let x = reader->readInt16("x")
    let y = reader->readInt16("y")
    let entityKind = switch entityType {
    | 0 => Ok(TrainingDummy(reader->parseTrainingDummyKind))
    | 1 => Ok(ItemFrame(reader->parseItemFrameKind))
    | 2 => Ok(LogicSensor(reader->parseLogicSensorKind))
    | 3 => Ok(DisplayDoll(reader->parseDisplayDollKind))
    | 4 => Ok(WeaponsRack(reader->parseWeaponsRackKind))
    | 5 => Ok(HatRack(reader->parseHatRackKind))
    | 6 => Ok(FoodPlatter(reader->parseFoodPlatterKind))
    | 7 => Ok(TeleportationPylon())
    | _ => Error(__LOC__ ++ "Unknown entity kind. ")
    }

    entityKind->Belt.Result.map(entityKind => {
      {
        entityType,
        x,
        y,
        entityKind,
      }
    })
  }

  let {packByte, packInt16} = module(ErrorAwareBufferWriter)
  type bufferWriter = ErrorAwareBufferWriter.t

  let packTrainingDummy = (writer: bufferWriter, trainingDummy): bufferWriter => {
    writer->packInt16(trainingDummy.npcSlotId, "npcSlotId")
  }

  let packDisplayItem = (writer, displayItem): bufferWriter => {
    writer
    ->packInt16(displayItem.netId, "netId")
    ->packByte(displayItem.prefix, "prefix")
    ->packInt16(displayItem.stack, "stack")
  }

  let packItemFrame = packDisplayItem

  let packLogicSensor = (writer, logicSensorKind): bufferWriter => {
    writer
    ->packByte(logicSensorKind.checkType, "checkType")
    ->packByte(
      if logicSensorKind.on {
        1
      } else {
        0
      },
      "on",
    )
  }

  let hasItem = (arr, n) => {
    arr->Belt.Array.get(n)->Option.flatMap(a => a)->Option.isSome
  }

  let packDisplayDoll = (writer, displayDollKind: displayDoll): bufferWriter => {
    let itemFlags = BitFlags.fromFlags(
      ~flag1=displayDollKind.items->hasItem(0),
      ~flag2=displayDollKind.items->hasItem(1),
      ~flag3=displayDollKind.items->hasItem(2),
      ~flag4=displayDollKind.items->hasItem(3),
      ~flag5=displayDollKind.items->hasItem(4),
      ~flag6=displayDollKind.items->hasItem(5),
      ~flag7=displayDollKind.items->hasItem(6),
      ~flag8=displayDollKind.items->hasItem(7),
    )
    let dyeFlags = BitFlags.fromFlags(
      ~flag1=displayDollKind.dyes->hasItem(0),
      ~flag2=displayDollKind.dyes->hasItem(1),
      ~flag3=displayDollKind.dyes->hasItem(2),
      ~flag4=displayDollKind.dyes->hasItem(3),
      ~flag5=displayDollKind.dyes->hasItem(4),
      ~flag6=displayDollKind.dyes->hasItem(5),
      ~flag7=displayDollKind.dyes->hasItem(6),
      ~flag8=displayDollKind.dyes->hasItem(7),
    )

    writer
    ->packByte(itemFlags->BitFlags.toByte, "itemFlags")
    ->packByte(dyeFlags->BitFlags.toByte, "dyeFlags")
    ->ignore

    for i in 0 to 7 {
      switch displayDollKind.items->Belt.Array.get(i)->Option.flatMap(a => a) {
      | Some(item) => writer->packDisplayItem(item)->ignore
      | None => ()
      }
    }

    for i in 0 to 7 {
      switch displayDollKind.dyes->Belt.Array.get(i)->Option.flatMap(a => a) {
      | Some(item) => writer->packDisplayItem(item)->ignore
      | None => ()
      }
    }

    writer
  }

  let packWeaponsRack = packDisplayItem

  let packHatRack = (writer, hatRackKind): bufferWriter => {
    let flags = BitFlags.fromFlags(
      ~flag1=hatRackKind.items->hasItem(0),
      ~flag2=hatRackKind.items->hasItem(1),
      ~flag3=hatRackKind.dyes->hasItem(2),
      ~flag4=hatRackKind.dyes->hasItem(3),
      ~flag5=false,
      ~flag6=false,
      ~flag7=false,
      ~flag8=false,
    )

    writer->packByte(flags->BitFlags.toByte, "flags")->ignore

    for i in 0 to 1 {
      switch hatRackKind.items->Belt.Array.get(i)->Option.flatMap(a => a) {
      | Some(item) => writer->packDisplayItem(item)->ignore
      | None => ()
      }
    }

    for i in 0 to 1 {
      switch hatRackKind.dyes->Belt.Array.get(i)->Option.flatMap(a => a) {
      | Some(item) => writer->packDisplayItem(item)->ignore
      | None => ()
      }
    }

    writer
  }

  let packFoodPlatter = packDisplayItem

  let packTeleportationPylon = (writer, _teleportationPylonKind): bufferWriter => writer

  let packEntityKind = (writer, entityKind): bufferWriter => {
    switch entityKind {
    | TrainingDummy(trainingDummy) => writer->packTrainingDummy(trainingDummy)
    | ItemFrame(itemFrame) => writer->packItemFrame(itemFrame)
    | LogicSensor(logicSensor) => writer->packLogicSensor(logicSensor)
    | DisplayDoll(displayDoll) => writer->packDisplayDoll(displayDoll)
    | WeaponsRack(weaponsRack) => writer->packWeaponsRack(weaponsRack)
    | HatRack(hatRack) => writer->packHatRack(hatRack)
    | FoodPlatter(foodPlatter) => writer->packFoodPlatter(foodPlatter)
    | TeleportationPylon(teleportationPylon) => writer->packTeleportationPylon(teleportationPylon)
    }
  }

  let pack = (writer: bufferWriter, entity: t): bufferWriter => {
    writer
    ->packByte(entity.entityType, "entityType")
    ->packInt16(entity.x, "x")
    ->packInt16(entity.y, "y")
    ->packEntityKind(entity.entityKind)
  }
}

@genType
type t = {
  height: int,
  width: int,
  tileX: int,
  tileY: int,
  tiles: array<array<tile>>,
  chests: array<Chest.t>,
  signs: array<Sign.t>,
  entities: array<Entity.t>,
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

  module PacketReader = ErrorAwarePacketReader
  let {readBuffer, getBytesLeft} = module(ErrorAwarePacketReader)
  let {readInt16, readInt32, readByte} = module(ErrorAwareBufferReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let packetReader = PacketFactory.PacketReader.make(payload) // Remains PacketFactory.PacketReader as per refined plan
    let deflated = packetReader->readBuffer(packetReader->getBytesLeft, "deflatedPayload")
    let reader = PacketFactory.BufferReader.make(NodeJs.Zlib.inflateRawSync(deflated)) // This reader is for the uncompressed data.
    let tileX = reader->readInt32("tileX")
    let tileY = reader->readInt32("tileY")
    let width = reader->readInt16("width")
    let height = reader->readInt16("height")
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
            rleCount.contents = rleCount.contents - 1
            row->Array.push(tileCache->cacheToTile)
          } else {
            clearTileCache(tileCache)
            let header5 = reader->readByte("header5")->BitFlags.fromByte
            let (header4, header3, header2) = if header5->BitFlags.flag1 {
              let header4 = reader->readByte("header4_conditional")->BitFlags.fromByte
              let header3 = if header4->BitFlags.flag1 {
                reader->readByte("header3_conditional")->BitFlags.fromByte
              } else {
                BitFlags.fromByte(0)
              }
              let header2 = if header3->BitFlags.flag1 {
                reader->readByte("header2_conditional")
              } else {
                0
              }
              (header4, header3, header2)
            } else {
              (BitFlags.fromByte(0), BitFlags.fromByte(0), 0)
            }
            tileCache.coatHeader = header2

            let oldActive = tileCache.activeTile
            if header5->BitFlags.flag2 {
              let oldType =
                tileCache.activeTile->Option.mapWithDefault(0, active => active.tileType)
              let tileType = if header5->BitFlags.flag6 {
                let byte = reader->readByte("tileType_byte1")
                let secondByte = reader->readByte("tileType_byte2")
                secondByte << 8 ||| byte
              } else {
                reader->readByte("tileType")
              }

              let frame = if TileFrameImportant.isImportant(tileType) {
                let x = reader->readInt16("frameX")
                let y = reader->readInt16("frameY")
                Some({x, y})
              } else if oldActive->Option.isSome && tileType === oldType {
                (oldActive->Option.getUnsafe).frame
              } else {
                None
              }

              if header3->BitFlags.flag4 {
                tileCache.color = Some(reader->readByte("color"))
              }

              tileCache.activeTile = Some({
                tileType,
                frame,
              })
            }

            if header5->BitFlags.flag3 {
              tileCache.wall = Some(reader->readByte("wall"))

              if header3->BitFlags.flag5 {
                tileCache.wallColor = Some(reader->readByte("wallColor"))
              }
            }

            let liquidBits = (header5->BitFlags.toByte &&& 24) >> 3
            if liquidBits != 0 {
              tileCache.liquid = Some(reader->readByte("liquidValue"))
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

              let slopeBits = (header4->BitFlags.toByte &&& 112) >> 4
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
                let byte = reader->readByte("wall_highByte")
                tileCache.wall = Some(byte << 8 ||| Option.getUnsafe(tileCache.wall))
              }
            }

            let repeatCountBytes = (header5->BitFlags.toByte &&& 192) >> 6
            switch repeatCountBytes {
            | 0 => rleCount.contents = 0
            | 1 => rleCount.contents = reader->readByte("rle_byte")
            | _ => rleCount.contents = reader->readInt16("rle_int16")
            }
            row->Array.push(tileCache->cacheToTile)
          }
        }
        tiles->Array.push(row)
      }

      let chestCount = reader->readInt16("chestCount")
      let chests = Belt.Array.make(chestCount, 0)->Array.map(_ => {
        reader->Chest.parse
      })
      let signCount = reader->readInt16("signCount")
      let signs = Belt.Array.make(signCount, 0)->Array.map(_ => {
        reader->Sign.parse
      })
      let entityCount = reader->readInt16("entityCount")
      let entities =
        Belt.Array.make(entityCount, 0)
        ->Array.map(_ => {
          reader->Entity.parse
        })
        ->ResultExt.allOkOrError

      switch entities {
      | Ok(entities) =>
        Some({
          height,
          width,
          tileX,
          tileY,
          tiles,
          chests,
          signs,
          entities,
        })
      | Error(_) => None
      }
    }
  }
}

module Encode = {
  let {setType, packBuffer} = module(ErrorAwarePacketWriter)
  let {packByte, packInt16, packInt32, data} = module(ErrorAwareBufferWriter)

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

  type bufferWriter = ErrorAwareBufferWriter.t

  let packTile = (writer: bufferWriter, tile: tile, repeatCount: int): bufferWriter => {
    let header2 = tile.coatHeader
    let header3 = BitFlags.fromFlags(
      ~flag1=header2 > 0,
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
    writer->packByte(tileFlags->BitFlags.toByte, "tileFlags")->ignore
    if tileFlags->BitFlags.flag1 {
      writer->packByte(header4->BitFlags.toByte, "header4")->ignore
      if header4->BitFlags.flag1 {
        writer->packByte(header3->BitFlags.toByte, "header3")->ignore
        if header3->BitFlags.flag1 {
          writer->packByte(header2, "header2")->ignore
        }
      }
    }

    switch tile.activeTile {
    | Some(activeTile) => {
        if tileFlags->BitFlags.flag6 {
          writer->packByte(activeTile.tileType &&& 255, "tileType_lowByte")->ignore
          writer->packByte((activeTile.tileType &&& 65280) >> 8, "tileType_highByte")->ignore
        } else {
          writer->packByte(activeTile.tileType, "tileType")->ignore
        }

        switch activeTile.frame {
        | Some({x, y}) => {
            writer->packInt16(x, "frameX")->ignore
            writer->packInt16(y, "frameY")->ignore
          }
        | None => ()
        }

        switch tile.color {
        | Some(color) => writer->packByte(color, "color")->ignore
        | None => ()
        }
      }
    | None => ()
    }

    switch tile.wall {
    | Some(wall) => {
        writer->packByte(wall &&& 255, "wall_lowByte")->ignore
        switch tile.wallColor {
        | Some(wallColor) => writer->packByte(wallColor, "wallColor")->ignore
        | None => ()
        }
      }
    | None => ()
    }

    switch tile.liquid {
    | Some(liquid) => writer->packByte(liquid, "liquidValue")->ignore
    | None => ()
    }

    switch tile.wall {
    | Some(wall) if wall > 255 => writer->packByte(wall >> 8, "wall_highByte")->ignore
    | Some(_) | None => ()
    }

    switch getRepeatCountByteLength(repeatCount) {
    | 0 => ()
    | 1 => writer->packByte(repeatCount, "rle_byte")->ignore
    | _ => writer->packInt16(repeatCount, "rle_int16")->ignore
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
        writer->packTile(last.tile, last.count)->ignore
        lastTile := Some({tile, count: 0})
      }
    | None => lastTile := Some({tile, count: 0})
    }
  }

  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    let outerPacketWriter =
      ErrorAwarePacketWriter.make()->setType(PacketType.TileSectionSend->PacketType.toInt)

    let innerWriter = ErrorAwareBufferWriter.make(NodeJs.Buffer.allocUnsafe(64_000))
    innerWriter
    ->packInt32(self.tileX, "tileX")
    ->packInt32(self.tileY, "tileY")
    ->packInt16(self.width, "width")
    ->packInt16(self.height, "height")
    ->ignore

    let lastTile = ref(None)
    for y in 0 to self.height - 1 {
      for x in 0 to self.width - 1 {
        let tile = (self.tiles[y]->Option.getUnsafe)[x]->Option.getUnsafe
        innerWriter->decidePackTile(lastTile, tile)
      }
    }

    switch lastTile.contents {
    | Some(lastTileValue) => innerWriter->packTile(lastTileValue.tile, lastTileValue.count)->ignore
    | None => ()
    }

    innerWriter->packInt16(self.chests->Array.length, "chestCount")->ignore
    self.chests->Array.forEach(chest => {
      innerWriter->Chest.pack(chest)->ignore
    })
    innerWriter->packInt16(self.signs->Array.length, "signCount")->ignore
    self.signs->Array.forEach(sign => {
      innerWriter->Sign.pack(sign)->ignore
    })
    innerWriter->packInt16(self.entities->Array.length, "entityCount")->ignore
    self.entities->Array.forEach(entity => {
      innerWriter->Entity.pack(entity)->ignore
    })

    switch innerWriter->data {
    | Ok(innerBuffer) =>
      let deflatedPayload = NodeJs.Zlib.deflateRawSync(innerBuffer)
      outerPacketWriter->packBuffer(deflatedPayload, "deflatedPayload")->ErrorAwarePacketWriter.data
    | Error(e) =>
      Error({
        error: e.error,
        context: "innerWriter; " ++ e.context,
      })
    }
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
