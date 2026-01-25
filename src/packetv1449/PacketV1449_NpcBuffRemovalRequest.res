@genType
type t = {
  npcId: int,
  buffType: int,
}

module Decode = {
  let {readInt16, readUInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(npcId) = reader->readInt16("npcId")
    let? Ok(buffType) = reader->readUInt16("buffType")
    Ok({npcId, buffType})
  }
}

module Encode = {
  let {packInt16, packUInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.NpcBuffRemovalRequest->PacketType.toInt)
    ->packInt16(self.npcId, "npcId")
    ->packUInt16(self.buffType, "buffType")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
