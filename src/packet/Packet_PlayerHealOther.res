@genType
type t = {
  playerId: int,
  healAmount: int,
}

module Decode = {
  let {readByte, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(healAmount) = reader->readInt16("healAmount")
    Ok({playerId, healAmount})
  }
}

module Encode = {
  let {packByte, packInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.PlayerHealOther->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packInt16(self.healAmount, "healAmount")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
