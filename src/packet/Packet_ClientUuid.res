type t = {uuid: string}

let {readString} = module(PacketFactory.PacketReader)

let parse = (payload: NodeJs.Buffer.t): option<t> => {
  let reader = PacketFactory.PacketReader.make(payload)
  let uuid = reader->readString
  Some({
    uuid: uuid,
  })
}

let {packString, setType, data} = module(PacketFactory.ManagedPacketWriter)
let toBuffer = (self: t): NodeJs.Buffer.t =>
  PacketFactory.ManagedPacketWriter.make()
  ->setType(PacketType.ClientUuid->PacketType.toInt)
  ->packString(self.uuid)
  ->data
