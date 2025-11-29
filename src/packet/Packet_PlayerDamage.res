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
  let {readInt16, readByte, readSByte} = module(ErrorAwarePacketReader)

  type damageFlags = {
    critical: bool,
    pvp: bool,
  }

  let readDamageFlags = reader => {
    let? Ok(flagsRaw) = reader->readByte("damageFlags")
    let flags = flagsRaw->BitFlags.fromByte
    Ok({
      critical: flags->BitFlags.flag1,
      pvp: flags->BitFlags.flag2,
    })
  }

  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(target) = reader->readByte("target")
    let? Ok(deathReason) = reader->PlayerDeathReason.readDeathReason
    let? Ok(damage) = reader->readInt16("damage")
    let? Ok(hitDirection) = reader->readByte("hitDirection")
    let? Ok(damageFlags) = reader->readDamageFlags
    let? Ok(cooldownCounter) = reader->readSByte("cooldownCounter")
    Ok({
      target,
      deathReason,
      damage,
      hitDirection,
      critical: damageFlags.critical,
      pvp: damageFlags.pvp,
      cooldownCounter,
    })
  }
}

module Encode = {
  let {packInt16, packByte, packSByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
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
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.PlayerDamage->PacketType.toInt)
    ->packByte(self.target, "target")
    ->PlayerDeathReason.packDeathReason(self.deathReason)
    ->packInt16(self.damage, "damage")
    ->packByte(self.hitDirection, "hitDirection")
    ->packByte(self->damageFlags, "damageFlags")
    ->packSByte(self.cooldownCounter, "cooldownCounter")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
