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

let makeError = (_message: string): JsExn.t => %raw("new Error(_message)")

module Decode = {
  let {readInt32, readInt16, readSingle, readUInt16, readByte, readSByte} = module(
    ErrorAwarePacketReader
  )

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

  let readNpcFlags1 = (reader, fieldName) => {
    let? Ok(flagsRaw) = reader->readByte(fieldName)
    let flags = flagsRaw->BitFlags.fromByte
    Ok({
      directionX: flags->BitFlags.flag1,
      directionY: flags->BitFlags.flag2,
      ai0: flags->BitFlags.flag3,
      ai1: flags->BitFlags.flag4,
      ai2: flags->BitFlags.flag5,
      ai3: flags->BitFlags.flag6,
      spriteDirection: flags->BitFlags.flag7,
      lifeMax: flags->BitFlags.flag8,
    })
  }

  type npcFlags2 = {
    statsScaled: bool,
    spawnedFromStatue: bool,
    strengthMultiplier: bool,
  }

  let readNpcFlags2 = (reader, fieldName) => {
    let? Ok(flagsRaw) = reader->readByte(fieldName)
    let flags = flagsRaw->BitFlags.fromByte
    Ok({
      statsScaled: flags->BitFlags.flag1,
      spawnedFromStatue: flags->BitFlags.flag2,
      strengthMultiplier: flags->BitFlags.flag3,
    })
  }

  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(npcSlotId) = reader->readInt16("npcSlotId")
    let? Ok(x) = reader->readSingle("x")
    let? Ok(y) = reader->readSingle("y")
    let? Ok(vx) = reader->readSingle("vx")
    let? Ok(vy) = reader->readSingle("vy")
    let? Ok(target) = reader->readUInt16("target")
    let? Ok(npcFlags1) = reader->readNpcFlags1("npcFlags1")
    let? Ok(npcFlags2) = reader->readNpcFlags2("npcFlags2")
    let? Ok(ai) = Result.all4((
      npcFlags1.ai0
        ? {
            let? Ok(ai0) = reader->readSingle("ai0")
            Ok(Some(ai0))
          }
        : Ok(None),
      npcFlags1.ai1
        ? {
            let? Ok(ai1) = reader->readSingle("ai1")
            Ok(Some(ai1))
          }
        : Ok(None),
      npcFlags1.ai2
        ? {
            let? Ok(ai2) = reader->readSingle("ai2")
            Ok(Some(ai2))
          }
        : Ok(None),
      npcFlags1.ai3
        ? {
            let? Ok(ai3) = reader->readSingle("ai3")
            Ok(Some(ai3))
          }
        : Ok(None),
    ))
    let? Ok(npcTypeId) = reader->readInt16("npcTypeId")
    let? Ok(playerCountScale) = if npcFlags2.statsScaled {
      let? Ok(playerCountScale) = reader->readByte("playerCountScale")
      Ok(Some(playerCountScale))
    } else {
      Ok(None)
    }
    let? Ok(strengthMultiplier) = if npcFlags2.strengthMultiplier {
      let? Ok(strengthMultiplier) = reader->readSingle("strengthMultiplier")
      Ok(Some(strengthMultiplier))
    } else {
      Ok(None)
    }
    let? Ok(life) = if npcFlags1.lifeMax {
      Ok(Max)
    } else {
      let? Ok(lifeBytes) = reader->readByte("lifeBytes")
      switch lifeBytes {
      | 1 =>
        let? Ok(life_sbyte) = reader->readSByte("life_sbyte")
        Ok(Byte(life_sbyte))
      | 2 =>
        let? Ok(life_int16) = reader->readInt16("life_int16")
        Ok(Int16(life_int16))
      | 4 =>
        let? Ok(life_int32) = reader->readInt32("life_int32")
        Ok(Int32(life_int32))
      | _ =>
        Error({
          context: "Packet_NpcUpdate.parse",
          error: makeError("Invalid life byte count"),
        })
      }
    }

    let releaseOwner = switch reader->readByte("releaseOwner") {
    | Ok(releaseOwner) => Some(releaseOwner)
    | Error(_) => None
    }

    Ok({
      npcSlotId,
      npcTypeId,
      x,
      y,
      vx,
      vy,
      target,
      directionX: npcFlags1.directionX,
      directionY: npcFlags1.directionY,
      ai,
      spriteDirection: npcFlags1.spriteDirection,
      life,
      releaseOwner,
      playerCountScale,
      strengthMultiplier,
      spawnedFromStatue: npcFlags2.spawnedFromStatue,
    })
  }
}

module Encode = {
  let {packInt32, packInt16, packSingle, packUInt16, packByte, packSByte, setType, data} = module(
    ErrorAwarePacketWriter
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
    | Some(v) => writer->packSingle(v, "ai0")->ignore
    | None => ()
    }
    switch ai1 {
    | Some(v) => writer->packSingle(v, "ai1")->ignore
    | None => ()
    }
    switch ai2 {
    | Some(v) => writer->packSingle(v, "ai2")->ignore
    | None => ()
    }
    switch ai3 {
    | Some(v) => writer->packSingle(v, "ai3")->ignore
    | None => ()
    }

    writer
  }

  let packPlayerCountScale = (writer, playerCountScale) => {
    switch playerCountScale {
    | Some(v) => writer->packByte(v, "playerCountScale")
    | None => writer
    }
  }

  let packStrengthMultiplier = (writer, strengthMultiplier) => {
    switch strengthMultiplier {
    | Some(v) => writer->packSingle(v, "strengthMultiplier")
    | None => writer
    }
  }

  let packLife = (writer, life) => {
    switch life {
    | Max => writer // No byte packed if Max, handled by npcFlags1
    | Byte(v) => writer->packByte(1, "lifeBytes")->packSByte(v, "life_sbyte")
    | Int16(v) => writer->packByte(2, "lifeBytes")->packInt16(v, "life_int16")
    | Int32(v) => writer->packByte(4, "lifeBytes")->packInt32(v, "life_int32")
    }
  }

  let packReleaseOwner = (writer, releaseOwner) => {
    switch releaseOwner {
    | Some(v) => writer->packByte(v, "releaseOwner")
    | None => writer
    }
  }

  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.NpcUpdate->PacketType.toInt)
    ->packInt16(self.npcSlotId, "npcSlotId")
    ->packSingle(self.x, "x")
    ->packSingle(self.y, "y")
    ->packSingle(self.vx, "vx")
    ->packSingle(self.vy, "vy")
    ->packUInt16(self.target, "target")
    ->packByte(self->npcFlags1, "npcFlags1")
    ->packByte(self->npcFlags2, "npcFlags2")
    ->packAi(self.ai)
    ->packInt16(self.npcTypeId, "npcTypeId")
    ->packPlayerCountScale(self.playerCountScale)
    ->packStrengthMultiplier(self.strengthMultiplier)
    ->packLife(self.life)
    ->packReleaseOwner(self.releaseOwner)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
