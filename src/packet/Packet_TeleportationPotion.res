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
  let {readByte, readInt16} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let teleportType = switch reader->readByte {
    | 0 => Some(TeleportationPotion)
    | 1 => Some(MagicConch)
    | 2 => Some(DemonConch)
    | 3 => Some(ShellphoneSpawn)
    | _ => None
    }
    switch teleportType {
    | Some(teleportType) =>
      Some({
        teleportType: teleportType,
      })
    | None => None
    }
  }
}

module Encode = {
  module Writer = PacketFactory.ManagedPacketWriter
  let {packByte, packInt16, setType, data} = module(Writer)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    Writer.make()
    ->setType(PacketType.TeleportationPotion->PacketType.toInt)
    ->packByte(teleportTypeToInt(self.teleportType))
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
