@genType
type t = unit

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
