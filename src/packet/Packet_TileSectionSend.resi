type frame = PacketV1449_TileSectionSend.frame

type activeTile = PacketV1449_TileSectionSend.activeTile

type liquid = PacketV1449_TileSectionSend.liquid
type tile = PacketV1449_TileSectionSend.tile

type tileCache = PacketV1449_TileSectionSend.tileCache

module Chest = PacketV1449_TileSectionSend.Chest

module Sign = PacketV1449_TileSectionSend.Sign

module Entity = PacketV1449_TileSectionSend.Entity

type t = PacketV1449_TileSectionSend.t

let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
