// Written on April 12, 2025
// There are five base classes from which all journey powers derive:
// ASharedTogglePower, ASharedButtonPower, ASharedSliderPower,
// APerPlayerToggleSlider, and APerPlayerSliderPower.
// These five base classes define the structure and (de)serialization
// of derived powers' packets. Derived powers do not define overrides.
// Therefore, the following structure is solely based on the five base
// powers.

module PerPlayerSliderPower = {
  type t = {
    playerId: int,
    value: float,
  }

  module Encode = {
    let {packByte, packSingle} = module(PacketFactory.ManagedPacketWriter)

    let pack = (
      writer: PacketFactory.ManagedPacketWriter.t,
      self: t,
    ): PacketFactory.ManagedPacketWriter.t => {
      writer
      ->packByte(self.playerId)
      ->packSingle(self.value)
    }
  }

  module Decode = {
    let {readByte, readSingle} = module(PacketFactory.PacketReader)

    let parse = (reader: PacketFactory.PacketReader.t) => {
      Some({
        playerId: reader->readByte,
        value: reader->readSingle,
      })
    }
  }

  let pack = Encode.pack
  let parse = Decode.parse
}

module PerPlayerTogglePower = {
  type t =
    | Everyone(array<bool>)
    | Player(int, bool)

  module Encode = {
    let {packByte} = module(PacketFactory.ManagedPacketWriter)

    let everyoneToWriter = (
      writer: PacketFactory.ManagedPacketWriter.t,
      values: array<bool>,
    ): PacketFactory.ManagedPacketWriter.t => {
      let bytes = Array.make(~length=32, 0)
      values->Array.forEachWithIndex((t, i) => {
        let index = i / 8
        let byte = bytes->Array.get(index)
        switch byte {
        | Some(b) =>
          bytes->Array.set(index, b->lor(t ? (1.0 ** (Int.mod(i, 8) :> float))->Int.fromFloat : 0))
        | None => ()
        }
      })
      bytes->Array.forEach(byte => {
        writer->packByte(byte)->ignore
      })
      writer
    }

    let playerToWriter = (
      writer: PacketFactory.ManagedPacketWriter.t,
      playerId: int,
      value: bool,
    ): PacketFactory.ManagedPacketWriter.t => {
      writer
      ->packByte(playerId)
      ->packByte(value ? 1 : 0)
    }

    let pack = (
      writer: PacketFactory.ManagedPacketWriter.t,
      self: t,
    ): PacketFactory.ManagedPacketWriter.t => {
      switch self {
      | Everyone(values) => everyoneToWriter(writer, values)
      | Player(playerId, value) => playerToWriter(writer, playerId, value)
      }
    }
  }

  module Decode = {
    let {readByte} = module(PacketFactory.PacketReader)

    let parseEveryone = (reader: PacketFactory.PacketReader.t) => {
      let toggles = Array.make(~length=255, false)
      for i in 0 to 30 {
        let flags = reader->readByte->BitFlags.fromByte
        for j in 0 to 7 {
          let index = i * 8 + j
          if index < toggles->Array.length {
            toggles->Array.set(index, flags->BitFlags.flagN((1.0 ** (j :> float))->Int.fromFloat))
          }
        }
      }
      Everyone(toggles)->Some
    }

    let parsePlayer = (reader: PacketFactory.PacketReader.t) => {
      Player(reader->readByte, reader->readByte == 1 ? true : false)->Some
    }

    let parse = (reader: PacketFactory.PacketReader.t) => {
      switch reader->readByte {
      | 0 => parseEveryone(reader)
      | 1 => parsePlayer(reader)
      | _ => None
      }
    }
  }

  let pack = Encode.pack
  let parse = Decode.parse
}

type t =
  | FreezeTime(bool)
  | StartDayImmediately
  | StartNoonImmediately
  | StartNightImmediately
  | StartMidnightImmediately
  | GodmodePower(PerPlayerTogglePower.t)
  | ModifyWindDirectionAndStrength(float)
  | ModifyRainPower(float)
  | ModifyTimeRate(float)
  | FreezeRainPower(bool)
  | FreezeWindDirectionAndStrength(bool)
  | FarPlacementRangePower(PerPlayerTogglePower.t)
  | DifficultySliderPower(float)
  | StopBiomeSpreadPower(bool)
  | SpawnRateSliderPerPlayerPower(PerPlayerSliderPower.t)

