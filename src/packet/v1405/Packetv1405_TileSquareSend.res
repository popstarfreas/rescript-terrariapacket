module Option = Belt.Option

type frame = Packet.TileSquareSend.frame
type activeTile = Packet.TileSquareSend.activeTile
type liquid = Packet.TileSquareSend.liquid
type tile = Packet.TileSquareSend.tile

type t = {
  size: int,
  changeType: int,
  tileX: int,
  tileY: int,
  tiles: array<array<tile>>,
}

module Decode = {
  let {readString, readInt16, readUInt16, readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(packedSizeAndType) = reader->readUInt16("packedSizeAndType")
    let? Ok(changeType) = if (packedSizeAndType &&& 32768) !== 0 {
      reader->readByte("changeType")
    } else {
      Ok(0)
    }
    let width = packedSizeAndType &&& 32767
    let height = width
    let? Ok(tileX) = reader->readInt16("tileX")
    let? Ok(tileY) = reader->readInt16("tileY")

    let readTile = (~x: int, ~y: int): result<tile, ErrorAwarePacketReader.readError> => {
      let coord = Int.toString(x) ++ "," ++ Int.toString(y)
      let ctx = label => label ++ " (" ++ coord ++ ")"
      let? Ok(flags1Raw) = reader->readByte(ctx("flags1"))
      let flags1 = flags1Raw->BitFlags.fromByte
      let? Ok(flags2Raw) = reader->readByte(ctx("flags2"))
      let flags2 = flags2Raw->BitFlags.fromByte
      let active = flags1->BitFlags.flag1
      let hasWall = flags1->BitFlags.flag3
      let hasLiquid = flags1->BitFlags.flag4
      let wire = flags1->BitFlags.flag5
      let halfBrick = flags1->BitFlags.flag6
      let actuator = flags1->BitFlags.flag7
      let inActive = flags1->BitFlags.flag8
      let wire2 = flags2->BitFlags.flag1
      let wire3 = flags2->BitFlags.flag2
      let? Ok(color) = switch flags2->BitFlags.flag3 {
      | true => reader->readByte(ctx("color"))->Result.map(v => Some(v))
      | false => Ok(None)
      }
      let? Ok(wallColor) = switch flags2->BitFlags.flag4 {
      | true => reader->readByte(ctx("wallColor"))->Result.map(v => Some(v))
      | false => Ok(None)
      }
      let? Ok(activeTile) = switch active {
      | true => {
          let? Ok(tileType) = reader->readUInt16(ctx("tileType"))
          let? Ok(frame) = switch TileFrameImportant.isImportant(tileType) {
          | true =>
            let? Ok(frameX) = reader->readInt16(ctx("frameX"))
            let? Ok(frameY) = reader->readInt16(ctx("frameY"))
            Ok(Some({Packet.TileSquareSend.x: frameX, y: frameY}))
          | false => Ok(None)
          }
          let slope =
            0 +
            (flags2->BitFlags.flag5 ? 1 : 0) +
            (flags2->BitFlags.flag6 ? 2 : 0) + (flags2->BitFlags.flag7 ? 4 : 0)
          Ok(Some({Packet.TileSquareSend.tileType, slope, frame}))
        }
      | false => Ok(None)
      }
      let? Ok(wall) = switch hasWall {
      | true => reader->readUInt16(ctx("wall"))->Result.map(v => Some(v))
      | false => Ok(None)
      }
      let? Ok(liquid) = switch hasLiquid {
      | true =>
        let? Ok(liquidValue) = reader->readByte(ctx("liquidValue"))
        let? Ok(liquidType) = reader->readByte(ctx("liquidType"))
        Ok(Some({Packet.TileSquareSend.liquidValue, liquidType}))
      | false => Ok(None)
      }
      let wire4 = flags2->BitFlags.flag8
      Ok({
        wire,
        halfBrick,
        actuator,
        inActive,
        wire2,
        wire3,
        wire4,
        color,
        wallColor,
        activeTile,
        wall,
        liquid,
        coatHeader: 0,
      })
    }

    let tiles: array<array<tile>> = []
    let rec readColumns = x =>
      if x >= width {
        Ok()
      } else {
        let column: array<tile> = []
        let rec readRows = y =>
          if y >= height {
            Ok()
          } else {
            let? Ok(tile) = readTile(~x, ~y)
            column->Array.push(tile)
            readRows(y + 1)
          }
        let? Ok(_) = readRows(0)
        tiles->Array.push(column)
        readColumns(x + 1)
      }

    let? Ok(_) = readColumns(0)

    Ok({
      size: height,
      changeType,
      tileX,
      tileY,
      tiles,
    })
  }
}

