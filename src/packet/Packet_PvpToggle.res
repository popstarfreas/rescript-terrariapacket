type t = {
  playerId: int,
  pvpEnabled: bool,
}

module Decode = {
  let {readInt16, readByte} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let playerId = reader->readByte
    let pvpEnabled = reader->readByte == 1
    Some({
      playerId,
      pvpEnabled,
    })
  }
}

module Encode = {
  let {packInt16, packByte, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.ItemOwner->PacketType.toInt)
    ->packByte(self.playerId)
    ->packByte(self.pvpEnabled ? 1 : 0)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
