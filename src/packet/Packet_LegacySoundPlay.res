@genType
type t = {
  position: Point.t<float>,
  soundIndex: int,
  styleOverride: option<int>,
  volumeOverride: option<float>,
  pitchOverride: option<float>,
}

module Decode = {
  let {readUInt16, readByte, readInt32, readSingle} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(posX) = reader->readSingle("x")
    let? Ok(posY) = reader->readSingle("y")
    let? Ok(soundIndex) = reader->readUInt16("soundIndex")
    let? Ok(flagsRaw) = reader->readByte("flags")
    let flags = BitFlags.fromByte(flagsRaw)
    let? Ok(styleOverride) =
      if flags->BitFlags.flag1 {
        reader->readInt32("styleOverride")->Result.map(v => Some(v))
      } else {
        Ok(None)
      }
    let? Ok(volumeOverride) =
      if flags->BitFlags.flag2 {
        reader->readSingle("volumeOverride")->Result.map(v => Some(v))
      } else {
        Ok(None)
      }
    let? Ok(pitchOverride) =
      if flags->BitFlags.flag3 {
        reader->readSingle("pitchOverride")->Result.map(v => Some(v))
      } else {
        Ok(None)
      }
    Ok({
      position: {x: posX, y: posY},
      soundIndex,
      styleOverride,
      volumeOverride,
      pitchOverride,
    })
  }
}

module Encode = {
  let {packUInt16, packByte, packInt32, packSingle, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    let flags = BitFlags.fromFlags(
      ~flag1=self.styleOverride->Option.isSome,
      ~flag2=self.volumeOverride->Option.isSome,
      ~flag3=self.pitchOverride->Option.isSome,
      ~flag4=false,
      ~flag5=false,
      ~flag6=false,
      ~flag7=false,
      ~flag8=false,
    )
    let writer =
      ErrorAwarePacketWriter.make()
      ->setType(PacketType.LegacySoundPlay->PacketType.toInt)
      ->packSingle(self.position.x, "x")
      ->packSingle(self.position.y, "y")
      ->packUInt16(self.soundIndex, "soundIndex")
      ->packByte(flags->BitFlags.toByte, "flags")
    switch self.styleOverride {
    | Some(v) => writer->packInt32(v, "styleOverride")->ignore
    | None => ()
    }
    switch self.volumeOverride {
    | Some(v) => writer->packSingle(v, "volumeOverride")->ignore
    | None => ()
    }
    switch self.pitchOverride {
    | Some(v) => writer->packSingle(v, "pitchOverride")->ignore
    | None => ()
    }
    writer->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
