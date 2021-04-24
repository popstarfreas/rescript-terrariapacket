type t = {version: string}

module Decode = {
  let {readString} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let version = reader->readString
    Some({version: version})
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
