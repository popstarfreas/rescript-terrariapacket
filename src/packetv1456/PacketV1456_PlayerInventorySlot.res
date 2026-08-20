type t = {
  playerId: int,
  slot: int,
  stack: int,
  prefix: int,
  itemType: int,
  favorited: bool,
  blocked: bool,
}

module Decode = {
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let {readByte, readInt16} = module(ErrorAwarePacketReader)
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(slot) = reader->readInt16("slot")
    let? Ok(stack) = reader->readInt16("stack")
    let? Ok(prefix) = reader->readByte("prefix")
    let? Ok(itemType) = reader->readInt16("itemType")
    let? Ok(flagsRaw) = reader->readByte("flags")
    let flags = BitFlags.fromByte(flagsRaw)
    Ok({
      playerId,
      slot,
      stack,
      prefix,
      itemType,
      favorited: flags->BitFlags.flag1,
      blocked: flags->BitFlags.flag2,
    })
  }
}

module Encode = {
  let {packInt16, packByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketTypeV1456.PlayerInventorySlot->PacketTypeV1456.toInt)
    ->packByte(self.playerId, "playerId")
    ->packInt16(self.slot, "slot")
    ->packInt16(self.stack, "stack")
    ->packByte(self.prefix, "prefix")
    ->packInt16(self.itemType, "itemType")
    ->packByte(
      BitFlags.fromFlags(
        ~flag1=self.favorited,
        ~flag2=self.blocked,
        ~flag3=false,
        ~flag4=false,
        ~flag5=false,
        ~flag6=false,
        ~flag7=false,
        ~flag8=false,
      )->BitFlags.toByte,
      "flags",
    )
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
