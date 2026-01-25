type t = {version: string}

module Decode = {
  let {readString} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(version) = reader->readString("version")
    Ok({version: version})
  }
}

module Encode = {
  let {packString, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.ConnectRequest->PacketType.toInt)
    ->packString(self.version, "version")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
