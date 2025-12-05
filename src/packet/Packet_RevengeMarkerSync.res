@genType
type t = {
  uniqueId: int,
  position: Point.t<float>,
  npcNetId: int,
  npcHpPercent: float,
  npcTypeAgainstDiscouragement: int,
  npcAiStyleAgainstDiscouragement: int,
  coinValue: int,
  baseValue: float,
  spawnedFromStatue: bool,
}

module Decode = {
  let {readInt32, readSingle, readBool} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(uniqueId) = reader->readInt32("uniqueId")
    let? Ok(posX) = reader->readSingle("posX")
    let? Ok(posY) = reader->readSingle("posY")
    let? Ok(npcNetId) = reader->readInt32("npcNetId")
    let? Ok(npcHpPercent) = reader->readSingle("npcHpPercent")
    let? Ok(npcTypeAgainstDiscouragement) = reader->readInt32("npcTypeAgainstDiscouragement")
    let? Ok(npcAiStyleAgainstDiscouragement) = reader->readInt32("npcAiStyleAgainstDiscouragement")
    let? Ok(coinValue) = reader->readInt32("coinValue")
    let? Ok(baseValue) = reader->readSingle("baseValue")
    let? Ok(spawnedFromStatue) = reader->readBool("spawnedFromStatue")
    Ok({
      uniqueId,
      position: {x: posX, y: posY},
      npcNetId,
      npcHpPercent,
      npcTypeAgainstDiscouragement,
      npcAiStyleAgainstDiscouragement,
      coinValue,
      baseValue,
      spawnedFromStatue,
    })
  }
}

module Encode = {
  let {packInt32, packSingle, packBool, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.RevengeMarkerSync->PacketType.toInt)
    ->packInt32(self.uniqueId, "uniqueId")
    ->packSingle(self.position.x, "posX")
    ->packSingle(self.position.y, "posY")
    ->packInt32(self.npcNetId, "npcNetId")
    ->packSingle(self.npcHpPercent, "npcHpPercent")
    ->packInt32(self.npcTypeAgainstDiscouragement, "npcTypeAgainstDiscouragement")
    ->packInt32(self.npcAiStyleAgainstDiscouragement, "npcAiStyleAgainstDiscouragement")
    ->packInt32(self.coinValue, "coinValue")
    ->packSingle(self.baseValue, "baseValue")
    ->packBool(self.spawnedFromStatue, "spawnedFromStatue")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
