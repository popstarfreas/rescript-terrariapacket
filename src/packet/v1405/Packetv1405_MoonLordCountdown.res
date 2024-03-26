type t = {moonLordCountdown: int}

module Decode = {
  let {readInt32} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    Some({
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
    ->packInt32(self.moonLordCountdown)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer

let toLatest = (self: t): Packet.MoonLordCountdown.t => {
  {
    moonLordCountdown: self.moonLordCountdown,
    maxMoonLordCountdown: 0,
  }
}

let fromLatest = (latest: Packet.MoonLordCountdown.t): option<t> => {
  Some({
    moonLordCountdown: latest.moonLordCountdown,
  })
}
