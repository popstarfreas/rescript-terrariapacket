@genType
type payload =
  | Remove
  | Data(NodeJs.Buffer.t)

@genType
type t = {
  tileEntityId: int,
  payload: payload,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>

