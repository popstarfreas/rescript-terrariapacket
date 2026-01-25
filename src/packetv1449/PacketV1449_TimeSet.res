@genType
type t = {
  dayTime: bool,
  time: int,
  sunModY: int,
  moonModY: int,
}

module Decode = {
  let {readByte, readInt32, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(dayTimeRaw) = reader->readByte("dayTime")
    let? Ok(time) = reader->readInt32("time")
    let? Ok(sunModY) = reader->readInt16("sunModY")
    let? Ok(moonModY) = reader->readInt16("moonModY")
    Ok({
      dayTime: dayTimeRaw == 1,
      time,
      sunModY,
      moonModY,
    })
  }
}

module Encode = {
  let {packByte, packInt32, packInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.TimeSet->PacketType.toInt)
    ->packByte(self.dayTime ? 1 : 0, "dayTime")
    ->packInt32(self.time, "time")
    ->packInt16(self.sunModY, "sunModY")
    ->packInt16(self.moonModY, "moonModY")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
