@genType
type t = {
  damage: int,
  knockback: float,
  x: int,
  y: int,
  angle: int,
  ammo: int,
  playerId: int,
}

module Decode = {
  let {readInt16, readSingle, readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(damage) = reader->readInt16("damage")
    let? Ok(knockback) = reader->readSingle("knockback")
    let? Ok(x) = reader->readInt16("x")
    let? Ok(y) = reader->readInt16("y")
    let? Ok(angle) = reader->readInt16("angle")
    let? Ok(ammo) = reader->readInt16("ammo")
    let? Ok(playerId) = reader->readByte("playerId")
    Ok({damage, knockback, x, y, angle, ammo, playerId})
  }
}

module Encode = {
  let {packInt16, packSingle, packByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.WiredCannonShot->PacketType.toInt)
    ->packInt16(self.damage, "damage")
    ->packSingle(self.knockback, "knockback")
    ->packInt16(self.x, "x")
    ->packInt16(self.y, "y")
    ->packInt16(self.angle, "angle")
    ->packInt16(self.ammo, "ammo")
    ->packByte(self.playerId, "playerId")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
