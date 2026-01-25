type t = {
  ...PacketV1449_ItemDropUpdate.t,
  shimmered: bool,
  shimmeredTime: float,
}

let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
