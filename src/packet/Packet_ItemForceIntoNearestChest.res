@genType
type t = {slot: int}

module Decode = {
  let {readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(slot) = reader->readInt16("slot")
    Ok({slot: slot})
  }
}

module Encode = {
  let {packInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.ItemForceIntoNearestChest->PacketType.toInt)
    ->packInt16(self.slot, "slot")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
