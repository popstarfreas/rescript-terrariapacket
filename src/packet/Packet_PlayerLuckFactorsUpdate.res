@genType
type t = {
  playerId: int,
  ladyBugLuckTimeLeft: int,
  torchLuck: float,
  luckPotion: int,
  hasGardenGnomeNearby: bool,
  equipmentBasedLuckBonus: float,
  coinLuck: float,
}

module Decode = {
  let {readInt16, readInt32, readByte, readSingle} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(player) = reader->readByte("playerId")
    let? Ok(ladyBugLuckTimeLeft) = reader->readInt32("ladyBugLuckTimeLeft")
    let? Ok(torchLuck) = reader->readSingle("torchLuck")
    let? Ok(luckPotion) = reader->readByte("luckPotion")
    let? Ok(hasGardenGnomeNearbyRaw) = reader->readByte("hasGardenGnomeNearby")
    let hasGardenGnomeNearby = hasGardenGnomeNearbyRaw == 1
    let? Ok(equipmentBasedLuckBonus) = reader->readSingle("equipmentBasedLuckBonus")
    let? Ok(coinLuck) = reader->readSingle("coinLuck")

    Ok({
      playerId: player,
      ladyBugLuckTimeLeft,
      torchLuck,
      luckPotion,
      hasGardenGnomeNearby,
      equipmentBasedLuckBonus,
      coinLuck,
    })
  }
}

module Encode = {
  let {packByte, packInt32, packSingle, setType, data} = module(ErrorAwarePacketWriter)
  type writer = ErrorAwarePacketWriter.t

  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.PlayerLuckFactorsUpdate->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packInt32(self.ladyBugLuckTimeLeft, "ladyBugLuckTimeLeft")
    ->packSingle(self.torchLuck, "torchLuck")
    ->packByte(self.luckPotion, "luckPotion")
    ->packByte(self.hasGardenGnomeNearby ? 1 : 0, "hasGardenGnomeNearby")
    ->packSingle(self.equipmentBasedLuckBonus, "equipmentBasedLuckBonus")
    ->packSingle(self.coinLuck, "coinLuck")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
