import Color from "@popstarfreas/packetfactory/color";
/**
 * An opaque type representing an uninitialized packet writer.
 */
export declare class untypedT { }

/**
 * Represents an error that occurred during packet packing.
 */
export type PackError = {
  readonly context: string;
  readonly error: Error;
};

/**
 * An opaque type representing an initialized packet writer.
 */
export declare class ErrorAwarePacketWriter { }

/**
 * Packs a single-precision floating point number.
 * @param writer The packet writer instance.
 * @param value The float value to pack.
 * @param context A string describing the context of this operation, for error reporting.
 * @returns The packet writer instance.
 */
export function packSingle(writer: ErrorAwarePacketWriter, value: number, context: string): ErrorAwarePacketWriter;

/**
 * Packs a 32-bit signed integer.
 * @param writer The packet writer instance.
 * @param value The integer value to pack.
 * @param context A string describing the context of this operation, for error reporting.
 * @returns The packet writer instance.
 */
export function packInt32(writer: ErrorAwarePacketWriter, value: number, context: string): ErrorAwarePacketWriter;

/**
 * Packs a byte (8-bit unsigned integer).
 * @param writer The packet writer instance.
 * @param value The byte value to pack.
 * @param context A string describing the context of this operation, for error reporting.
 * @returns The packet writer instance.
 */
export function packByte(writer: ErrorAwarePacketWriter, value: number, context: string): ErrorAwarePacketWriter;

/**
 * Packs a 16-bit signed integer.
 * @param writer The packet writer instance.
 * @param value The integer value to pack.
 * @param context A string describing the context of this operation, for error reporting.
 * @returns The packet writer instance.
 */
export function packInt16(writer: ErrorAwarePacketWriter, value: number, context: string): ErrorAwarePacketWriter;

/**
 * Packs a 64-bit unsigned integer.
 * @param writer The packet writer instance.
 * @param value The bigint value to pack.
 * @param context A string describing the context of this operation, for error reporting.
 * @returns The packet writer instance.
 */
export function packUInt64(writer: ErrorAwarePacketWriter, value: bigint, context: string): ErrorAwarePacketWriter;

/**
 * Packs a string.
 * @param writer The packet writer instance.
 * @param value The string value to pack.
 * @param context A string describing the context of this operation, for error reporting.
 * @returns The packet writer instance.
 */
export function packString(writer: ErrorAwarePacketWriter, value: string, context: string): ErrorAwarePacketWriter;

/**
 * Packs a signed byte (8-bit signed integer).
 * @param writer The packet writer instance.
 * @param value The sbyte value to pack.
 * @param context A string describing the context of this operation, for error reporting.
 * @returns The packet writer instance.
 */
export function packSByte(writer: ErrorAwarePacketWriter, value: number, context: string): ErrorAwarePacketWriter;

/**
 * Packs an array of bytes.
 * @param writer The packet writer instance.
 * @param value The array of byte values to pack.
 * @param context A string describing the context of this operation, for error reporting.
 * @returns The packet writer instance.
 */
export function packBytes(writer: ErrorAwarePacketWriter, value: number[], context: string): ErrorAwarePacketWriter;

/**
 * Packs a color.
 * @param writer The packet writer instance.
 * @param value The color value to pack.
 * @param context A string describing the context of this operation, for error reporting.
 * @returns The packet writer instance.
 */
export function packColor(writer: ErrorAwarePacketWriter, value: Color, context: string): ErrorAwarePacketWriter;

/**
 * Sets the packet type on an untyped writer, returning an initialized writer.
 * @param untypedWriter The uninitialized packet writer.
 * @param packetTypeId The ID of the packet type.
 * @returns An initialized packet writer instance.
 */
export function setType(untypedWriter: untypedT, packetTypeId: number): ErrorAwarePacketWriter;

/**
 * Represents a successful result of the data extraction.
 */
export type DataOk = { TAG: "Ok"; _0: Buffer };
/**
 * Represents an error result of the data extraction.
 */
export type DataError = { TAG: "Error"; _0: PackError };
/**
 * Represents the result of extracting data from the packet writer, which can be a Buffer or an error.
 */
export type DataResult = DataOk | DataError;

/**
 * Finalizes the packet and retrieves the data as a Buffer.
 * @param writer The packet writer instance.
 * @returns A result type containing either the Buffer or a packError.
 */
export function data(writer: ErrorAwarePacketWriter): DataResult;

/**
 * Creates a new, uninitialized packet writer.
 * @returns An untypedT instance.
 */
export function make(): untypedT;
