@genType
type t = {
  chestId: int,
  x: int,
  y: int,
  name: string,
}

module Decode = {
  let {readInt16, readString} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(chestId) = reader->readInt16("chestId")
    let? Ok(x) = reader->readInt16("x")
    let? Ok(y) = reader->readInt16("y")
    let? Ok(name) = reader->readString("name")
    Ok({chestId, x, y, name})
  }
}

module Encode = {
  let {packInt16, packString, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.ChestName->PacketType.toInt)
    ->packInt16(self.chestId, "chestId")
    ->packInt16(self.x, "x")
    ->packInt16(self.y, "y")
    ->packString(self.name, "name")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
