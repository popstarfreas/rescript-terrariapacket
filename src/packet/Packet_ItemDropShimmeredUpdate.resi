@genType
type t = {
  ...Packet_ItemDropUpdate.t,
  shimmered: bool,
  shimmeredTime: float,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
