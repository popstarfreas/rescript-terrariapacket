import { ErrorAwarePacketWriter } from "./ErrorAwarePacketWriter";

// Placeholder for PacketReader type. Replace with actual import if available.
// import { PacketReader } from "./PacketReader"; // Example import
type PacketReader = any;

export type PerPlayerSliderPower = {
  readonly playerId: number;
  readonly value: number;
};

export type PerPlayerTogglePower =
  | { readonly TAG: "Everyone"; readonly _0: boolean[] }
  | { readonly TAG: "Player"; readonly _0: number; readonly _1: boolean };

export type CreativePower =
  | { readonly TAG: "FreezeTime"; readonly _0: boolean }
  | { readonly TAG: "StartDayImmediately" }
  | { readonly TAG: "StartNoonImmediately" }
  | { readonly TAG: "StartNightImmediately" }
  | { readonly TAG: "StartMidnightImmediately" }
  | { readonly TAG: "GodmodePower"; readonly _0: PerPlayerTogglePower }
  | { readonly TAG: "ModifyWindDirectionAndStrength"; readonly _0: number }
  | { readonly TAG: "ModifyRainPower"; readonly _0: number }
  | { readonly TAG: "ModifyTimeRate"; readonly _0: number }
  | { readonly TAG: "FreezeRainPower"; readonly _0: boolean }
  | { readonly TAG: "FreezeWindDirectionAndStrength"; readonly _0: boolean }
  | { readonly TAG: "FarPlacementRangePower"; readonly _0: PerPlayerTogglePower }
  | { readonly TAG: "DifficultySliderPower"; readonly _0: number }
  | { readonly TAG: "StopBiomeSpreadPower"; readonly _0: boolean }
  | { readonly TAG: "SpawnRateSliderPerPlayerPower"; readonly _0: PerPlayerSliderPower };

export function toString(data: CreativePower): string;

export type CreativePowerType =
  | "FreezeTime"
  | "StartDayImmediately"
  | "StartNoonImmediately"
  | "StartNightImmediately"
  | "StartMidnightImmediately"
  | "GodmodePower"
  | "ModifyWindDirectionAndStrength"
  | "ModifyRainPower"
  | "ModifyTimeRate"
  | "FreezeRainPower"
  | "FreezeWindDirectionAndStrength"
  | "FarPlacementRangePower"
  | "DifficultySliderPower"
  | "StopBiomeSpreadPower"
  | "SpawnRateSliderPerPlayerPower";

export function CreativePowerType_toString(data: CreativePowerType): string;
export function CreativePowerType_fromInt(value: number): CreativePowerType | undefined;
export function CreativePowerType_toInt(data: CreativePowerType): number;

export function pack(writer: ErrorAwarePacketWriter, data: CreativePower): ErrorAwarePacketWriter;
export function parse(reader: PacketReader): CreativePower | undefined;
