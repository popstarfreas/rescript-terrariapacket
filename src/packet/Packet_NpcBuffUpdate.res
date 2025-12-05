@genType
type t = {
  npcId: int,
  buffs: array<int>,
  buffTimes: array<int>,
}

module Decode = {
  let {readUInt16, readInt16, readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(npcId) = reader->readInt16("npcId")
    let buffs = []
    let buffTimes = []

    let rec readBuffs = idx =>
      if idx >= 20 {
        Ok()
      } else {
        let? Ok(buff) = reader->readUInt16(`buff${Int.toString(idx + 1)}`)
        let? Ok(buffTime) = reader->readInt16(`buffTime${Int.toString(idx + 1)}`)
        buffs->Array.push(buff)
        buffTimes->Array.push(buffTime)
        readBuffs(idx + 1)
      }

    let? Ok(_) = readBuffs(0)

    Ok({
      npcId,
      buffs,
      buffTimes,
    })
  }
}

module Encode = {
  let {packInt16, packUInt16, setType, data} = module(ErrorAwarePacketWriter)
  type writer = ErrorAwarePacketWriter.t
  let packBuffs = (writer: writer, buffs: array<int>): writer => {
    let rec loop = (writer: writer, idx: int): writer =>
      if idx >= buffs->Array.length {
        writer
      } else {
        loop(
          writer->packUInt16(
            buffs->Array.getUnsafe(idx),
            `buff${(idx + 1)->Int.toString}`,
          ),
          idx + 1,
        )
      }
    loop(writer, 0)
  }
  let packBuffTimes = (writer: writer, buffTimes: array<int>): writer => {
    let rec loop = (writer: writer, idx: int): writer =>
      if idx >= buffTimes->Array.length {
        writer
      } else {
        loop(
          writer->packInt16(
            buffTimes->Array.getUnsafe(idx),
            `buffTime${(idx + 1)->Int.toString}`,
          ),
          idx + 1,
        )
      }
    loop(writer, 0)
  }

  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    if self.buffs->Array.length != 20 || self.buffTimes->Array.length != 20 {
      Error({
        context: "Packet_NpcBuffUpdate.toBuffer",
        error: JsError.make("Expected 20 buffs and 20 buffTimes")->JsError.toJsExn,
      })
    } else {
      ErrorAwarePacketWriter.make()
      ->setType(PacketType.NpcBuffUpdate->PacketType.toInt)
      ->packInt16(self.npcId, "npcId")
      ->packBuffs(self.buffs)
      ->packBuffTimes(self.buffTimes)
      ->data
    }
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
