@genType
type t = {
  x: float,
  y: float,
  color: PacketFactory.Color.t,
  amount: int,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
