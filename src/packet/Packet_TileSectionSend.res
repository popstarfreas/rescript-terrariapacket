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

  let parse = (reader): result<t, ErrorAwarePacketReader.readError> => {
    let? Ok(id) = reader->readInt16("id")
    let? Ok(x) = reader->readInt16("x")
    let? Ok(y) = reader->readInt16("y")
    let? Ok(name) = reader->readString("name")
    Ok({id, x, y, name})
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

  let parse = (reader): result<t, ErrorAwarePacketReader.readError> => {
    let? Ok(id) = reader->readInt16("id")
    let? Ok(x) = reader->readInt16("x")
    let? Ok(y) = reader->readInt16("y")
    let? Ok(name) = reader->readString("name")

    Ok({id, x, y, name})
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

  let parseTrainingDummyKind = (reader): result<
    trainingDummy,
    ErrorAwarePacketReader.readError,
  > => {
    let? Ok(npcSlotId) = reader->readInt16("npcSlotId")
    Ok({npcSlotId: npcSlotId})
  }

  let parseDisplayItem = (reader): result<displayItem, ErrorAwarePacketReader.readError> => {
    let? Ok(netId) = reader->readInt16("netId")
    let? Ok(prefix) = reader->readByte("prefix")
    let? Ok(stack) = reader->readInt16("stack")

    Ok({
      netId,
      prefix,
      stack,
    })
  }

  let parseItemFrameKind = parseDisplayItem

  let parseLogicSensorKind = (reader): result<logicSensor, ErrorAwarePacketReader.readError> => {
    let? Ok(checkType) = reader->readByte("checkType")
    let? Ok(onRaw) = reader->readByte("on")

    Ok({
      checkType,
      on: onRaw == 1,
    })
  }

  let parseDisplayDollKind = (reader): result<displayDoll, ErrorAwarePacketReader.readError> => {
    let? Ok(itemsFlagsRaw) = reader->readByte("itemsFlags")
    let itemsFlags = BitFlags.fromByte(itemsFlagsRaw)
    let? Ok(dyeFlagsRaw) = reader->readByte("dyeFlags")
    let dyeFlags = BitFlags.fromByte(dyeFlagsRaw)
    let items = []
    let dyes = []
    let parseResult = ref(Ok())

    for i in 0 to 7 {
      switch parseResult.contents {
      | Error(_) => ()
      | Ok(_) =>
        if itemsFlags->BitFlags.flagN(i) {
          switch parseDisplayItem(reader) {
          | Ok(item) => items->Array.push(Some(item))->ignore
          | Error(err) => parseResult := Error(err)
          }
        } else {
          items->Array.push(None)->ignore
        }
      }
    }

    for i in 0 to 7 {
      switch parseResult.contents {
      | Error(_) => ()
      | Ok(_) =>
        if dyeFlags->BitFlags.flagN(i) {
          switch parseDisplayItem(reader) {
          | Ok(item) => dyes->Array.push(Some(item))->ignore
          | Error(err) => parseResult := Error(err)
          }
        } else {
          dyes->Array.push(None)->ignore
        }
      }
    }

    switch parseResult.contents {
    | Ok(_) =>
      Ok({
        items,
        dyes,
      })
    | Error(err) => Error(err)
    }
  }

  let parseWeaponsRackKind = parseDisplayItem

  let parseHatRackKind = (reader): result<hatRack, ErrorAwarePacketReader.readError> => {
    let? Ok(flagsRaw) = reader->readByte("flags")
    let flags = BitFlags.fromByte(flagsRaw)
    let items = []
    let dyes = []
    let parseResult = ref(Ok())

    for i in 0 to 1 {
      switch parseResult.contents {
      | Error(_) => ()
      | Ok(_) =>
        if flags->BitFlags.flagN(i) {
          switch parseDisplayItem(reader) {
          | Ok(item) => items->Array.push(Some(item))->ignore
          | Error(err) => parseResult := Error(err)
          }
        } else {
          items->Array.push(None)->ignore
        }
      }
    }

    for i in 0 to 1 {
      switch parseResult.contents {
      | Error(_) => ()
      | Ok(_) =>
        if flags->BitFlags.flagN(i + 2) {
          switch parseDisplayItem(reader) {
          | Ok(item) => dyes->Array.push(Some(item))->ignore
          | Error(err) => parseResult := Error(err)
          }
        } else {
          dyes->Array.push(None)->ignore
        }
      }
    }

    switch parseResult.contents {
    | Ok(_) =>
      Ok({
        items,
        dyes,
      })
    | Error(err) => Error(err)
    }
  }

  let parseFoodPlatterKind = parseDisplayItem

  let parse = (reader): result<t, ErrorAwarePacketReader.readError> => {
    let? Ok(entityType) = reader->readByte("entityType")
    let? Ok(x) = reader->readInt16("x")
    let? Ok(y) = reader->readInt16("y")
    let? Ok(entityKind) = switch entityType {
    | 0 => parseTrainingDummyKind(reader)->Result.map(v => TrainingDummy(v))
    | 1 => parseItemFrameKind(reader)->Result.map(v => ItemFrame(v))
    | 2 => parseLogicSensorKind(reader)->Result.map(v => LogicSensor(v))
    | 3 => parseDisplayDollKind(reader)->Result.map(v => DisplayDoll(v))
    | 4 => parseWeaponsRackKind(reader)->Result.map(v => WeaponsRack(v))
    | 5 => parseHatRackKind(reader)->Result.map(v => HatRack(v))
    | 6 => parseFoodPlatterKind(reader)->Result.map(v => FoodPlatter(v))
    | 7 => Ok(TeleportationPylon())
    | _ =>
      Error({
        context: "Entity.parse",
        error: JsError.make("Unknown entity kind: " ++ Int.toString(entityType))->JsError.toJsExn,
      })
    }

    Ok({
      entityType,
      x,
      y,
      entityKind,
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
  let readRepeated = (
    count: int,
    parseItem: unit => result<'a, ErrorAwarePacketReader.readError>,
  ): result<array<'a>, ErrorAwarePacketReader.readError> => {
    let items: array<'a> = []
    let parseResult = ref(Ok())
    for _i in 0 to count - 1 {
      switch parseResult.contents {
      | Error(_) => ()
      | Ok(_) =>
        switch parseItem() {
        | Ok(item) => items->Array.push(item)->ignore
        | Error(err) => parseResult := Error(err)
        }
      }
    }
    switch parseResult.contents {
    | Ok(_) => Ok(items)
    | Error(err) => Error(err)
    }
  }

  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let packetReader = PacketFactory.PacketReader.make(payload)
    let? Ok(bytesLeft) = packetReader->getBytesLeft
    let? Ok(deflated) = packetReader->readBuffer(bytesLeft, "deflatedPayload")
    let inflated = try {
      Ok(NodeJs.Zlib.inflateRawSync(deflated))
    } catch {
    | JsExn(obj) => Error({ErrorAwarePacketReader.context: "inflateRawSync", error: obj})
    }
    let? Ok(inflatedBuffer) = inflated
    let reader = PacketFactory.BufferReader.make(inflatedBuffer)
    let? Ok(tileX) = reader->readInt32("tileX")
    let? Ok(tileY) = reader->readInt32("tileY")
    let? Ok(width) = reader->readInt16("width")
    let? Ok(height) = reader->readInt16("height")
    let tiles: array<array<tile>> = []
    let tileCache = defaultTileCache()
    let rleCount = ref(0)
    if height < 0 || width < 0 {
      Error({
        context: "Packet_TileSectionSend.parse",
        error: JsError.make("Tile section dimensions must be non-negative")->JsError.toJsExn,
      })
    } else {
      let parseResult = ref(Ok())

      let readTile = (): result<tile, ErrorAwarePacketReader.readError> => {
        clearTileCache(tileCache)
        let? Ok(header5Raw) = reader->readByte("header5")
        let header5 = header5Raw->BitFlags.fromByte
        let? Ok((header4, header3, header2)) = if header5->BitFlags.flag1 {
          let? Ok(header4Raw) = reader->readByte("header4_conditional")
          let header4 = header4Raw->BitFlags.fromByte
          let? Ok((header3, header2)) = if header4->BitFlags.flag1 {
            let? Ok(header3Raw) = reader->readByte("header3_conditional")
            let header3 = header3Raw->BitFlags.fromByte
            let? Ok(header2) = if header3->BitFlags.flag1 {
              reader->readByte("header2_conditional")
            } else {
              Ok(0)
            }
            Ok((header3, header2))
          } else {
            Ok((BitFlags.fromByte(0), 0))
          }
          Ok((header4, header3, header2))
        } else {
          Ok((BitFlags.fromByte(0), BitFlags.fromByte(0), 0))
        }
        tileCache.coatHeader = header2

        let oldActive = tileCache.activeTile
        let? Ok() = if header5->BitFlags.flag2 {
          let oldType = tileCache.activeTile->Option.mapWithDefault(0, active => active.tileType)
          let? Ok(tileType) = if header5->BitFlags.flag6 {
            let? Ok(byte) = reader->readByte("tileType_byte1")
            let? Ok(secondByte) = reader->readByte("tileType_byte2")
            Ok(secondByte << 8 ||| byte)
          } else {
            reader->readByte("tileType")
          }

          let? Ok(frame) = if TileFrameImportant.isImportant(tileType) {
            let? Ok(x) = reader->readInt16("frameX")
            let? Ok(y) = reader->readInt16("frameY")
            Ok(Some({x, y}))
          } else if oldActive->Option.isSome && tileType === oldType {
            Ok((oldActive->Option.getUnsafe).frame)
          } else {
            Ok(None)
          }

          let? Ok() = if header3->BitFlags.flag4 {
            let? Ok(color) = reader->readByte("color")
            tileCache.color = Some(color)
            Ok()
          } else {
            Ok()
          }

          tileCache.activeTile = Some({
            tileType,
            frame,
          })
          Ok()
        } else {
          Ok()
        }

        let? Ok() = if header5->BitFlags.flag3 {
          let? Ok(wall) = reader->readByte("wall")
          tileCache.wall = Some(wall)

          if header3->BitFlags.flag5 {
            let? Ok(wallColor) = reader->readByte("wallColor")
            tileCache.wallColor = Some(wallColor)
            Ok()
          } else {
            Ok()
          }
        } else {
          Ok()
        }

        let liquidBits = (header5->BitFlags.toByte &&& 24) >> 3
        let? Ok() = if liquidBits != 0 {
          let? Ok(liquidValue) = reader->readByte("liquidValue")
          tileCache.liquid = Some(liquidValue)
          if liquidBits > 1 {
            if liquidBits == 2 {
              tileCache.lava = true
            } else {
              tileCache.honey = true
            }
          }
          Ok()
        } else {
          Ok()
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

        let? Ok() = if header3->BitFlags.toByte > 0 {
          if header3->BitFlags.flag2 {
            tileCache.actuator = true
          }
          if header3->BitFlags.flag3 {
            tileCache.inActive = true
          }
          if header3->BitFlags.flag6 {
            tileCache.wire4 = true
          }
          let? Ok() = if header3->BitFlags.flag7 {
            let? Ok(byte) = reader->readByte("wall_highByte")
            tileCache.wall = Some(byte << 8 ||| Option.getUnsafe(tileCache.wall))
            Ok()
          } else {
            Ok()
          }

          Ok()
        } else {
          Ok()
        }

        let repeatCountBytes = (header5->BitFlags.toByte &&& 192) >> 6
        let? Ok() = switch repeatCountBytes {
        | 0 => {
            rleCount.contents = 0
            Ok()
          }
        | 1 =>
          let? Ok(rleByte) = reader->readByte("rle_byte")
          rleCount.contents = rleByte
          Ok()
        | _ =>
          let? Ok(rleInt) = reader->readInt16("rle_int16")
          rleCount.contents = rleInt
          Ok()
        }
        Ok(tileCache->cacheToTile)
      }

      for _y in 0 to height - 1 {
        switch parseResult.contents {
        | Error(_) => ()
        | Ok(_) =>
          let row: array<tile> = []
          for _x in 0 to width - 1 {
            switch parseResult.contents {
            | Error(_) => ()
            | Ok(_) =>
              if rleCount.contents != 0 {
                rleCount.contents = rleCount.contents - 1
                row->Array.push(tileCache->cacheToTile)
              } else {
                switch readTile() {
                | Ok(tile) => row->Array.push(tile)
                | Error(err) => parseResult := Error(err)
                }
              }
            }
          }
          switch parseResult.contents {
          | Ok(_) => tiles->Array.push(row)
          | Error(_) => ()
          }
        }
      }

      switch parseResult.contents {
      | Error(err) => Error(err)
      | Ok(_) =>
        let? Ok(chestCount) = reader->readInt16("chestCount")
        let? Ok(chests) = readRepeated(chestCount, () => reader->Chest.parse)
        let? Ok(signCount) = reader->readInt16("signCount")
        let? Ok(signs) = readRepeated(signCount, () => reader->Sign.parse)
        let? Ok(entityCount) = reader->readInt16("entityCount")
        let? Ok(entities) = readRepeated(entityCount, () => reader->Entity.parse)

        Ok({
          height,
          width,
          tileX,
          tileY,
          tiles,
          chests,
          signs,
          entities,
        })
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
