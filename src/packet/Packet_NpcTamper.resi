module Immunity: {
  @genType
  type t =
    | PlayerId(int)
    | All
}

@genType
type t = {
  npcId: int,
  immunityTime: option<int>,
  immunityFromPlayerId: option<Immunity.t>,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
