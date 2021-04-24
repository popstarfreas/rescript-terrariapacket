type t = {
  playerId: int,
  active: bool,
}

module Decode = {
  let {readByte} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let playerId = reader->readByte
    let active = reader->readByte !== 0
    Some({
      playerId: playerId,
      active: active,
    })
  }
}

module Encode = {
  let {packByte, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.PlayerActive->PacketType.toInt)
    ->packByte(self.playerId)
    ->packByte(self.active ? 1 : 0)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
