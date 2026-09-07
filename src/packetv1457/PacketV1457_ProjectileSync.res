@genType
type t = {
  projectileKey: ProjectileKey.t,
  position: Point.t<float>,
  velocity: Point.t<float>,
  projectileType: int,
  ai: (option<float>, option<float>, option<float>),
  bannerIdToRespondTo: option<int>,
  damage: option<int>,
  knockback: option<float>,
  originalDamage: option<int>,
}

module Decode = {
  let {readInt32, readSingle, readInt16, readUInt16, readByte} = module(ErrorAwarePacketReader)

  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(projectileKeyRaw) = reader->readInt32("projectileKey")
    let? Ok(positionX) = reader->readSingle("positionX")
    let? Ok(positionY) = reader->readSingle("positionY")
    let? Ok(velocityX) = reader->readSingle("velocityX")
    let? Ok(velocityY) = reader->readSingle("velocityY")
    let? Ok(projectileType) = reader->readInt16("projectileType")
    let? Ok(flagsRaw) = reader->readByte("flags")
    let flags = BitFlags.fromByte(flagsRaw)
    let? Ok(flags2) = if flags->BitFlags.flag3 {
      let? Ok(value) = reader->readByte("flags2")
      Ok(BitFlags.fromByte(value))
    } else {
      Ok(BitFlags.fromByte(0))
    }
    let? Ok(ai0) = if flags->BitFlags.flag1 {
      let? Ok(value) = reader->readSingle("ai0")
      Ok(Some(value))
    } else {
      Ok(None)
    }
    let? Ok(ai1) = if flags->BitFlags.flag2 {
      let? Ok(value) = reader->readSingle("ai1")
      Ok(Some(value))
    } else {
      Ok(None)
    }
    let? Ok(bannerIdToRespondTo) = if flags->BitFlags.flag4 {
      let? Ok(value) = reader->readUInt16("bannerIdToRespondTo")
      Ok(Some(value))
    } else {
      Ok(None)
    }
    let? Ok(damage) = if flags->BitFlags.flag5 {
      let? Ok(value) = reader->readInt16("damage")
      Ok(Some(value))
    } else {
      Ok(None)
    }
    let? Ok(knockback) = if flags->BitFlags.flag6 {
      let? Ok(value) = reader->readSingle("knockback")
      Ok(Some(value))
    } else {
      Ok(None)
    }
    let? Ok(originalDamage) = if flags->BitFlags.flag7 {
      let? Ok(value) = reader->readInt16("originalDamage")
      Ok(Some(value))
    } else {
      Ok(None)
    }
    let? Ok(ai2) = if flags2->BitFlags.flag1 {
      let? Ok(value) = reader->readSingle("ai2")
      Ok(Some(value))
    } else {
      Ok(None)
    }
    Ok({
      projectileKey: ProjectileKey.fromInt(projectileKeyRaw),
      position: {x: positionX, y: positionY},
      velocity: {x: velocityX, y: velocityY},
      projectileType,
      ai: (ai0, ai1, ai2),
      bannerIdToRespondTo,
      damage,
      knockback,
      originalDamage,
    })
  }
}

module Encode = {
  let {packInt32, packSingle, packInt16, packUInt16, packByte, setType, data} = module(
    ErrorAwarePacketWriter
  )

  let toBuffer = (self: t) => {
    let (ai0, ai1, ai2) = self.ai
    let flags2 = BitFlags.fromFlags(
      ~flag1=ai2->Option.isSome,
      ~flag2=false,
      ~flag3=false,
      ~flag4=false,
      ~flag5=false,
      ~flag6=false,
      ~flag7=false,
      ~flag8=false,
    )
    let flags = BitFlags.fromFlags(
      ~flag1=ai0->Option.isSome,
      ~flag2=ai1->Option.isSome,
      ~flag3=flags2->BitFlags.toByte != 0,
      ~flag4=self.bannerIdToRespondTo->Option.isSome,
      ~flag5=self.damage->Option.isSome,
      ~flag6=self.knockback->Option.isSome,
      ~flag7=self.originalDamage->Option.isSome,
      ~flag8=false,
    )
    let writer =
      ErrorAwarePacketWriter.make()
      ->setType(PacketTypeV1457.ProjectileSync->PacketTypeV1457.toInt)
      ->packInt32(self.projectileKey->ProjectileKey.toInt, "projectileKey")
      ->packSingle(self.position.x, "positionX")
      ->packSingle(self.position.y, "positionY")
      ->packSingle(self.velocity.x, "velocityX")
      ->packSingle(self.velocity.y, "velocityY")
      ->packInt16(self.projectileType, "projectileType")
      ->packByte(flags->BitFlags.toByte, "flags")
    let writer = flags->BitFlags.flag3
      ? writer->packByte(flags2->BitFlags.toByte, "flags2")
      : writer
    let writer = switch ai0 {
    | Some(value) => writer->packSingle(value, "ai0")
    | None => writer
    }
    let writer = switch ai1 {
    | Some(value) => writer->packSingle(value, "ai1")
    | None => writer
    }
    let writer = switch self.bannerIdToRespondTo {
    | Some(value) => writer->packUInt16(value, "bannerIdToRespondTo")
    | None => writer
    }
    let writer = switch self.damage {
    | Some(value) => writer->packInt16(value, "damage")
    | None => writer
    }
    let writer = switch self.knockback {
    | Some(value) => writer->packSingle(value, "knockback")
    | None => writer
    }
    let writer = switch self.originalDamage {
    | Some(value) => writer->packInt16(value, "originalDamage")
    | None => writer
    }
    switch ai2 {
    | Some(value) => writer->packSingle(value, "ai2")
    | None => writer
    }
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
