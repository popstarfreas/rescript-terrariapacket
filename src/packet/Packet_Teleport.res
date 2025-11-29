@genType
type teleportType =
  | Player
  | Npc
  | PlayerToPlayer

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

let makeError = (_message: string): JsExn.t => %raw("new Error(_message)")

module Decode = {
  let {readByte, readInt16, readSingle, readInt32} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(flagsRaw) = reader->readByte("flags")
    let flags = BitFlags.fromByte(flagsRaw)
    let getPositionFromTarget = flags->BitFlags.flag3
    let teleportType = switch (flags->BitFlags.flag1, flags->BitFlags.flag2) {
    | (false, false) => Some(Player)
    | (true, false) => Some(Npc)
    | (false, true) => Some(PlayerToPlayer)
    | (true, true) => None
    }
    let? Ok(targetId) = reader->readInt16("targetId")
    let? Ok(x) = reader->readSingle("x")
    let? Ok(y) = reader->readSingle("y")
    let? Ok(style) = reader->readByte("style")
    let? Ok(extraInfo) = switch flags->BitFlags.flag4 {
    | true => reader->readInt32("extraInfo")->Result.map(v => Some(v))
    | false => Ok(None)
    }

    switch teleportType {
    | Some(teleportType) =>
      Ok({
        teleportType,
        getPositionFromTarget,
        targetId,
        x,
        y,
        style,
        extraInfo,
      })
    | None =>
      Error({
        context: "Packet_Teleport.parse",
        error: makeError("Invalid teleport type flags"),
      })
    }
  }
}

module Encode = {
  let {packByte, packInt16, packSingle, packInt32, setType, data} = module(
    PacketFactory.ManagedPacketWriter
  )
  let getFlags = (self: t): int => {
    BitFlags.fromFlags(
      ~flag1=self.teleportType == Npc,
      ~flag2=self.teleportType == PlayerToPlayer,
      ~flag3=self.getPositionFromTarget,
      ~flag4=self.extraInfo->Belt.Option.isSome,
      ~flag5=false,
      ~flag6=false,
      ~flag7=false,
      ~flag8=false,
    )->BitFlags.toByte
  }
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    let writer =
      PacketFactory.ManagedPacketWriter.make()
      ->setType(PacketType.Teleport->PacketType.toInt)
      ->packByte(self->getFlags)
      ->packInt16(self.targetId)
      ->packSingle(self.x)
      ->packSingle(self.y)
      ->packByte(self.style)

    switch self.extraInfo {
    | Some(extraInfo) => writer->packInt32(extraInfo)->ignore
    | None => ()
    }

    writer->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
