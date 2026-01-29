module TrackedProjectileReference = {
  @genType
  type t = {
    ownerIndex: int,
    expectedIdentity: int,
    expectedType: int,
  }
  let {readInt16} = module(ErrorAwarePacketReader)
  let tryReading = (reader: PacketFactory.PacketReader.t, context: string): result<
    option<t>,
    ErrorAwarePacketReader.readError,
  > => {
    let? Ok(ownerIndex) = reader->readInt16(context ++ "_ownerIndex")
    // If ownerIndex == -1, nothing is being tracked (no more data follows)
    // If ownerIndex != -1, read identity and type
    if ownerIndex == -1 {
      Ok(None)
    } else {
      let? Ok(expectedIdentity) = reader->readInt16(context ++ "_expectedIdentity")
      let? Ok(expectedType) = reader->readInt16(context ++ "_expectedType")
      Ok(Some({ownerIndex, expectedIdentity, expectedType}))
    }
  }

  let {packInt16} = module(ErrorAwarePacketWriter)
  let pack = (writer: ErrorAwarePacketWriter.t, self: option<t>, context: string) => {
    switch self {
    | None => writer->packInt16(-1, context ++ "_ownerIndex")
    | Some({ownerIndex, expectedIdentity, expectedType}) =>
      writer
      ->packInt16(ownerIndex, context ++ "_ownerIndex")
      ->packInt16(expectedIdentity, context ++ "_expectedIdentity")
      ->packInt16(expectedType, context ++ "_expectedType")
    }
  }
}

@genType
type t = {
  playerId: int,
  piggyBankProj: option<TrackedProjectileReference.t>,
  voidLensChest: option<TrackedProjectileReference.t>,
}

module Decode = {
  let {readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(piggyBankProj) = TrackedProjectileReference.tryReading(reader, "piggyBankProj")
    let? Ok(voidLensChest) = TrackedProjectileReference.tryReading(reader, "voidLensChest")

    Ok({
      playerId,
      piggyBankProj,
      voidLensChest,
    })
  }
}

module Encode = {
  module Writer = ErrorAwarePacketWriter
  let {packByte, setType, data} = module(Writer)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    Writer.make()
    ->setType(PacketType.PiggyBankVoidLensUpdate->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->TrackedProjectileReference.pack(self.piggyBankProj, "piggyBankProj")
    ->TrackedProjectileReference.pack(self.voidLensChest, "voidLensChest")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
