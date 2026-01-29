@genType
type anchor =
  | Remove
  | Anchor({anchorType: int, anchorMeta: int, time: int, emote: int, metadata: option<int>})

@genType
type t = {
  id: int,
  anchor: anchor,
}

module Decode = {
  let {readInt32, readByte, readUInt16, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(id) = reader->readInt32("id")
    let? Ok(anchorType) = reader->readByte("anchorType")
    if anchorType == 255 {
      Ok({id, anchor: Remove})
    } else {
      let? Ok(anchorMeta) = reader->readUInt16("anchorMeta")
      let? Ok(time) = reader->readUInt16("time")
      // Emote is written as byte but can represent -1 (NPC head) as 255
      // Metadata is only present when the original emote value was negative (i.e., -1 sent as 255)
      let? Ok(emoteByte) = reader->readByte("emote")
      if emoteByte == 255 {
        // 255 represents -1 (NPC head display), metadata follows
        let? Ok(meta) = reader->readInt16("metadata")
        Ok({id, anchor: Anchor({anchorType, anchorMeta, time, emote: -1, metadata: Some(meta)})})
      } else {
        Ok({id, anchor: Anchor({anchorType, anchorMeta, time, emote: emoteByte, metadata: None})})
      }
    }
  }
}

module Encode = {
  let {packInt32, packByte, packUInt16, packInt16, setType, data} = module(
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
        // Emote -1 (NPC head) is written as 255, otherwise write the emote value as-is
        let emoteByte = if details.emote == -1 {
          255
        } else {
          details.emote
        }
        let writer =
          writer
          ->packByte(details.anchorType, "anchorType")
          ->packUInt16(details.anchorMeta, "anchorMeta")
          ->packUInt16(details.time, "time")
          ->packByte(emoteByte, "emote")
        let writer = if details.emote == -1 {
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
