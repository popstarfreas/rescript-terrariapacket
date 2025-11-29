let {
  readByte: readByteUnsafe,
  readUInt16: readUInt16Unsafe,
  readInt16: readInt16Unsafe,
  readInt32: readInt32Unsafe,
  readUInt64: readUInt64Unsafe,
  readString: readStringUnsafe,
  readBytes: readBytesUnsafe,
  readSingle: readSingleUnsafe,
  readSByte: readSByteUnsafe,
  readColor: readColorUnsafe,
  readBuffer: readBufferUnsafe,
  readNetworkText: readNetworkTextUnsafe,
  getBytesLeft: getBytesLeftUnsafe,
} = module(PacketFactory.PacketReader)

type readError = {context: string, error: JsExn.t}
exception ReadError(readError)

type t = PacketFactory.PacketReader.t

let withContext = (fn, reader, context) => {
  try {
    Ok(fn(reader))
  } catch {
  | JsExn(obj) => Error({context, error: obj})
  }
}

let readByte = (reader: t, context: string): result<int, readError> =>
  withContext(readByteUnsafe, reader, context)

let readUInt16 = (reader: t, context: string): result<int, readError> =>
  withContext(readUInt16Unsafe, reader, context)

let readInt16 = (reader: t, context: string): result<int, readError> =>
  withContext(readInt16Unsafe, reader, context)

let readInt32 = (reader: t, context: string): result<int, readError> =>
  withContext(readInt32Unsafe, reader, context)

let readUInt64 = (reader: t, context: string): result<NodeJs.BigInt.t, readError> =>
  withContext(readUInt64Unsafe, reader, context)

let readString = (reader: t, context: string): result<string, readError> =>
  withContext(readStringUnsafe, reader, context)

let readBytes = (reader: t, count: int, context: string): result<array<int>, readError> =>
  withContext(reader => readBytesUnsafe(reader, count), reader, context)

let readSingle = (reader: t, context: string): result<float, readError> =>
  withContext(readSingleUnsafe, reader, context)

let readSByte = (reader: t, context: string): result<int, readError> =>
  withContext(readSByteUnsafe, reader, context)

let readColor = (reader: t, context: string): result<PacketFactory.Color.t, readError> =>
  withContext(readColorUnsafe, reader, context)

let readBuffer = (
  reader: t,
  bytes: int,
  context: string,
): result<NodeJs.Buffer.t, readError> =>
  withContext(reader => readBufferUnsafe(reader, bytes), reader, context)

let readNetworkText = (
  reader: t,
  context: string,
): result<PacketFactory.NetworkText.t, readError> =>
  withContext(readNetworkTextUnsafe, reader, context)

let getBytesLeft = (reader: t): result<int, readError> =>
  withContext(getBytesLeftUnsafe, reader, "getBytesLeft")
