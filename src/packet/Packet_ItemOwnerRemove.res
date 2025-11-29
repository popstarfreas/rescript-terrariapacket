@genType
type t = {itemDropId: int}

module Decode = {
  let {readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(itemDropId) = reader->readInt16("itemDropId")
    Ok({itemDropId: itemDropId})
  }
}

module Encode = {
  let {packInt16, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.ItemOwnerRemove->PacketType.toInt)
    ->packInt16(self.itemDropId)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
