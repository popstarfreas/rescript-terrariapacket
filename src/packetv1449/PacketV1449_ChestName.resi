@genType
type t = {
  chestId: int,
  x: int,
  y: int,
  name: string,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
