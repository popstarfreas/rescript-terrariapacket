type t = {
  chestId: int,
  slot: int,
  stack: int,
  prefix: int,
  itemNetId: int,
}

module Decode = {
  let {readInt16, readByte} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let chestId = reader->readInt16
    let slot = reader->readByte
    let stack = reader->readInt16
    let prefix = reader->readByte
    let itemNetId = reader->readInt16
    Some({
      chestId: chestId,
      slot: slot,
      stack: stack,
      prefix: prefix,
      itemNetId: itemNetId,
    })
  }
}

module Encode = {
  let {packByte, packInt16, setType, data} = module(PacketFactory.ManagedPacketWriter)
  type writer = PacketFactory.ManagedPacketWriter.t

  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.ChestItem->PacketType.toInt)
    ->packInt16(self.chestId)
    ->packByte(self.slot)
    ->packInt16(self.stack)
    ->packByte(self.prefix)
    ->packInt16(self.itemNetId)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
