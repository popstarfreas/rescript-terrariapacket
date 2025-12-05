@genType
type t = {
  startX: int,
  startY: int,
  endX: int,
  endY: int,
  toolMode: int,
}

module Decode = {
  let {readInt16, readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(startX) = reader->readInt16("startX")
    let? Ok(startY) = reader->readInt16("startY")
    let? Ok(endX) = reader->readInt16("endX")
    let? Ok(endY) = reader->readInt16("endY")
    let? Ok(toolMode) = reader->readByte("toolMode")
    Ok({startX, startY, endX, endY, toolMode})
  }
}

module Encode = {
  let {packInt16, packByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.MassWireOperation->PacketType.toInt)
    ->packInt16(self.startX, "startX")
    ->packInt16(self.startY, "startY")
    ->packInt16(self.endX, "endX")
    ->packInt16(self.endY, "endY")
    ->packByte(self.toolMode, "toolMode")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
