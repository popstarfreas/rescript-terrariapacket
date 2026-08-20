@genType
type t = {
  itemDropId: int,
  forceAssignToServer: bool,
}

let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
  let reader = PacketFactory.PacketReader.make(payload)
  let? Ok(itemDropId) = reader->ErrorAwarePacketReader.readInt16("itemDropId")
  let? Ok(forceAssignToServer) = reader->ErrorAwarePacketReader.readBool("forceAssignToServer")
  Ok({itemDropId, forceAssignToServer})
}

let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
  ErrorAwarePacketWriter.make()
  ->ErrorAwarePacketWriter.setType(PacketType.ItemOwnerRemove->PacketType.toInt)
  ->ErrorAwarePacketWriter.packInt16(self.itemDropId, "itemDropId")
  ->ErrorAwarePacketWriter.packBool(self.forceAssignToServer, "forceAssignToServer")
  ->ErrorAwarePacketWriter.data
