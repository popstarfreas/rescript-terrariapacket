/***
 * This module is a wrapper around the PacketFactory.ManagedPacketWriter
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
  setType,
  data,
} = module(PacketFactory.ManagedPacketWriter)

type packError = {context: string, error: Exn.t}
type untypedT = PacketFactory.ManagedPacketWriter.untypedT
type t =
  | Writing(PacketFactory.ManagedPacketWriter.t)
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

let setType = (self: untypedT, value: int): t => {
  Writing(self->setType(value))
}

let data = (self: t): result<NodeJs.Buffer.t, packError> => {
  switch self {
  | Writing(writer) => Ok(writer->data)
  | Error(error) => Error(error)
  }
}

let make = () => PacketFactory.ManagedPacketWriter.make()
