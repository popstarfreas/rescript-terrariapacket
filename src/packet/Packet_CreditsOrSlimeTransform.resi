module EventType: {
  @genType
  type t =
    | CreditsTimeRemainingSet
    | CopperSlimeTransform
    | ElderSlimeTransform
}

@genType
type t = {
  eventType: EventType.t,
  value: int,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>

