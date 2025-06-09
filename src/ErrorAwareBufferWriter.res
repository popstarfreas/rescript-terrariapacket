/***
 * This module is a wrapper around the PacketFactory.BufferWriter
 * It will catch any errors while writing and hold on to them until data is called,
 * which will return a result
 */
let {
  packSingle,
  packInt32,
  packByte,
  packInt16,
  packUInt64,
  packString,
  packSByte,
  packBytes,
  packColor,
  packBuffer,
  data,
} = module(PacketFactory.BufferWriter)

type packError = {context: string, error: Exn.t}
type t =
  | Writing(PacketFactory.BufferWriter.t)
  | Error(packError)

let packSingle = (self: t, value: float, context: string): t => {
  switch self {
  | Writing(writer) =>
    try {
      let writer = writer->packSingle(value)
      Writing(writer)
    } catch {
    | Exn.Error(obj) => Error({context, error: obj})
    }
  | Error(_error) => self
  }
}

let packInt32 = (self: t, value: int, context: string): t => {
  switch self {
  | Writing(writer) =>
    try {
      let writer = writer->packInt32(value)
      Writing(writer)
    } catch {
    | Exn.Error(obj) => Error({context, error: obj})
    }
  | Error(_error) => self
  }
}

let packByte = (self: t, value: int, context: string): t => {
  switch self {
  | Writing(writer) =>
    try {
      let writer = writer->packByte(value)
      Writing(writer)
    } catch {
    | Exn.Error(obj) => Error({context, error: obj})
    }
  | Error(_error) => self
  }
}

let packInt16 = (self: t, value: int, context: string): t => {
  switch self {
  | Writing(writer) =>
    try {
      let writer = writer->packInt16(value)
      Writing(writer)
    } catch {
    | Exn.Error(obj) => Error({context, error: obj})
    }
  | Error(_error) => self
  }
}

let packUInt64 = (self: t, value: NodeJs.BigInt.t, context: string): t => {
  switch self {
  | Writing(writer) =>
    try {
      let writer = writer->packUInt64(value)
      Writing(writer)
    } catch {
    | Exn.Error(obj) => Error({context, error: obj})
    }
  | Error(_error) => self
  }
}

let packString = (self: t, value: string, context: string): t => {
  switch self {
  | Writing(writer) =>
    try {
      let writer = writer->packString(value)
      Writing(writer)
    } catch {
    | Exn.Error(obj) => Error({context, error: obj})
    }
  | Error(_error) => self
  }
}

let packSByte = (self: t, value: int, context: string): t => {
  switch self {
  | Writing(writer) =>
    try {
      let writer = writer->packSByte(value)
      Writing(writer)
    } catch {
    | Exn.Error(obj) => Error({context, error: obj})
    }
  | Error(_error) => self
  }
}

let packBytes = (self: t, value: array<int>, context: string): t => {
  switch self {
  | Writing(writer) =>
    try {
      let writer = writer->packBytes(value)
      Writing(writer)
    } catch {
    | Exn.Error(obj) => Error({context, error: obj})
    }
  | Error(_error) => self
  }
}

let packColor = (self: t, value: PacketFactory.Color.t, context: string): t => {
  switch self {
  | Writing(writer) =>
    try {
      let writer = writer->packColor(value)
      Writing(writer)
    } catch {
    | Exn.Error(obj) => Error({context, error: obj})
    }
  | Error(_error) => self
  }
}

let packBuffer = (self: t, value: NodeJs.Buffer.t, context: string): t => {
  switch self {
  | Writing(writer) =>
    try {
      let writer = writer->packBuffer(value)
      Writing(writer)
    } catch {
    | Exn.Error(obj) => Error({context, error: obj})
    }
  | Error(_error) => self
  }
}

let data = (self: t): result<NodeJs.Buffer.t, packError> => {
  switch self {
  | Writing(writer) => Ok(writer->data)
  | Error(error) => Error(error)
  }
}

let make = buffer => Writing(PacketFactory.BufferWriter.make(buffer))
