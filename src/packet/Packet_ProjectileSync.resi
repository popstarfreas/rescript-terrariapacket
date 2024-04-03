@genType
type t = {
  projectileId: int,
  x: float,
  y: float,
  vx: float,
  vy: float,
  owner: int,
  projectileType: int,
  ai: (option<float>, option<float>, option<float>),
  bannerIdToRespondTo: option<int>,
  damage: option<int>,
  knockback: option<float>,
  originalDamage: option<int>,
  projectileUuid: option<int>,
}

module Decode: {
  let readSingle: PacketFactory.PacketReader.t => float
  let readInt16: PacketFactory.PacketReader.t => int
  let readUInt16: PacketFactory.PacketReader.t => int
  let readByte: PacketFactory.PacketReader.t => int
  let parse: NodeJs.Buffer.t => option<t>
}
module Encode: {
  let packSingle: (PacketFactory.ManagedPacketWriter.t, float) => PacketFactory.ManagedPacketWriter.t
  let packInt16: (PacketFactory.ManagedPacketWriter.t, int) => PacketFactory.ManagedPacketWriter.t
  let packUInt16: (PacketFactory.ManagedPacketWriter.t, int) => PacketFactory.ManagedPacketWriter.t
  let packByte: (PacketFactory.ManagedPacketWriter.t, int) => PacketFactory.ManagedPacketWriter.t
  let setType: (
  PacketFactory.ManagedPacketWriter.untypedT,
  int,
) => PacketFactory.ManagedPacketWriter.t
  let data: PacketFactory.ManagedPacketWriter.t => NodeJs.Buffer.t
  let packOptionalData: (
  PacketFactory.ManagedPacketWriter.t,
  t,
) => PacketFactory.ManagedPacketWriter.t
  let toBuffer: t => NodeJs.Buffer.t
}

@genType
let parse: NodeJs.Buffer.t => option<t>
@genType
let toBuffer: t => NodeJs.Buffer.t
