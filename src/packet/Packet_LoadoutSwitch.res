@genType
type t = {
  playerId: int,
  loadout: int,
}

module Decode = {
  let {readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(loadout) = reader->readByte("loadout")
    Ok({playerId, loadout})
  }
}

module Encode = {
  module Writer = PacketFactory.ManagedPacketWriter
  let {packByte, packInt32, packSingle, setType, data} = module(Writer)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    Writer.make()
    ->setType(PacketType.LoadoutSwitch->PacketType.toInt)
    ->packByte(self.playerId)
    ->packByte(self.loadout)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
