@genType
type t = {
  playerId: int,
  tileEntityId: int,
  itemIndex: int,
  itemId: int,
  stack: int,
  prefix: int,
}

module Decode = {
  let {readByte, readInt32, readUInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(tileEntityId) = reader->readInt32("tileEntityId")
    let? Ok(itemIndex) = reader->readByte("itemIndex")
    let? Ok(itemId) = reader->readUInt16("itemId")
    let? Ok(stack) = reader->readUInt16("stack")
    let? Ok(prefix) = reader->readByte("prefix")
    Ok({
      playerId,
      tileEntityId,
      itemIndex,
      itemId,
      stack,
      prefix,
    })
  }
}

module Encode = {
  module Writer = PacketFactory.ManagedPacketWriter
  let {packByte, packInt32, packUInt16, setType, data} = module(Writer)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    Writer.make()
    ->setType(PacketType.TileEntityHatRackItemSync->PacketType.toInt)
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
