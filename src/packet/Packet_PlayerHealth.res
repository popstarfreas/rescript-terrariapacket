type t = {
  playerId: int,
  health: int,
  maxHealth: int,
}

module Decode = {
  let {readByte, readInt16} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let playerId = reader->readByte
    let health = reader->readInt16
    let maxHealth = reader->readInt16
    Some({
      playerId,
      health,
      maxHealth,
    })
  }
}

module Encode = {
  let {packByte, packInt16, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.PlayerHealth->PacketType.toInt)
    ->packByte(self.playerId)
    ->packInt16(self.health)
    ->packInt16(self.maxHealth)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
