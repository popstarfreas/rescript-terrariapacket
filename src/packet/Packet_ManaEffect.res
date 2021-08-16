type t = {
  playerId: int,
  manaAmount: int,
}

module Decode = {
  let {readInt16, readByte} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let playerId = reader->readByte
    let manaAmount = reader->readInt16
    Some({
      playerId,
      manaAmount,
    })
  }
}

module Encode = {
  let {packByte, packInt16, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.ManaEffect->PacketType.toInt)
    ->packByte(self.playerId)
    ->packInt16(self.manaAmount)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
