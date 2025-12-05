import type Color from "@popstarfreas/packetfactory/color";
import type NetworkText from "@popstarfreas/packetfactory/networktext";

export type readError = { readonly context: string; readonly error: unknown };

export type ReadResult<T> = { TAG: "Ok"; _0: T } | { TAG: "Error"; _0: readError };

export declare class ErrorAwarePacketReader { }

export function readByte(reader: ErrorAwarePacketReader, context: string): ReadResult<number>;
export function readUInt16(reader: ErrorAwarePacketReader, context: string): ReadResult<number>;
export function readInt16(reader: ErrorAwarePacketReader, context: string): ReadResult<number>;
export function readInt32(reader: ErrorAwarePacketReader, context: string): ReadResult<number>;
export function readUInt64(reader: ErrorAwarePacketReader, context: string): ReadResult<bigint>;
export function readString(reader: ErrorAwarePacketReader, context: string): ReadResult<string>;
export function readBytes(reader: ErrorAwarePacketReader, count: number, context: string): ReadResult<number[]>;
export function readSingle(reader: ErrorAwarePacketReader, context: string): ReadResult<number>;
export function readSByte(reader: ErrorAwarePacketReader, context: string): ReadResult<number>;
export function readColor(reader: ErrorAwarePacketReader, context: string): ReadResult<Color>;
export function readBuffer(reader: ErrorAwarePacketReader, bytes: number, context: string): ReadResult<Buffer>;
export function readNetworkText(reader: ErrorAwarePacketReader, context: string): ReadResult<NetworkText>;
export function getBytesLeft(reader: ErrorAwarePacketReader): ReadResult<number>;
