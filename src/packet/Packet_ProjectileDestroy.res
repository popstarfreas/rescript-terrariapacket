@genType
type t = {
  projectileKey: ProjectileKey.t,
  position: Point.t<float>,
}

let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
  let reader = PacketFactory.PacketReader.make(payload)
  let? Ok(projectileKey) = reader->ErrorAwarePacketReader.readInt32("projectileKey")
  let? Ok(positionX) = reader->ErrorAwarePacketReader.readSingle("positionX")
  let? Ok(positionY) = reader->ErrorAwarePacketReader.readSingle("positionY")
  Ok({projectileKey: ProjectileKey.fromInt(projectileKey), position: {x: positionX, y: positionY}})
}

let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
  ErrorAwarePacketWriter.make()
  ->ErrorAwarePacketWriter.setType(PacketType.ProjectileDestroy->PacketType.toInt)
  ->ErrorAwarePacketWriter.packInt32(self.projectileKey->ProjectileKey.toInt, "projectileKey")
  ->ErrorAwarePacketWriter.packSingle(self.position.x, "positionX")
  ->ErrorAwarePacketWriter.packSingle(self.position.y, "positionY")
  ->ErrorAwarePacketWriter.data
