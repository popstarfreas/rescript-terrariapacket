// Only present when packet is sent by server
type extraInfo = {
  name: string,
  townNpcVariationIndex: int,
}

type t = {
  npcId: int,
  extraInfo: option<extraInfo>,
}

module Decode = {
  let {readInt16, readString, readInt32} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t, ~fromServer: bool): result<
    t,
    ErrorAwarePacketReader.readError,
  > => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(npcId) = reader->readInt16("npcId")
    let? Ok(extraInfo) = if fromServer {
      let? Ok(name) = reader->readString("name")
      let? Ok(townNpcVariationIndex) = reader->readInt32("townNpcVariationIndex")
      Ok(Some({name, townNpcVariationIndex}))
    } else {
      Ok(None)
    }
    Ok({npcId, extraInfo})
  }
}

module Encode = {
  let {packInt16, packString, packInt32, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    let writer =
      ErrorAwarePacketWriter.make()
      ->setType(PacketType.NpcNameUpdate->PacketType.toInt)
      ->packInt16(self.npcId, "npcId")

    switch self.extraInfo {
    | Some(extraInfo) =>
      writer
      ->packString(extraInfo.name, "name")
      ->packInt32(extraInfo.townNpcVariationIndex, "townNpcVariationIndex")
      ->data
    | None => writer->data
    }
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
