import type Color from "@popstarfreas/packetfactory/color";

export { readError, ReadResult } from "./ErrorAwarePacketReader";

export declare class ErrorAwareBufferReader { }

export function readByte(reader: ErrorAwareBufferReader, context: string): ReadResult<number>;
export function readInt16(reader: ErrorAwareBufferReader, context: string): ReadResult<number>;
export function readInt32(reader: ErrorAwareBufferReader, context: string): ReadResult<number>;
export function readUInt64(reader: ErrorAwareBufferReader, context: string): ReadResult<bigint>;
export function readString(reader: ErrorAwareBufferReader, context: string): ReadResult<string>;
export function readBytes(reader: ErrorAwareBufferReader, count: number, context: string): ReadResult<number[]>;
export function readSingle(reader: ErrorAwareBufferReader, context: string): ReadResult<number>;
export function readSByte(reader: ErrorAwareBufferReader, context: string): ReadResult<number>;
export function readColor(reader: ErrorAwareBufferReader, context: string): ReadResult<Color>;
export function readBuffer(reader: ErrorAwareBufferReader, bytes: number, context: string): ReadResult<Buffer>;
export function getBytesLeft(reader: ErrorAwareBufferReader): ReadResult<number>;
