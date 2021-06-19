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
  let {readString, readInt16, readUInt16, readByte} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let packedSizeAndType = reader->readUInt16
    let changeType = if packedSizeAndType->land(32768) !== 0 {
      reader->readByte
    } else {
      0
    }
    let width = packedSizeAndType->land(32767)
    let height = width
    let tileX = reader->readInt16
    let tileY = reader->readInt16
    let tiles: array<array<tile>> = []
    for (_x in 0 to width - 1) {
      let column: array<tile> = []
      for (_y in 0 to height - 1) {
        let flags1 = reader->readByte->BitFlags.fromByte
        let flags2 = reader->readByte->BitFlags.fromByte
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
        let activeTile: option<activeTile> = switch active {
          | true => {
            let tileType = reader->readUInt16
            let frame: option<frame> = switch TileFrameImportant.isImportant(tileType) {
              | true => Some({
                x: reader->PacketFactory.PacketReader.readInt16,
                y: reader->PacketFactory.PacketReader.readInt16,
              })
              | false => None
            }
            let slope = 0
              + (flags2->BitFlags.flag5 ? 1 : 0)
              + (flags2->BitFlags.flag6 ? 2 : 0)
              + (flags2->BitFlags.flag7 ? 4 : 0)
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
        let liquid: option<liquid> = switch hasLiquid {
          | true => Some({
            liquidValue: reader->readByte,
            liquidType: reader->readByte,
          })
          | false => None
        }
        let wire4 = flags2->BitFlags.flag8
        column->Js.Array2.push({
          wire: wire,
          halfBrick: halfBrick,
          actuator: actuator,
          inActive: inActive,
          wire2: wire2,
          wire3: wire3,
          wire4: wire4,
          color: color,
          wallColor: wallColor,
          activeTile: activeTile,
          wall: wall,
          liquid: liquid,
        })->ignore
      }
      tiles->Js.Array2.push(column)->ignore
    }

    Some({
      size: height,
      changeType: changeType,
      tileX: tileX,
      tileY: tileY,
      tiles: tiles
    })
  }
}

module Encode = {
  let {packUInt16, packInt16, packByte, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let packTile = (writer: PacketFactory.ManagedPacketWriter.t, tile: tile): PacketFactory.ManagedPacketWriter.t => {
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
    writer->packByte(flags1->BitFlags.toByte)
    ->packByte(flags2->BitFlags.toByte)->ignore
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
          | true => writer
            ->packInt16(activeTile.frame->Option.mapWithDefault(0, frame => frame.x))
            ->packInt16(activeTile.frame->Option.mapWithDefault(0, frame => frame.y))
            ->ignore
          | false => ()
        }
      }
      | None => ()
    }
    switch tile.wall {
      | Some(wall) => writer->packByte(wall)->ignore
      | None => ()
    }
    switch tile.liquid {
      | Some(liquid) => writer
        ->packByte(liquid.liquidValue)
        ->packByte(liquid.liquidType)
        ->ignore
      | None => ()
    }
    writer
  }

  let packTiles = (writer: PacketFactory.ManagedPacketWriter.t, tiles: array<array<tile>>): PacketFactory.ManagedPacketWriter.t => {
    for (x in 0 to tiles->Js.Array2.length-1) {
      for (y in 0 to tiles[x]->Js.Array2.length-1) {
        writer->packTile(tiles[x][y])->ignore
      }
    }
    writer
  }

  let toBuffer = (self: t): NodeJs.Buffer.t => {
    let packedSizeAndType = switch self.changeType {
      | 0 => self.size->land(32767)
      | _ => self.size->land(32767)->lor(32768)
    }
    let writer = PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.TileSquareSend->PacketType.toInt)
    ->packUInt16(packedSizeAndType)
    if self.changeType !== 0 {
      writer->packByte(self.changeType)->ignore
    }
    writer->packInt16(self.tileX)
    ->packInt16(self.tileY)
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

let fromLatest = (_latest: Packet.TileSquareSend.t): option<t> => None
