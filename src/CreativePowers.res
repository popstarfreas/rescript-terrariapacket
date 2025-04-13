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
      // using JS isn't ideal but the ReScript equivalent would look worse because
      // bit-shifting operators aren't supported and exponentiation(an approximate)
      // isn't supported on integers. Furthermore, array chunking isn't part of the
      // Core library, which further reduces the options available. For reference,
      // the line provided below sets a single bit in a byte in ReScript
      // byte->lor(toggle ? (1.0 ** (Int.mod(i, 8) :> float))->Int.fromFloat : 0)
      let bytes: array<int> = %raw(`((values) => {
        let buffer = new Uint8Array(32);
        for (let i = 0; i <= 30; i++) {
          let chunkIndex = i * 8;
          buffer[i] = (
              (values[chunkIndex + 0] ? 1 << 0 : 0)
            | (values[chunkIndex + 1] ? 1 << 1 : 0)
            | (values[chunkIndex + 2] ? 1 << 2 : 0)
            | (values[chunkIndex + 3] ? 1 << 3 : 0)
            | (values[chunkIndex + 4] ? 1 << 4 : 0)
            | (values[chunkIndex + 5] ? 1 << 5 : 0)
            | (values[chunkIndex + 6] ? 1 << 6 : 0)
            | (values[chunkIndex + 7] ? 1 << 7 : 0)
          );
        }
        buffer[31] = (
            (values[248] ? 1 << 0 : 0)
          | (values[249] ? 1 << 1 : 0)
          | (values[250] ? 1 << 2 : 0)
          | (values[251] ? 1 << 3 : 0)
          | (values[252] ? 1 << 4 : 0)
          | (values[253] ? 1 << 5 : 0)
          | (values[254] ? 1 << 6 : 0)
        );
        return Array.from(buffer);
      })`)(values)
      writer->packByte(0)->ignore
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
      ->packByte(1)
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
      let bytes = Array.fromInitializer(~length=32, _ => reader->readByte)
      let toggles: array<bool> = %raw(`(() => {
        let buffer = Array(256).fill(false);
        for (let i = 0; i < bytes.length; i++) {
          let byte = bytes[i];
          buffer[i * 8 + 0] = (byte & (1 << 0)) !== 0;
          buffer[i * 8 + 1] = (byte & (1 << 1)) !== 0;
          buffer[i * 8 + 2] = (byte & (1 << 2)) !== 0;
          buffer[i * 8 + 3] = (byte & (1 << 3)) !== 0;
          buffer[i * 8 + 4] = (byte & (1 << 4)) !== 0;
          buffer[i * 8 + 5] = (byte & (1 << 5)) !== 0;
          buffer[i * 8 + 6] = (byte & (1 << 6)) !== 0;
          buffer[i * 8 + 7] = (byte & (1 << 7)) !== 0;
        }
        // logic is easier if the array had one extra bool
        buffer.length = 255;
        return buffer;
      })`)(bytes)
      Everyone(toggles)->Some
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