module Encode = {
  let {packUInt16, packInt16, packByte, setType, data} = module(ErrorAwarePacketWriter)
  let packTile = (
    writer: ErrorAwarePacketWriter.t,
    tile: tile,
    ~context: string,
  ): ErrorAwarePacketWriter.t => {
    let flags1 = BitFlags.fromFlags(
      ~flag1=tile.activeTile->Option.isSome,
      ~flag2=false,
      ~flag3=tile.wall->Option.isSome,
      ~flag4=tile.liquid->Option.isSome,
      ~flag5=tile.wire,
      ~flag6=tile.halfBrick,
      ~flag7=tile.actuator,
      ~flag8=tile.inActive,
    )
    let flags2 = BitFlags.fromFlags(
      ~flag1=tile.wire2,
      ~flag2=tile.wire3,
      ~flag3=tile.color->Option.isSome,
      ~flag4=tile.wallColor->Option.isSome,
      ~flag5=tile.activeTile->Option.mapWithDefault(false, tile => (tile.slope &&& 1) == 1),
      ~flag6=tile.activeTile->Option.mapWithDefault(false, tile => (tile.slope &&& 2) == 2),
      ~flag7=tile.activeTile->Option.mapWithDefault(false, tile => (tile.slope &&& 4) == 4),
      ~flag8=tile.wire4,
    )
    writer
    ->packByte(flags1->BitFlags.toByte, context ++ ".flags1")
    ->packByte(flags2->BitFlags.toByte, context ++ ".flags2")
    ->ignore
    switch tile.color {
    | Some(color) => writer->packByte(color, context ++ ".color")->ignore
    | None => ()
    }
    switch tile.wallColor {
    | Some(color) => writer->packByte(color, context ++ ".wallColor")->ignore
    | None => ()
    }
    switch tile.activeTile {
    | Some(activeTile) => {
        writer->packUInt16(activeTile.tileType, context ++ ".tileType")->ignore
        switch TileFrameImportant.isImportant(activeTile.tileType) {
        | true =>
          writer
          ->packInt16(
            activeTile.frame->Option.mapWithDefault(0, frame => frame.x),
            context ++ ".frameX",
          )
          ->packInt16(
            activeTile.frame->Option.mapWithDefault(0, frame => frame.y),
            context ++ ".frameY",
          )
          ->ignore
        | false => ()
        }
      }
    | None => ()
    }
    switch tile.wall {
    | Some(wall) => writer->packByte(wall, context ++ ".wall")->ignore
    | None => ()
    }
    switch tile.liquid {
    | Some(liquid) =>
      writer
      ->packByte(liquid.liquidValue, context ++ ".liquidValue")
      ->packByte(liquid.liquidType, context ++ ".liquidType")
      ->ignore
    | None => ()
    }
    writer
  }

  let packTiles = (
    writer: ErrorAwarePacketWriter.t,
    tiles: array<array<tile>>,
  ): ErrorAwarePacketWriter.t => {
    for x in 0 to tiles->Array.length - 1 {
      for y in 0 to tiles[x]->Option.getUnsafe->Array.length - 1 {
        let context = "tile(" ++ Int.toString(x) ++ "," ++ Int.toString(y) ++ ")"
        writer->packTile((tiles[x]->Option.getUnsafe)[y]->Option.getUnsafe, ~context)->ignore
      }
    }
    writer
  }

  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    let packedSizeAndType = switch self.changeType {
    | 0 => self.size &&& 32767
    | _ => self.size &&& 32767 ||| 32768
    }
    let writer =
      ErrorAwarePacketWriter.make()
      ->setType(PacketType.TileSquareSend->PacketType.toInt)
      ->packUInt16(packedSizeAndType, "packedSizeAndType")
    if self.changeType !== 0 {
      writer->packByte(self.changeType, "changeType")->ignore
    }
    writer
    ->packInt16(self.tileX, "tileX")
    ->packInt16(self.tileY, "tileY")
    ->packTiles(self.tiles)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
let toLatest = (self: t): Packet.TileSquareSend.t => {
  height: self.size,
  width: self.size,
  tileX: self.tileX,
  tileY: self.tileY,
  changeType: self.changeType,
  tiles: self.tiles,
}

let fromLatest = (latest: Packet.TileSquareSend.t): option<t> => {
  if latest.width == latest.height {
    Some({
      size: latest.width,
      tileX: latest.tileX,
      tileY: latest.tileY,
      changeType: latest.changeType,
      tiles: latest.tiles,
    })
  } else {
    None
  }
}
