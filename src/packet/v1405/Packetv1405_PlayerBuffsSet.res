type t = {
  playerId: int,
  buffs: array<int>,
}

module Decode = {
  let {readUInt16, readByte} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let playerId = reader->readByte
    let buffs = []
    for _i in 1 to 22 {
      let _: int = buffs->Js.Array2.push(reader->readUInt16)
    }
    Some({
      playerId,
      buffs,
    })
  }
}

module Encode = {
  let {packByte, packUInt16, setType, data} = module(PacketFactory.ManagedPacketWriter)
  type writer = PacketFactory.ManagedPacketWriter.t
  let packBuffs = (writer: writer, buffs: array<int>): writer => {
    buffs->Js.Array2.forEach(buff => writer->packUInt16(buff)->ignore)
    writer
  }

  let toBuffer = (self: t): NodeJs.Buffer.t => {
    if self.buffs->Array.length != 22 {
      failwith(`Expected 22 buffs, got ${Array.length(self.buffs)->Int.toString}`)
    }
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.PlayerBuffsSet->PacketType.toInt)
    ->packByte(self.playerId)
    ->packBuffs(self.buffs)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer

let toLatest = (self: t): Packet.PlayerBuffsSet.t => {
  if self.buffs->Array.length != 22 {
    failwith(`Expected 22 buffs, got ${Array.length(self.buffs)->Int.toString}`)
  }
  let buffs = Array.copy(self.buffs)
  buffs->Array.pushMany(Array.make(~length=22, 0))
  {
    playerId: self.playerId,
    buffs,
  }
}

let fromLatest = (latest: Packet.PlayerBuffsSet.t): option<t> => {
  Some({
    playerId: latest.playerId,
    buffs: Array.slice(latest.buffs, ~start=0, ~end=22),
  })
}
