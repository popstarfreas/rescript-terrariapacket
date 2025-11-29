type t = {
  playerId: int,
  buff: int,
  time: int,
}

module Decode = {
  let {readUInt16, readInt32, readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(buff) = reader->readUInt16("buff")
    let? Ok(time) = reader->readInt32("time")
    Ok({
      playerId,
      buff,
      time,
    })
  }
}

module Encode = {
  let {packByte, packUInt16, packInt32, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.PlayerBuffAdd->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packUInt16(self.buff, "buff")
    ->packInt32(self.time, "time")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
