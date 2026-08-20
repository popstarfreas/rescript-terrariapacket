type t = Packet_ItemDropUpdate.t
let parse = Packet_ItemDropUpdate.parse
let toBuffer = self =>
  Packet_ItemDropUpdate.Encode.toBufferWithType(self, PacketType.ItemDropInstancedUpdate)
