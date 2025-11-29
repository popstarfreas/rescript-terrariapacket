module Option = Belt.Option

type frame = {
  x: int,
  y: int,
}

type activeTile = {
  tileType: int,
  slope: int,
  frame: option<frame>,
}

type liquid = {
  liquidValue: int,
  liquidType: int,
}

type tile = {
  wire: bool,
  halfBrick: bool,
  actuator: bool,
  inActive: bool,
  wire2: bool,
  wire3: bool,
  wire4: bool,
  color: option<int>,
  wallColor: option<int>,
  activeTile: option<activeTile>,
  wall: option<int>,
  liquid: option<liquid>,
  coatHeader: int,
}

type t = {
  width: int,
  height: int,
  changeType: int,
  tileX: int,
  tileY: int,
  tiles: array<array<tile>>,
}

module Decode = {
  let {readInt16, readUInt16, readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(tileX) = reader->readInt16("tileX")
    let? Ok(tileY) = reader->readInt16("tileY")
    let? Ok(width) = reader->readByte("width")
    let? Ok(height) = reader->readByte("height")
    let? Ok(changeType) = reader->readByte("changeType")

    let readTile = () => {
      let? Ok(flags1Raw) = reader->readByte("flags1")
      let flags1 = flags1Raw->BitFlags.fromByte
      let? Ok(flags2Raw) = reader->readByte("flags2")
      let flags2 = flags2Raw->BitFlags.fromByte
      let? Ok(flags3) = reader->readByte("flags3") // coatHeader
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
      | true =>
        let? Ok(color) = reader->readByte("color")
        Ok(Some(color))
      | false => Ok(None)
      }
      let? Ok(wallColor) = switch flags2->BitFlags.flag4 {
      | true =>
        let? Ok(wallColor) = reader->readByte("wallColor")
        Ok(Some(wallColor))
      | false => Ok(None)
      }
      let? Ok(activeTile) = switch active {
      | true =>
        let? Ok(tileType) = reader->readUInt16("tileType")
        let? Ok(frame) = switch TileFrameImportant.isImportant(tileType) {
        | true =>
          let? Ok(frameX) = reader->readInt16("frameX")
          let? Ok(frameY) = reader->readInt16("frameY")
          Ok(Some({x: frameX, y: frameY}))
        | false => Ok(None)
        }
        let slope =
          0 +
          (flags2->BitFlags.flag5 ? 1 : 0) +
          (flags2->BitFlags.flag6 ? 2 : 0) + (flags2->BitFlags.flag7 ? 4 : 0)
        Ok(
          Some({
            tileType,
            slope,
            frame,
          }),
        )
      | false => Ok(None)
      }
      let? Ok(wall) = switch hasWall {
      | true =>
        let? Ok(wall) = reader->readUInt16("wall")
        Ok(Some(wall))
      | false => Ok(None)
      }
      let? Ok(liquid) = switch hasLiquid {
      | true =>
        let? Ok(liquidValue) = reader->readByte("liquidValue")
        let? Ok(liquidType) = reader->readByte("liquidType")
        Ok(Some({liquidValue, liquidType}))
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
        coatHeader: flags3,
      })
    }

    let tiles: array<array<tile>> = []
    let parseResult = ref(Ok())
    for _x in 0 to width - 1 {
      switch parseResult.contents {
      | Error(_) => ()
      | Ok(_) =>
        let column: array<tile> = []
        for _y in 0 to height - 1 {
          switch parseResult.contents {
          | Error(_) => ()
          | Ok(_) =>
            switch readTile() {
            | Ok(tile) => column->Array.push(tile)->ignore
            | Error(err) => parseResult := Error(err)
            }
          }
        }
        switch parseResult.contents {
        | Ok(_) => tiles->Array.push(column)->ignore
        | Error(_) => ()
        }
      }
    }

    switch parseResult.contents {
    | Ok(_) =>
      Ok({
        width,
        height,
        changeType,
        tileX,
        tileY,
        tiles,
      })
    | Error(err) => Error(err)
    }
  }
}

module Encode = {
  let {packUInt16, packInt16, packByte, setType, data} = module(ErrorAwarePacketWriter)
  let packTile = (writer: ErrorAwarePacketWriter.t, tile: tile): ErrorAwarePacketWriter.t => {
    // Assuming ManagedPacketWriter.t is compatible or ErrorAwarePacketWriter.t
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
    ->packByte(flags1->BitFlags.toByte, "flags1")
    ->packByte(flags2->BitFlags.toByte, "flags2")
    ->packByte(tile.coatHeader, "coatHeader")
    ->ignore
    switch tile.color {
    | Some(c) => writer->packByte(c, "color")->ignore
    | None => ()
    }
    switch tile.wallColor {
    | Some(wc) => writer->packByte(wc, "wallColor")->ignore
    | None => ()
    }
    switch tile.activeTile {
    | Some(at) => {
        writer->packUInt16(at.tileType, "tileType")->ignore
        switch TileFrameImportant.isImportant(at.tileType) {
        | true =>
          writer
          ->packInt16(at.frame->Option.mapWithDefault(0, frame => frame.x), "frameX")
          ->packInt16(at.frame->Option.mapWithDefault(0, frame => frame.y), "frameY")
          ->ignore
        | false => ()
        }
      }
    | None => ()
    }
    switch tile.wall {
    | Some(w) => writer->packUInt16(w, "wall")->ignore
    | None => ()
    }
    switch tile.liquid {
    | Some(l) =>
      writer->packByte(l.liquidValue, "liquidValue")->packByte(l.liquidType, "liquidType")->ignore
    | None => ()
    }
    writer
  }

  let packTiles = (
    writer: ErrorAwarePacketWriter.t, // Assuming ManagedPacketWriter.t is compatible or ErrorAwarePacketWriter.t
    tiles: array<array<tile>>,
  ): ErrorAwarePacketWriter.t => {
    for x in 0 to tiles->Array.length - 1 {
      for y in 0 to tiles[x]->Option.getUnsafe->Array.length - 1 {
        writer->packTile((tiles[x]->Option.getUnsafe)[y]->Option.getUnsafe)->ignore
      }
    }
    writer
  }

  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.TileSquareSend->PacketType.toInt)
    ->packInt16(self.tileX, "tileX")
    ->packInt16(self.tileY, "tileY")
    ->packByte(self.width, "width")
    ->packByte(self.height, "height")
    ->packByte(self.changeType, "changeType")
    ->packTiles(self.tiles)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
