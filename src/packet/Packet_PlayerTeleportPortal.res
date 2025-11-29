@genType
type t = {
  playerId: int,
  extraInfo: int,
  position: Point.t<float>,
  velocity: Point.t<float>,
}
module Decode = {
  let {readByte, readSingle, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(extraInfo) = reader->readInt16("extraInfo")
    let? Ok(positionX) = reader->readSingle("positionX")
    let? Ok(positionY) = reader->readSingle("positionY")
    let position: Point.t<float> = {
      x: positionX,
      y: positionY,
    }
    let? Ok(velocityX) = reader->readSingle("velocityX")
    let? Ok(velocityY) = reader->readSingle("velocityY")
    let velocity: Point.t<float> = {
      x: velocityX,
      y: velocityY,
    }

    Ok({
      playerId,
      extraInfo,
      position,
      velocity,
    })
  }
}

module Encode = {
  let {packByte, packInt16, packSingle, setType, data} = module(ErrorAwarePacketWriter)
  type writer = ErrorAwarePacketWriter.t // Assuming ManagedPacketWriter.t is compatible or ErrorAwarePacketWriter.t

  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.PlayerTeleportPortal->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packInt16(self.extraInfo, "extraInfo")
    ->packSingle(self.position.x, "positionX")
    ->packSingle(self.position.y, "positionY")
    ->packSingle(self.velocity.x, "velocityX")
    ->packSingle(self.velocity.y, "velocityY")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
