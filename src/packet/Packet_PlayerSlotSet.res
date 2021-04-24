type t = int
module Decode = {
  let parse = (payload: NodeJs.Buffer.t) => {
    let {readByte} = module(PacketFactory.PacketReader)
    let reader = PacketFactory.PacketReader.make(payload)
    let playerSlotId = reader->readByte
    Some(playerSlotId)
  }
}

module Encode = {
  let {packByte, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.PlayerSlotSet->PacketType.toInt)
    ->packByte(self)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
