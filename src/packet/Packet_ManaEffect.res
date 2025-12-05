@genType
type t = {
  playerId: int,
  manaAmount: int,
}

module Decode = {
  let {readInt16, readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(manaAmount) = reader->readInt16("manaAmount")
    Ok({
      playerId,
      manaAmount,
    })
  }
}

module Encode = {
  let {packByte, packInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.ManaEffect->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packInt16(self.manaAmount, "manaAmount")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
