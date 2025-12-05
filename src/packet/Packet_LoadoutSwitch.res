@genType
type t = {
  playerId: int,
  loadout: int,
  hideVisibleAccessory: Array16.t<bool>,
}

module Decode = {
  let {readUInt16, readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(loadout) = reader->readByte("loadout")
    let? Ok(hideVisibleAccessory) = reader->readUInt16("hideVisibleAccessory")
    let flags0 = BitFlags.fromByte(hideVisibleAccessory &&& 0xFF)
    let flags1 = BitFlags.fromByte(hideVisibleAccessory >> 8 &&& 0xFF)
    let hideVisibleAccessory = Array16.fromBitFlagsPair(flags0, flags1)
    Ok({playerId, loadout, hideVisibleAccessory})
  }
}

module Encode = {
  module Writer = PacketFactory.ManagedPacketWriter
  let {packUInt16, packByte, packInt32, packSingle, setType, data} = module(Writer)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    let (flags0, flags1) = Array16.toBitFlagsPair(self.hideVisibleAccessory)
    let hideVisibleAccessory = BitFlags.toByte(flags0) ||| BitFlags.toByte(flags1) << 8
    Writer.make()
    ->setType(PacketType.LoadoutSwitch->PacketType.toInt)
    ->packByte(self.playerId)
    ->packByte(self.loadout)
    ->packUInt16(hideVisibleAccessory)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
