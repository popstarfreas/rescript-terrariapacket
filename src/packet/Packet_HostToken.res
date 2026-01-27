@genType
type t = {token: string}

module Decode = {
  let {readString} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(token) = reader->readString("token")
    Ok({token: token})
  }
}

module Encode = {
  let {packString, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.HostToken->PacketType.toInt)
    ->packString(self.token, "token")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
