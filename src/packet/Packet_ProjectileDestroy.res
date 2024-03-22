@genType
type t = {
  projectileId: int,
  owner: int,
}

module Decode = {
  let {readByte, readInt16} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let projectileId = reader->readInt16
    let owner = reader->readByte
    Some({
      projectileId,
      owner,
    })
  }
}

module Encode = {
  let {packByte, packInt16, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.ProjectileDestroy->PacketType.toInt)
    ->packInt16(self.projectileId)
    ->packByte(self.owner)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
