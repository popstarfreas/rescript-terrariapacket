@genType
type t = {
  playerId: int,
  team: int,
}

module Decode = {
  let {readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(team) = reader->readByte("team")
    Ok({playerId, team})
  }
}

module Encode = {
  let {packByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.PlayerTeam->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packByte(self.team, "team")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
