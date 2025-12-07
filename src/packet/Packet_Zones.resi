@genType
type t = {
  playerId: int,
  zone1: int,
  zone2: int,
  zone3: int,
  zone4: int,
  zone5: int,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
