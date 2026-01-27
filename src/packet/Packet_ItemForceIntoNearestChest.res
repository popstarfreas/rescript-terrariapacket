@genType
type clientRequest = {
  slotIds: array<int>,
  smartStack: bool,
}

@genType
type serverBlockedChests = {chestIds: array<int>}

@genType
type t =
  | ClientRequest(clientRequest)
  | ServerBlockedChests(serverBlockedChests)

module Decode = {
  let {readInt16, readUInt16, readInt32, readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t, fromServer: bool): result<
    t,
    ErrorAwarePacketReader.readError,
  > => {
    let reader = PacketFactory.PacketReader.make(payload)
    if fromServer {
      let? Ok(count) = reader->readInt32("blockedChestCount")
      let chestIds: array<int> = []
      let rec readChests = idx =>
        if idx >= count {
          Ok()
        } else {
          let? Ok(chestId) = reader->readUInt16(`blockedChest${Int.toString(idx)}`)
          chestIds->Array.push(chestId)
          readChests(idx + 1)
        }
      let? Ok(_) = readChests(0)
      Ok(ServerBlockedChests({chestIds: chestIds}))
    } else {
      let? Ok(count) = reader->readInt32("slotCount")
      let slotIds: array<int> = []
      let rec readSlots = idx =>
        if idx >= count {
          Ok()
        } else {
          let? Ok(slotId) = reader->readInt16(`slot${Int.toString(idx)}`)
          slotIds->Array.push(slotId)
          readSlots(idx + 1)
        }
      let? Ok(_) = readSlots(0)
      let? Ok(smartStackRaw) = reader->readByte("smartStack")
      Ok(
        ClientRequest({
          slotIds,
          smartStack: smartStackRaw != 0,
        }),
      )
    }
  }
}

module Encode = {
  module Writer = ErrorAwarePacketWriter
  let {packInt16, packUInt16, packInt32, packByte, setType, data} = module(Writer)

  let packSlotIds = (writer: Writer.t, slotIds: array<int>): Writer.t => {
    let writer = writer->packInt32(slotIds->Array.length, "slotCount")
    slotIds->Array.forEachWithIndex((slotId, idx) =>
      writer->packInt16(slotId, `slot${Int.toString(idx)}`)->ignore
    )
    writer
  }

  let packChestIds = (writer: Writer.t, chestIds: array<int>): Writer.t => {
    let writer = writer->packInt32(chestIds->Array.length, "blockedChestCount")
    chestIds->Array.forEachWithIndex((chestId, idx) =>
      writer->packUInt16(chestId, `blockedChest${Int.toString(idx)}`)->ignore
    )
    writer
  }

  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    let writer = Writer.make()->setType(PacketType.ItemForceIntoNearestChest->PacketType.toInt)
    switch self {
    | ClientRequest({slotIds, smartStack}) =>
      writer
      ->packSlotIds(slotIds)
      ->packByte(smartStack ? 1 : 0, "smartStack")
      ->data
    | ServerBlockedChests({chestIds}) =>
      writer
      ->packChestIds(chestIds)
      ->data
    }
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
