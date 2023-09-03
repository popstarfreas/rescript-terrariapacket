type teleportType =
  | Player
  | Npc
  | PlayerToPlayer

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
  let {readByte, readInt16, readSingle, readInt32} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let flags = BitFlags.fromByte(reader->readByte)
    let getPositionFromTarget = flags->BitFlags.flag3
    let teleportType = switch (flags->BitFlags.flag1, flags->BitFlags.flag2) {
    | (false, false) => Some(Player)
    | (true, false) => Some(Npc)
    | (false, true) => Some(PlayerToPlayer)
    | (true, true) => None
    }
    let targetId = reader->readInt16
    let x = reader->readSingle
    let y = reader->readSingle
    let style = reader->readByte
    let extraInfo = switch flags->BitFlags.flag4 {
    | true => Some(reader->readInt32)
    | false => None
    }

    switch teleportType {
    | Some(teleportType) =>
      Some({
        teleportType,
        getPositionFromTarget,
        targetId,
        x,
        y,
        style,
        extraInfo,
      })
    | None => None
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
