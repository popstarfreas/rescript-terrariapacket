type t = {
  x: int,
  y: int,
}

module Decode = {
  let {readInt32} = module(PacketFactory.PacketReader)

  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let x = reader->readInt32
    let y = reader->readInt32
    Some({x, y})
  }
}

module Encode = {
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    let {packInt32, setType, data} = module(PacketFactory.ManagedPacketWriter)
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.InitialTileSectionsRequest->PacketType.toInt)
    ->packInt32(self.x)
    ->packInt32(self.y)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
