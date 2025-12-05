@genType
type t = {password: string}

module Decode = {
  let {readString} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(password) = reader->readString("password")
    Ok({password: password})
  }
}

module Encode = {
  let {packString, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.PasswordSend->PacketType.toInt)
    ->packString(self.password, "password")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
