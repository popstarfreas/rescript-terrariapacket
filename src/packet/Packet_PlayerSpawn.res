type context =
  | ReviveFromDeath
  | SpawningIntoWorld
  | RecallFromItem

type t = {
  playerId: int,
  x: int,
  y: int,
  timeRemaining: int,
  context: context,
}

module Decode = {
  let {readByte, readInt16, readInt32} = module(PacketFactory.PacketReader)

  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let playerId = reader->readByte
    let x = reader->readInt16
    let y = reader->readInt16
    let timeRemaining = reader->readInt32
    let context = switch reader->readByte {
    | 0 => Some(ReviveFromDeath)
    | 1 => Some(SpawningIntoWorld)
    | 2 => Some(RecallFromItem)
    | _ => None
    }

    switch context {
    | Some(context) =>
      Some({
        playerId: playerId,
        x: x,
        y: y,
        timeRemaining: timeRemaining,
        context: context,
      })
    | None => None
    }
  }
}

module Encode = {
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    let {packByte, packInt16, packInt32, setType, data} = module(PacketFactory.ManagedPacketWriter)
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.PlayerSpawn->PacketType.toInt)
    ->packByte(self.playerId)
    ->packInt16(self.x)
    ->packInt16(self.y)
    ->packInt32(self.timeRemaining)
    ->packByte(
      switch self.context {
      | ReviveFromDeath => 0
      | SpawningIntoWorld => 1
      | RecallFromItem => 2
      },
    )
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
