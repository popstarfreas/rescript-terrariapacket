type t = {
  projectileId: int,
  x: float,
  y: float,
  vx: float,
  vy: float,
  owner: int,
  projectileType: int,
  ai: (option<float>, option<float>, option<float>),
  bannerIdToRespondTo: option<int>,
  damage: option<int>,
  knockback: option<float>,
  originalDamage: option<int>,
  projectileUuid: option<int>,
}

module Decode = {
  let {readSingle, readInt16, readUInt16, readByte} = module(ErrorAwarePacketReader)
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
    let? Ok(flags2) =
      flags->BitFlags.flag3
        ? {
            let? Ok(flags2Raw) = reader->readByte("flags2")
            Ok(Some(BitFlags.fromByte(flags2Raw)))
          }
        : Ok(None)
    let? Ok(ai0) =
      flags->BitFlags.flag1
        ? {
            let? Ok(ai0) = reader->readSingle("ai0")
            Ok(Some(ai0))
          }
        : Ok(None)
    let? Ok(ai1) =
      flags->BitFlags.flag2
        ? {
            let? Ok(ai1) = reader->readSingle("ai1")
            Ok(Some(ai1))
          }
        : Ok(None)
    let? Ok(bannerIdToRespondTo) =
      flags->BitFlags.flag4
        ? {
            let? Ok(banner) = reader->readUInt16("bannerIdToRespondTo")
            Ok(Some(banner))
          }
        : Ok(None)
    let? Ok(damage) = if flags->BitFlags.flag5 {
      let? Ok(damage) = reader->readInt16("damage")
      Ok(Some(damage))
    } else {
      Ok(None)
    }
    let? Ok(knockback) = if flags->BitFlags.flag6 {
      let? Ok(knockback) = reader->readSingle("knockback")
      Ok(Some(knockback))
    } else {
      Ok(None)
    }
    let? Ok(originalDamage) = if flags->BitFlags.flag7 {
      let? Ok(originalDamage) = reader->readInt16("originalDamage")
      Ok(Some(originalDamage))
    } else {
      Ok(None)
    }
    let? Ok(projectileUuid) = if flags->BitFlags.flag8 {
      let? Ok(projectileUuid) = reader->readInt16("projectileUuid")
      Ok(Some(projectileUuid))
    } else {
      Ok(None)
    }
    let? Ok(ai2) = switch flags2 {
    | Some(flags2Value) =>
      flags2Value->BitFlags.flag1
        ? {
            let? Ok(ai2) = reader->readSingle("ai2")
            Ok(Some(ai2))
          }
        : Ok(None)
    | None => Ok(None)
    }
    Ok({
      projectileId,
      x,
      y,
      vx,
      vy,
      owner,
      projectileType,
      ai: (ai0, ai1, ai2),
      bannerIdToRespondTo,
      damage,
      knockback,
      originalDamage,
      projectileUuid,
    })
  }
}

module Encode = {
  let {packSingle, packInt16, packUInt16, packByte, setType, data} = module(ErrorAwarePacketWriter)
  let packOptionalData = (
    writer: ErrorAwarePacketWriter.t,
    self: t,
  ): ErrorAwarePacketWriter.t => {
    let (ai0, ai1, ai2) = self.ai
    let bitFlags2 = BitFlags.fromFlags(
      ~flag1=ai2->Option.isSome,
      ~flag2=false,
      ~flag3=false,
      ~flag4=false,
      ~flag5=false,
      ~flag6=false,
      ~flag7=false,
      ~flag8=false,
    )
    let bitFlags = BitFlags.fromFlags(
      ~flag1=ai0->Option.isSome,
      ~flag2=ai1->Option.isSome,
      ~flag3=bitFlags2->BitFlags.toByte != 0,
      ~flag4=switch self.bannerIdToRespondTo {
      | Some(bannerIdToRespondTo) => bannerIdToRespondTo != 0
      | None => false
      },
      ~flag5=self.damage->Option.isSome,
      ~flag6=self.knockback->Option.isSome,
      ~flag7=self.originalDamage->Option.isSome,
      ~flag8=self.projectileUuid->Option.isSome,
    )

    writer->packByte(bitFlags->BitFlags.toByte, "flags")->ignore

    if bitFlags->BitFlags.flag3 {
      writer->packByte(bitFlags2->BitFlags.toByte, "flags2")->ignore
    }

    if bitFlags->BitFlags.flag1 {
      writer->packSingle(ai0->Option.getUnsafe, "ai0")->ignore
    }

    if bitFlags->BitFlags.flag2 {
      writer->packSingle(ai1->Option.getUnsafe, "ai1")->ignore
    }

    if bitFlags->BitFlags.flag4 {
      writer
      ->packUInt16(self.bannerIdToRespondTo->Option.getUnsafe, "bannerIdToRespondTo")
      ->ignore
    }

    if bitFlags->BitFlags.flag5 {
      writer->packInt16(self.damage->Option.getUnsafe, "damage")->ignore
    }

    if bitFlags->BitFlags.flag6 {
      writer->packSingle(self.knockback->Option.getUnsafe, "knockback")->ignore
    }

    if bitFlags->BitFlags.flag7 {
      writer->packInt16(self.originalDamage->Option.getUnsafe, "originalDamage")->ignore
    }

    if bitFlags->BitFlags.flag8 {
      writer->packInt16(self.projectileUuid->Option.getUnsafe, "projectileUuid")->ignore
    }

    if bitFlags2->BitFlags.flag1 {
      // This check should use bitFlags2Value if it was stored
      writer->packSingle(ai2->Option.getUnsafe, "ai2")->ignore
    }

    writer
  }

  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.ProjectileSync->PacketType.toInt)
    ->packInt16(self.projectileId, "projectileId")
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
