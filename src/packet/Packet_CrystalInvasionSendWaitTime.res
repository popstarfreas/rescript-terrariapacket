@genType
type t = {timeLeftBetweenWaves: int}

module Decode = {
  let {readInt32} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(timeLeftBetweenWaves) = reader->readInt32("timeLeftBetweenWaves")
    Ok({timeLeftBetweenWaves: timeLeftBetweenWaves})
  }
}

module Encode = {
  let {packInt32, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t) =>
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.CrystalInvasionSendWaitTime->PacketType.toInt)
    ->packInt32(self.timeLeftBetweenWaves, "timeLeftBetweenWaves")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
