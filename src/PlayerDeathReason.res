module Option = Belt.Option

type other =
  | FallDamage
  | Drowning
  | Lava
  | FallDamage2
  | DemonAltar
  | CompanionCube
  | Suffocation
  | Burning
  | Poison
  | Electrified
  | WallOfFleshEscape
  | WallOfFleshLicked
  | ChaosState
  | ChaosState2Male
  | ChaosState3Female

let otherFromByte = (byte: int) => {
  switch byte {
  | 0 => Some(FallDamage)
  | 1 => Some(Drowning)
  | 2 => Some(Lava)
  | 3 => Some(FallDamage2)
  | 4 => Some(DemonAltar)
  | 5 => Some(CompanionCube)
  | 6 => Some(Suffocation)
  | 7 => Some(Burning)
  | 8 => Some(Poison)
  | 9 => Some(Electrified)
  | 10 => Some(WallOfFleshEscape)
  | 11 => Some(WallOfFleshLicked)
  | 12 => Some(ChaosState)
  | 13 => Some(ChaosState2Male)
  | 14 => Some(ChaosState3Female)
  | _ => None
  }
}

let otherToByte = (other: other) => {
  switch other {
  | FallDamage => 0
  | Drowning => 1
  | Lava => 2
  | FallDamage2 => 3
  | DemonAltar => 4
  | CompanionCube => 5
  | Suffocation => 6
  | Burning => 7
  | Poison => 8
  | Electrified => 9
  | WallOfFleshEscape => 10
  | WallOfFleshLicked => 11
  | ChaosState => 12
  | ChaosState2Male => 13
  | ChaosState3Female => 14
  }
}

type t = {
  killerPlayerId: option<int>,
  killerNpcId: option<int>,
  killerProjectileId: option<int>,
  typeOfDeathOther: option<other>,
  projectileType: option<int>,
  itemType: option<int>,
  itemPrefix: option<int>,
  deathReason: option<string>,
}

module Decode = {
  let {readInt16, readByte, readString} = module(ErrorAwarePacketReader)

  let readDeathReason = (
    reader: ErrorAwarePacketReader.t,
  ): result<t, ErrorAwarePacketReader.readError> => {
    let? Ok(reasonTypeRaw) = reader->readByte("reasonType")
    let reasonType = BitFlags.fromByte(reasonTypeRaw)

    let? Ok(killerPlayerId) =
      if reasonType->BitFlags.flag1 {
        let? Ok(killerPlayerId) = reader->readInt16("killerPlayerId")
        Ok(Some(killerPlayerId))
      } else {
        Ok(None)
      }

    let? Ok(killerNpcId) =
      if reasonType->BitFlags.flag2 {
        let? Ok(killerNpcId) = reader->readInt16("killerNpcId")
        Ok(Some(killerNpcId))
      } else {
        Ok(None)
      }

    let? Ok(killerProjectileId) =
      if reasonType->BitFlags.flag3 {
        let? Ok(killerProjectileId) = reader->readInt16("killerProjectileId")
        Ok(Some(killerProjectileId))
      } else {
        Ok(None)
      }

    let? Ok(typeOfDeathOther) =
      if reasonType->BitFlags.flag4 {
        let? Ok(typeOfDeathOther) = reader->readByte("typeOfDeathOther")
        Ok(typeOfDeathOther->otherFromByte)
      } else {
        Ok(None)
      }

    let? Ok(projectileType) =
      if reasonType->BitFlags.flag5 {
        let? Ok(projectileType) = reader->readInt16("projectileType")
        Ok(Some(projectileType))
      } else {
        Ok(None)
      }

    let? Ok(itemType) =
      if reasonType->BitFlags.flag6 {
        let? Ok(itemType) = reader->readInt16("itemType")
        Ok(Some(itemType))
      } else {
        Ok(None)
      }

    let? Ok(itemPrefix) =
      if reasonType->BitFlags.flag7 {
        let? Ok(itemPrefix) = reader->readByte("itemPrefix")
        Ok(Some(itemPrefix))
      } else {
        Ok(None)
      }

    let? Ok(deathReason) =
      if reasonType->BitFlags.flag8 {
        let? Ok(deathReason) = reader->readString("deathReason")
        Ok(Some(deathReason))
      } else {
        Ok(None)
      }

    Ok({
      killerPlayerId,
      killerNpcId,
      killerProjectileId,
      typeOfDeathOther,
      projectileType,
      itemType,
      itemPrefix,
      deathReason,
    })
  }
}

