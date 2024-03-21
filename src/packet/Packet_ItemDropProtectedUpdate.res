type t = {
  ...Packet_ItemDropUpdate.t,
  timeLeftInWhichTheItemCannotBeTakenByEnemies: int,
}

module Decode = {
  let {readByte, readSingle, readBytes} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t): option<t> => {
    Packet_ItemDropUpdate.parse(payload)->Option.map(itemDropUpdate => {
      let reader = PacketFactory.PacketReader.make(payload)
      let _: array<int> = reader->readBytes(24)
      let timeLeftInWhichTheItemCannotBeTakenByEnemies = reader->readByte
      {
        itemDropId: itemDropUpdate.itemDropId,
        x: itemDropUpdate.x,
        y: itemDropUpdate.y,
        vx: itemDropUpdate.vx,
        vy: itemDropUpdate.vy,
        stack: itemDropUpdate.stack,
        prefix: itemDropUpdate.prefix,
        noDelay: itemDropUpdate.noDelay,
        itemId: itemDropUpdate.itemId,
        timeLeftInWhichTheItemCannotBeTakenByEnemies,
      }
    })
  }
}

module Encode = {
  module Writer = PacketFactory.ManagedPacketWriter
  let {packByte, packInt16, packInt32, packSingle, setType, data} = module(Writer)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    Writer.make()
    ->setType(PacketType.ItemDropProtectedUpdate->PacketType.toInt)
    ->packInt16(self.itemDropId)
    ->packSingle(self.x)
    ->packSingle(self.y)
    ->packSingle(self.vx)
    ->packSingle(self.vy)
    ->packInt16(self.stack)
    ->packByte(self.prefix)
    ->packByte(self.noDelay)
    ->packInt16(self.itemId)
    ->packByte(self.timeLeftInWhichTheItemCannotBeTakenByEnemies)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
