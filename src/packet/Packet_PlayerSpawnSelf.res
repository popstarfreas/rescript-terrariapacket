@genType
type t = {
  playerId: int,
  x: int,
  y: int,
  respawnTimer: int,
  numberOfDeathsPve: int,
  numberOfDeathsPvp: int,
  context: Packet_PlayerSpawn.context,
}

module Decode = {
  let {readByte, readInt16, readInt32} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(x) = reader->readInt16("x")
    let? Ok(y) = reader->readInt16("y")
    let? Ok(respawnTimer) = reader->readInt32("respawnTimer")
    let? Ok(numberOfDeathsPve) = reader->readInt16("numberOfDeathsPve")
    let? Ok(numberOfDeathsPvp) = reader->readInt16("numberOfDeathsPvp")
    let? Ok(rawContext) = reader->readByte("context")
    let context = switch rawContext {
    | 0 => Some(Packet_PlayerSpawn.ReviveFromDeath)
    | 1 => Some(Packet_PlayerSpawn.SpawningIntoWorld)
    | 2 => Some(Packet_PlayerSpawn.RecallFromItem)
    | _ => None
    }
    switch context {
    | Some(context) =>
      Ok({
        playerId,
        x,
        y,
        respawnTimer,
        numberOfDeathsPve,
        numberOfDeathsPvp,
        context,
      })
    | None =>
      Error({
        ErrorAwarePacketReader.context: "Packet_PlayerSpawnSelf.parse.context",
        error: JsError.make("Unknown context")->JsError.toJsExn,
      })
    }
  }
}

module Encode = {
  let {packByte, packInt16, packInt32, setType, data} = module(ErrorAwarePacketWriter)
  let contextToByte = c =>
    switch c {
    | Packet_PlayerSpawn.ReviveFromDeath => 0
    | Packet_PlayerSpawn.SpawningIntoWorld => 1
    | Packet_PlayerSpawn.RecallFromItem => 2
    }
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.PlayerSpawnSelf->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packInt16(self.x, "x")
    ->packInt16(self.y, "y")
    ->packInt32(self.respawnTimer, "respawnTimer")
    ->packInt16(self.numberOfDeathsPve, "numberOfDeathsPve")
    ->packInt16(self.numberOfDeathsPvp, "numberOfDeathsPvp")
    ->packByte(self.context->contextToByte, "context")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
