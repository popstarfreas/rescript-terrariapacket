type t = {uuid: string}

let {readString} = module(ErrorAwarePacketReader)

let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
  let reader = PacketFactory.PacketReader.make(payload)
  let? Ok(uuid) = reader->readString("uuid")
  Ok({
    uuid: uuid,
  })
}

let {packString, setType, data} = module(ErrorAwarePacketWriter)
let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
  ErrorAwarePacketWriter.make()
  ->setType(PacketType.ClientUuid->PacketType.toInt)
  ->packString(self.uuid, "uuid")
  ->data
