@genType
type t = {version: string}
@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => NodeJs.Buffer.t
