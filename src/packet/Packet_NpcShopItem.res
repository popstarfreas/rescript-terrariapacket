@genType
type t = {
  slot: int,
  itemId: int,
  stack: int,
  prefix: int,
  value: int,
  buyOnce: bool,
}

module Decode = {
  let {readByte, readInt16, readInt32} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(slot) = reader->readByte("slot")
    let? Ok(itemId) = reader->readInt16("itemId")
    let? Ok(stack) = reader->readInt16("stack")
    let? Ok(prefix) = reader->readByte("prefix")
    let? Ok(value) = reader->readInt32("value")
    let? Ok(flags) = reader->readByte("flags")
    Ok({
      slot,
      itemId,
      stack,
      prefix,
      value,
      buyOnce: BitFlags.fromByte(flags)->BitFlags.flag1,
    })
  }
}

module Encode = {
  let {packByte, packInt16, packInt32, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    let flags = BitFlags.fromFlags(~flag1=self.buyOnce, ~flag2=false, ~flag3=false, ~flag4=false, ~flag5=false, ~flag6=false, ~flag7=false, ~flag8=false)
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.NpcShopItem->PacketType.toInt)
    ->packByte(self.slot, "slot")
    ->packInt16(self.itemId, "itemId")
    ->packInt16(self.stack, "stack")
    ->packByte(self.prefix, "prefix")
    ->packInt32(self.value, "value")
    ->packByte(flags->BitFlags.toByte, "flags")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
