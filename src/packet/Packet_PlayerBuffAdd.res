type t = {
  playerId: int,
  buff: int,
  time: int,
}

module Decode = {
  let {readUInt16, readInt32, readByte} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let playerId = reader->readByte
    let buff = reader->readUInt16
    let time = reader->readInt32
    Some({
      playerId,
      buff,
      time,
    })
  }
}

module Encode = {
  let {packByte, packUInt16, packInt32, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.PlayerBuffAdd->PacketType.toInt)
    ->packByte(self.playerId)
    ->packUInt16(self.buff)
    ->packInt32(self.time)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
