@genType
type teleportType =
  | TeleportationPotion
  | MagicConch
  | DemonConch
  | ShellphoneSpawn

let teleportTypeToInt = teleportType =>
  switch teleportType {
  | TeleportationPotion => 0
  | MagicConch => 1
  | DemonConch => 2
  | ShellphoneSpawn => 3
  }

@genType
type t = {teleportType: teleportType}

module Decode = {
  let {readByte, readInt16} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(rawTeleportType) = reader->readByte("teleportType")
    switch rawTeleportType {
    | 0 => Ok({teleportType: TeleportationPotion})
    | 1 => Ok({teleportType: MagicConch})
    | 2 => Ok({teleportType: DemonConch})
    | 3 => Ok({teleportType: ShellphoneSpawn})
    | _ =>
      Error({
        context: "Packet_TeleportationPotion.parse",
        error: JsError.make("Unknown teleport type")->JsError.toJsExn,
      })
    }
  }
}

module Encode = {
  module Writer = ErrorAwarePacketWriter
  let {packByte, packInt16, setType, data} = module(Writer)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    Writer.make()
    ->setType(PacketType.TeleportationPotion->PacketType.toInt)
    ->packByte(teleportTypeToInt(self.teleportType), "teleportType")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
