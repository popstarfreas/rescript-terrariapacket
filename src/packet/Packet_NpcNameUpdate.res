@genType
type t = {
  npcId: int,
  name: string,
  townNpcVariationIndex: int,
}

module Decode = {
  let {readInt16, readString, readInt32} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(npcId) = reader->readInt16("npcId")
    let? Ok(name) = reader->readString("name")
    let? Ok(townNpcVariationIndex) = reader->readInt32("townNpcVariationIndex")
    Ok({npcId, name, townNpcVariationIndex})
  }
}

module Encode = {
  let {packInt16, packString, packInt32, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.NpcNameUpdate->PacketType.toInt)
    ->packInt16(self.npcId, "npcId")
    ->packString(self.name, "name")
    ->packInt32(self.townNpcVariationIndex, "townNpcVariationIndex")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
