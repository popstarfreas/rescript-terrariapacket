type t = {
  itemDropId: int,
  owner: int,
}

module Decode = {
  let {readInt16, readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(itemDropId) = reader->readInt16("itemDropId")
    let? Ok(owner) = reader->readByte("owner")
    Ok({
      itemDropId,
      owner,
    })
  }
}

module Encode = {
  let {packInt16, packByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.ItemOwner->PacketType.toInt)
    ->packInt16(self.itemDropId, "itemDropId")
    ->packByte(self.owner, "owner")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