module CreativePowerType = {
  type t =
    | FreezeTime
    | StartDayImmediately
    | StartNoonImmediately
    | StartNightImmediately
    | StartMidnightImmediately
    | GodmodePower
    | ModifyWindDirectionAndStrength
    | ModifyRainPower
    | ModifyTimeRate
    | FreezeRainPower
    | FreezeWindDirectionAndStrength
    | FarPlacementRangePower
    | DifficultySliderPower
    | StopBiomeSpreadPower
    | SpawnRateSliderPerPlayerPower

  let fromInt = n =>
    switch n {
    | 0 => Some(FreezeTime)
    | 1 => Some(StartDayImmediately)
    | 2 => Some(StartNoonImmediately)
    | 3 => Some(StartNightImmediately)
    | 4 => Some(StartMidnightImmediately)
    | 5 => Some(GodmodePower)
    | 6 => Some(ModifyWindDirectionAndStrength)
    | 7 => Some(ModifyRainPower)
    | 8 => Some(ModifyTimeRate)
    | 9 => Some(FreezeRainPower)
    | 10 => Some(FreezeWindDirectionAndStrength)
    | 11 => Some(FarPlacementRangePower)
    | 12 => Some(DifficultySliderPower)
    | 13 => Some(StopBiomeSpreadPower)
    | 14 => Some(SpawnRateSliderPerPlayerPower)
    | _ => None
    }

  let toInt = self =>
    switch self {
    | FreezeTime => 0
    | StartDayImmediately => 1
    | StartNoonImmediately => 2
    | StartNightImmediately => 3
    | StartMidnightImmediately => 4
    | GodmodePower => 5
    | ModifyWindDirectionAndStrength => 6
    | ModifyRainPower => 7
    | ModifyTimeRate => 8
    | FreezeRainPower => 9
    | FreezeWindDirectionAndStrength => 10
    | FarPlacementRangePower => 11
    | DifficultySliderPower => 12
    | StopBiomeSpreadPower => 13
    | SpawnRateSliderPerPlayerPower => 14
    }
}

module Encode = {
  let {packByte, packUInt16, packSingle} = module(PacketFactory.ManagedPacketWriter)

  let freezeTimeToWriter = (
    writer: PacketFactory.ManagedPacketWriter.t,
    value: bool,
  ): PacketFactory.ManagedPacketWriter.t => {
    writer
    ->packUInt16(CreativePowerType.FreezeTime->CreativePowerType.toInt)
    ->packByte(value ? 1 : 0)
  }

  let startDayImmediatelyToWriter = (
    writer: PacketFactory.ManagedPacketWriter.t,
  ): PacketFactory.ManagedPacketWriter.t => {
    writer->packUInt16(CreativePowerType.StartDayImmediately->CreativePowerType.toInt)
  }

  let startNoonImmediatelyToWriter = (
    writer: PacketFactory.ManagedPacketWriter.t,
  ): PacketFactory.ManagedPacketWriter.t => {
    writer->packUInt16(CreativePowerType.StartNoonImmediately->CreativePowerType.toInt)
  }

  let startNightImmediatelyToWriter = (
    writer: PacketFactory.ManagedPacketWriter.t,
  ): PacketFactory.ManagedPacketWriter.t => {
    writer->packUInt16(CreativePowerType.StartNightImmediately->CreativePowerType.toInt)
  }

  let startMidnightImmediatelyToWriter = (
    writer: PacketFactory.ManagedPacketWriter.t,
  ): PacketFactory.ManagedPacketWriter.t => {
    writer->packUInt16(CreativePowerType.StartMidnightImmediately->CreativePowerType.toInt)
  }

  let godmodePowerToWriter = (
    writer: PacketFactory.ManagedPacketWriter.t,
    message: PerPlayerTogglePower.t,
  ): PacketFactory.ManagedPacketWriter.t => {
    writer
    ->packUInt16(CreativePowerType.GodmodePower->CreativePowerType.toInt)
    ->PerPlayerTogglePower.pack(message)
  }

