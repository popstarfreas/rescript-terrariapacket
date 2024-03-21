type t = {
  target: int,
  deathReason: PlayerDeathReason.t,
  damage: int,
  hitDirection: int,
  critical: bool,
  pvp: bool,
  cooldownCounter: int,
}

module Decode = {
  let {readInt16, readByte} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let target = reader->readByte
    let deathReason = reader->PlayerDeathReason.readDeathReason
    let damage = reader->readInt16
    let hitDirection = reader->readByte
    let critical = reader->readByte == 1
    let pvp = reader->readByte == 1
    let cooldownCounter = reader->readByte
    Some({
      target,
      deathReason,
      damage,
      hitDirection,
      critical,
      pvp,
      cooldownCounter,
    })
  }
}

module Encode = {
  let {packInt16, packByte, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.PlayerDamage->PacketType.toInt)
    ->packByte(self.target)
    ->PlayerDeathReason.packDeathReason(self.deathReason)
    ->packInt16(self.damage)
    ->packByte(self.hitDirection)
    ->packByte(
      if self.critical {
        1
      } else {
        0
      },
    )
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
