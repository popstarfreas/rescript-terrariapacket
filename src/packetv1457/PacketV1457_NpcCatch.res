@genType
type t = {npcId: int}

let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
  let reader = PacketFactory.PacketReader.make(payload)
  let? Ok(npcId) = reader->ErrorAwarePacketReader.readInt16("npcId")
  Ok({npcId: npcId})
}

let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
  ErrorAwarePacketWriter.make()
  ->ErrorAwarePacketWriter.setType(PacketTypeV1457.NpcCatch->PacketTypeV1457.toInt)
  ->ErrorAwarePacketWriter.packInt16(self.npcId, "npcId")
  ->ErrorAwarePacketWriter.data
