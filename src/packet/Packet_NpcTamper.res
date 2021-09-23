module Option = Belt.Option

module Immunity = {
  type t =
    | PlayerId(int)
    | All

  let fromInt = playerId =>
    switch playerId {
    | -1 => All
    | x => PlayerId(x)
    }

  let toInt = self =>
    switch self {
    | PlayerId(x) => x
    | All => -1
    }
}

type t = {
  npcId: int,
  immunityTime: option<int>,
  immunityFromPlayerId: Immunity.t,
}

module Decode = {
  let {readUInt16, readByte, readInt32, readInt16} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let npcId = reader->readUInt16
    let setNpcImmunity = reader->readByte == 1
    let immunityTime = if setNpcImmunity {
      Some(reader->readInt32)
    } else {
      None
    }
    let immunityFromPlayerId = Immunity.fromInt(reader->readInt16)
    Some({
      npcId: npcId,
      immunityTime: immunityTime,
      immunityFromPlayerId: immunityFromPlayerId,
    })
  }
}

module Encode = {
  type writer = PacketFactory.ManagedPacketWriter.t
  let {packUInt16, packByte, packInt32, packInt16, setType, data} = module(
    PacketFactory.ManagedPacketWriter
  )
  let packImmunityTime = (writer: writer, immunityTime: option<int>): writer => {
    switch immunityTime {
    | Some(time) => writer->packByte(1)->packInt32(time)
    | None => writer->packByte(0)
    }
  }
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.NpcTamper->PacketType.toInt)
    ->packUInt16(self.npcId)
    ->packImmunityTime(self.immunityTime)
    ->packInt16(self.immunityFromPlayerId->Immunity.toInt)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
