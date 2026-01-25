type t = {
  playerId: int,
  mana: int,
  maxMana: int,
}

module Decode = {
  let {readByte, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(mana) = reader->readInt16("mana")
    let? Ok(maxMana) = reader->readInt16("maxMana")
    Ok({
      playerId,
      mana,
      maxMana,
    })
  }
}

module Encode = {
  let {packByte, packInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.PlayerMana->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packInt16(self.mana, "mana")
    ->packInt16(self.maxMana, "maxMana")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
