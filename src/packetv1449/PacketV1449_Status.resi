@genType
type flags = {
  hideStatusTextPercent: bool,
  statusTextHasShadows: bool,
  runCheckBytes: bool,
}

@genType
type t = {
  max: int,
  text: PacketFactory.NetworkText.t,
  flags: flags,
}

let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
