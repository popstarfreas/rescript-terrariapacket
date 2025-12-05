@genType
type t = {
  playerId: int,
  effectType: int,
}

module Decode = {
  let {readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(effectType) = reader->readByte("effectType")
    Ok({playerId, effectType})
  }
}

module Encode = {
  let {packByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.NpcSpecialEffect->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packByte(self.effectType, "effectType")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
