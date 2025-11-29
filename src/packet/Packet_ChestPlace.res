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

let makeError = (_message: string): JsExn.t => %raw("new Error(_message)")

module Decode = {
  let {readInt16, readByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(actionRaw) = reader->readByte("action")
    let? Ok(x) = reader->readInt16("x")
    let? Ok(y) = reader->readInt16("y")
    let? Ok(style) = reader->readInt16("style")
    let? Ok(id) = reader->readInt16("id")

    let action =
      switch actionRaw->Action.fromInt {
      | Some(action) => Ok(action)
      | None =>
        Error({
          ErrorAwarePacketReader.context: "ChestPlace.parse.action",
          error: makeError("Unknown action"),
        })
      }

    switch action {
    | Ok(action) =>
      Ok({
        action,
        x,
        y,
        style,
        id,
      })
    | Error(err) => Error(err)
    }
  }
}

module Encode = {
  module Writer = ErrorAwarePacketWriter
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
    writer->packByte(byte, "action")
  }
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    Writer.make()
    ->setType(PacketType.ChestPlace->PacketType.toInt)
    ->packAction(self.action)
    ->packInt16(self.x, "x")
    ->packInt16(self.y, "y")
    ->packInt16(self.style, "style")
    ->packInt16(self.id, "id")
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
