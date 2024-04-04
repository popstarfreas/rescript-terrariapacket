module Action = {
  type t =
    | PlaceChest
    | KillChest
    | PlaceDresser
    | KillDresser
    | PlaceContainer
    | KillContainer

  let toInt = action =>
    switch action {
    | PlaceChest => 0
    | KillChest => 1
    | PlaceDresser => 2
    | KillDresser => 3
    | PlaceContainer => 4
    | KillContainer => 5
    }

  let fromInt = action =>
    switch action {
    | 0 => Some(PlaceChest)
    | 1 => Some(KillChest)
    | 2 => Some(PlaceDresser)
    | 3 => Some(KillDresser)
    | 4 => Some(PlaceContainer)
    | 5 => Some(KillContainer)
    | _ => None
    }

  let toString = action =>
    switch action {
    | PlaceChest => "PlaceChest"
    | KillChest => "KillChest"
    | PlaceDresser => "PlaceDresser"
    | KillDresser => "KillDresser"
    | PlaceContainer => "PlaceContainer"
    | KillContainer => "KillContainer"
    }
}

type t = {
  action: Action.t,
  x: int,
  y: int,
  style: int,
  id: int,
}

module Decode = {
  let {readInt16, readByte} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let action = reader->readByte->Action.fromInt
    let x = reader->readInt16
    let y = reader->readInt16
    let style = reader->readInt16
    let id = reader->readInt16

    switch action {
    | Some(action) =>
      Some({
        action,
        x,
        y,
        style,
        id,
      })
    | None => None
    }
  }
}

module Encode = {
  module Writer = PacketFactory.ManagedPacketWriter
  let {packByte, packInt16, setType, data} = module(Writer)
  let packAction = (writer: Writer.t, action: Action.t): Writer.t => {
    let byte = switch action {
    | PlaceChest => 0
    | KillChest => 1
    | PlaceDresser => 2
    | KillDresser => 3
    | PlaceContainer => 4
    | KillContainer => 5
    }
    writer->packByte(byte)
  }
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    Writer.make()
    ->setType(PacketType.ChestPlace->PacketType.toInt)
    ->packAction(self.action)
    ->packInt16(self.x)
    ->packInt16(self.y)
    ->packInt16(self.style)
    ->packInt16(self.id)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