module Encode = {
  let {packInt16, packByte, packString} = module(ErrorAwarePacketWriter)

  let packFlags = (writer: ErrorAwarePacketWriter.t, self: t): ErrorAwarePacketWriter.t => {
    let flags = BitFlags.fromFlags(
      ~flag1=self.killerPlayerId->Option.isSome,
      ~flag2=self.killerNpcId->Option.isSome,
      ~flag3=self.killerProjectileId->Option.isSome,
      ~flag4=self.typeOfDeathOther->Option.isSome,
      ~flag5=self.projectileType->Option.isSome,
      ~flag6=self.itemType->Option.isSome,
      ~flag7=self.itemPrefix->Option.isSome,
      ~flag8=self.deathReason->Option.isSome,
    )
    writer->packByte(flags->BitFlags.toByte, "reasonType")
  }

  let packKillerPlayerId = (
    writer: ErrorAwarePacketWriter.t,
    self: t,
  ): ErrorAwarePacketWriter.t => {
    switch self.killerPlayerId {
    | Some(killerPlayerId) => writer->packInt16(killerPlayerId, "killerPlayerId")
    | None => writer
    }
  }

  let packKillerNpcId = (
    writer: ErrorAwarePacketWriter.t,
    self: t,
  ): ErrorAwarePacketWriter.t => {
    switch self.killerNpcId {
    | Some(killerNpcId) => writer->packInt16(killerNpcId, "killerNpcId")
    | None => writer
    }
  }

  let packKillerProjectileId = (
    writer: ErrorAwarePacketWriter.t,
    self: t,
  ): ErrorAwarePacketWriter.t => {
    switch self.killerProjectileId {
    | Some(killerProjectileId) => writer->packInt16(killerProjectileId, "killerProjectileId")
    | None => writer
    }
  }

  let packTypeOfDeathOther = (
    writer: ErrorAwarePacketWriter.t,
    self: t,
  ): ErrorAwarePacketWriter.t => {
    switch self.typeOfDeathOther {
    | Some(typeOfDeathOther) => writer->packByte(typeOfDeathOther->otherToByte, "typeOfDeathOther")
    | None => writer
    }
  }

  let packProjectileType = (
    writer: ErrorAwarePacketWriter.t,
    self: t,
  ): ErrorAwarePacketWriter.t => {
    switch self.projectileType {
    | Some(projectileType) => writer->packInt16(projectileType, "projectileType")
    | None => writer
    }
  }

  let packItemType = (writer: ErrorAwarePacketWriter.t, self: t): ErrorAwarePacketWriter.t => {
    switch self.itemType {
    | Some(itemType) => writer->packInt16(itemType, "itemType")
    | None => writer
    }
  }

  let packItemPrefix = (writer: ErrorAwarePacketWriter.t, self: t): ErrorAwarePacketWriter.t => {
    switch self.itemPrefix {
    | Some(itemPrefix) => writer->packByte(itemPrefix, "itemPrefix")
    | None => writer
    }
  }

  let packDeathReason = (writer: ErrorAwarePacketWriter.t, self: t): ErrorAwarePacketWriter.t => {
    switch self.deathReason {
    | Some(deathReason) => writer->packString(deathReason, "deathReason")
    | None => writer
    }
  }

  let pack = (writer: ErrorAwarePacketWriter.t, self: t): ErrorAwarePacketWriter.t => {
    writer
    ->packFlags(self)
    ->packKillerPlayerId(self)
    ->packKillerNpcId(self)
    ->packKillerProjectileId(self)
    ->packTypeOfDeathOther(self)
    ->packProjectileType(self)
    ->packItemType(self)
    ->packItemPrefix(self)
    ->packDeathReason(self)
  }
}

let readDeathReason = Decode.readDeathReason
let packDeathReason = Encode.pack