  let modifyWindDirectionAndStrengthToWriter = (
    writer: PacketFactory.ManagedPacketWriter.t,
    value: float,
  ): PacketFactory.ManagedPacketWriter.t => {
    writer
    ->packUInt16(CreativePowerType.ModifyWindDirectionAndStrength->CreativePowerType.toInt)
    ->packSingle(value)
  }

  let modifyRainPowerToWriter = (
    writer: PacketFactory.ManagedPacketWriter.t,
    value: float,
  ): PacketFactory.ManagedPacketWriter.t => {
    writer
    ->packUInt16(CreativePowerType.ModifyRainPower->CreativePowerType.toInt)
    ->packSingle(value)
  }

  let modifyTimeRateToWriter = (
    writer: PacketFactory.ManagedPacketWriter.t,
    value: float,
  ): PacketFactory.ManagedPacketWriter.t => {
    writer
    ->packUInt16(CreativePowerType.ModifyTimeRate->CreativePowerType.toInt)
    ->packSingle(value)
  }

  let freezeRainPowerToWriter = (
    writer: PacketFactory.ManagedPacketWriter.t,
    on: bool,
  ): PacketFactory.ManagedPacketWriter.t => {
    writer
    ->packUInt16(CreativePowerType.FreezeRainPower->CreativePowerType.toInt)
    ->packByte(on ? 1 : 0)
  }

  let freezeWindDirectionAndStrengthToWriter = (
    writer: PacketFactory.ManagedPacketWriter.t,
    on: bool,
  ): PacketFactory.ManagedPacketWriter.t => {
    writer
    ->packUInt16(CreativePowerType.FreezeWindDirectionAndStrength->CreativePowerType.toInt)
    ->packByte(on ? 1 : 0)
  }

  let farPlacementRangePowerToWriter = (
    writer: PacketFactory.ManagedPacketWriter.t,
    message: PerPlayerTogglePower.t,
  ): PacketFactory.ManagedPacketWriter.t => {
    writer
    ->packUInt16(CreativePowerType.FarPlacementRangePower->CreativePowerType.toInt)
    ->PerPlayerTogglePower.pack(message)
  }

  let difficultySliderPowerToWriter = (
    writer: PacketFactory.ManagedPacketWriter.t,
    value: float,
  ): PacketFactory.ManagedPacketWriter.t => {
    writer
    ->packUInt16(CreativePowerType.DifficultySliderPower->CreativePowerType.toInt)
    ->packSingle(value)
  }

  let stopBiomeSpreadPowerToWriter = (
    writer: PacketFactory.ManagedPacketWriter.t,
    on: bool,
  ): PacketFactory.ManagedPacketWriter.t => {
    writer
    ->packUInt16(CreativePowerType.StopBiomeSpreadPower->CreativePowerType.toInt)
    ->packByte(on ? 1 : 0)
  }

  let spawnRateSliderPerPlayerPowerToWriter = (
    writer: PacketFactory.ManagedPacketWriter.t,
    message: PerPlayerSliderPower.t,
  ): PacketFactory.ManagedPacketWriter.t => {
    writer
    ->packUInt16(CreativePowerType.SpawnRateSliderPerPlayerPower->CreativePowerType.toInt)
    ->PerPlayerSliderPower.pack(message)
  }

  let pack = (
    writer: PacketFactory.ManagedPacketWriter.t,
    self: t,
  ): PacketFactory.ManagedPacketWriter.t => {
    switch self {
    | FreezeTime(value) => freezeTimeToWriter(writer, value)
    | StartDayImmediately => startDayImmediatelyToWriter(writer)
    | StartNoonImmediately => startNoonImmediatelyToWriter(writer)
    | StartNightImmediately => startNightImmediatelyToWriter(writer)
    | StartMidnightImmediately => startMidnightImmediatelyToWriter(writer)
    | GodmodePower(message) => godmodePowerToWriter(writer, message)
    | ModifyWindDirectionAndStrength(value) => modifyWindDirectionAndStrengthToWriter(writer, value)
    | ModifyRainPower(value) => modifyRainPowerToWriter(writer, value)
    | ModifyTimeRate(value) => modifyTimeRateToWriter(writer, value)
    | FreezeRainPower(on) => freezeRainPowerToWriter(writer, on)
    | FreezeWindDirectionAndStrength(on) => freezeWindDirectionAndStrengthToWriter(writer, on)
    | FarPlacementRangePower(message) => farPlacementRangePowerToWriter(writer, message)
    | DifficultySliderPower(value) => difficultySliderPowerToWriter(writer, value)
    | StopBiomeSpreadPower(on) => stopBiomeSpreadPowerToWriter(writer, on)
    | SpawnRateSliderPerPlayerPower(message) =>
      spawnRateSliderPerPlayerPowerToWriter(writer, message)
    }
  }
}

