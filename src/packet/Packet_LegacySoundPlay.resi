@genType
type t = {
  position: Point.t<float>,
  soundIndex: int,
  styleOverride: option<int>,
  volumeOverride: option<float>,
  pitchOverride: option<float>,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>

