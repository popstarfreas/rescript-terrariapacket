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
  let {readInt16, readByte, readSByte} = module(PacketFactory.PacketReader)

  type damageFlags = {
    critical: bool,
    pvp: bool,
  }

  let readDamageFlags = reader => {
    let flags = reader->readByte->BitFlags.fromByte
    {
      critical: flags->BitFlags.flag1,
      pvp: flags->BitFlags.flag2,
    }
  }

  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let target = reader->readByte
    let deathReason = reader->PlayerDeathReason.readDeathReason
    let damage = reader->readInt16
    let hitDirection = reader->readByte
    let damageFlags = reader->readDamageFlags
    let critical = damageFlags.critical
    let pvp = damageFlags.pvp
    let cooldownCounter = reader->readSByte
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
  let {packInt16, packByte, packSByte, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    let damageFlags = (self: t) => {
      BitFlags.fromFlags(
        ~flag1=self.critical,
        ~flag2=self.pvp,
        ~flag3=false,
        ~flag4=false,
        ~flag5=false,
        ~flag6=false,
        ~flag7=false,
        ~flag8=false,
      )->BitFlags.toByte
    }
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.PlayerDamage->PacketType.toInt)
    ->packByte(self.target)
    ->PlayerDeathReason.packDeathReason(self.deathReason)
    ->packInt16(self.damage)
    ->packByte(self.hitDirection)
    ->packByte(self->damageFlags)
    ->packSByte(self.cooldownCounter)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
