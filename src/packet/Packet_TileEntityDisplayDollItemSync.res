@genType
type command =
  | Equip
  | Dye
  | Pose
  | Misc

@genType
type itemData = {
  itemId: int,
  stack: int,
  prefix: int,
}

@genType
type data =
  | Item(itemData)
  | PoseValue(int)

@genType
type t = {
  playerId: int,
  tileEntityId: int,
  itemIndex: int,
  command: command,
  data: data,
}

let commandToInt = command =>
  switch command {
  | Equip => 0
  | Dye => 1
  | Pose => 2
  | Misc => 3
  }

let commandFromInt = (value: int): option<command> =>
  switch value {
  | 0 => Some(Equip)
  | 1 => Some(Dye)
  | 2 => Some(Pose)
  | 3 => Some(Misc)
  | _ => None
  }

module Decode = {
  let {readByte, readInt32, readUInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(tileEntityId) = reader->readInt32("tileEntityId")
    let? Ok(itemIndex) = reader->readByte("itemIndex")
    let? Ok(commandRaw) = reader->readByte("command")
    switch commandFromInt(commandRaw) {
    | None =>
      Error({
        context: "Packet_TileEntityDisplayDollItemSync.parse",
        error: JsError.make("Unknown display doll command")->JsError.toJsExn,
      })
    | Some(command) =>
      switch command {
      | Pose =>
        let? Ok(pose) = reader->readByte("pose")
        Ok({
          playerId,
          tileEntityId,
          itemIndex,
          command,
          data: PoseValue(pose),
        })
      | Equip | Dye | Misc =>
        let? Ok(itemId) = reader->readUInt16("itemId")
        let? Ok(stack) = reader->readUInt16("stack")
        let? Ok(prefix) = reader->readByte("prefix")
        Ok({
          playerId,
          tileEntityId,
          itemIndex,
          command,
          data: Item({itemId, stack, prefix}),
        })
      }
    }
  }
}

module Encode = {
  module Writer = ErrorAwarePacketWriter
  let {packByte, packInt32, packUInt16, setType, data} = module(Writer)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    let writer =
      Writer.make()
      ->setType(PacketType.TileEntityDisplayDollItemSync->PacketType.toInt)
      ->packByte(self.playerId, "playerId")
      ->packInt32(self.tileEntityId, "tileEntityId")
      ->packByte(self.itemIndex, "itemIndex")
      ->packByte(self.command->commandToInt, "command")

    switch self.data {
    | PoseValue(pose) => writer->packByte(pose, "pose")
    | Item({itemId, stack, prefix}) =>
      writer
      ->packUInt16(itemId, "itemId")
      ->packUInt16(stack, "stack")
      ->packByte(prefix, "prefix")
    }
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
