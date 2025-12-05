type t = {
  playerSlotId: int,
  serverWantsToRunCheckBytesInClientLoopThread: bool,
}
module Decode = {
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let {readByte} = module(ErrorAwarePacketReader)
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerSlotId) = reader->readByte("playerSlotId")
    let? Ok(checkBytes) = reader->readByte("serverWantsToRunCheckBytesInClientLoopThread")
    Ok({playerSlotId, serverWantsToRunCheckBytesInClientLoopThread: checkBytes == 1})
  }
}

module Encode = {
  let {packByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.PlayerSlotSet->PacketType.toInt)
    ->packByte(self.playerSlotId, "playerSlotId")
    ->packByte(
      self.serverWantsToRunCheckBytesInClientLoopThread ? 1 : 0,
      "serverWantsToRunCheckBytesInClientLoopThread",
    )
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
