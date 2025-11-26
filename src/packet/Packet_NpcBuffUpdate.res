@genType
type t = {
  npcId: int,
  buffs: array<int>,
  buffTimes: array<int>,
}

module Decode = {
  let {readUInt16, readInt16, readByte} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let npcId = reader->readInt16
    let buffs = []
    let buffTimes = []
    for _i in 1 to 20 {
      buffs->Array.push(reader->readUInt16)
      buffTimes->Array.push(reader->readInt16)
    }
    Some({
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
    ->packByte(self.npcId)
    ->packBuffs(self.buffs)
    ->packBuffTimes(self.buffTimes)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
