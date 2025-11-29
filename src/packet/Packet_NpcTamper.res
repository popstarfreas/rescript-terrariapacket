module Option = Belt.Option

module Immunity = {
  @genType
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

@genType
type t = {
  npcId: int,
  immunityTime: option<int>,
  immunityFromPlayerId: option<Immunity.t>,
}

module Decode = {
  let {readUInt16, readByte, readInt32, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(npcId) = reader->readUInt16("npcId")
    let? Ok(setNpcImmunity) = reader->readByte("setNpcImmunity")
    let? Ok((immunityTime, immunityFromPlayerId)) = if setNpcImmunity == 1 {
      let? Ok(immunityTime) = reader->readInt32("immunityTime")
      let? Ok(immunityFromPlayerId) = reader->readInt16("immunityFromPlayerId")
      Ok((Some(immunityTime), Some(Immunity.fromInt(immunityFromPlayerId))))
    } else {
      Ok((None, None))
    }
    Ok({
      npcId,
      immunityTime,
      immunityFromPlayerId,
    })
  }
}

module Encode = {
  type writer = PacketFactory.ManagedPacketWriter.t
  let {packUInt16, packByte, packInt32, packInt16, setType, data} = module(
    PacketFactory.ManagedPacketWriter
  )
  let packImmunity = (
    writer: writer,
    immunityTime: option<int>,
    immunityOrigin: option<Immunity.t>,
  ): writer => {
    switch (immunityTime, immunityOrigin) {
    | (Some(time), Some(origin)) =>
      writer->packByte(1)->packInt32(time)->packInt16(origin->Immunity.toInt)
    | (_, _) => writer->packByte(0)
    }
  }
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.NpcTamper->PacketType.toInt)
    ->packUInt16(self.npcId)
    ->packImmunity(self.immunityTime, self.immunityFromPlayerId)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
