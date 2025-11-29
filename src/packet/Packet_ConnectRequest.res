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
  let {packString, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.ConnectRequest->PacketType.toInt)
    ->packString(self.version)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
