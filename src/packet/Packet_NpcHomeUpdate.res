@genType
type t = {
  npcId: int,
  homeTileX: int,
  homeTileY: int,
  state: int,
}

module Decode = {
  let {readInt16, readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(npcId) = reader->readInt16("npcId")
    let? Ok(homeTileX) = reader->readInt16("homeTileX")
    let? Ok(homeTileY) = reader->readInt16("homeTileY")
    let? Ok(state) = reader->readByte("state")
    Ok({npcId, homeTileX, homeTileY, state})
  }
}

module Encode = {
  let {packInt16, packByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.NpcHomeUpdate->PacketType.toInt)
    ->packInt16(self.npcId, "npcId")
    ->packInt16(self.homeTileX, "homeTileX")
    ->packInt16(self.homeTileY, "homeTileY")
    ->packByte(self.state, "state")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
