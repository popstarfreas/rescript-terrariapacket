@genType
type t = {maxMoonLordCountdown: int, moonLordCountdown: int}

module Decode = {
  let {readInt32} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    Some({
      maxMoonLordCountdown: reader->readInt32,
      moonLordCountdown: reader->readInt32,
    })
  }
}

module Encode = {
  let {packInt32, setType, data} = module(PacketFactory.ManagedPacketWriter)
  type writer = PacketFactory.ManagedPacketWriter.t

  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.MoonLordCountdown->PacketType.toInt)
    ->packInt32(self.maxMoonLordCountdown)
    ->packInt32(self.moonLordCountdown)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
