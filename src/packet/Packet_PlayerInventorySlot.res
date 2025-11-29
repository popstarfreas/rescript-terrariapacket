type t = {
  playerId: int,
  slot: int,
  stack: int,
  prefix: int,
  itemId: int,
}

module Decode = {
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let {readByte, readInt16} = module(ErrorAwarePacketReader)
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(slot) = reader->readInt16("slot")
    let? Ok(stack) = reader->readInt16("stack")
    let? Ok(prefix) = reader->readByte("prefix")
    let? Ok(itemId) = reader->readInt16("itemId")
    Ok({
      playerId,
      slot,
      stack,
      prefix,
      itemId,
    })
  }
}

module Encode = {
  let {packInt16, packByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.PlayerInventorySlot->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packInt16(self.slot, "slot")
    ->packInt16(self.stack, "stack")
    ->packByte(self.prefix, "prefix")
    ->packInt16(self.itemId, "itemId")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
