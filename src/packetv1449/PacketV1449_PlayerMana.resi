@genType
type t = {
  playerId: int,
  mana: int,
  maxMana: int,
}
@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
