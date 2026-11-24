module PlatformId = PacketV1457_PlayerPlatformInfo.PlatformId

type t = {
  playerId: int,
  platformId: PlatformId.t,
  userId: string,
  platformName: string,
  isHost: bool,
}

let parse = (payload): result<t, ErrorAwarePacketReader.readError> => {
  open ErrorAwarePacketReader
  let reader = PacketFactory.PacketReader.make(payload)
  let? Ok(playerId) = reader->readByte("playerId")
  let? Ok(platform) = reader->readByte("platformId")
  switch PlatformId.fromInt(platform) {
  | None =>
    Error({context: "platformId", error: JsError.make("Unknown platform ID")->JsError.toJsExn})
  | Some(platformId) =>
    let? Ok(userId) = reader->readString("userId")
    let? Ok(platformName) = if platformId == Nintendo {
      reader->readString("platformName")
    } else {
      Ok("")
    }
    let? Ok(isHost) = reader->readBool("isHost")
    Ok({playerId, platformId, userId, platformName, isHost})
  }
}

let toBuffer = (self: t) => {
  open ErrorAwarePacketWriter
  let writer =
    make()
    ->setType(PacketType.PlayerPlatformInfo->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packByte(PlatformId.toInt(self.platformId), "platformId")
    ->packString(self.userId, "userId")
  let writer = if self.platformId == Nintendo {
    writer->packString(self.platformName, "platformName")
  } else {
    writer
  }
  writer->packBool(self.isHost, "isHost")->data
}
