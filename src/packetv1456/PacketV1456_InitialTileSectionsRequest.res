@genType
type t = {
  x: int,
  y: int,
  team: int,
}

module Decode = {
  let {readInt32, readByte} = module(ErrorAwarePacketReader)

  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(x) = reader->readInt32("x")
    let? Ok(y) = reader->readInt32("y")
    let? Ok(team) = reader->readByte("team")
    Ok({x, y, team})
  }
}

module Encode = {
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    let {packInt32, packByte, setType, data} = module(ErrorAwarePacketWriter)
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketTypeV1456.InitialTileSectionsRequest->PacketTypeV1456.toInt)
    ->packInt32(self.x, "x")
    ->packInt32(self.y, "y")
    ->packByte(self.team, "team")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
