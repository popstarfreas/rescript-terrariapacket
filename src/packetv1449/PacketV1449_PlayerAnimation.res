@genType
type t = {
  playerId: int,
  itemRotation: float,
  itemAnimation: int,
}

module Decode = {
  let {readByte, readSingle, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(itemRotation) = reader->readSingle("itemRotation")
    let? Ok(itemAnimation) = reader->readInt16("itemAnimation")
    Ok({playerId, itemRotation, itemAnimation})
  }
}

module Encode = {
  let {packByte, packSingle, packInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.PlayerAnimation->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packSingle(self.itemRotation, "itemRotation")
    ->packInt16(self.itemAnimation, "itemAnimation")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
