// Only present when packet is sent by server
type extraInfo = {
  name: string,
  townNpcVariationIndex: int,
}

type t = {
  npcId: int,
  extraInfo: option<extraInfo>,
}

let parse: (NodeJs.Buffer.t, ~fromServer: bool) => result<t, ErrorAwarePacketReader.readError>
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
