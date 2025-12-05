@genType
type payload =
  | Remove
  | Data(NodeJs.Buffer.t)

@genType
type t = {
  tileEntityId: int,
  payload: payload,
}

module Decode = {
  let {readInt32, readBool, getBytesLeft, readBuffer} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(tileEntityId) = reader->readInt32("tileEntityId")
    let? Ok(hasData) = reader->readBool("hasData")
    if hasData {
      let? Ok(remaining) = reader->getBytesLeft
      let? Ok(tileEntityData) = reader->readBuffer(remaining, "tileEntityData")
      Ok({tileEntityId, payload: Data(tileEntityData)})
    } else {
      Ok({tileEntityId, payload: Remove})
    }
  }
}

module Encode = {
  let {packInt32, packBool, packBuffer, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    let writer =
      ErrorAwarePacketWriter.make()
      ->setType(PacketType.TileEntityUpdate->PacketType.toInt)
      ->packInt32(self.tileEntityId, "tileEntityId")
    switch self.payload {
    | Remove => writer->packBool(false, "hasData")->data
    | Data(tileEntityData) =>
        writer->packBool(true, "hasData")->packBuffer(tileEntityData, "tileEntityData")->data
    }
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
