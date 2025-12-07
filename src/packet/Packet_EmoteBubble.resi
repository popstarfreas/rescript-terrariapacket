@genType
type anchor =
  | Remove
  | Anchor({anchorType: int, anchorMeta: int, time: int, emote: int, metadata: option<int>})

@genType
type t = {
  id: int,
  anchor: anchor,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
