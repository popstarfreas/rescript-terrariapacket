@genType
type t = {
  signId: int,
  x: int,
  y: int,
  text: string,
  playerId: int,
  deleteSign: bool,
}

module Decode = {
  let {readInt16, readString, readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(signId) = reader->readInt16("signId")
    let? Ok(x) = reader->readInt16("x")
    let? Ok(y) = reader->readInt16("y")
    let? Ok(text) = reader->readString("text")
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(flags) = reader->readByte("flags")
    Ok({
      signId,
      x,
      y,
      text,
      playerId,
      deleteSign: ((BitFlags.fromByte(flags))->BitFlags.flag1),
    })
  }
}

module Encode = {
  let {packInt16, packString, packByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    let flags = BitFlags.fromFlags(~flag1=self.deleteSign, ~flag2=false, ~flag3=false, ~flag4=false, ~flag5=false, ~flag6=false, ~flag7=false, ~flag8=false)
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.SignNew->PacketType.toInt)
    ->packInt16(self.signId, "signId")
    ->packInt16(self.x, "x")
    ->packInt16(self.y, "y")
    ->packString(self.text, "text")
    ->packByte(self.playerId, "playerId")
    ->packByte(flags->BitFlags.toByte, "flags")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
