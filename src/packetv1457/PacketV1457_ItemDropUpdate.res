@genType
type ownership =
  | None
  | ReserveForLocalPlayer
  | GrabDelayForLocalPlayer
  | GrabDelayForAllPlayers

@genType
type shimmer = {
  shimmered: bool,
  shimmerTime: float,
}

@genType
type t = {
  itemDropId: int,
  position: Point.t<float>,
  velocity: Point.t<float>,
  stack: int,
  prefix: int,
  ownership: ownership,
  itemId: int,
  shimmer: option<shimmer>,
  enemyGrabDelayTime: option<int>,
}

let ownershipFromInt = value =>
  switch value {
  | 0 => None
  | 1 => ReserveForLocalPlayer
  | 2 => GrabDelayForLocalPlayer
  | _ => GrabDelayForAllPlayers
  }

let ownershipToInt = ownership =>
  switch ownership {
  | None => 0
  | ReserveForLocalPlayer => 1
  | GrabDelayForLocalPlayer => 2
  | GrabDelayForAllPlayers => 3
  }

module Decode = {
  let {readInt16, readSingle, readByte, readBool} = module(ErrorAwarePacketReader)

  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(itemDropId) = reader->readInt16("itemDropId")
    let? Ok(positionX) = reader->readSingle("positionX")
    let? Ok(positionY) = reader->readSingle("positionY")
    let? Ok(velocityX) = reader->readSingle("velocityX")
    let? Ok(velocityY) = reader->readSingle("velocityY")
    let? Ok(stack) = reader->readInt16("stack")
    let? Ok(prefix) = reader->readByte("prefix")
    let? Ok(flagsRaw) = reader->readByte("flags")
    let flags = BitFlags.fromByte(flagsRaw)
    let? Ok(itemId) = reader->readInt16("itemId")
    let? Ok(shimmer) = if flags->BitFlags.flag3 {
      let? Ok(shimmered) = reader->readBool("shimmered")
      let? Ok(shimmerTime) = reader->readSingle("shimmerTime")
      Ok(Some({shimmered, shimmerTime}))
    } else {
      Ok(None)
    }
    let? Ok(enemyGrabDelayTime) = if flags->BitFlags.flag4 {
      let? Ok(value) = reader->readByte("enemyGrabDelayTime")
      Ok(Some(value))
    } else {
      Ok(None)
    }
    Ok({
      itemDropId,
      position: {x: positionX, y: positionY},
      velocity: {x: velocityX, y: velocityY},
      stack,
      prefix,
      ownership: ownershipFromInt(Int.bitwiseAnd(flagsRaw, 3)),
      itemId,
      shimmer,
      enemyGrabDelayTime,
    })
  }
}

module Encode = {
  let {packInt16, packSingle, packByte, packBool, setType, data} = module(
    ErrorAwarePacketWriter
  )

  let toBufferWithType = (self: t, packetType: PacketTypeV1457.t) => {
    let flags = Int.bitwiseOr(
      ownershipToInt(self.ownership),
      Int.bitwiseOr(self.shimmer->Option.isSome ? 4 : 0, self.enemyGrabDelayTime->Option.isSome ? 8 : 0),
    )
    let writer =
      ErrorAwarePacketWriter.make()
      ->setType(packetType->PacketTypeV1457.toInt)
      ->packInt16(self.itemDropId, "itemDropId")
      ->packSingle(self.position.x, "positionX")
      ->packSingle(self.position.y, "positionY")
      ->packSingle(self.velocity.x, "velocityX")
      ->packSingle(self.velocity.y, "velocityY")
      ->packInt16(self.stack, "stack")
      ->packByte(self.prefix, "prefix")
      ->packByte(flags, "flags")
      ->packInt16(self.itemId, "itemId")
    let writer = switch self.shimmer {
    | Some(shimmer) =>
      writer
      ->packBool(shimmer.shimmered, "shimmered")
      ->packSingle(shimmer.shimmerTime, "shimmerTime")
    | None => writer
    }
    switch self.enemyGrabDelayTime {
    | Some(value) => writer->packByte(value, "enemyGrabDelayTime")
    | None => writer
    }
    ->data
  }
}

let parse = Decode.parse
let toBuffer = self => Encode.toBufferWithType(self, PacketTypeV1457.ItemDropUpdate)
