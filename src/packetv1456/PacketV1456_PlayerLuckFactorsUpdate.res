@genType
type t = {
  playerId: int,
  ladyBugLuckTimeLeft: int,
  torchLuck: float,
  luckPotion: int,
  hasGardenGnomeNearby: bool,
  brokenMirrorBadLuck: bool,
  equipmentBasedLuckBonus: float,
  coinLuck: float,
  kiteLuckLevel: int,
}

module Decode = {
  let {readInt32, readByte, readSingle} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(player) = reader->readByte("playerId")
    let? Ok(ladyBugLuckTimeLeft) = reader->readInt32("ladyBugLuckTimeLeft")
    let? Ok(torchLuck) = reader->readSingle("torchLuck")
    let? Ok(luckPotion) = reader->readByte("luckPotion")
    let? Ok(hasGardenGnomeNearbyRaw) = reader->readByte("hasGardenGnomeNearby")
    let hasGardenGnomeNearby = hasGardenGnomeNearbyRaw == 1
    let? Ok(brokenMirrorBadLuckRaw) = reader->readByte("brokenMirrorBadLuck")
    let brokenMirrorBadLuck = brokenMirrorBadLuckRaw == 1
    let? Ok(equipmentBasedLuckBonus) = reader->readSingle("equipmentBasedLuckBonus")
    let? Ok(coinLuck) = reader->readSingle("coinLuck")
    let? Ok(kiteLuckLevel) = reader->readByte("kiteLuckLevel")

    Ok({
      playerId: player,
      ladyBugLuckTimeLeft,
      torchLuck,
      luckPotion,
      hasGardenGnomeNearby,
      brokenMirrorBadLuck,
      equipmentBasedLuckBonus,
      coinLuck,
      kiteLuckLevel,
    })
  }
}

module Encode = {
  let {packByte, packInt32, packSingle, setType, data} = module(ErrorAwarePacketWriter)

  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketTypeV1456.PlayerLuckFactorsUpdate->PacketTypeV1456.toInt)
    ->packByte(self.playerId, "playerId")
    ->packInt32(self.ladyBugLuckTimeLeft, "ladyBugLuckTimeLeft")
    ->packSingle(self.torchLuck, "torchLuck")
    ->packByte(self.luckPotion, "luckPotion")
    ->packByte(self.hasGardenGnomeNearby ? 1 : 0, "hasGardenGnomeNearby")
    ->packByte(self.brokenMirrorBadLuck ? 1 : 0, "brokenMirrorBadLuck")
    ->packSingle(self.equipmentBasedLuckBonus, "equipmentBasedLuckBonus")
    ->packSingle(self.coinLuck, "coinLuck")
    ->packByte(self.kiteLuckLevel, "kiteLuckLevel")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
