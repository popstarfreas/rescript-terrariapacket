type t = int

let parse = payload =>
  PacketFactory.PacketReader.make(payload)->ErrorAwarePacketReader.read7BitEncodedInt("ack")

let toBuffer = (value: t) =>
  ErrorAwarePacketWriter.make()
  ->ErrorAwarePacketWriter.setType(PacketType.CustomServerAck->PacketType.toInt)
  ->ErrorAwarePacketWriter.pack7BitEncodedInt(value, "ack")
  ->ErrorAwarePacketWriter.data
