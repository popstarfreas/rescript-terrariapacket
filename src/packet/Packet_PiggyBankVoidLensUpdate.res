module TrackedProjectileReference = {
  @genType
  type t = {
    expectedIdentity: int,
    expectedType: int,
  }
  let {readInt16} = module(ErrorAwarePacketReader)
  let tryReading = (
    reader: PacketFactory.PacketReader.t,
    context: string,
  ): result<option<t>, ErrorAwarePacketReader.readError> => {
    let? Ok(marker) = reader->readInt16(context)
    if marker == -1 {
      let? Ok(expectedIdentity) = reader->readInt16(context ++ "_expectedIdentity")
      let? Ok(expectedType) = reader->readInt16(context ++ "_expectedType")
      Ok(Some({expectedIdentity, expectedType}))
    } else {
      Ok(None)
    }
  }

  let {packInt16} = module(PacketFactory.ManagedPacketWriter)
  let pack = (writer: PacketFactory.ManagedPacketWriter.t, self: option<t>) => {
    switch self {
    | None => writer->packInt16(-1)
    | Some({expectedIdentity, expectedType}) =>
      writer
      ->packInt16(expectedIdentity)
      ->packInt16(expectedType)
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
  module Writer = PacketFactory.ManagedPacketWriter
  let {packByte, packInt32, packSingle, setType, data} = module(Writer)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    Writer.make()
    ->setType(PacketType.PiggyBankVoidLensUpdate->PacketType.toInt)
    ->packByte(self.playerId)
    ->TrackedProjectileReference.pack(self.piggyBankProj)
    ->TrackedProjectileReference.pack(self.voidLensChest)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
