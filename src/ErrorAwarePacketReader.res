let {
  readByte,
  readUInt16,
  readInt16,
  readInt32,
  readUInt64,
  readString,
  readBytes,
  readSingle,
  readSByte,
  readColor,
  readBuffer,
  readNetworkText,
  getBytesLeft,
} = module(PacketFactory.PacketReader)

type readError = {context: string, error: JsExn.t}
exception ReadError(readError)

type t = PacketFactory.PacketReader.t
let readByte = (reader: t, context: string): int => {
  try {
    readByte(reader)
  } catch {
  | JsExn(obj) => throw(ReadError({context, error: obj}))
  }
}

let readUInt16 = (reader: t, context: string): int => {
  try {
    readUInt16(reader)
  } catch {
  | JsExn(obj) => throw(ReadError({context, error: obj}))
  }
}

let readInt16 = (reader: t, context: string): int => {
  try {
    readInt16(reader)
  } catch {
  | JsExn(obj) => throw(ReadError({context, error: obj}))
  }
}

let readInt32 = (reader: t, context: string): int => {
  try {
    readInt32(reader)
  } catch {
  | JsExn(obj) => throw(ReadError({context, error: obj}))
  }
}

let readUInt64 = (reader: t, context: string): NodeJs.BigInt.t => {
  try {
    readUInt64(reader)
  } catch {
  | JsExn(obj) => throw(ReadError({context, error: obj}))
  }
}

let readString = (reader: t, context: string): string => {
  try {
    readString(reader)
  } catch {
  | JsExn(obj) => throw(ReadError({context, error: obj}))
  }
}

let readBytes = (reader: t, count: int, context: string): array<int> => {
  try {
    readBytes(reader, count)
  } catch {
  | JsExn(obj) => throw(ReadError({context, error: obj}))
  }
}

let readSingle = (reader: t, context: string): float => {
  try {
    readSingle(reader)
  } catch {
  | JsExn(obj) => throw(ReadError({context, error: obj}))
  }
}

let readSByte = (reader: t, context: string): int => {
  try {
    readSByte(reader)
  } catch {
  | JsExn(obj) => throw(ReadError({context, error: obj}))
  }
}

let readColor = (reader: t, context: string): PacketFactory.Color.t => {
  try {
    readColor(reader)
  } catch {
  | JsExn(obj) => throw(ReadError({context, error: obj}))
  }
}

let readBuffer = (reader: t, bytes: int, context: string): NodeJs.Buffer.t => {
  try {
    readBuffer(reader, bytes)
  } catch {
  | JsExn(obj) => throw(ReadError({context, error: obj}))
  }
}

let readNetworkText = (reader: t, context: string): PacketFactory.NetworkText.t => {
  try {
    readNetworkText(reader)
  } catch {
  | JsExn(obj) => throw(ReadError({context, error: obj}))
  }
}

let getBytesLeft = (reader: t): int => {
  getBytesLeft(reader)
}
