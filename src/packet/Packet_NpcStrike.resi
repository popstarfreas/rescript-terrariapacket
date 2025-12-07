@genType
type t = {
  npcId: int,
  damage: int,
  knockback: float,
  direction: int,
  critical: bool,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>

