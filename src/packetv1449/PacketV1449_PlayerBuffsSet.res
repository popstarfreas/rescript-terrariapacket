type t = {
  playerId: int,
  buffs: array<int>,
}

module Decode = {
  let {readUInt16, readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let buffs = Array.make(~length=44, 0)
    let buffsParseResult = ref(Ok())
    for i in 0 to 43 {
      switch buffsParseResult.contents {
      | Error(_) => ()
      | Ok(_) =>
        let label = "buff_" ++ Int.toString(i)
        switch reader->readUInt16(label) {
        | Ok(buff) => buffs->Array.setUnsafe(i, buff)
        | Error(err) => buffsParseResult := Error(err)
        }
      }
    }

    switch buffsParseResult.contents {
    | Ok(_) =>
      Ok({
        playerId,
        buffs,
      })
    | Error(err) => Error(err)
    }
  }
}

module Encode = {
  let {packByte, packUInt16, setType, data} = module(ErrorAwarePacketWriter)
  type writer = ErrorAwarePacketWriter.t
  let packBuffs = (writer: writer, buffs: array<int>): writer => {
    buffs->Array.forEachWithIndex((buff, idx) =>
      writer->packUInt16(buff, `buff_${Int.toString(idx)}`)->ignore
    )
    writer
  }

  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    if self.buffs->Array.length != 44 {
      Error({
        context: "PlayerBuffsSet.toBuffer",
        error: JsError.make(
          `Expected 44 buffs, got ${Array.length(self.buffs)->Int.toString}`,
        )->JsError.toJsExn,
      })
    } else {
      ErrorAwarePacketWriter.make()
      ->setType(PacketType.PlayerBuffsSet->PacketType.toInt)
      ->packByte(self.playerId, "playerId")
      ->packBuffs(self.buffs)
      ->data
    }
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
