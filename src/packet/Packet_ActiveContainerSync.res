@genType
type t = {
  chestId: int,
  x: int,
  y: int,
  nameLength: int,
  name: string,
}

module Decode = {
  let {readByte, readInt16, readString} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(chestId) = reader->readInt16("chestId")
    let? Ok(x) = reader->readInt16("x")
    let? Ok(y) = reader->readInt16("y")
    let? Ok(nameLength) = reader->readByte("nameLength")
    let? Ok(name) = if nameLength > 0 && nameLength <= 20 {
      reader->readString("name")
    } else {
      Ok("")
    }

    Ok({
      chestId,
      x,
      y,
      nameLength,
      name,
    })
  }
}

module Encode = {
  let {packByte, packInt16, packString, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    let writer =
      PacketFactory.ManagedPacketWriter.make()
      ->setType(PacketType.ActiveContainerSync->PacketType.toInt)
      ->packInt16(self.chestId)
      ->packInt16(self.x)
      ->packInt16(self.y)
      ->packByte(self.nameLength)
    if self.nameLength > 0 && self.nameLength <= 20 {
      writer->packString(self.name)->ignore
    }
    writer->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
