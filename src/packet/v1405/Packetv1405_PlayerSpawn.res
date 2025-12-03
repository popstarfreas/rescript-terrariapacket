type context = Packet_PlayerSpawn.context

type t = {
  playerId: int,
  x: int,
  y: int,
  timeRemaining: int,
  context: context,
}

module Decode = {
  let {readByte, readInt16, readInt32} = module(ErrorAwarePacketReader)

  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(x) = reader->readInt16("x")
    let? Ok(y) = reader->readInt16("y")
    let? Ok(timeRemaining) = reader->readInt32("timeRemaining")
    let? Ok(rawContext) = reader->readByte("context")
    let? Ok(context) = switch rawContext {
    | 0 => Ok(Packet_PlayerSpawn.ReviveFromDeath)
    | 1 => Ok(SpawningIntoWorld)
    | 2 => Ok(RecallFromItem)
    | _ =>
      Error({
        ErrorAwarePacketReader.context: "context",
        error: JsError.make("Unknown context")->JsError.toJsExn,
      })
    }

    Ok({
      playerId,
      x,
      y,
      timeRemaining,
      context,
    })
  }
}

module Encode = {
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    let {packByte, packInt16, packInt32, setType, data} = module(ErrorAwarePacketWriter)
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.PlayerSpawn->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packInt16(self.x, "x")
    ->packInt16(self.y, "y")
    ->packInt32(self.timeRemaining, "timeRemaining")
    ->packByte(
      switch self.context {
      | ReviveFromDeath => 0
      | SpawningIntoWorld => 1
      | RecallFromItem => 2
      },
      "context",
    )
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer

let toLatest = (self: t): Packet.PlayerSpawn.t => {
  {
    playerId: self.playerId,
    x: self.x,
    y: self.y,
    timeRemaining: self.timeRemaining,
    context: self.context,
    numberOfDeathsPve: 0,
    numberOfDeathsPvp: 0,
  }
}

let fromLatest = (latest: Packet.PlayerSpawn.t): option<t> => {
  Some({
    playerId: latest.playerId,
    x: latest.x,
    y: latest.y,
    timeRemaining: latest.timeRemaining,
    context: latest.context,
  })
}
