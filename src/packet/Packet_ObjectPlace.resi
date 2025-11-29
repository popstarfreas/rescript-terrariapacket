@genType
type direction = Left | Right

@genType
type t = {
  x: int,
  y: int,
  objectType: int,
  style: int,
  alternate: int,
  random: int,
  direction: direction,
}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
