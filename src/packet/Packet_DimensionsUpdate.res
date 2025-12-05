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
  let {readString, readUInt16, readInt16} = module(ErrorAwarePacketReader)

  let parseRealIpAddress = reader => {
    let? Ok(ip) = reader->readString("ip")
    Ok(RealIpAddress(ip))
  }

  // Not Fully Supported
  let parseGamemodesJoinMode = _reader => Ok(GamemodesJoinMode)

  let parseSwitchServer = reader => {
    let? Ok(dimensionName) = reader->readString("dimensionName")
    Ok(SwitchServer(dimensionName))
  }

  let parseSwitchServerManual = reader => {
    let? Ok(ip) = reader->readString("ip")
    let? Ok(port) = reader->readUInt16("port")
    Ok(SwitchServerManual(ip, port))
  }

  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(updateType) = reader->readInt16("updateType")
    switch updateType->UpdateType.fromInt {
    | Some(RealIpAddress) => parseRealIpAddress(reader)
    | Some(GamemodesJoinMode) => parseGamemodesJoinMode(reader)
    | Some(SwitchServer) => parseSwitchServer(reader)
    | Some(SwitchServerManual) => parseSwitchServerManual(reader)
    | None =>
      Error({
        context: "DimensionsUpdate.parse.updateType",
        error: JsError.make("Unknown updateType")->JsError.toJsExn,
      })
    }
  }
}

module Encode = {
  let {packString, packInt16, packUInt16, setType, data} = module(ErrorAwarePacketWriter)

  let realIpAddressToBuffer = (ip: string): result<
    NodeJs.Buffer.t,
    ErrorAwarePacketWriter.packError,
  > => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.DimensionsUpdate->PacketType.toInt)
    ->packInt16(UpdateType.RealIpAddress->UpdateType.toInt, "updateType")
    ->packString(ip, "ip")
    ->data
  }

  // Not Supported
  let gamemodesJoinModeToBuffer = (): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.DimensionsUpdate->PacketType.toInt)
    ->packInt16(UpdateType.GamemodesJoinMode->UpdateType.toInt, "updateType")
    ->data
  }

  let switchServerToBuffer = (dimensionName: string): result<
    NodeJs.Buffer.t,
    ErrorAwarePacketWriter.packError,
  > => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.DimensionsUpdate->PacketType.toInt)
    ->packInt16(UpdateType.SwitchServer->UpdateType.toInt, "updateType")
    ->packString(dimensionName, "dimensionName")
    ->data
  }

  let switchServerManualToBuffer = (ip: string, port: int): result<
    NodeJs.Buffer.t,
    ErrorAwarePacketWriter.packError,
  > => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.DimensionsUpdate->PacketType.toInt)
    ->packInt16(UpdateType.SwitchServerManual->UpdateType.toInt, "updateType")
    ->packString(ip, "ip")
    ->packUInt16(port, "port")
    ->data
  }

  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
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
