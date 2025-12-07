@genType
type t = {
  playerId: int,
  ladyBugLuckTimeLeft: int,
  torchLuck: float,
  luckPotion: int,
  hasGardenGnomeNearby: bool,
  equipmentBasedLuckBonus: float,
  coinLuck: float,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>

