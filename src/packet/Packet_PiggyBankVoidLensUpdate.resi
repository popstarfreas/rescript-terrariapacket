module TrackedProjectileReference: {
  @genType
  type t = {
    expectedIdentity: int,
    expectedType: int,
  }
}

@genType
type t = {
  playerId: int,
  piggyBankProj: option<TrackedProjectileReference.t>,
  voidLensChest: option<TrackedProjectileReference.t>,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
