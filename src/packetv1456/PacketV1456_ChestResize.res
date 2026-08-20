type t = {
  chestId: int,
  newSize: int,
}

module Decode = {
  let {readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(chestId) = reader->readInt16("chestId")
    let? Ok(newSize) = reader->readInt16("newSize")
    Ok({chestId, newSize})
  }
}

module Encode = {
  let {packInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketTypeV1456.ChestResize->PacketTypeV1456.toInt)
    ->packInt16(self.chestId, "chestId")
    ->packInt16(self.newSize, "newSize")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