module Decode = {
  let {readByte, readUInt16, readSingle} = module(PacketFactory.PacketReader)

  let parseFreezeTime = (reader: PacketFactory.PacketReader.t) => {
    FreezeTime(reader->readByte == 1 ? true : false)->Some
  }

  let parseStartDayImmediately = () => {
    StartDayImmediately->Some
  }

  let parseStartNoonImmediately = () => {
    StartNoonImmediately->Some
  }

  let parseStartNightImmediately = () => {
    StartNightImmediately->Some
  }

  let parseStartMidnightImmediately = () => {
    StartMidnightImmediately->Some
  }

  let parseGodmodePower = (reader: PacketFactory.PacketReader.t) => {
    reader
    ->PerPlayerTogglePower.parse
    ->Option.map(m => GodmodePower(m))
  }

  let parseModifyWindDirectionAndStrength = (reader: PacketFactory.PacketReader.t) => {
    ModifyWindDirectionAndStrength(reader->readSingle)->Some
  }

  let parseModifyRainPower = (reader: PacketFactory.PacketReader.t) => {
    ModifyRainPower(reader->readSingle)->Some
  }

  let parseModifyTimeRate = (reader: PacketFactory.PacketReader.t) => {
    ModifyTimeRate(reader->readSingle)->Some
  }

  let parseFreezeRainPower = (reader: PacketFactory.PacketReader.t) => {
    FreezeRainPower(reader->readByte == 1 ? true : false)->Some
  }

  let parseFreezeWindDirectionAndStrength = (reader: PacketFactory.PacketReader.t) => {
    FreezeWindDirectionAndStrength(reader->readByte == 1 ? true : false)->Some
  }

  let parseFarPlacementRangePower = (reader: PacketFactory.PacketReader.t) => {
    reader
    ->PerPlayerTogglePower.parse
    ->Option.map(m => FarPlacementRangePower(m))
  }

  let parseDifficultySliderPower = (reader: PacketFactory.PacketReader.t) => {
    DifficultySliderPower(reader->readSingle)->Some
  }

  let parseStopBiomeSpreadPower = (reader: PacketFactory.PacketReader.t) => {
    StopBiomeSpreadPower(reader->readByte == 1 ? true : false)->Some
  }

  let parseSpawnRateSliderPerPlayerPower = (reader: PacketFactory.PacketReader.t) => {
    reader
    ->PerPlayerSliderPower.parse
    ->Option.map(m => SpawnRateSliderPerPlayerPower(m))
  }

  let parse = (reader: PacketFactory.PacketReader.t) => {
    switch reader->readUInt16 {
    | 0 => parseFreezeTime(reader)
    | 1 => parseStartDayImmediately()
    | 2 => parseStartNoonImmediately()
    | 3 => parseStartNightImmediately()
    | 4 => parseStartMidnightImmediately()
    | 5 => parseGodmodePower(reader)
    | 6 => parseModifyWindDirectionAndStrength(reader)
    | 7 => parseModifyRainPower(reader)
    | 8 => parseModifyTimeRate(reader)
    | 9 => parseFreezeRainPower(reader)
    | 10 => parseFreezeWindDirectionAndStrength(reader)
    | 11 => parseFarPlacementRangePower(reader)
    | 12 => parseDifficultySliderPower(reader)
    | 13 => parseStopBiomeSpreadPower(reader)
    | 14 => parseSpawnRateSliderPerPlayerPower(reader)
    | _ => None
    }
  }
}

let pack = Encode.pack
let parse = Decode.parse
