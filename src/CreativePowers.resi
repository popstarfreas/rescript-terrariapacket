module PerPlayerSliderPower: {
  @gentype
  type t = {playerId: int, value: float}

  let pack: (PacketFactory.ManagedPacketWriter.t, t) => PacketFactory.ManagedPacketWriter.t

  let parse: PacketFactory.PacketReader.t => option<t>
}

module PerPlayerTogglePower: {
  @gentype
  type t = Everyone(array<bool>) | Player(int, bool)

  let pack: (PacketFactory.ManagedPacketWriter.t, t) => PacketFactory.ManagedPacketWriter.t

  let parse: PacketFactory.PacketReader.t => option<t>
}

@gentype
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

@gentype
let toString: t => string

module CreativePowerType: {
  @gentype
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

  @gentype
  let toString: t => string

  @gentype
  let fromInt: int => option<t>

  @gentype
  let toInt: t => int
}

let pack: (PacketFactory.ManagedPacketWriter.t, t) => PacketFactory.ManagedPacketWriter.t

let parse: PacketFactory.PacketReader.t => option<t>
