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
  let {packByte, packInt16, packUInt16, setType, data} = module(PacketFactory.ManagedPacketWriter)
  type writer = PacketFactory.ManagedPacketWriter.t
  let packBuffs = (writer: writer, buffs: array<int>): writer => {
    buffs->Array.forEach(buff => writer->packUInt16(buff)->ignore)
    writer
  }
  let packBuffTimes = (writer: writer, buffTimes: array<int>): writer => {
    buffTimes->Array.forEach(buff => writer->packInt16(buff)->ignore)
    writer
  }

  let toBuffer = (self: t): NodeJs.Buffer.t => {
    if self.buffs->Array.length != 20 {
      failwith(`Expected 20 buffs, got ${Array.length(self.buffs)->Int.toString}`)
    }
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.NpcBuffUpdate->PacketType.toInt)
    ->packInt16(self.npcId)
    ->packBuffs(self.buffs)
    ->packBuffTimes(self.buffTimes)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
