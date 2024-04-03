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
    for _i in 1 to 5 {
      let _: int = buffs->Js.Array2.push(reader->readUInt16)
      let _: int = buffTimes->Js.Array2.push(reader->readInt16)
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
    buffs->Js.Array2.forEach(buff => writer->packUInt16(buff)->ignore)
    writer
  }
  let packBuffTimes = (writer: writer, buffTimes: array<int>): writer => {
    buffTimes->Js.Array2.forEach(buff => writer->packInt16(buff)->ignore)
    writer
  }

  let toBuffer = (self: t): NodeJs.Buffer.t => {
    if self.buffs->Array.length != 5 {
      failwith(`Expected 5 buffs, got ${Array.length(self.buffs)->Int.toString}`)
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

let toLatest = (self: t): Packet.NpcBuffUpdate.t => {
  if self.buffs->Array.length != 5 {
    failwith(`Expected 5 buffs, got ${Array.length(self.buffs)->Int.toString}`)
  }
  let buffs = Array.copy(self.buffs)
  buffs->Array.pushMany(Array.make(~length=15, 0))
  let buffTimes = Array.copy(self.buffTimes)
  buffTimes->Array.pushMany(Array.make(~length=15, 0))
  {
    npcId: self.npcId,
    buffs,
    buffTimes,
  }
}

let fromLatest = (latest: Packet.NpcBuffUpdate.t): option<t> => {
  Some({
    npcId: latest.npcId,
    buffs: Array.slice(latest.buffs, ~start=0, ~end=5),
    buffTimes: Array.slice(latest.buffTimes, ~start=0, ~end=5),
  })
}
