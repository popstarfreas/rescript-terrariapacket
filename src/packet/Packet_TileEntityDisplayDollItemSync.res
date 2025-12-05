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
  module Writer = ErrorAwarePacketWriter
  let {packByte, packInt32, packUInt16, setType, data} = module(Writer)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    Writer.make()
    ->setType(PacketType.TileEntityDisplayDollItemSync->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packInt32(self.tileEntityId, "tileEntityId")
    ->packByte(self.itemIndex, "itemIndex")
    ->packUInt16(self.itemId, "itemId")
    ->packUInt16(self.stack, "stack")
    ->packByte(self.prefix, "prefix")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
