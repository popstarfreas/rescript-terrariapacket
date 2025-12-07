@genType
type t = {
  npcId: int,
  buffs: array<int>,
  buffTimes: array<int>,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>

