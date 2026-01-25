@genType
type context =
  | ReviveFromDeath
  | SpawningIntoWorld
  | RecallFromItem

@genType
type t = {
  playerId: int,
  x: int,
  y: int,
  timeRemaining: int,
  numberOfDeathsPve: int,
  numberOfDeathsPvp: int,
  context: context,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
