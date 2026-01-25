@genType
type t = {
  projectileId: int,
  owner: int,
}

module Decode = {
  let {readByte, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(projectileId) = reader->readInt16("projectileId")
    let? Ok(owner) = reader->readByte("owner")
    Ok({
      projectileId,
      owner,
    })
  }
}

module Encode = {
  let {packByte, packInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.ProjectileDestroy->PacketType.toInt)
    ->packInt16(self.projectileId, "projectileId")
    ->packByte(self.owner, "owner")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
