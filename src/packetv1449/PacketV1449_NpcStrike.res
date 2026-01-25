@genType
type t = {
  npcId: int,
  damage: int,
  knockback: float,
  direction: int,
  critical: bool,
}

module Decode = {
  let {readInt16, readSingle, readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(npcId) = reader->readInt16("npcId")
    let? Ok(damage) = reader->readInt16("damage")
    let? Ok(knockback) = reader->readSingle("knockback")
    let? Ok(directionRaw) = reader->readByte("direction")
    let? Ok(criticalRaw) = reader->readByte("critical")
    Ok({
      npcId,
      damage,
      knockback,
      direction: directionRaw - 1,
      critical: criticalRaw == 1,
    })
  }
}

module Encode = {
  let {packInt16, packSingle, packByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.NpcStrike->PacketType.toInt)
    ->packInt16(self.npcId, "npcId")
    ->packInt16(self.damage, "damage")
    ->packSingle(self.knockback, "knockback")
    ->packByte(self.direction + 1, "direction")
    ->packByte(self.critical ? 1 : 0, "critical")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
