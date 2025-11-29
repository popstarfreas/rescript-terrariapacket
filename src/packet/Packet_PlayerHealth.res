type t = {
  playerId: int,
  health: int,
  maxHealth: int,
}

module Decode = {
  let {readByte, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(health) = reader->readInt16("health")
    let? Ok(maxHealth) = reader->readInt16("maxHealth")
    Ok({
      playerId,
      health,
      maxHealth,
    })
  }
}

module Encode = {
  let {packByte, packInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.PlayerHealth->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packInt16(self.health, "health")
    ->packInt16(self.maxHealth, "maxHealth")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
