@genType
type t = {
  npcId: int,
  debuffId: int,
}

module Decode = {
  let {readByte, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(npcId) = reader->readByte("npcId")
    let? Ok(debuffId) = reader->readInt16("debuffId")
    Ok({npcId, debuffId})
  }
}

module Encode = {
  let {packByte, packInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketTypeV1456.NpcHurtByDebuff->PacketTypeV1456.toInt)
    ->packByte(self.npcId, "npcId")
    ->packInt16(self.debuffId, "debuffId")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
