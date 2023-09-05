type t = {
  playerId: int,
  deathReason: PlayerDeathReason.t,
  damage: int,
  hitDirection: int,
  pvp: bool,
}

module Decode = {
  let {readByte, readInt16} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let playerId = reader->readByte
    let deathReason = reader->PlayerDeathReason.readDeathReason
    let damage = reader->readInt16
    let hitDirection = reader->readByte
    let pvp = reader->readByte == 1
    Some({
      playerId,
      deathReason,
      damage,
      hitDirection,
      pvp,
    })
  }
}

module Encode = {
  let {packByte, packInt16, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.PlayerDeath->PacketType.toInt)
    ->packByte(self.playerId)
    ->PlayerDeathReason.packDeathReason(self.deathReason)
    ->packInt16(self.damage)
    ->packByte(self.hitDirection)
    ->packByte(
      if self.pvp {
        1
      } else {
        0
      },
    )
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
