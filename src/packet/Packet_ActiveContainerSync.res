type t = {
  chestId: int,
  x: int,
  y: int,
  nameLength: int,
  name: string,
}

module Decode = {
  let {readByte, readInt16, readString} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let chestId = reader->readInt16
    let x = reader->readInt16
    let y = reader->readInt16
    let nameLength = reader->readByte
    let name = reader->readString

    Some({
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
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.ActiveContainerSync->PacketType.toInt)
    ->packInt16(self.chestId)
    ->packInt16(self.x)
    ->packInt16(self.y)
    ->packByte(self.nameLength)
    ->packString(self.name)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
