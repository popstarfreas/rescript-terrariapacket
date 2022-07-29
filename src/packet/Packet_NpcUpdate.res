type ai = (option<float>, option<float>, option<float>, option<float>)
type life =
  | Max
  | Byte(int)
  | Int16(int)
  | Int32(int)

type t = {
  npcSlotId: int,
  npcTypeId: int,
  x: float,
  y: float,
  vx: float,
  vy: float,
  target: int,
  directionX: bool,
  directionY: bool,
  ai: ai,
  spriteDirection: bool,
  life: life,
  releaseOwner: option<int>,
  playerCountScale: option<int>,
  strengthMultiplier: option<float>,
  spawnedFromStatue: bool,
}

module Decode = {
  let {readInt32, readInt16, readSingle, readUInt16, readByte} = module(PacketFactory.PacketReader)

  type npcFlags1 = {
    directionX: bool,
    directionY: bool,
    ai0: bool,
    ai1: bool,
    ai2: bool,
    ai3: bool,
    spriteDirection: bool,
    lifeMax: bool,
  }

  let readNpcFlags1 = reader => {
    let flags = reader->readByte->BitFlags.fromByte
    {
      directionX: flags->BitFlags.flag1,
      directionY: flags->BitFlags.flag2,
      ai0: flags->BitFlags.flag3,
      ai1: flags->BitFlags.flag4,
      ai2: flags->BitFlags.flag5,
      ai3: flags->BitFlags.flag6,
      spriteDirection: flags->BitFlags.flag7,
      lifeMax: flags->BitFlags.flag8,
    }
  }

  type npcFlags2 = {
    statsScaled: bool,
    spawnedFromStatue: bool,
    strengthMultiplier: bool,
  }

  let readNpcFlags2 = reader => {
    let flags = reader->readByte->BitFlags.fromByte
    {
      statsScaled: flags->BitFlags.flag1,
      spawnedFromStatue: flags->BitFlags.flag2,
      strengthMultiplier: flags->BitFlags.flag3,
    }
  }

  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let npcSlotId = reader->readInt16
    let x = reader->readSingle
    let y = reader->readSingle
    let vx = reader->readSingle
    let vy = reader->readSingle
    let target = reader->readUInt16
    let npcFlags1 = reader->readNpcFlags1
    let npcFlags2 = reader->readNpcFlags2
    let ai = (
      npcFlags1.ai0 ? Some(reader->readSingle) : None,
      npcFlags1.ai1 ? Some(reader->readSingle) : None,
      npcFlags1.ai2 ? Some(reader->readSingle) : None,
      npcFlags1.ai3 ? Some(reader->readSingle) : None,
    )
    let npcTypeId = reader->readInt16
    let playerCountScale = if npcFlags2.statsScaled {
      Some(reader->readByte)
    } else {
      None
    }
    let strengthMultiplier = if npcFlags2.strengthMultiplier {
      Some(reader->readSingle)
    } else {
      None
    }
    let life = if npcFlags1.lifeMax {
      Some(Max)
    } else {
      let lifeBytes = reader->readByte
      switch lifeBytes {
      | 0 => None
      | 1 => Some(Byte(reader->readByte))
      | 2 => Some(Int16(reader->readInt16))
      | 4 => Some(Int32(reader->readInt32))
      | _ => None
      }
    }

    let releaseOwner = try {
      Some(reader->readByte)
    } catch {
    | _ => None
    }

    switch life {
    | Some(life) =>
      Some({
        npcSlotId: npcSlotId,
        npcTypeId: npcTypeId,
        x: x,
        y: y,
        vx: vx,
        vy: vy,
        target: target,
        directionX: npcFlags1.directionX,
        directionY: npcFlags1.directionY,
        ai: ai,
        spriteDirection: npcFlags1.spriteDirection,
        life: life,
        releaseOwner: releaseOwner,
        playerCountScale: playerCountScale,
        strengthMultiplier: strengthMultiplier,
        spawnedFromStatue: npcFlags2.spawnedFromStatue,
      })
    | None => None
    }
  }
}

module Encode = {
  let {packInt32, packInt16, packSingle, packUInt16, packByte, setType, data} = module(
    PacketFactory.ManagedPacketWriter
  )

  let npcFlags1 = (self: t) => {
    let (ai0, ai1, ai2, ai3) = self.ai
    BitFlags.fromFlags(
      ~flag1=self.directionX,
      ~flag2=self.directionY,
      ~flag3=Belt.Option.isSome(ai0),
      ~flag4=Belt.Option.isSome(ai1),
      ~flag5=Belt.Option.isSome(ai2),
      ~flag6=Belt.Option.isSome(ai3),
      ~flag7=self.spriteDirection,
      ~flag8=self.life == Max,
    )->BitFlags.toByte
  }

  let npcFlags2 = (self: t) => {
    BitFlags.fromFlags(
      ~flag1=Belt.Option.isSome(self.playerCountScale),
      ~flag2=self.spawnedFromStatue,
      ~flag3=Belt.Option.isSome(self.strengthMultiplier),
      ~flag4=false,
      ~flag5=false,
      ~flag6=false,
      ~flag7=false,
      ~flag8=false,
    )->BitFlags.toByte
  }

  let packAi = (writer, (ai0, ai1, ai2, ai3): ai) => {
    switch ai0 {
    | Some(ai0) => writer->packSingle(ai0)->ignore
    | None => ()
    }
    switch ai1 {
    | Some(ai1) => writer->packSingle(ai1)->ignore
    | None => ()
    }
    switch ai2 {
    | Some(ai2) => writer->packSingle(ai2)->ignore
    | None => ()
    }
    switch ai3 {
    | Some(ai3) => writer->packSingle(ai3)->ignore
    | None => ()
    }

    writer
  }

  let packPlayerCountScale = (writer, playerCountScale) => {
    switch playerCountScale {
    | Some(playerCountScale) => writer->packByte(playerCountScale)
    | None => writer
    }
  }

  let packStrengthMultiplier = (writer, strengthMultiplier) => {
    switch strengthMultiplier {
    | Some(strengthMultiplier) => writer->packSingle(strengthMultiplier)
    | None => writer
    }
  }

  let packLife = (writer, life) => {
    switch life {
    | Max => writer
    | Byte(life) => writer->packByte(1)->packByte(life)
    | Int16(life) => writer->packByte(2)->packInt16(life)
    | Int32(life) => writer->packByte(4)->packInt32(life)
    }
  }

  let packReleaseOwner = (writer, releaseOwner) => {
    switch releaseOwner {
    | Some(releaseOwner) => writer->packByte(releaseOwner)
    | None => writer
    }
  }

  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.NpcUpdate->PacketType.toInt)
    ->packInt16(self.npcSlotId)
    ->packSingle(self.x)
    ->packSingle(self.y)
    ->packSingle(self.vx)
    ->packSingle(self.vy)
    ->packUInt16(self.target)
    ->packByte(self->npcFlags1)
    ->packByte(self->npcFlags2)
    ->packAi(self.ai)
    ->packInt16(self.npcTypeId)
    ->packPlayerCountScale(self.playerCountScale)
    ->packStrengthMultiplier(self.strengthMultiplier)
    ->packLife(self.life)
    ->packReleaseOwner(self.releaseOwner)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
