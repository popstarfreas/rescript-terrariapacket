type t = {
  itemDropId: int,
  owner: int,
}

module Decode = {
  let {readInt16, readByte} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let itemDropId = reader->readInt16
    let owner = reader->readByte
    Some({
      itemDropId: itemDropId,
      owner: owner,
    })
  }
}

module Encode = {
  let {packInt16, packByte, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.ItemOwner->PacketType.toInt)
    ->packInt16(self.itemDropId)
    ->packByte(self.owner)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
