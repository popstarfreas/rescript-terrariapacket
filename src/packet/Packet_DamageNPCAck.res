type t = unit

let parse = (_payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => Ok()

let toBuffer = (_self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
  ErrorAwarePacketWriter.make()
  ->ErrorAwarePacketWriter.setType(PacketType.DamageNPCAck->PacketType.toInt)
  ->ErrorAwarePacketWriter.data
