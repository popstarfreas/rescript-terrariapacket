@genType
type t = {
  playerId: int,
  x: int,
  y: int,
  respawnTimer: int,
  numberOfDeathsPve: int,
  numberOfDeathsPvp: int,
  context: Packet_PlayerSpawn.context,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>

