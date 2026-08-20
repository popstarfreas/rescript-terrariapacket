type frame = PacketV1449_TileSquareSend.frame
type activeTile = PacketV1449_TileSquareSend.activeTile
type liquid = PacketV1449_TileSquareSend.liquid
type tile = PacketV1449_TileSquareSend.tile
type t = PacketV1449_TileSquareSend.t

module Decode: {
  let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
}
module Encode: {
  let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
