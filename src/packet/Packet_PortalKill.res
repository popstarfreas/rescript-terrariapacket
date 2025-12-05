@genType
type t = {
  owner: int,
  portalColor: int,
}

module Decode = {
  let {readUInt16, readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(owner) = reader->readUInt16("owner")
    let? Ok(portalColor) = reader->readByte("portalColor")
    Ok({owner, portalColor})
  }
}

module Encode = {
  let {packUInt16, packByte, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.PortalKill->PacketType.toInt)
    ->packUInt16(self.owner, "owner")
    ->packByte(self.portalColor, "portalColor")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
