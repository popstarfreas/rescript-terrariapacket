type t = {
  playerId: int,
  active: bool,
}

module Decode = {
  let {readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(activeRaw) = reader->readByte("active")
    Ok({
      playerId,
      active: activeRaw !== 0,
    })
  }
}

module Encode = {
  let {packByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.PlayerActive->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packByte(self.active ? 1 : 0, "active")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
