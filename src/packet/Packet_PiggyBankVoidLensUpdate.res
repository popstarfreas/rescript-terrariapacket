module TrackedProjectileReference = {
  @genType
  type t = {
    expectedIdentity: int,
    expectedType: int,
  }
  let {readInt16} = module(PacketFactory.PacketReader)
  let tryReading = (reader: PacketFactory.PacketReader.t) => {
    let n = reader->readInt16
    if n == -1 {
      let expectedIdentity = reader->readInt16
      let expectedType = reader->readInt16
      Some({expectedIdentity, expectedType})
    } else {
      None
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
  let {readByte, readSingle, readInt32} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let playerId = reader->readByte
    let piggyBankProj = TrackedProjectileReference.tryReading(reader)
    let voidLensChest = TrackedProjectileReference.tryReading(reader)

    Some({
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
