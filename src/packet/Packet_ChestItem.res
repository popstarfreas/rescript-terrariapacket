@genType
type t = {
  chestId: int,
  slot: int,
  stack: int,
  prefix: int,
  itemNetId: int,
}

module Decode = {
  let {readInt16, readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(chestId) = reader->readInt16("chestId")
    let? Ok(slot) = reader->readByte("slot")
    let? Ok(stack) = reader->readInt16("stack")
    let? Ok(prefix) = reader->readByte("prefix")
    let? Ok(itemNetId) = reader->readInt16("itemNetId")
    Ok({
      chestId,
      slot,
      stack,
      prefix,
      itemNetId,
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
