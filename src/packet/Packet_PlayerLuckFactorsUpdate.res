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
  let {packByte, packInt16, packInt32, packSingle, setType, data} = module(
    PacketFactory.ManagedPacketWriter
  )
  type writer = PacketFactory.ManagedPacketWriter.t

  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.PlayerLuckFactorsUpdate->PacketType.toInt)
    ->packByte(self.playerId)
    ->packInt32(self.ladyBugLuckTimeLeft)
    ->packSingle(self.torchLuck)
    ->packByte(self.luckPotion)
    ->packByte(self.hasGardenGnomeNearby ? 1 : 0)
    ->packSingle(self.equipmentBasedLuckBonus)
    ->packSingle(self.coinLuck)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
