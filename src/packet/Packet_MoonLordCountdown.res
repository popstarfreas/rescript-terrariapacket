@genType
type t = {maxMoonLordCountdown: int, moonLordCountdown: int}

module Decode = {
  let {readInt32} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(maxMoonLordCountdown) = reader->readInt32("maxMoonLordCountdown")
    let? Ok(moonLordCountdown) = reader->readInt32("moonLordCountdown")
    Ok({maxMoonLordCountdown, moonLordCountdown})
  }
}

module Encode = {
  let {packInt32, setType, data} = module(ErrorAwarePacketWriter)
  type writer = ErrorAwarePacketWriter.t

  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.MoonLordCountdown->PacketType.toInt)
    ->packInt32(self.maxMoonLordCountdown, "maxMoonLordCountdown")
    ->packInt32(self.moonLordCountdown, "moonLordCountdown")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
