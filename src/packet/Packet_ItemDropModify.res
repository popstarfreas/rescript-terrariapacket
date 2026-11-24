type color = {
  r: int,
  g: int,
  b: int,
  a: int,
}

@genType
type t = {
  itemId: int,
  color: option<color>,
  damage: option<int>,
  knockback: option<float>,
  useAnimation: option<int>,
  useTime: option<int>,
  shoot: option<int>,
  shootSpeed: option<float>,
  scale: option<float>,
  ammo: option<int>,
  useAmmo: option<int>,
  notAmmo: option<bool>,
}

module Decode = {
  let {readInt16, readByte, readUInt16, readSingle} = module(ErrorAwarePacketReader)
  let parseFlags2 = (reader, flags2) => {
    let scale = if flags2->BitFlags.flag3 {
      reader->readSingle("scale")->Result.map(v => Some(v))
    } else {
      Ok(None)
    }
    let? Ok(scale) = scale

    let ammo = if flags2->BitFlags.flag4 {
      reader->readInt16("ammo")->Result.map(v => Some(v))
    } else {
      Ok(None)
    }
    let? Ok(ammo) = ammo

    let useAmmo = if flags2->BitFlags.flag5 {
      reader->readInt16("useAmmo")->Result.map(v => Some(v))
    } else {
      Ok(None)
    }
    let? Ok(useAmmo) = useAmmo

    let notAmmo = if flags2->BitFlags.flag6 {
      reader->readByte("notAmmo")->Result.map(v => Some(v == 1))
    } else {
      Ok(None)
    }
    let? Ok(notAmmo) = notAmmo

    Ok((scale, ammo, useAmmo, notAmmo))
  }

  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(itemId) = reader->readInt16("itemId")
    let? Ok(flagsRaw) = reader->readByte("flags1")
    let flags1 = BitFlags.fromByte(flagsRaw)

    let color = if flags1->BitFlags.flag1 {
      let? Ok(r) = reader->readByte("Color.r")
      let? Ok(g) = reader->readByte("Color.g")
      let? Ok(b) = reader->readByte("Color.b")
      let? Ok(a) = reader->readByte("Color.a")
      Ok(Some({r, g, b, a}))
    } else {
      Ok(None)
    }
    let? Ok(color) = color

    let damage = if flags1->BitFlags.flag2 {
      reader->readUInt16("damage")->Result.map(v => Some(v))
    } else {
      Ok(None)
    }
    let? Ok(damage) = damage

    let knockback = if flags1->BitFlags.flag3 {
      reader->readSingle("knockback")->Result.map(v => Some(v))
    } else {
      Ok(None)
    }
    let? Ok(knockback) = knockback

    let useAnimation = if flags1->BitFlags.flag4 {
      reader->readUInt16("useAnimation")->Result.map(v => Some(v))
    } else {
      Ok(None)
    }
    let? Ok(useAnimation) = useAnimation

    let useTime = if flags1->BitFlags.flag5 {
      reader->readUInt16("useTime")->Result.map(v => Some(v))
    } else {
      Ok(None)
    }
    let? Ok(useTime) = useTime

    let shoot = if flags1->BitFlags.flag6 {
      reader->readInt16("shoot")->Result.map(v => Some(v))
    } else {
      Ok(None)
    }
    let? Ok(shoot) = shoot

    let shootSpeed = if flags1->BitFlags.flag7 {
      reader->readSingle("shootSpeed")->Result.map(v => Some(v))
    } else {
      Ok(None)
    }
    let? Ok(shootSpeed) = shootSpeed

    let? Ok((scale, ammo, useAmmo, notAmmo)) = if flags1->BitFlags.flag8 {
      let? Ok(flags2Raw) = reader->readByte("flags2")
      parseFlags2(reader, BitFlags.fromByte(flags2Raw))
    } else {
      Ok((None, None, None, None))
    }

    Ok({
      itemId,
      color,
      damage,
      knockback,
      useAnimation,
      useTime,
      shoot,
      shootSpeed,
      scale,
      ammo,
      useAmmo,
      notAmmo,
    })
  }
}

module Encode = {
  let {packInt16, packByte, packUInt16, packSingle, setType, data} = module(ErrorAwarePacketWriter)

  let flags1 = (self: t) =>
    BitFlags.fromFlags(
      ~flag1=self.color->Option.isSome,
      ~flag2=self.damage->Option.isSome,
      ~flag3=self.knockback->Option.isSome,
      ~flag4=self.useAnimation->Option.isSome,
      ~flag5=self.useTime->Option.isSome,
      ~flag6=self.shoot->Option.isSome,
      ~flag7=self.shootSpeed->Option.isSome,
      ~flag8=self.scale->Option.isSome ||
      self.ammo->Option.isSome ||
      self.useAmmo->Option.isSome ||
      self.notAmmo->Option.isSome,
    )

  let flags2 = (self: t) =>
    BitFlags.fromFlags(
      ~flag1=false,
      ~flag2=false,
      ~flag3=self.scale->Option.isSome,
      ~flag4=self.ammo->Option.isSome,
      ~flag5=self.useAmmo->Option.isSome,
      ~flag6=self.notAmmo->Option.isSome,
      ~flag7=false,
      ~flag8=false,
    )

  let packOptional = (writer, value, pack, field) =>
    switch value {
    | Some(v) => pack(writer, v, field)
    | None => writer
    }

  let toBuffer = (self: t) => {
    let flags = flags1(self)
    let writer =
      ErrorAwarePacketWriter.make()
      ->setType(PacketType.ItemDropModify->PacketType.toInt)
      ->packInt16(self.itemId, "itemId")
      ->packByte(flags->BitFlags.toByte, "flags1")
    let writer = switch self.color {
    | Some(c) =>
      writer
      ->packByte(c.r, "Color.r")
      ->packByte(c.g, "Color.g")
      ->packByte(c.b, "Color.b")
      ->packByte(c.a, "Color.a")
    | None => writer
    }
    let writer =
      writer
      ->packOptional(self.damage, packUInt16, "damage")
      ->packOptional(self.knockback, packSingle, "knockback")
      ->packOptional(self.useAnimation, packUInt16, "useAnimation")
      ->packOptional(self.useTime, packUInt16, "useTime")
      ->packOptional(self.shoot, packInt16, "shoot")
      ->packOptional(self.shootSpeed, packSingle, "shootSpeed")
    if flags->BitFlags.flag8 {
      writer
      ->packByte(flags2(self)->BitFlags.toByte, "flags2")
      ->packOptional(self.scale, packSingle, "scale")
      ->packOptional(self.ammo, packInt16, "ammo")
      ->packOptional(self.useAmmo, packInt16, "useAmmo")
      ->packOptional(self.notAmmo, ErrorAwarePacketWriter.packBool, "notAmmo")
      ->data
    } else {
      writer->data
    }
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
