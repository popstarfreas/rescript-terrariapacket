@genType
type anchor =
  | Remove
  | Anchor({
      anchorType: int,
      anchorMeta: int,
      time: int,
      emote: int,
      metadata: option<int>,
    })

@genType
type t = {
  id: int,
  anchor: anchor,
}

module Decode = {
  let {readInt32, readByte, readUInt16, readSByte, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(id) = reader->readInt32("id")
    let? Ok(anchorType) = reader->readByte("anchorType")
    if anchorType == 255 {
      Ok({id, anchor: Remove})
    } else {
      let? Ok(anchorMeta) = reader->readUInt16("anchorMeta")
      let? Ok(time) = reader->readUInt16("time")
      let? Ok(emote) = reader->readSByte("emote")
      let metadata =
        if emote < 0 {
          reader->readInt16("metadata")->Result.map(v => Some(v))
        } else {
          Ok(None)
        }
      let? Ok(metadata) = metadata
      Ok({id, anchor: Anchor({anchorType, anchorMeta, time, emote, metadata})})
    }
  }
}

module Encode = {
  let {packInt32, packByte, packUInt16, packSByte, packInt16, setType, data} = module(
    ErrorAwarePacketWriter
  )
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    let writer =
      ErrorAwarePacketWriter.make()
      ->setType(PacketType.EmoteBubble->PacketType.toInt)
      ->packInt32(self.id, "id")
    switch self.anchor {
    | Remove => writer->packByte(255, "anchorType")->data
    | Anchor(details) => {
        let writer =
          writer
          ->packByte(details.anchorType, "anchorType")
          ->packUInt16(details.anchorMeta, "anchorMeta")
          ->packUInt16(details.time, "time")
          ->packSByte(details.emote, "emote")
        let writer =
          if details.emote < 0 {
            writer->packInt16(
              switch details.metadata {
              | Some(v) => v
              | None => 0
              },
              "metadata",
            )
          } else {
            writer
          }
        writer->data
      }
    }
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
