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
  let {readInt16, readInt32, readByte, readSingle} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let player = reader->readByte
    let ladyBugLuckTimeLeft = reader->readInt32
    let torchLuck = reader->readSingle
    let luckPotion = reader->readByte
    let hasGardenGnomeNearby = reader->readByte == 1
    let equipmentBasedLuckBonus = reader->readSingle
    let coinLuck = reader->readSingle

    Some({
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
