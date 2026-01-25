@genType
type t = {
  uniqueId: int,
  position: Point.t<float>,
  npcNetId: int,
  npcHpPercent: float,
  npcTypeAgainstDiscouragement: int,
  npcAiStyleAgainstDiscouragement: int,
  coinValue: int,
  baseValue: float,
  spawnedFromStatue: bool,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
