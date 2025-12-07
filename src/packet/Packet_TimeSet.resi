@genType
type t = {
  dayTime: bool,
  time: int,
  sunModY: int,
  moonModY: int,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>

