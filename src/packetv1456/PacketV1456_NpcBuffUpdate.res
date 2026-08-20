@genType
type t = {
  npcId: int,
  buffs: array<int>,
  buffTimes: array<int>,
}

module Decode = {
  let {readUInt16, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(npcId) = reader->readInt16("npcId")
    let buffs: array<int> = []
    let buffTimes: array<int> = []

    let rec readBuffs = () => {
      let? Ok(buff) = reader->readUInt16("buff")
      if buff == 0 {
        Ok()
      } else {
        let? Ok(buffTime) = reader->readUInt16("buffTime")
        buffs->Array.push(buff)
        buffTimes->Array.push(buffTime)
        readBuffs()
      }
    }

    let? Ok(_) = readBuffs()

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
  let packBuffs = (writer: writer, buffs: array<int>, buffTimes: array<int>): writer => {
    let len = min(buffs->Array.length, buffTimes->Array.length)
    for i in 0 to len - 1 {
      writer->packUInt16(buffs->Array.getUnsafe(i), `buff${Int.toString(i)}`)->ignore
      writer->packUInt16(buffTimes->Array.getUnsafe(i), `buffTime${Int.toString(i)}`)->ignore
    }
    writer->packUInt16(0, "buff_terminator")
  }

  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    if self.buffs->Array.length != self.buffTimes->Array.length {
      Error({
        context: "PacketV1456_NpcBuffUpdate.toBuffer",
        error: JsError.make("Expected buffs and buffTimes to be same length")->JsError.toJsExn,
      })
    } else {
      ErrorAwarePacketWriter.make()
      ->setType(PacketTypeV1456.NpcBuffUpdate->PacketTypeV1456.toInt)
      ->packInt16(self.npcId, "npcId")
      ->packBuffs(self.buffs, self.buffTimes)
      ->data
    }
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
