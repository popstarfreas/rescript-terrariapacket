@genType
type t = {
  command: string,
  argInt: int,
  argFloat: float,
  argFloat2: float,
}

module Decode = {
  let {readString, readInt32, readSingle} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(command) = reader->readString("command")
    let? Ok(argInt) = reader->readInt32("argInt")
    let? Ok(argFloat) = reader->readSingle("argFloat")
    let? Ok(argFloat2) = reader->readSingle("argFloat2")
    Ok({command, argInt, argFloat, argFloat2})
  }
}

module Encode = {
  let {packString, packInt32, packSingle, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.Unused->PacketType.toInt)
    ->packString(self.command, "command")
    ->packInt32(self.argInt, "argInt")
    ->packSingle(self.argFloat, "argFloat")
    ->packSingle(self.argFloat2, "argFloat2")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
