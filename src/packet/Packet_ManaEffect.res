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
  let {packByte, packInt16, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.ManaEffect->PacketType.toInt)
    ->packByte(self.playerId)
    ->packInt16(self.manaAmount)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
