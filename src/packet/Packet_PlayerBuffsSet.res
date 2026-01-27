type t = {
  playerId: int,
  buffs: array<int>,
}

module Decode = {
  let {readUInt16, readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let buffs: array<int> = []
    let rec readBuffs = () => {
      let? Ok(buff) = reader->readUInt16("buff")
      if buff == 0 {
        Ok()
      } else {
        buffs->Array.push(buff)
        readBuffs()
      }
    }
    let? Ok(_) = readBuffs()

    Ok({
      playerId,
      buffs,
    })
  }
}

module Encode = {
  let {packByte, packUInt16, setType, data} = module(ErrorAwarePacketWriter)
  type writer = ErrorAwarePacketWriter.t
  let packBuffs = (writer: writer, buffs: array<int>): writer => {
    buffs->Array.forEachWithIndex((buff, idx) =>
      writer->packUInt16(buff, `buff_${Int.toString(idx)}`)->ignore
    )
    writer->packUInt16(0, "buff_terminator")
  }

  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> =>
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.PlayerBuffsSet->PacketType.toInt)
    ->packByte(self.playerId, "playerId")
    ->packBuffs(self.buffs)
    ->data
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
