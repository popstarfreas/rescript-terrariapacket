let {
  readByte,
  readInt16,
  readInt32,
  readUInt64,
  readString,
  readBytes,
  readSingle,
  readSByte,
} = module(PacketFactory.PacketReader)

type readError = {context: string, error: Exn.t}
exception ReadError(readError)

type t = PacketFactory.PacketReader.t
let readByte = (reader: t, context: string): int => {
  try {
    readByte(reader)
  } catch {
  | Exn.Error(obj) => raise(ReadError({context, error: obj}))
  }
}

let readInt16 = (reader: t, context: string): int => {
  try {
    readInt16(reader)
  } catch {
  | Exn.Error(obj) => raise(ReadError({context, error: obj}))
  }
}

let readInt32 = (reader: t, context: string): int => {
  try {
    readInt32(reader)
  } catch {
  | Exn.Error(obj) => raise(ReadError({context, error: obj}))
  }
}

let readUInt64 = (reader: t, context: string): NodeJs.BigInt.t => {
  try {
    readUInt64(reader)
  } catch {
  | Exn.Error(obj) => raise(ReadError({context, error: obj}))
  }
}

let readString = (reader: t, context: string): string => {
  try {
    readString(reader)
  } catch {
  | Exn.Error(obj) => raise(ReadError({context, error: obj}))
  }
}

let readBytes = (reader: t, count: int, context: string): array<int> => {
  try {
    readBytes(reader, count)
  } catch {
  | Exn.Error(obj) => raise(ReadError({context, error: obj}))
  }
}

let readSingle = (reader: t, context: string): float => {
  try {
    readSingle(reader)
  } catch {
  | Exn.Error(obj) => raise(ReadError({context, error: obj}))
  }
}

let readSByte = (reader: t, context: string): int => {
  try {
    readSByte(reader)
  } catch {
  | Exn.Error(obj) => raise(ReadError({context, error: obj}))
  }
}
