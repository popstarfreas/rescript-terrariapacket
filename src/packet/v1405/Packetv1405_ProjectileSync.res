type t = Packet.ProjectileSync.t

module Decode = {
  let {readSingle, readInt16, readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(projectileId) = reader->readInt16("projectileId")
    let? Ok(x) = reader->readSingle("x")
    let? Ok(y) = reader->readSingle("y")
    let? Ok(vx) = reader->readSingle("vx")
    let? Ok(vy) = reader->readSingle("vy")
    let? Ok(owner) = reader->readByte("owner")
    let? Ok(projectileType) = reader->readInt16("projectileType")
    let? Ok(flagsRaw) = reader->readByte("flags")
    let flags = BitFlags.fromByte(flagsRaw)
    let? Ok(ai0) = if flags->BitFlags.flag1 {
      reader->readSingle("ai0")->Result.map(v => Some(v))
    } else {
      Ok(None)
    }
    let? Ok(ai1) = if flags->BitFlags.flag2 {
      reader->readSingle("ai1")->Result.map(v => Some(v))
    } else {
      Ok(None)
    }
    let? Ok(damage) = if flags->BitFlags.flag5 {
      reader->readInt16("damage")->Result.map(v => Some(v))
    } else {
      Ok(None)
    }
    let? Ok(knockback) = if flags->BitFlags.flag6 {
      reader->readSingle("knockback")->Result.map(v => Some(v))
    } else {
      Ok(None)
    }
    let? Ok(originalDamage) = if flags->BitFlags.flag7 {
      reader->readInt16("originalDamage")->Result.map(v => Some(v))
    } else {
      Ok(None)
    }
    let? Ok(projectileUuid) = if flags->BitFlags.flag8 {
      reader->readInt16("projectileUuid")->Result.map(v => Some(v))
    } else {
      Ok(None)
    }
    Ok({
      projectileId,
      x,
      y,
      vx,
      vy,
      owner,
      projectileType,
      ai: (ai0, ai1, None),
      bannerIdToRespondTo: None,
      damage,
      knockback,
      originalDamage,
      projectileUuid,
    })
  }
}

module Encode = {
  let {packSingle, packInt16, packByte, setType, data} = module(ErrorAwarePacketWriter)
  let packOptionalData = (writer: ErrorAwarePacketWriter.t, self: t): ErrorAwarePacketWriter.t => {
    let (ai0, ai1, _) = self.ai
    let bitFlags = BitFlags.fromFlags(
      ~flag1=ai0->Belt.Option.isSome,
      ~flag2=ai1->Belt.Option.isSome,
      ~flag3=false,
      ~flag4=false,
      ~flag5=self.damage->Belt.Option.isSome,
      ~flag6=self.knockback->Belt.Option.isSome,
      ~flag7=self.originalDamage->Belt.Option.isSome,
      ~flag8=self.projectileUuid->Belt.Option.isSome,
    )

    writer->packByte(bitFlags->BitFlags.toByte, "flags")->ignore

    if bitFlags->BitFlags.flag1 {
      writer->packSingle(ai0->Belt.Option.getUnsafe, "ai0")->ignore
    }

    if bitFlags->BitFlags.flag2 {
      writer->packSingle(ai1->Belt.Option.getUnsafe, "ai1")->ignore
    }

    if bitFlags->BitFlags.flag5 {
      writer->packInt16(self.damage->Belt.Option.getUnsafe, "damage")->ignore
    }

    if bitFlags->BitFlags.flag6 {
      writer->packSingle(self.knockback->Belt.Option.getUnsafe, "knockback")->ignore
    }

    if bitFlags->BitFlags.flag7 {
      writer->packInt16(self.originalDamage->Belt.Option.getUnsafe, "originalDamage")->ignore
    }

    if bitFlags->BitFlags.flag8 {
      writer->packInt16(self.projectileUuid->Belt.Option.getUnsafe, "projectileUuid")->ignore
    }
    writer
  }

  let starCannonStarProjectileId = 955
  let fallenStarProjectileId = 12
  let wandOfSparkingSparkProjectileId = 954
  let sparkProjectileId = 504

  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.ProjectileSync->PacketType.toInt)
    ->packInt16(
      switch self.projectileId {
      | id if id == wandOfSparkingSparkProjectileId => sparkProjectileId // 954 does not exist in v1.4.0.5
      | id if id == starCannonStarProjectileId => fallenStarProjectileId // Star Cannon Star does not exist in v1.4.0.5
      | id => id
      },
      "projectileId",
    )
    ->packSingle(self.x, "x")
    ->packSingle(self.y, "y")
    ->packSingle(self.vx, "vx")
    ->packSingle(self.vy, "vy")
    ->packByte(self.owner, "owner")
    ->packInt16(self.projectileType, "projectileType")
    ->packOptionalData(self)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
