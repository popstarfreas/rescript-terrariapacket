@genType
type t = {
  npcId: int,
  killCount: int,
}

module Decode = {
  let {readInt16, readInt32} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(npcId) = reader->readInt16("npcId")
    let? Ok(killCount) = reader->readInt32("killCount")
    Ok({npcId, killCount})
  }
}

module Encode = {
  let {packInt16, packInt32, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.NpcKillCount->PacketType.toInt)
    ->packInt16(self.npcId, "npcId")
    ->packInt32(self.killCount, "killCount")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
