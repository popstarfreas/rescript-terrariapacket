type t = {
  projectileId: int,
  x: float,
  y: float,
  vx: float,
  vy: float,
  owner: int,
  projectileType: int,
  ai: (option<float>, option<float>),
  damage: option<int>,
  knockback: option<float>,
  originalDamage: option<int>,
  projectileUuid: option<int>,
}

module Decode = {
  let {readSingle, readInt16, readByte} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let projectileId = reader->readInt16
    let x = reader->readSingle
    let y = reader->readSingle
    let vx = reader->readSingle
    let vy = reader->readSingle
    let owner = reader->readByte
    let projectileType = reader->readInt16
    let flags = BitFlags.fromByte(reader->readByte)
    let ai = (
      flags->BitFlags.flag1 ? Some(reader->readSingle) : None,
      flags->BitFlags.flag2 ? Some(reader->readSingle) : None,
    )
    let damage = if flags->BitFlags.flag5 {
      Some(reader->readInt16)
    } else {
      None
    }
    let knockback = if flags->BitFlags.flag6 {
      Some(reader->readSingle)
    } else {
      None
    }
    let originalDamage = if flags->BitFlags.flag7 {
      Some(reader->readInt16)
    } else {
      None
    }
    let projectileUuid = if flags->BitFlags.flag8 {
      Some(reader->readInt16)
    } else {
      None
    }
    Some({
      projectileId: projectileId,
      x: x,
      y: y,
      vx: vx,
      vy: vy,
      owner: owner,
      projectileType: projectileType,
      ai: ai,
      damage: damage,
      knockback: knockback,
      originalDamage: originalDamage,
      projectileUuid: projectileUuid,
    })
  }
}

module Encode = {
  let {packSingle, packInt16, packByte, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let packOptionalData = (writer, self) => {
    let (ai0, ai1) = self.ai
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

    if bitFlags->BitFlags.flag1 {
      writer->packSingle(ai0->Belt.Option.getUnsafe)->ignore
    }

    if bitFlags->BitFlags.flag2 {
      writer->packSingle(ai1->Belt.Option.getUnsafe)->ignore
    }

    if bitFlags->BitFlags.flag5 {
      writer->packInt16(self.damage->Belt.Option.getUnsafe)->ignore
    }

    if bitFlags->BitFlags.flag6 {
      writer->packSingle(self.knockback->Belt.Option.getUnsafe)->ignore
    }

    if bitFlags->BitFlags.flag7 {
      writer->packInt16(self.originalDamage->Belt.Option.getUnsafe)->ignore
    }

    if bitFlags->BitFlags.flag8 {
      writer->packInt16(self.projectileUuid->Belt.Option.getUnsafe)->ignore
    }
    writer
  }

  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.ProjectileSync->PacketType.toInt)
    ->packInt16(self.projectileId)
    ->packSingle(self.x)
    ->packSingle(self.y)
    ->packSingle(self.vx)
    ->packSingle(self.vy)
    ->packByte(self.owner)
    ->packInt16(self.projectileType)
    ->packOptionalData(self)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
