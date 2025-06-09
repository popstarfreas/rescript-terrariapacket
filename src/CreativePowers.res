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

  let toString = (self: t) =>
    `PerPlayerSliderPower { playerId: ${Int.toString(self.playerId)}, value: ${Float.toString(
        self.value,
      )} }`

  module Encode = {
    let {packByte, packSingle} = module(ErrorAwarePacketWriter)

    let pack = (writer: ErrorAwarePacketWriter.t, self: t): ErrorAwarePacketWriter.t => {
      writer
      ->packByte(self.playerId, "playerId")
      ->packSingle(self.value, "value")
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

  let toString = (self: t) => {
    switch self {
    | Everyone(values) =>
      `Everyone { values: ${Array.map(values, value => value ? "1" : "0")->Array.join(", ")} }`
    | Player(playerId, value) =>
      `Player { playerId: ${Int.toString(playerId)}, value: ${value ? "true" : "false"} }`
    }
  }

  module Encode = {
    let {packByte, packBytes} = module(ErrorAwarePacketWriter)

    let everyoneToWriter = (
      writer: ErrorAwarePacketWriter.t,
      values: array<bool>,
    ): ErrorAwarePacketWriter.t => {
      // Each group of 8 flags is encoded into 1 byte
      // (except the last group will be 7 flags)
      let bytes =
        values
        ->ArrayExt.intoChunks(~chunkSize=8)
        ->Array.map(BitFlags.fromArray)
        ->Array.map(BitFlags.toByte)

      writer
      ->packByte(0, "everyoneType")
      ->packBytes(bytes, "everyoneValues")
    }

    let playerToWriter = (
      writer: ErrorAwarePacketWriter.t,
      playerId: int,
      value: bool,
    ): ErrorAwarePacketWriter.t => {
      writer
      ->packByte(1, "playerType")
      ->packByte(playerId, "playerId")
      ->packByte(value ? 1 : 0, "playerValue")
    }

    let pack = (writer: ErrorAwarePacketWriter.t, self: t): ErrorAwarePacketWriter.t => {
      switch self {
      | Everyone(values) => everyoneToWriter(writer, values)
      | Player(playerId, value) => playerToWriter(writer, playerId, value)
      }
    }
  }

  module Decode = {
    let {readByte} = module(PacketFactory.PacketReader)
    let {forEach} = module(BitFlags)

    let parseEveryone = (reader: PacketFactory.PacketReader.t) => {
      let toggles = []
      // Each player slot is represented by 1 bit. So 255 total player slots
      // means 32 bytes to represent them
      for _ in 1 to 32 {
        let byte = reader->readByte
        BitFlags.fromByte(byte)->forEach(flag => {
          toggles->Array.push(flag)
        })
      }
      // The last flag is not for any player so we remove it
      toggles->Array.pop->ignore
      Some(Everyone(toggles))
    }

    let parsePlayer = (reader: PacketFactory.PacketReader.t) => {
      Player(reader->readByte, reader->readByte === 1 ? true : false)->Some
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

let toString = (self: t) =>
  switch self {
  | FreezeTime(value) => `FreezeTime { value: ${value ? "true" : "false"} }`
  | StartDayImmediately => `StartDayImmediately`
  | StartNoonImmediately => `StartNoonImmediately`
  | StartNightImmediately => `StartNightImmediately`
  | StartMidnightImmediately => `StartMidnightImmediately`
  | GodmodePower(message) => `GodmodePower { message: ${message->PerPlayerTogglePower.toString} }`
  | ModifyWindDirectionAndStrength(value) =>
    `ModifyWindDirectionAndStrength { value: ${Float.toString(value)} }`
  | ModifyRainPower(value) => `ModifyRainPower { value: ${Float.toString(value)} }`
  | ModifyTimeRate(value) => `ModifyTimeRate { value: ${Float.toString(value)} }`
  | FreezeRainPower(value) => `FreezeRainPower { value: ${value ? "true" : "false"} }`
  | FreezeWindDirectionAndStrength(value) =>
    `FreezeWindDirectionAndStrength { value: ${value ? "true" : "false"} }`
  | FarPlacementRangePower(message) =>
    `FarPlacementRangePower { message: ${message->PerPlayerTogglePower.toString} }`
  | DifficultySliderPower(value) => `DifficultySliderPower { value: ${Float.toString(value)} }`
  | StopBiomeSpreadPower(value) => `StopBiomeSpreadPower { value: ${value ? "true" : "false"} }`
  | SpawnRateSliderPerPlayerPower(sliderPower) =>
    `SpawnRateSliderPerPlayerPower { sliderPower: ${sliderPower->PerPlayerSliderPower.toString} }`
  }

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

  let toString = (self: t) =>
    switch self {
    | FreezeTime => "FreezeTime"
    | StartDayImmediately => "StartDayImmediately"
    | StartNoonImmediately => "StartNoonImmediately"
    | StartNightImmediately => "StartNightImmediately"
    | StartMidnightImmediately => "StartMidnightImmediately"
    | GodmodePower => "GodmodePower"
    | ModifyWindDirectionAndStrength => "ModifyWindDirectionAndStrength"
    | ModifyRainPower => "ModifyRainPower"
    | ModifyTimeRate => "ModifyTimeRate"
    | FreezeRainPower => "FreezeRainPower"
    | FreezeWindDirectionAndStrength => "FreezeWindDirectionAndStrength"
    | FarPlacementRangePower => "FarPlacementRangePower"
    | DifficultySliderPower => "DifficultySliderPower"
    | StopBiomeSpreadPower => "StopBiomeSpreadPower"
    | SpawnRateSliderPerPlayerPower => "SpawnRateSliderPerPlayerPower"
    }

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
  let {packByte, packUInt16, packSingle} = module(ErrorAwarePacketWriter)

  let freezeTimeToWriter = (
    writer: ErrorAwarePacketWriter.t,
    value: bool,
  ): ErrorAwarePacketWriter.t => {
    writer
    ->packUInt16(CreativePowerType.FreezeTime->CreativePowerType.toInt, "freezeTimeType")
    ->packByte(value ? 1 : 0, "freezeTimeValue")
  }

  let startDayImmediatelyToWriter = (
    writer: ErrorAwarePacketWriter.t,
  ): ErrorAwarePacketWriter.t => {
    writer->packUInt16(
      CreativePowerType.StartDayImmediately->CreativePowerType.toInt,
      "startDayImmediatelyType",
    )
  }

  let startNoonImmediatelyToWriter = (
    writer: ErrorAwarePacketWriter.t,
  ): ErrorAwarePacketWriter.t => {
    writer->packUInt16(
      CreativePowerType.StartNoonImmediately->CreativePowerType.toInt,
      "startNoonImmediatelyType",
    )
  }

  let startNightImmediatelyToWriter = (
    writer: ErrorAwarePacketWriter.t,
  ): ErrorAwarePacketWriter.t => {
    writer->packUInt16(
      CreativePowerType.StartNightImmediately->CreativePowerType.toInt,
      "startNightImmediatelyType",
    )
  }

  let startMidnightImmediatelyToWriter = (
    writer: ErrorAwarePacketWriter.t,
  ): ErrorAwarePacketWriter.t => {
    writer->packUInt16(
      CreativePowerType.StartMidnightImmediately->CreativePowerType.toInt,
      "startMidnightImmediatelyType",
    )
  }

  let godmodePowerToWriter = (
    writer: ErrorAwarePacketWriter.t,
    message: PerPlayerTogglePower.t,
  ): ErrorAwarePacketWriter.t => {
    writer
    ->packUInt16(CreativePowerType.GodmodePower->CreativePowerType.toInt, "godmodePowerType")
    ->PerPlayerTogglePower.pack(message)
  }

  let modifyWindDirectionAndStrengthToWriter = (
    writer: ErrorAwarePacketWriter.t,
    value: float,
  ): ErrorAwarePacketWriter.t => {
    writer
    ->packUInt16(
      CreativePowerType.ModifyWindDirectionAndStrength->CreativePowerType.toInt,
      "modifyWindDirectionAndStrengthType",
    )
    ->packSingle(value, "modifyWindDirectionAndStrengthValue")
  }

  let modifyRainPowerToWriter = (
    writer: ErrorAwarePacketWriter.t,
    value: float,
  ): ErrorAwarePacketWriter.t => {
    writer
    ->packUInt16(CreativePowerType.ModifyRainPower->CreativePowerType.toInt, "modifyRainPowerType")
    ->packSingle(value, "modifyRainPowerValue")
  }

  let modifyTimeRateToWriter = (
    writer: ErrorAwarePacketWriter.t,
    value: float,
  ): ErrorAwarePacketWriter.t => {
    writer
    ->packUInt16(CreativePowerType.ModifyTimeRate->CreativePowerType.toInt, "modifyTimeRateType")
    ->packSingle(value, "modifyTimeRateValue")
  }

  let freezeRainPowerToWriter = (
    writer: ErrorAwarePacketWriter.t,
    on: bool,
  ): ErrorAwarePacketWriter.t => {
    writer
    ->packUInt16(CreativePowerType.FreezeRainPower->CreativePowerType.toInt, "freezeRainPowerType")
    ->packByte(on ? 1 : 0, "freezeRainPowerValue")
  }

  let freezeWindDirectionAndStrengthToWriter = (
    writer: ErrorAwarePacketWriter.t,
    on: bool,
  ): ErrorAwarePacketWriter.t => {
    writer
    ->packUInt16(
      CreativePowerType.FreezeWindDirectionAndStrength->CreativePowerType.toInt,
      "freezeWindDirectionAndStrengthType",
    )
    ->packByte(on ? 1 : 0, "freezeWindDirectionAndStrengthValue")
  }

  let farPlacementRangePowerToWriter = (
    writer: ErrorAwarePacketWriter.t,
    message: PerPlayerTogglePower.t,
  ): ErrorAwarePacketWriter.t => {
    writer
    ->packUInt16(
      CreativePowerType.FarPlacementRangePower->CreativePowerType.toInt,
      "farPlacementRangePowerType",
    )
    ->PerPlayerTogglePower.pack(message)
  }

  let difficultySliderPowerToWriter = (
    writer: ErrorAwarePacketWriter.t,
    value: float,
  ): ErrorAwarePacketWriter.t => {
    writer
    ->packUInt16(
      CreativePowerType.DifficultySliderPower->CreativePowerType.toInt,
      "difficultySliderPowerType",
    )
    ->packSingle(value, "difficultySliderPowerValue")
  }

  let stopBiomeSpreadPowerToWriter = (
    writer: ErrorAwarePacketWriter.t,
    on: bool,
  ): ErrorAwarePacketWriter.t => {
    writer
    ->packUInt16(
      CreativePowerType.StopBiomeSpreadPower->CreativePowerType.toInt,
      "stopBiomeSpreadPowerType",
    )
    ->packByte(on ? 1 : 0, "stopBiomeSpreadPowerValue")
  }

  let spawnRateSliderPerPlayerPowerToWriter = (
    writer: ErrorAwarePacketWriter.t,
    message: PerPlayerSliderPower.t,
  ): ErrorAwarePacketWriter.t => {
    writer
    ->packUInt16(
      CreativePowerType.SpawnRateSliderPerPlayerPower->CreativePowerType.toInt,
      "spawnRateSliderPerPlayerPowerType",
    )
    ->PerPlayerSliderPower.pack(message)
  }

  let pack = (writer: ErrorAwarePacketWriter.t, self: t): ErrorAwarePacketWriter.t => {
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
    FreezeTime(reader->readByte === 1 ? true : false)->Some
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
    FreezeRainPower(reader->readByte === 1 ? true : false)->Some
  }

  let parseFreezeWindDirectionAndStrength = (reader: PacketFactory.PacketReader.t) => {
    FreezeWindDirectionAndStrength(reader->readByte === 1 ? true : false)->Some
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
    StopBiomeSpreadPower(reader->readByte === 1 ? true : false)->Some
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
