type t = {
  itemDropId: int,
  owner: int,
  timeToKeepReservation: int,
  grabDelayPlayer: int,
  grabDelayTime: int,
  position: Point.t<float>,
}

module Decode = {
  let {readInt16, readByte, read7BitEncodedInt, readSingle} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(itemDropId) = reader->readInt16("itemDropId")
    let? Ok(owner) = reader->readByte("owner")
    let? Ok(timeToKeepReservation) = reader->read7BitEncodedInt("timeToKeepReservation")
    let? Ok(grabDelayPlayer) = reader->readByte("grabDelayPlayer")
    let? Ok(grabDelayTime) = reader->read7BitEncodedInt("grabDelayTime")
    let? Ok(positionX) = reader->readSingle("positionX")
    let? Ok(positionY) = reader->readSingle("positionY")
    Ok({
      itemDropId,
      owner,
      timeToKeepReservation,
      grabDelayPlayer,
      grabDelayTime,
      position: {x: positionX, y: positionY},
    })
  }
}

module Encode = {
  let {packInt16, packByte, pack7BitEncodedInt, packSingle, setType, data} = module(
    ErrorAwarePacketWriter
  )
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketTypeV1457.ItemOwner->PacketTypeV1457.toInt)
    ->packInt16(self.itemDropId, "itemDropId")
    ->packByte(self.owner, "owner")
    ->pack7BitEncodedInt(self.timeToKeepReservation, "timeToKeepReservation")
    ->packByte(self.grabDelayPlayer, "grabDelayPlayer")
    ->pack7BitEncodedInt(self.grabDelayTime, "grabDelayTime")
    ->packSingle(self.position.x, "positionX")
    ->packSingle(self.position.y, "positionY")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
