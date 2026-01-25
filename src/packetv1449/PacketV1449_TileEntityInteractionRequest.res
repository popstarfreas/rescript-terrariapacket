@genType
type t = {
  tileEntityId: int,
  playerId: int,
}

module Decode = {
  let {readInt32, readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(tileEntityId) = reader->readInt32("tileEntityId")
    let? Ok(playerId) = reader->readByte("playerId")
    Ok({tileEntityId, playerId})
  }
}

module Encode = {
  let {packInt32, packByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.TileEntityInteractionRequest->PacketType.toInt)
    ->packInt32(self.tileEntityId, "tileEntityId")
    ->packByte(self.playerId, "playerId")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
