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
  let {readInt16, readByte, readString} = module(PacketFactory.PacketReader)
  let readDeathReason = (reader: PacketFactory.PacketReader.t): t => {
    let reasonType = BitFlags.fromByte(reader->readByte)
    let killerPlayerId = if reasonType->BitFlags.flag1 {
      Some(reader->readByte)
    } else {
      None
    }
    let killerNpcId = if reasonType->BitFlags.flag2 {
      Some(reader->readInt16)
    } else {
      None
    }
    let killerProjectileId = if reasonType->BitFlags.flag3 {
      Some(reader->readInt16)
    } else {
      None
    }
    let typeOfDeathOther = if reasonType->BitFlags.flag4 {
      otherFromByte(reader->readByte)
    } else {
      None
    }
    let projectileType = if reasonType->BitFlags.flag5 {
      Some(reader->readInt16)
    } else {
      None
    }
    let itemType = if reasonType->BitFlags.flag6 {
      Some(reader->readInt16)
    } else {
      None
    }
    let itemPrefix = if reasonType->BitFlags.flag7 {
      Some(reader->readByte)
    } else {
      None
    }
    let deathReason = if reasonType->BitFlags.flag8 {
      Some(reader->readString)
    } else {
      None
    }

    {
      killerPlayerId,
      killerNpcId,
      killerProjectileId,
      typeOfDeathOther,
      projectileType,
      itemType,
      itemPrefix,
      deathReason,
    }
  }
}

module Encode = {
  let {packInt16, packByte, packString} = module(PacketFactory.ManagedPacketWriter)
  let packFlags = (
    writer: PacketFactory.ManagedPacketWriter.t,
    self: t,
  ): PacketFactory.ManagedPacketWriter.t => {
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
    writer->packByte(flags->BitFlags.toByte)
  }

  let packKillerPlayerId = (
    writer: PacketFactory.ManagedPacketWriter.t,
    self: t,
  ): PacketFactory.ManagedPacketWriter.t => {
    switch self.killerPlayerId {
    | Some(killerPlayerId) => writer->packByte(killerPlayerId)
    | None => writer
    }
  }

  let packKillerNpcId = (
    writer: PacketFactory.ManagedPacketWriter.t,
    self: t,
  ): PacketFactory.ManagedPacketWriter.t => {
    switch self.killerNpcId {
    | Some(killerNpcId) => writer->packInt16(killerNpcId)
    | None => writer
    }
  }

  let packKillerProjectileId = (
    writer: PacketFactory.ManagedPacketWriter.t,
    self: t,
  ): PacketFactory.ManagedPacketWriter.t => {
    switch self.killerProjectileId {
    | Some(killerProjectileId) => writer->packInt16(killerProjectileId)
    | None => writer
    }
  }

  let packTypeOfDeathOther = (
    writer: PacketFactory.ManagedPacketWriter.t,
    self: t,
  ): PacketFactory.ManagedPacketWriter.t => {
    switch self.typeOfDeathOther {
    | Some(typeOfDeathOther) => writer->packByte(typeOfDeathOther->otherToByte)
    | None => writer
    }
  }

  let packProjectileType = (
    writer: PacketFactory.ManagedPacketWriter.t,
    self: t,
  ): PacketFactory.ManagedPacketWriter.t => {
    switch self.projectileType {
    | Some(projectileType) => writer->packInt16(projectileType)
    | None => writer
    }
  }

  let packItemType = (
    writer: PacketFactory.ManagedPacketWriter.t,
    self: t,
  ): PacketFactory.ManagedPacketWriter.t => {
    switch self.itemType {
    | Some(itemType) => writer->packInt16(itemType)
    | None => writer
    }
  }

  let packItemPrefix = (
    writer: PacketFactory.ManagedPacketWriter.t,
    self: t,
  ): PacketFactory.ManagedPacketWriter.t => {
    switch self.itemPrefix {
    | Some(itemPrefix) => writer->packByte(itemPrefix)
    | None => writer
    }
  }

  let packDeathReason = (
    writer: PacketFactory.ManagedPacketWriter.t,
    self: t,
  ): PacketFactory.ManagedPacketWriter.t => {
    switch self.deathReason {
    | Some(deathReason) => writer->packString(deathReason)
    | None => writer
    }
  }

  let pack = (
    writer: PacketFactory.ManagedPacketWriter.t,
    self: t,
  ): PacketFactory.ManagedPacketWriter.t => {
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
