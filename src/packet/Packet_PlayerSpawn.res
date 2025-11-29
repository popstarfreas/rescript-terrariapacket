type context =
  | ReviveFromDeath
  | SpawningIntoWorld
  | RecallFromItem

type t = {
  playerId: int,
  x: int,
  y: int,
  timeRemaining: int,
  numberOfDeathsPve: int,
  numberOfDeathsPvp: int,
  context: context,
}

let makeError = (_message: string): JsExn.t => %raw("new Error(_message)")

module Decode = {
  let {readByte, readInt16, readInt32} = module(ErrorAwarePacketReader)

  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(x) = reader->readInt16("x")
    let? Ok(y) = reader->readInt16("y")
    let? Ok(timeRemaining) = reader->readInt32("timeRemaining")
    let? Ok(numberOfDeathsPve) = reader->readInt16("numberOfDeathsPve")
    let? Ok(numberOfDeathsPvp) = reader->readInt16("numberOfDeathsPvp")
    let? Ok(rawContext) = reader->readByte("context")
    let context = switch rawContext {
    | 0 => Some(ReviveFromDeath)
    | 1 => Some(SpawningIntoWorld)
    | 2 => Some(RecallFromItem)
    | _ => None
    }

    switch context {
    | Some(context) =>
      Ok({
        playerId,
        x,
        y,
        timeRemaining,
        numberOfDeathsPve,
        numberOfDeathsPvp,
        context,
      })
    | None =>
      Error({
        ErrorAwarePacketReader.context: "PlayerSpawn.parse.context",
        error: makeError("Unknown context"),
      })
    }
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
    ->packInt16(self.numberOfDeathsPve, "numberOfDeathsPve")
    ->packInt16(self.numberOfDeathsPvp, "numberOfDeathsPvp")
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
