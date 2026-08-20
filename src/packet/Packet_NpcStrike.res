@genType
type t = {
  npcSlotId: int,
  generation: int,
  damage: int,
  knockback: float,
  direction: int,
  critical: bool,
}

let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
  let reader = PacketFactory.PacketReader.make(payload)
  let? Ok(npcSlotId) = reader->ErrorAwarePacketReader.readByte("npcSlotId")
  let? Ok(generation) = reader->ErrorAwarePacketReader.readByte("generation")
  let? Ok(damage) = reader->ErrorAwarePacketReader.readInt16("damage")
  let? Ok(knockback) = reader->ErrorAwarePacketReader.readSingle("knockback")
  let? Ok(direction) = reader->ErrorAwarePacketReader.readByte("direction")
  let? Ok(critical) = reader->ErrorAwarePacketReader.readBool("critical")
  Ok({npcSlotId, generation, damage, knockback, direction: direction - 1, critical})
}

let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
  ErrorAwarePacketWriter.make()
  ->ErrorAwarePacketWriter.setType(PacketType.NpcStrike->PacketType.toInt)
  ->ErrorAwarePacketWriter.packByte(self.npcSlotId, "npcSlotId")
  ->ErrorAwarePacketWriter.packByte(self.generation, "generation")
  ->ErrorAwarePacketWriter.packInt16(self.damage, "damage")
  ->ErrorAwarePacketWriter.packSingle(self.knockback, "knockback")
  ->ErrorAwarePacketWriter.packByte(self.direction + 1, "direction")
  ->ErrorAwarePacketWriter.packBool(self.critical, "critical")
  ->ErrorAwarePacketWriter.data
