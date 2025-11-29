type t = int
module Decode = {
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let {readByte} = module(ErrorAwarePacketReader)
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerSlotId) = reader->readByte("playerSlotId")
    Ok(playerSlotId)
  }
}

module Encode = {
  let {packByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.PlayerSlotSet->PacketType.toInt)
    ->packByte(self, "playerSlotId")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
