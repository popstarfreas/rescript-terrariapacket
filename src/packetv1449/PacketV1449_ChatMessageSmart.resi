@genType
type t = {
  color: PacketFactory.Color.t,
  message: PacketFactory.NetworkText.t,
  widthLimit: int,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
