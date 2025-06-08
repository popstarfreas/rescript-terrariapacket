@genType
type untypedT
@genType
type packError = {context: string, error: Exn.t}
@genType
type t
@genType
let packSingle: (t, float, string) => t
@genType
let packInt32: (t, int, string) => t
@genType
let packByte: (t, int, string) => t
@genType
let packInt16: (t, int, string) => t
@genType
let packUInt64: (t, NodeJs.BigInt.t, string) => t
@genType
let packString: (t, string, string) => t
@genType
let packSByte: (t, int, string) => t
@genType
let packBytes: (t, array<int>, string) => t
@genType
let setType: (untypedT, int) => t
@genType
let data: t => result<NodeJs.Buffer.t, packError>
@genType
let make: unit => untypedT
