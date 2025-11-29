type direction = Left | Right

type t = {
  x: int,
  y: int,
  objectType: int,
  style: int,
  alternate: int,
  random: int,
  direction: direction,
}

let makeError = (_message: string): JsExn.t => %raw("new Error(_message)")

module Decode = {
  let {readInt16, readByte, readSByte} = module(ErrorAwarePacketReader)
  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(x) = reader->readInt16("x")
    let? Ok(y) = reader->readInt16("y")
    let? Ok(objectType) = reader->readInt16("objectType")
    let? Ok(style) = reader->readInt16("style")
    let? Ok(alternate) = reader->readByte("alternate")
    let? Ok(random) = reader->readSByte("random")
    let? Ok(directionRaw) = reader->readByte("direction")
    let direction =
      switch directionRaw {
      | 0 => Ok(Left)
      | 1 => Ok(Right)
      | _ =>
        Error({
          ErrorAwarePacketReader.context: "ObjectPlace.parse.direction",
          error: makeError("Unknown direction"),
        })
      }
    switch direction {
    | Ok(direction) =>
      Ok({
        x,
        y,
        objectType,
        style,
        alternate,
        random,
        direction,
      })
    | Error(err) => Error(err)
    }
  }
}

module Encode = {
  module Writer = ErrorAwarePacketWriter
  let {packByte, packInt16, packSByte, setType, data} = module(Writer)
  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    Writer.make()
    ->setType(PacketType.ObjectPlace->PacketType.toInt)
    ->packInt16(self.x, "x")
    ->packInt16(self.y, "y")
    ->packInt16(self.objectType, "objectType")
    ->packInt16(self.style, "style")
    ->packByte(self.alternate, "alternate")
    ->packSByte(self.random, "random")
    ->packByte(
      switch self.direction {
      | Left => 0
      | Right => 1
      },
      "direction",
    )
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
