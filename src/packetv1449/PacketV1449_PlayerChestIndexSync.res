@genType
type t = {
  playerId: int,
  chestId: int,
}

module Decode = {
  let {readByte, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(chestId) = reader->readInt16("chestId")
    Ok({playerId, chestId})
  }
}

module Encode = {
  let {packByte, packInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.PlayerChestIndexSync->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packInt16(self.chestId, "chestId")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
