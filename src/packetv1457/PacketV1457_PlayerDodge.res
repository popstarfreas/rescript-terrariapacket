@genType
type dodge =
  | Ninja
  | Shadow
  | BrainOfConfusion
  | MysticSash

@genType
type t = {
  playerId: int,
  dodge: dodge,
}

let dodgeFromByte = value =>
  switch value {
  | 1 => Some(Ninja)
  | 2 => Some(Shadow)
  | 4 => Some(BrainOfConfusion)
  | 5 => Some(MysticSash)
  | _ => None
  }

let dodgeToByte = dodge =>
  switch dodge {
  | Ninja => 1
  | Shadow => 2
  | BrainOfConfusion => 4
  | MysticSash => 5
  }

let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
  let reader = PacketFactory.PacketReader.make(payload)
  let? Ok(playerId) = reader->ErrorAwarePacketReader.readByte("playerId")
  let? Ok(dodgeRaw) = reader->ErrorAwarePacketReader.readByte("dodge")
  switch dodgeFromByte(dodgeRaw) {
  | Some(dodge) => Ok({playerId, dodge})
  | None =>
    Error({
      ErrorAwarePacketReader.context: "PacketV1457_PlayerDodge.parse.dodge",
      error: JsError.make("Unknown dodge type")->JsError.toJsExn,
    })
  }
}

let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
  ErrorAwarePacketWriter.make()
  ->ErrorAwarePacketWriter.setType(PacketTypeV1457.PlayerDodge->PacketTypeV1457.toInt)
  ->ErrorAwarePacketWriter.packByte(self.playerId, "playerId")
  ->ErrorAwarePacketWriter.packByte(self.dodge->dodgeToByte, "dodge")
  ->ErrorAwarePacketWriter.data
