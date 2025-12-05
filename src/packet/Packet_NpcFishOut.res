@genType
type t = {
  x: int,
  y: int,
  npcNetId: int,
}

module Decode = {
  let {readUInt16, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(x) = reader->readUInt16("x")
    let? Ok(y) = reader->readUInt16("y")
    let? Ok(npcNetId) = reader->readInt16("npcNetId")
    Ok({x, y, npcNetId})
  }
}

module Encode = {
  let {packUInt16, packInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.NpcFishOut->PacketType.toInt)
    ->packUInt16(self.x, "x")
    ->packUInt16(self.y, "y")
    ->packInt16(self.npcNetId, "npcNetId")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
