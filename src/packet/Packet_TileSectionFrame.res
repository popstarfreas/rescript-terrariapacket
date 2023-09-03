type t = {
  startX: int,
  startY: int,
  endX: int,
  endY: int,
}

module Decode = {
  let {readInt16} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let startX = reader->readInt16
    let startY = reader->readInt16
    let endX = reader->readInt16
    let endY = reader->readInt16
    Some({startX, startY, endX, endY})
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
