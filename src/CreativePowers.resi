module PerPlayerSliderPower: {
  type t = {playerId: int, value: float}

  let pack: (PacketFactory.ManagedPacketWriter.t, t) => PacketFactory.ManagedPacketWriter.t

  let parse: PacketFactory.PacketReader.t => option<t>
}

module PerPlayerTogglePower: {
  type t = Everyone(array<bool>) | Player(int, bool)

  let pack: (PacketFactory.ManagedPacketWriter.t, t) => PacketFactory.ManagedPacketWriter.t

  let parse: PacketFactory.PacketReader.t => option<t>
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

let toString: t => string

module CreativePowerType: {
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

  let toString: t => string
  let fromInt: int => option<t>
  let toInt: t => int
}

let pack: (PacketFactory.ManagedPacketWriter.t, t) => PacketFactory.ManagedPacketWriter.t

let parse: PacketFactory.PacketReader.t => option<t>
