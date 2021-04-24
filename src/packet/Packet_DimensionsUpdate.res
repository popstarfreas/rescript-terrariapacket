type ip = string
type dimensionName = string
type port = int

type t =
  | RealIpAddress(ip)
  | GamemodesJoinMode
  | SwitchServer(dimensionName)
  | SwitchServerManual(ip, port)

module UpdateType = {
  type t =
    | RealIpAddress
    | GamemodesJoinMode
    | SwitchServer
    | SwitchServerManual

  let toInt = self =>
    switch self {
    | RealIpAddress => 0
    | GamemodesJoinMode => 1
    | SwitchServer => 2
    | SwitchServerManual => 3
    }

  let fromInt = n =>
    switch n {
    | 0 => Some(RealIpAddress)
    | 1 => Some(GamemodesJoinMode)
    | 2 => Some(SwitchServer)
    | 3 => Some(SwitchServerManual)
    | _ => None
    }
}

module Decode = {
  let {readString, readUInt16, readInt16} = module(
    PacketFactory.PacketReader
  )

  let parseRealIpAddress = reader => {
    let ip = reader->readString
    Some(RealIpAddress(ip))
  }

  // Not Fully Supported
  let parseGamemodesJoinMode = _reader => Some(GamemodesJoinMode)

  let parseSwitchServer = reader => {
    let dimensionName = reader->readString
    Some(SwitchServer(dimensionName))
  }

  let parseSwitchServerManual = reader => {
    let ip = reader->readString
    let port = reader->readUInt16
    Some(SwitchServerManual(ip, port))
  }

  let parse = (payload: NodeJs.Buffer.t) => {
    let reader = PacketFactory.PacketReader.make(payload)
    let updateType = reader->readInt16
    switch updateType->UpdateType.fromInt {
    | Some(RealIpAddress) => parseRealIpAddress(reader)
    | Some(GamemodesJoinMode) => parseGamemodesJoinMode(reader)
    | Some(SwitchServer) => parseSwitchServer(reader)
    | Some(SwitchServerManual) => parseSwitchServerManual(reader)
    | None => None
    }
  }
}

module Encode = {
  let {packString, packInt16, packUInt16, setType, data} = module(PacketFactory.ManagedPacketWriter)

  let realIpAddressToBuffer = (ip: string): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.DimensionsUpdate->PacketType.toInt)
    ->packInt16(UpdateType.RealIpAddress->UpdateType.toInt)
    ->packString(ip)
    ->data
  }

  // Not Supported
  let gamemodesJoinModeToBuffer = (): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.DimensionsUpdate->PacketType.toInt)
    ->packInt16(UpdateType.GamemodesJoinMode->UpdateType.toInt)
    ->data
  }

  let switchServerToBuffer = (dimensionName: string): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.DimensionsUpdate->PacketType.toInt)
    ->packInt16(UpdateType.SwitchServer->UpdateType.toInt)
    ->packString(dimensionName)
    ->data
  }

  let switchServerManualToBuffer = (ip: string, port: int): NodeJs.Buffer.t => {
    PacketFactory.ManagedPacketWriter.make()
    ->setType(PacketType.DimensionsUpdate->PacketType.toInt)
    ->packInt16(UpdateType.SwitchServerManual->UpdateType.toInt)
    ->packString(ip)
    ->packUInt16(port)
    ->data
  }

  let toBuffer = (self: t): NodeJs.Buffer.t => {
    switch self {
    | RealIpAddress(ip) => realIpAddressToBuffer(ip)
    | GamemodesJoinMode => gamemodesJoinModeToBuffer()
    | SwitchServer(dimensionName) => switchServerToBuffer(dimensionName)
    | SwitchServerManual(ip, port) => switchServerManualToBuffer(ip, port)
    }
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
