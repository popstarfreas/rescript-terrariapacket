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
  let {readInt16, readUInt16, readByte} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let tileX = reader->readInt16
    let tileY = reader->readInt16
    let width = reader->readByte
    let height = reader->readByte
    let changeType = reader->readByte
    let tiles: array<array<tile>> = []
    for _x in 0 to width - 1 {
      let column: array<tile> = []
      for _y in 0 to height - 1 {
        let flags1 = reader->readByte->BitFlags.fromByte
        let flags2 = reader->readByte->BitFlags.fromByte
        let flags3 = reader->readByte
        let active = flags1->BitFlags.flag1
        let hasWall = flags1->BitFlags.flag3
        let hasLiquid = flags1->BitFlags.flag4
        let wire = flags1->BitFlags.flag5
        let halfBrick = flags1->BitFlags.flag6
        let actuator = flags1->BitFlags.flag7
        let inActive = flags1->BitFlags.flag8
        let wire2 = flags2->BitFlags.flag1
        let wire3 = flags2->BitFlags.flag2
        let color = switch flags2->BitFlags.flag3 {
        | true => Some(reader->readByte)
        | false => None
        }
        let wallColor = switch flags2->BitFlags.flag4 {
        | true => Some(reader->readByte)
        | false => None
        }
        let activeTile = switch active {
        | true => {
            let tileType = reader->readUInt16
            let frame = switch TileFrameImportant.isImportant(tileType) {
            | true =>
              Some({
                x: reader->PacketFactory.PacketReader.readInt16,
                y: reader->PacketFactory.PacketReader.readInt16,
              })
            | false => None
            }
            let slope =
              0 +
              (flags2->BitFlags.flag5 ? 1 : 0) +
              (flags2->BitFlags.flag6 ? 2 : 0) + (flags2->BitFlags.flag7 ? 4 : 0)
            Some({
              tileType,
              slope,
              frame,
            })
          }
        | false => None
        }
        let wall = switch hasWall {
        | true => Some(reader->readUInt16)
        | false => None
        }
        let liquid = switch hasLiquid {
        | true =>
          Some({
            liquidValue: reader->readByte,
            liquidType: reader->readByte,
          })
        | false => None
        }
        let wire4 = flags2->BitFlags.flag8
        column
        ->Js.Array2.push({
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
          coatHeader: flags3
        })
        ->ignore
      }
      tiles->Js.Array2.push(column)->ignore
    }

    Some({
      height,
      width,
      changeType,
      tileX,
      tileY,
      tiles,
    })
  }
}

module Encode = {
  let {packUInt16, packInt16, packByte, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let packTile = (
    writer: PacketFactory.ManagedPacketWriter.t,
    tile: tile,
  ): PacketFactory.ManagedPacketWriter.t => {
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
      ~flag5=tile.activeTile->Option.mapWithDefault(false, tile => tile.slope->land(1) == 1),
      ~flag6=tile.activeTile->Option.mapWithDefault(false, tile => tile.slope->land(2) == 2),
      ~flag7=tile.activeTile->Option.mapWithDefault(false, tile => tile.slope->land(4) == 4),
      ~flag8=tile.wire4,
    )
    writer
    ->packByte(flags1->BitFlags.toByte)
    ->packByte(flags2->BitFlags.toByte)
    ->packByte(tile.coatHeader)
    ->ignore
    switch tile.color {
    | Some(color) => writer->packByte(color)->ignore
    | None => ()
    }
    switch tile.wallColor {
    | Some(color) => writer->packByte(color)->ignore
    | None => ()
    }
    switch tile.activeTile {
    | Some(activeTile) => {
        writer->packUInt16(activeTile.tileType)->ignore
        switch TileFrameImportant.isImportant(activeTile.tileType) {
        | true =>
          writer
          ->packInt16(activeTile.frame->Option.mapWithDefault(0, frame => frame.x))
          ->packInt16(activeTile.frame->Option.mapWithDefault(0, frame => frame.y))
          ->ignore
        | false => ()
        }
      }
    | None => ()
    }
    switch tile.wall {
    | Some(wall) => writer->packUInt16(wall)->ignore
    | None => ()
    }
    switch tile.liquid {
    | Some(liquid) => writer->packByte(liquid.liquidValue)->packByte(liquid.liquidType)->ignore
    | None => ()
    }
    writer
  }

  let packTiles = (
    writer: PacketFactory.ManagedPacketWriter.t,
    tiles: array<array<tile>>,
  ): PacketFactory.ManagedPacketWriter.t => {
    for x in 0 to tiles->Array.length - 1 {
      for y in 0 to tiles[x]->Option.getUnsafe->Array.length - 1 {
        writer->packTile((tiles[x]->Option.getUnsafe)[y]->Option.getUnsafe)->ignore
      }
    }
    writer
  }

  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.TileSquareSend->PacketType.toInt)
    ->packInt16(self.tileX)
    ->packInt16(self.tileY)
    ->packByte(self.width)
    ->packByte(self.height)
    ->packByte(self.changeType)
    ->packTiles(self.tiles)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
