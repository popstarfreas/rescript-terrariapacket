module Action = {
  type t =
    | KillTile
    | PlaceTile
    | KillWall
    | PlaceWall
    | KillTileNoItem
    | PlaceWire
    | KillWire
    | PoundTile
    | PlaceActuator
    | KillActuator
    | PlaceWire2
    | KillWire2
    | PlaceWire3
    | KillWire3
    | SlopeTile
    | FrameTrack
    | PlaceWire4
    | KillWire4
    | PokeLogicGate
    | Actuate
    | KillTile2
    | ReplaceTile
    | ReplaceWall
    | SlopePoundTile

  let fromInt = (action: int) =>
    switch action {
    | 0 => Some(KillTile)
    | 1 => Some(PlaceTile)
    | 2 => Some(KillWall)
    | 3 => Some(PlaceWall)
    | 4 => Some(KillTileNoItem)
    | 5 => Some(PlaceWire)
    | 6 => Some(KillWire)
    | 7 => Some(PoundTile)
    | 8 => Some(PlaceActuator)
    | 9 => Some(KillActuator)
    | 10 => Some(PlaceWire2)
    | 11 => Some(KillWire2)
    | 12 => Some(PlaceWire3)
    | 13 => Some(KillWire3)
    | 14 => Some(SlopeTile)
    | 15 => Some(FrameTrack)
    | 16 => Some(PlaceWire4)
    | 17 => Some(KillWire4)
    | 18 => Some(PokeLogicGate)
    | 19 => Some(Actuate)
    | 20 => Some(KillTile2)
    | 21 => Some(ReplaceTile)
    | 22 => Some(ReplaceWall)
    | 23 => Some(SlopePoundTile)
    | _ => None
    }

  let toInt = (action: t) =>
    switch action {
    | KillTile => 0
    | PlaceTile => 1
    | KillWall => 2
    | PlaceWall => 3
    | KillTileNoItem => 4
    | PlaceWire => 5
    | KillWire => 6
    | PoundTile => 7
    | PlaceActuator => 8
    | KillActuator => 9
    | PlaceWire2 => 10
    | KillWire2 => 11
    | PlaceWire3 => 12
    | KillWire3 => 13
    | SlopeTile => 14
    | FrameTrack => 15
    | PlaceWire4 => 16
    | KillWire4 => 17
    | PokeLogicGate => 18
    | Actuate => 19
    | KillTile2 => 20
    | ReplaceTile => 21
    | ReplaceWall => 22
    | SlopePoundTile => 23
    }
}

type t = {
  action: Action.t,
  tileX: int,
  tileY: int,
  value1: int,
  value2: int,
}

module Decode = {
  let {readInt16, readByte} = module(PacketFactory.PacketReader)
  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let action = reader->readByte->Action.fromInt
    let tileX = reader->readInt16
    let tileY = reader->readInt16
    let value1 = reader->readInt16
    let value2 = reader->readByte

    switch action {
    | Some(action) =>
      Some({
        action,
        tileX,
        tileY,
        value1,
        value2,
      })
    | None => None
    }
  }
}

module Encode = {
  let {packByte, packInt16, setType, data} = module(PacketFactory.ManagedPacketWriter)
  let toBuffer = (self: t): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.TileModify->PacketType.toInt)
    ->packByte(self.action->Action.toInt)
    ->packInt16(self.tileX)
    ->packInt16(self.tileY)
    ->packInt16(self.value1)
    ->packByte(self.value2)
    ->data
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
