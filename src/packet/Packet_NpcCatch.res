@genType
type t = {
  npcId: int,
  playerId: int,
}

module Decode = {
  let {readByte, readInt16} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let npcId = reader->readInt16
    let playerId = reader->readByte
    Some({
      npcId,
      playerId,
    })
  }
}

module Encode = {
  let {packByte, packInt16, setType, data} = module(PacketFactory.ManagedPacketWriter)
  type writer = PacketFactory.ManagedPacketWriter.t
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.NpcCatch->PacketType.toInt)
    ->packInt16(self.npcId)
    ->packByte(self.playerId)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
