@genType
type t = {
  playerId: int,
  targetNpcId: int,
}

module Decode = {
  let {readByte, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(targetNpcId) = reader->readInt16("targetNpcId")
    Ok({playerId, targetNpcId})
  }
}

module Encode = {
  let {packByte, packInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.MinionAttackTargetUpdate->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packInt16(self.targetNpcId, "targetNpcId")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
