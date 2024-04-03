@genType
type frame = {x: int, y: int}

@genType
type activeTile = {tileType: int, slope: int, frame: option<frame>}

@genType
type liquid = {liquidValue: int, liquidType: int}

@genType
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

@genType
type t = {
  width: int,
  height: int,
  changeType: int,
  tileX: int,
  tileY: int,
  tiles: array<array<tile>>,
}

module Decode: {
  let readInt16: PacketFactory.PacketReader.t => int
  let readUInt16: PacketFactory.PacketReader.t => int
  let readByte: PacketFactory.PacketReader.t => int
  let parse: NodeJs.Buffer.t => option<t>
}
module Encode: {
  let packUInt16: (PacketFactory.ManagedPacketWriter.t, int) => PacketFactory.ManagedPacketWriter.t
  let packInt16: (PacketFactory.ManagedPacketWriter.t, int) => PacketFactory.ManagedPacketWriter.t
  let packByte: (PacketFactory.ManagedPacketWriter.t, int) => PacketFactory.ManagedPacketWriter.t
  let setType: (
  PacketFactory.ManagedPacketWriter.untypedT,
  int,
) => PacketFactory.ManagedPacketWriter.t
  let data: PacketFactory.ManagedPacketWriter.t => NodeJs.Buffer.t
  let packTile: (PacketFactory.ManagedPacketWriter.t, tile) => PacketFactory.ManagedPacketWriter.t
  let packTiles: (
  PacketFactory.ManagedPacketWriter.t,
  array<array<tile>>,
) => PacketFactory.ManagedPacketWriter.t
  let toBuffer: t => NodeJs.Buffer.t
}

@genType
let parse: NodeJs.Buffer.t => option<t>
@genType
let toBuffer: t => NodeJs.Buffer.t
