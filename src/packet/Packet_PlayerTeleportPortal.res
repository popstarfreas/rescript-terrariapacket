@genType
type t = {
  playerId: int,
  extraInfo: int,
  position: Point.t<float>,
  velocity: Point.t<float>,
}
module Decode = {
  let {readByte, readSingle, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let playerId = reader->readByte("playerId")
    let extraInfo = reader->readInt16("extraInfo")
    let position: Point.t<float> = {
      x: reader->readSingle("positionX"),
      y: reader->readSingle("positionY"),
    }
    let velocity: Point.t<float> = {
      x: reader->readSingle("velocityX"),
      y: reader->readSingle("velocityY"),
    }

    Some({
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
