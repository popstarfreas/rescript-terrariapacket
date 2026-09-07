type t = PacketV1457_ItemDropUpdate.t
let parse = PacketV1457_ItemDropUpdate.parse
let toBuffer = self =>
  PacketV1457_ItemDropUpdate.Encode.toBufferWithType(self, PacketTypeV1457.ItemDropInstancedUpdate)
