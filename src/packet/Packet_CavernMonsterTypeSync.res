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
  let {packUInt16, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    let writer =
      PacketFactory.ManagedPacketWriter.make()->setType(
        PacketType.CavernMonsterTypeSync->PacketType.toInt,
      )
    self->Array.forEach(row => row->Array.forEach(value => writer->packUInt16(value)->ignore))
    writer->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
