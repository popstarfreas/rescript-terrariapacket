@genType
type t = {eventId: int}

module Decode = {
  let {readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(eventId) = reader->readInt16("eventId")
    Ok({eventId: eventId})
  }
}

module Encode = {
  let {packInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.EventNotification->PacketType.toInt)
    ->packInt16(self.eventId, "eventId")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
