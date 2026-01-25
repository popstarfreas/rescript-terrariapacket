type t = {
  ...PacketV1449_ItemDropUpdate.t,
  timeLeftInWhichTheItemCannotBeTakenByEnemies: int,
}

let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
