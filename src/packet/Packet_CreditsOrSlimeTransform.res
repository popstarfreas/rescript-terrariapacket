module Option = Belt.Option

module EventType = {
  @genType
  type t =
    | CreditsTimeRemainingSet
    | CopperSlimeTransform
    | ElderSlimeTransform

  let fromInt = num => {
    switch num {
    | 0 => Some(CreditsTimeRemainingSet)
    | 1 => Some(CopperSlimeTransform)
    | 2 => Some(ElderSlimeTransform)
    | _ => None
    }
  }

  let toInt = eventType => {
    switch eventType {
    | CreditsTimeRemainingSet => 0
    | CopperSlimeTransform => 1
    | ElderSlimeTransform => 2
    }
  }
}

@genType
type t = {
  eventType: EventType.t,
  value: int,
}

module Decode = {
  let {readByte, readInt32} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(eventTypeRaw) = reader->readByte("eventType")
    let? Ok(value) = reader->readInt32("value")

    switch EventType.fromInt(eventTypeRaw) {
    | Some(eventType) => Ok({eventType, value})
    | None =>
      Error({
        context: "Packet_CreditsOrSlimeTransform.parse",
        error: ErrorExt.makeJsError("Unknown event type"),
      })
    }
  }
}

module Encode = {
  module Writer = PacketFactory.ManagedPacketWriter
  let {packByte, packInt32, setType, data} = module(Writer)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    Writer.make()
    ->setType(PacketType.CreditsOrSlimeTransform->PacketType.toInt)
    ->packByte(EventType.toInt(self.eventType))
    ->packInt32(self.value)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
