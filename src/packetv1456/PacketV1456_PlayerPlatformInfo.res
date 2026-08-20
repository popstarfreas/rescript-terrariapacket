module PlatformId = {
  type t =
    | None
    | Stadia
    | XBO
    | PSN
    | Editor
    | Nintendo
    | Steam
    | GameCenter

  let fromInt = n =>
    switch n {
    | 0 => Some(None)
    | 1 => Some(Stadia)
    | 2 => Some(XBO)
    | 3 => Some(PSN)
    | 4 => Some(Editor)
    | 5 => Some(Nintendo)
    | 6 => Some(Steam)
    | 7 => Some(GameCenter)
    | _ => None
    }

  let toInt = self =>
    switch self {
    | None => 0
    | Stadia => 1
    | XBO => 2
    | PSN => 3
    | Editor => 4
    | Nintendo => 5
    | Steam => 6
    | GameCenter => 7
    }
}

type t = {
  playerId: int,
  platformId: PlatformId.t,
}

module Decode = {
  let {readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(platformId) = reader->readByte("platformId")

    switch PlatformId.fromInt(platformId) {
    | Some(platformId) => Ok({playerId, platformId})
    | None =>
      Error({
        context: "PacketV1456_PlayerPlatformInfo.parse",
        error: JsError.make("Unknown platformId " + Int.toString(platformId))->JsError.toJsExn,
      })
    }
  }
}

module Encode = {
  let {packByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketTypeV1456.PlayerPlatformInfo->PacketTypeV1456.toInt)
    ->packByte(self.playerId, "playerId")
    ->packByte(self.platformId->PlatformId.toInt, "platformId")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
