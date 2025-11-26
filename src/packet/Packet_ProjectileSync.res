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
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let projectileId = reader->readInt16("projectileId")
    let x = reader->readSingle("x")
    let y = reader->readSingle("y")
    let vx = reader->readSingle("vx")
    let vy = reader->readSingle("vy")
    let owner = reader->readByte("owner")
    let projectileType = reader->readInt16("projectileType")
    let flags = BitFlags.fromByte(reader->readByte("flags"))
    let flags2 = flags->BitFlags.flag3 ? Some(BitFlags.fromByte(reader->readByte("flags2"))) : None
    let ai0 = flags->BitFlags.flag1 ? Some(reader->readSingle("ai0")) : None
    let ai1 = flags->BitFlags.flag2 ? Some(reader->readSingle("ai1")) : None
    let bannerIdToRespondTo =
      flags->BitFlags.flag4 ? Some(reader->readUInt16("bannerIdToRespondTo")) : None
    let damage = if flags->BitFlags.flag5 {
      Some(reader->readInt16("damage"))
    } else {
      None
    }
    let knockback = if flags->BitFlags.flag6 {
      Some(reader->readSingle("knockback"))
    } else {
      None
    }
    let originalDamage = if flags->BitFlags.flag7 {
      Some(reader->readInt16("originalDamage"))
    } else {
      None
    }
    let projectileUuid = if flags->BitFlags.flag8 {
      Some(reader->readInt16("projectileUuid"))
    } else {
      None
    }
    let ai2 = switch flags2 {
    | Some(flags2Value) => flags2Value->BitFlags.flag1 ? Some(reader->readSingle("ai2")) : None
    | None => None
    }
    Some({
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
  let packOptionalData = (writer, self) => {
    let (ai0, ai1, ai2) = self.ai
    let bitFlags2 = BitFlags.fromFlags(
      ~flag1=ai2->Belt.Option.isSome,
      ~flag2=false,
      ~flag3=false,
      ~flag4=false,
      ~flag5=false,
      ~flag6=false,
      ~flag7=false,
      ~flag8=false,
    )
    let bitFlags = BitFlags.fromFlags(
      ~flag1=ai0->Belt.Option.isSome,
      ~flag2=ai1->Belt.Option.isSome,
      ~flag3=bitFlags2->BitFlags.toByte != 0,
      ~flag4=switch self.bannerIdToRespondTo {
      | Some(bannerIdToRespondTo) => bannerIdToRespondTo != 0
      | None => false
      },
      ~flag5=self.damage->Belt.Option.isSome,
      ~flag6=self.knockback->Belt.Option.isSome,
      ~flag7=self.originalDamage->Belt.Option.isSome,
      ~flag8=self.projectileUuid->Belt.Option.isSome,
    )

    writer->packByte(bitFlags->BitFlags.toByte, "flags")->ignore

    if bitFlags->BitFlags.flag3 {
      writer->packByte(bitFlags2->BitFlags.toByte, "flags2")->ignore
    }

    if bitFlags->BitFlags.flag1 {
      writer->packSingle(ai0->Belt.Option.getUnsafe, "ai0")->ignore
    }

    if bitFlags->BitFlags.flag2 {
      writer->packSingle(ai1->Belt.Option.getUnsafe, "ai1")->ignore
    }

    if bitFlags->BitFlags.flag4 {
      writer
      ->packUInt16(self.bannerIdToRespondTo->Belt.Option.getUnsafe, "bannerIdToRespondTo")
      ->ignore
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

    if bitFlags2->BitFlags.flag1 {
      // This check should use bitFlags2Value if it was stored
      writer->packSingle(ai2->Belt.Option.getUnsafe, "ai2")->ignore
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
