@genType
type t = {
  npcId: int,
  portalColor: int,
  position: Point.t<float>,
  velocity: Point.t<float>,
}

module Decode = {
  let {readUInt16, readInt16, readSingle} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(npcId) = reader->readUInt16("npcId")
    let? Ok(portalColor) = reader->readInt16("portalColor")
    let? Ok(posX) = reader->readSingle("posX")
    let? Ok(posY) = reader->readSingle("posY")
    let? Ok(velX) = reader->readSingle("velX")
    let? Ok(velY) = reader->readSingle("velY")
    Ok({
      npcId,
      portalColor,
      position: {x: posX, y: posY},
      velocity: {x: velX, y: velY},
    })
  }
}

module Encode = {
  let {packUInt16, packInt16, packSingle, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.NpcTeleportPortal->PacketType.toInt)
    ->packUInt16(self.npcId, "npcId")
    ->packInt16(self.portalColor, "portalColor")
    ->packSingle(self.position.x, "posX")
    ->packSingle(self.position.y, "posY")
    ->packSingle(self.velocity.x, "velX")
    ->packSingle(self.velocity.y, "velY")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
