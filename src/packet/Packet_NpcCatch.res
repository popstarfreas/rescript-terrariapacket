@genType
type t = {
  npcId: int,
  playerId: int,
}

module Decode = {
  let {readByte, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(npcId) = reader->readInt16("npcId")
    let? Ok(playerId) = reader->readByte("playerId")
    Ok({
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
