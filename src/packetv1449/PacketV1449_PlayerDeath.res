type t = {
  playerId: int,
  deathReason: PlayerDeathReason.t,
  damage: int,
  hitDirection: int,
  pvp: bool,
}

module Decode = {
  let {readByte, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(deathReason) = reader->PlayerDeathReason.readDeathReason
    let? Ok(damage) = reader->readInt16("damage")
    let? Ok(hitDirection) = reader->readByte("hitDirection")
    let? Ok(pvpRaw) = reader->readByte("pvp")
    Ok({
      playerId,
      deathReason,
      damage,
      hitDirection,
      pvp: pvpRaw == 1,
    })
  }
}

module Encode = {
  let {packByte, packInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.PlayerDeath->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->PlayerDeathReason.packDeathReason(self.deathReason)
    ->packInt16(self.damage, "damage")
    ->packByte(self.hitDirection, "hitDirection")
    ->packByte(
      if self.pvp {
        1
      } else {
        0
      },
      "pvp",
    )
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
