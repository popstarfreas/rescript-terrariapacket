type t = Packet.ConnectRequest.t

module Decode = {
  let {readString} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(version) = reader->readString("version")
    Ok({version: version})
  }
}

module Encode = {
  /*
   * This is unsafe because it does not check that the packet will fit into
   * the buffer
   * @returns The length of data written to the buffer
   */
  let packIntoBufferUnsafe = (self: t, buffer: NodeJs.Buffer.t): int => {
    let {setType, packString, packedLength} = module(PacketFactory.PacketWriter)
    PacketFactory.PacketWriter.make(buffer)
    ->setType(PacketType.ConnectRequest->PacketType.toInt)
    ->packString(self.version)
    ->packedLength
  }

  let {packString, setType, data} = module(ErrorAwarePacketWriter)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.ConnectRequest->PacketType.toInt)
    ->packString(self.version, "version")
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
