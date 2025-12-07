@genType
type dodge =
  | Ninja
  | Shadow
  | BrainOfConfusion

@genType
type t = {
  playerId: int,
  dodge: dodge,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>

