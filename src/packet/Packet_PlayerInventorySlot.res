type t = {
  playerId: int,
  slot: int,
  stack: int,
  prefix: int,
  itemId: int,
}

module Decode = {
  let {} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let {readByte, readInt16} = module(PacketFactory.PacketReader)
    let reader = PacketFactory.PacketReader.make(payload)
    let playerId = reader->readByte
    let slot = reader->readInt16
    let stack = reader->readInt16
    let prefix = reader->readByte
    let itemId = reader->readInt16
    Some({
      playerId,
      slot,
      stack,
      prefix,
      itemId,
    })
  }
}

module Encode = {
  let {packInt16, packByte, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.PlayerInventorySlot->PacketType.toInt)
    ->packByte(self.playerId)
    ->packInt16(self.slot)
    ->packInt16(self.stack)
    ->packByte(self.prefix)
    ->packInt16(self.itemId)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
