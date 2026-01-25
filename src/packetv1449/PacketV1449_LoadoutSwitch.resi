@genType
type t = {
  playerId: int,
  loadout: int,
  hideVisibleAccessory: Array16.t<bool>,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
