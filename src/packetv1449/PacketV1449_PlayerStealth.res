@genType
type t = {
  playerId: int,
  stealth: float,
}

module Decode = {
  let {readByte, readSingle} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(stealth) = reader->readSingle("stealth")
    Ok({playerId, stealth})
  }
}

module Encode = {
  let {packByte, packSingle, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.PlayerStealth->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packSingle(self.stealth, "stealth")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
