type t = {
  playerId: int,
  mana: int,
  maxMana: int,
}

module Decode = {
  let {readByte, readInt16} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let playerId = reader->readByte
    let mana = reader->readInt16
    let maxMana = reader->readInt16
    Some({
      playerId,
      mana,
      maxMana,
    })
  }
}

module Encode = {
  let {packByte, packInt16, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.PlayerMana->PacketType.toInt)
    ->packByte(self.playerId)
    ->packInt16(self.mana)
    ->packInt16(self.maxMana)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
