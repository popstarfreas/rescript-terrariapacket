type toLatestIfNeeded =
  | PacketStructureIsSame
  | ConvertedToLatest(Packet.t)
  | DiscardAsNotExists

type fromLatestIfNeeded =
  | PacketStructureIsSame
  | ConvertedFromLatest(PacketV1457.t)
  | DiscardAsNotExists

let convertToLatestIfNeeded = (~buffer: NodeJs.Buffer.t, ~fromServer: bool): result<
  toLatestIfNeeded,
  IParser.parseError,
> => {
  if buffer->NodeJs.Buffer.length < 3 {
    Error(IParser.ParseError.InvalidPacketLength(buffer->NodeJs.Buffer.length))
  } else {
    switch buffer->NodeJs.Buffer.unsafeGet(2)->PacketTypeV1457.fromInt {
    | None => Error(IParser.ParseError.InvalidPacketType(buffer->NodeJs.Buffer.unsafeGet(2)))
    | Some(CavernMonsterTypeSync) if !fromServer => Ok(DiscardAsNotExists)
    | Some(WorldInfo) =>
      ParserV1457.parse(~buffer, ~fromServer)->Result.map(packet =>
        switch packet {
        | WorldInfo(value) => {
            // Older WorldInfo packets do not carry dungeon coordinates.
            let base: Packet.WorldInfo.t = Obj.magic(value)
            ConvertedToLatest(Packet.WorldInfo({...base, dungeonX: 0, dungeonY: 0}))
          }
        | _ => PacketStructureIsSame
        }
      )
    | Some(_) => Ok(PacketStructureIsSame)
    }
  }
}

let convertFromLatestIfNeeded = (~buffer: NodeJs.Buffer.t, ~fromServer: bool): result<
  fromLatestIfNeeded,
  IParser.parseError,
> => {
  if buffer->NodeJs.Buffer.length < 3 {
    Error(IParser.ParseError.InvalidPacketLength(buffer->NodeJs.Buffer.length))
  } else {
    switch buffer->NodeJs.Buffer.unsafeGet(2)->PacketType.fromInt {
    | None => Error(IParser.ParseError.InvalidPacketType(buffer->NodeJs.Buffer.unsafeGet(2)))
    | Some(WorldInfo) =>
      Parser.parse(~buffer, ~fromServer)->Result.map(packet =>
        switch packet {
        | WorldInfo(value) => ConvertedFromLatest(PacketV1457.WorldInfo(Obj.magic(value)))
        | _ => PacketStructureIsSame
        }
      )
    | Some(_) => Ok(PacketStructureIsSame)
    }
  }
}
