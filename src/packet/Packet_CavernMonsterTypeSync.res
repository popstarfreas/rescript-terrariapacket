@genType
type t = array<array<int>>

module Decode = {
  let {readUInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let rows = Array.make(~length=2, [])
    let error = ref(None)
    for i in 0 to 1 {
      if error.contents != None {
        let row = Array.make(~length=3, 0)
        for j in 0 to 2 {
          if error.contents != None {
            switch reader->readUInt16(`monster_${Int.toString(i)}_${Int.toString(j)}`) {
            | Ok(value) => row->Array.setUnsafe(j, value)
            | Error(err) => error := Some(err)
            }
          }
        }
        rows->Array.setUnsafe(i, row)
      }
    }

    switch error.contents {
    | Some(err) => Error(err)
    | None => Ok(rows)
    }
  }
}

module Encode = {
  let {packUInt16, setType, data} = module(ErrorAwarePacketWriter)
  let packRow = (writer: ErrorAwarePacketWriter.t, row: array<int>, rowIdx: int) => {
    let rec loop = (writer: ErrorAwarePacketWriter.t, colIdx: int) =>
      if colIdx >= row->Array.length {
        writer
      } else {
        loop(
          writer->packUInt16(
            row->Array.getUnsafe(colIdx),
            `monster_${rowIdx->Int.toString}_${colIdx->Int.toString}`,
          ),
          colIdx + 1,
        )
      }
    loop(writer, 0)
  }

  let packRows = (writer: ErrorAwarePacketWriter.t, rows: t) => {
    let rec loop = (writer: ErrorAwarePacketWriter.t, rowIdx: int) =>
      if rowIdx >= rows->Array.length {
        writer
      } else {
        loop(writer->packRow(rows->Array.getUnsafe(rowIdx), rowIdx), rowIdx + 1)
      }
    loop(writer, 0)
  }

  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    if self->Array.length != 2
       || self->Array.getUnsafe(0)->Array.length != 3
       || self->Array.getUnsafe(1)->Array.length != 3 {
      Error({
        context: "Packet_CavernMonsterTypeSync.toBuffer",
        error: JsError.make("Expected a 2x3 array of monster types")->JsError.toJsExn,
      })
    } else {
      ErrorAwarePacketWriter.make()
      ->setType(PacketType.CavernMonsterTypeSync->PacketType.toInt)
      ->packRows(self)
      ->data
    }
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
