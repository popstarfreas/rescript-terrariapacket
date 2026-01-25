@genType
type t = {
  playerId: int,
  cupX: int,
  cupY: int,
  projId: int,
  projType: int,
}

module Decode = {
  let {readByte, readUInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(cupX) = reader->readUInt16("cupX")
    let? Ok(cupY) = reader->readUInt16("cupY")
    let? Ok(projId) = reader->readUInt16("projId")
    let? Ok(projType) = reader->readUInt16("projType")
    Ok({playerId, cupX, cupY, projId, projType})
  }
}

module Encode = {
  let {packByte, packUInt16, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.GolfBallLandInCup->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packUInt16(self.cupX, "cupX")
    ->packUInt16(self.cupY, "cupY")
    ->packUInt16(self.projId, "projId")
    ->packUInt16(self.projType, "projType")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
