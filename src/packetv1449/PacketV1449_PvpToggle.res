type t = {
  playerId: int,
  pvpEnabled: bool,
}

module Decode = {
  let {readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(pvpEnabledRaw) = reader->readByte("pvpEnabled")
    Ok({
      playerId,
      pvpEnabled: pvpEnabledRaw == 1,
    })
  }
}

module Encode = {
  let {packByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.PvpToggle->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packByte(self.pvpEnabled ? 1 : 0, "pvpEnabled")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
