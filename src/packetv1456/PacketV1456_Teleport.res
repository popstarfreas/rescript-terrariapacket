@genType
type teleportType =
  | Player
  | Npc
  | PlayerToPlayer
  | TeleportAck

@genType
type t = {
  teleportType: teleportType,
  getPositionFromTarget: bool,
  targetId: int,
  x: float,
  y: float,
  style: int,
  extraInfo: option<int>,
}

module Decode = {
  let {readByte, readInt16, readSingle, readInt32} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(flagsRaw) = reader->readByte("flags")
    let flags = BitFlags.fromByte(flagsRaw)
    let getPositionFromTarget = flags->BitFlags.flag3
    let teleportType = switch (flags->BitFlags.flag1, flags->BitFlags.flag2) {
    | (false, false) => Player
    | (true, false) => Npc
    | (false, true) => PlayerToPlayer
    | (true, true) => TeleportAck
    }
    let? Ok(targetId) = reader->readInt16("targetId")
    let? Ok(x) = reader->readSingle("x")
    let? Ok(y) = reader->readSingle("y")
    let? Ok(style) = reader->readByte("style")
    let? Ok(extraInfo) = switch flags->BitFlags.flag4 {
    | true => reader->readInt32("extraInfo")->Result.map(v => Some(v))
    | false => Ok(None)
    }

    Ok({
      teleportType,
      getPositionFromTarget,
      targetId,
      x,
      y,
      style,
      extraInfo,
    })
  }
}

module Encode = {
  let {packByte, packInt16, packSingle, packInt32, setType, data} = module(ErrorAwarePacketWriter)
  let getFlags = (self: t): int => {
    BitFlags.fromFlags(
      ~flag1=self.teleportType == Npc || self.teleportType == TeleportAck,
      ~flag2=self.teleportType == PlayerToPlayer || self.teleportType == TeleportAck,
      ~flag3=self.getPositionFromTarget,
      ~flag4=self.extraInfo->Option.isSome,
      ~flag5=false,
      ~flag6=false,
      ~flag7=false,
      ~flag8=false,
    )->BitFlags.toByte
  }
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    let writer =
      ErrorAwarePacketWriter.make()
      ->setType(PacketTypeV1456.Teleport->PacketTypeV1456.toInt)
      ->packByte(self->getFlags, "flags")
      ->packInt16(self.targetId, "targetId")
      ->packSingle(self.x, "x")
      ->packSingle(self.y, "y")
      ->packByte(self.style, "style")

    let writer = switch self.extraInfo {
    | Some(extraInfo) => writer->packInt32(extraInfo, "extraInfo")
    | None => writer
    }

    writer->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
