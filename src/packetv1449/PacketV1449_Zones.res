@genType
type t = {
  playerId: int,
  zone1: int,
  zone2: int,
  zone3: int,
  zone4: int,
  zone5: int,
}

module Decode = {
  let {readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(zone1) = reader->readByte("zone1")
    let? Ok(zone2) = reader->readByte("zone2")
    let? Ok(zone3) = reader->readByte("zone3")
    let? Ok(zone4) = reader->readByte("zone4")
    let? Ok(zone5) = reader->readByte("zone5")
    Ok({playerId, zone1, zone2, zone3, zone4, zone5})
  }
}

module Encode = {
  let {packByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.Zones->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packByte(self.zone1, "zone1")
    ->packByte(self.zone2, "zone2")
    ->packByte(self.zone3, "zone3")
    ->packByte(self.zone4, "zone4")
    ->packByte(self.zone5, "zone5")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
