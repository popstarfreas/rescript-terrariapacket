@genType
type dodge =
  | Ninja
  | Shadow
  | BrainOfConfusion

@genType
type t = {
  playerId: int,
  dodge: dodge,
}

let dodgeFromByte = b =>
  switch b {
  | 1 => Some(Ninja)
  | 2 => Some(Shadow)
  | 4 => Some(BrainOfConfusion)
  | _ => None
  }

let dodgeToByte = d =>
  switch d {
  | Ninja => 1
  | Shadow => 2
  | BrainOfConfusion => 4
  }

module Decode = {
  let {readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(dodgeRaw) = reader->readByte("dodge")
    let dodge = switch dodgeRaw->dodgeFromByte {
    | Some(dodge) => Ok(dodge)
    | None =>
      Error({
        ErrorAwarePacketReader.context: "Packet_PlayerDodge.parse.dodge",
        error: JsError.make("Unknown dodge type")->JsError.toJsExn,
      })
    }
    switch dodge {
    | Ok(dodge) => Ok({playerId, dodge})
    | Error(err) => Error(err)
    }
  }
}

module Encode = {
  let {packByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.PlayerDodge->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packByte(self.dodge->dodgeToByte, "dodge")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
