@genType
type t = {
  ...Packet_ItemDropUpdate.t,
  timeLeftInWhichTheItemCannotBeTakenByEnemies: int,
}

module Decode = {
  let {readByte, readSingle, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(itemDropId) = reader->readInt16("itemDropId")
    let? Ok(x) = reader->readSingle("x")
    let? Ok(y) = reader->readSingle("y")
    let? Ok(vx) = reader->readSingle("vx")
    let? Ok(vy) = reader->readSingle("vy")
    let? Ok(stack) = reader->readInt16("stack")
    let? Ok(prefix) = reader->readByte("prefix")
    let? Ok(noDelay) = reader->readByte("noDelay")
    let? Ok(itemId) = reader->readInt16("itemId")
    let? Ok(timeLeftInWhichTheItemCannotBeTakenByEnemies) =
      reader->readByte("timeLeftInWhichTheItemCannotBeTakenByEnemies")
    Ok({
      itemDropId,
      x,
      y,
      vx,
      vy,
      stack,
      prefix,
      noDelay,
      itemId,
      timeLeftInWhichTheItemCannotBeTakenByEnemies,
    })
  }
}

module Encode = {
  module Writer = ErrorAwarePacketWriter
  let {packByte, packInt16, packInt32, packSingle, setType, data} = module(Writer)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    Writer.make()
    ->setType(PacketType.ItemDropProtectedUpdate->PacketType.toInt)
    ->packInt16(self.itemDropId, "itemDropId")
    ->packSingle(self.x, "x")
    ->packSingle(self.y, "y")
    ->packSingle(self.vx, "vx")
    ->packSingle(self.vy, "vy")
    ->packInt16(self.stack, "stack")
    ->packByte(self.prefix, "prefix")
    ->packByte(self.noDelay, "noDelay")
    ->packInt16(self.itemId, "itemId")
    ->packByte(
      self.timeLeftInWhichTheItemCannotBeTakenByEnemies,
      "timeLeftInWhichTheItemCannotBeTakenByEnemies",
    )
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
