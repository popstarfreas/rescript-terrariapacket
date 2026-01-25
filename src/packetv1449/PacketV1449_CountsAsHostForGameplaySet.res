@genType
type t = {
  playerId: int,
  countsAsHost: bool,
}

module Decode = {
  let {readByte, readBool} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(countsAsHost) = reader->readBool("countsAsHost")
    Ok({playerId, countsAsHost})
  }
}

module Encode = {
  let {packByte, packBool, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t) =>
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.CountsAsHostForGameplaySet->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packBool(self.countsAsHost, "countsAsHost")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
