type packError = {context: string, error: JsExn.t}
type t
let packSingle: (t, float, string) => t
let packInt32: (t, int, string) => t
let packByte: (t, int, string) => t
let packInt16: (t, int, string) => t
let packUInt64: (t, NodeJs.BigInt.t, string) => t
let packString: (t, string, string) => t
let packSByte: (t, int, string) => t
let packBytes: (t, array<int>, string) => t
let packColor: (t, PacketFactory.Color.t, string) => t
let packBuffer: (t, NodeJs.Buffer.t, string) => t
let data: t => result<NodeJs.Buffer.t, packError>
let make: NodeJs.Buffer.t => t
