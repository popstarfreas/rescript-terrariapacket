@genType
type t = {
  itemType: int,
  stack: int,
  playerId: int,
}

module Decode = {
  let {readInt16, readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(itemType) = reader->readInt16("itemType")
    let? Ok(stack) = reader->readInt16("stack")
    let? Ok(playerId) = reader->readByte("playerId")
    Ok({itemType, stack, playerId})
  }
}

module Encode = {
  let {packInt16, packByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.MassWireOperationPay->PacketType.toInt)
    ->packInt16(self.itemType, "itemType")
    ->packInt16(self.stack, "stack")
    ->packByte(self.playerId, "playerId")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
