@genType
type t = {
  startX: int,
  startY: int,
  endX: int,
  endY: int,
}

module Decode = {
  let {readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(startX) = reader->readInt16("startX")
    let? Ok(startY) = reader->readInt16("startY")
    let? Ok(endX) = reader->readInt16("endX")
    let? Ok(endY) = reader->readInt16("endY")
    Ok({startX, startY, endX, endY})
  }
}

module Encode = {
  let {packInt16, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.TileSectionFrame->PacketType.toInt)
    ->packInt16(self.startX)
    ->packInt16(self.startY)
    ->packInt16(self.endX)
    ->packInt16(self.endY)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
