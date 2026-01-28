type tile = PacketV1449_TileSectionSend.tile
type tileCache = PacketV1449_TileSectionSend.tileCache
type frame = PacketV1449_TileSectionSend.frame
type activeTile = PacketV1449_TileSectionSend.activeTile
type liquid = PacketV1449_TileSectionSend.liquid
type t = PacketV1449_TileSectionSend.t

let {defaultTileCache, cacheToTile} = module(PacketV1449_TileSectionSend)
module Chest = PacketV1449_TileSectionSend.Chest
module Sign = PacketV1449_TileSectionSend.Sign
module Entity = PacketV1449_TileSectionSend.Entity

let isTheSameAs = (self: tile, compTile: tile) => {
  let sameHeaders =
    self.activeTile->Option.isSome == compTile.activeTile->Option.isSome &&
    self.inActive == compTile.inActive &&
    self.wire == compTile.wire &&
    self.wire2 == compTile.wire2 &&
    self.wire3 == compTile.wire3 &&
    self.halfBrick == compTile.halfBrick &&
    self.slope == compTile.slope &&
    self.actuator == compTile.actuator &&
    self.color == compTile.color

  if !sameHeaders {
    false
  } else {
    let activeMatches = switch (self.activeTile, compTile.activeTile) {
    | (None, None) => true
    | (Some(activeTile), Some(compActive)) =>
      if activeTile.tileType != compActive.tileType {
        false
      } else if TileFrameImportant.isImportant(activeTile.tileType) {
        activeTile.frame == compActive.frame
      } else {
        true
      }
    | _ => false
    }

    if !activeMatches {
      false
    } else if self.wall != compTile.wall || self.liquid != compTile.liquid {
      false
    } else {
      let sameWallColor = self.wallColor == compTile.wallColor
      let sameWire4 = self.wire4 == compTile.wire4
      let liquidMatches = switch compTile.liquid {
      | None => sameWallColor && sameWire4
      | Some(_) =>
        sameWallColor &&
        sameWire4 &&
        self.lava == compTile.lava &&
        self.honey == compTile.honey &&
        self.shimmer == compTile.shimmer
      }

      if !liquidMatches {
        false
      } else {
        self.invisibleBlock == compTile.invisibleBlock &&
        self.invisibleWall == compTile.invisibleWall &&
        self.fullbrightBlock == compTile.fullbrightBlock &&
        self.fullbrightWall == compTile.fullbrightWall
      }
    }
  }
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
    tile.shimmer = false
    tile.wire = false
    tile.wire2 = false
    tile.wire3 = false
    tile.wire4 = false
    tile.halfBrick = false
    tile.slope = None
    tile.actuator = false
    tile.inActive = false
    tile.invisibleBlock = false
    tile.invisibleWall = false
    tile.fullbrightBlock = false
    tile.fullbrightWall = false
    tile.coatHeader = 0
  }

  let {readBuffer, getBytesLeft} = module(ErrorAwarePacketReader)
  let {readInt16, readInt32, readByte} = module(ErrorAwareBufferReader)
  let getBufferBytesLeft = ErrorAwareBufferReader.getBytesLeft
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
        tileCache.invisibleBlock = (header2 &&& 2) != 0
        tileCache.invisibleWall = (header2 &&& 4) != 0
        tileCache.fullbrightBlock = (header2 &&& 8) != 0
        tileCache.fullbrightWall = (header2 &&& 16) != 0

        let oldActive = tileCache.activeTile
        let? Ok() = if header5->BitFlags.flag2 {
          let oldType = tileCache.activeTile->Option.mapOr(0, active => active.tileType)
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
            Ok(Some(({x, y}: frame)))
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
          if header3->BitFlags.flag8 {
            tileCache.shimmer = true
          } else if liquidBits > 1 {
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
              TileSolid.isSolid(tileCache.activeTile->Option.mapOr(0, tile => tile.tileType))
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
        let? Ok(entitiesBytesLeft) = reader->getBufferBytesLeft
        let? Ok(entitiesBuffer) = ErrorAwareBufferReader.readBuffer(
          reader,
          entitiesBytesLeft,
          "entitiesBuffer",
        )

        let entityReader = PacketFactory.BufferReader.make(entitiesBuffer)
        let? Ok(entities) = readRepeated(entityCount, () => Entity.parse(entityReader))
        let? Ok(bytesLeft) = entityReader->getBufferBytesLeft
        let? Ok() = if bytesLeft == 0 {
          Ok()
        } else {
          Error({
            ErrorAwarePacketReader.context: "Packet_TileSectionSend.entities",
            error: JsError.make("Unexpected trailing entity bytes")->JsError.toJsExn,
          })
        }

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
  let {packByte, packInt16, packInt32, slicedData} = module(ErrorAwareBufferWriter)

  type lastTile = {
    tile: tile,
    mutable count: int,
  }

  type liquidBits = Zero | One | Two | Three

  let getLiquidBitFlags = (tile: tile): (bool, bool) => {
    let hasLiquid = tile.liquid->Option.isSome
    let liquidBits: liquidBits = if !hasLiquid {
      Zero
    } else if tile.shimmer {
      One
    } else if tile.honey {
      Three
    } else if tile.lava {
      Two
    } else {
      One
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

  let allowsSaveCompressionBatching = (tile: tile): bool =>
    switch tile.activeTile {
    | Some(activeTile) => activeTile.tileType != 520 && activeTile.tileType != 423
    | None => true
    }

  let packTile = (writer: bufferWriter, tile: tile, repeatCount: int): bufferWriter => {
    let coatFlags =
      (tile.invisibleBlock ? 2 : 0) +
      (tile.invisibleWall ? 4 : 0) +
      (tile.fullbrightBlock ? 8 : 0) + (tile.fullbrightWall ? 16 : 0)
    let header2 = tile.coatHeader ||| coatFlags
    let hasLiquid = tile.liquid->Option.isSome
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
      ~flag8=tile.shimmer && hasLiquid,
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
      if tile->isTheSameAs(last.tile) && allowsSaveCompressionBatching(tile) {
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

    switch innerWriter->slicedData {
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
