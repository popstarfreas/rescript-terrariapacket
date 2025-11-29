@genType
type t = {
  npcSlotId: int,
  extraValue: int,
  x: float,
  y: float,
}

module Decode = {
  let {readInt16, readInt32, readSingle} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(npcSlotId) = reader->readInt16("npcSlotId")
    let? Ok(extraValue) = reader->readInt32("extraValue")
    let? Ok(x) = reader->readSingle("x")
    let? Ok(y) = reader->readSingle("y")
    Ok({
      npcSlotId,
      extraValue,
      x,
      y,
    })
  }
}

module Encode = {
  let {packInt16, packInt32, packSingle, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.ExtraValueSync->PacketType.toInt)
    ->packInt16(self.npcSlotId)
    ->packInt32(self.extraValue)
    ->packSingle(self.x)
    ->packSingle(self.y)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
