type t = {
  playerId: int,
  tileEntityId: int,
  itemIndex: int,
  itemId: int,
  stack: int,
  prefix: int,
}

module Decode = {
  let {readByte, readInt32, readUInt16} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let playerId = reader->readByte
    let tileEntityId = reader->readInt32
    let itemIndex = reader->readByte
    let itemId = reader->readUInt16
    let stack = reader->readUInt16
    let prefix = reader->readByte
    Some({
      playerId: playerId,
      tileEntityId: tileEntityId,
      itemIndex: itemIndex,
      itemId: itemId,
      stack: stack,
      prefix: prefix,
    })
  }
}

module Encode = {
  module Writer = PacketFactory.ManagedPacketWriter
  let {packByte, packInt32, packUInt16, setType, data} = module(Writer)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    Writer.make()
    ->setType(PacketType.TileEntityDisplayDollItemSync->PacketType.toInt)
    ->packByte(self.playerId)
    ->packInt32(self.tileEntityId)
    ->packByte(self.itemIndex)
    ->packUInt16(self.itemId)
    ->packUInt16(self.stack)
    ->packByte(self.prefix)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
