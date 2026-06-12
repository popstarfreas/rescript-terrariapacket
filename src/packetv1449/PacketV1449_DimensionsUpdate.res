type ip = string
type dimensionName = string
type port = int

type switchServerManual = {
  serverName: option<string>,
  ip: ip,
  port: port,
}

type rttUpdate = {
  playerId: int,
  clientRttMicros: int,
  serverRttMicros: int,
  overallRttMicros: int,
  updatedAt: NodeJs.BigInt.t,
}

type t =
  | RealIpAddress(ip)
  | GamemodesJoinMode
  | SwitchServer(dimensionName)
  | SwitchServerManual(switchServerManual)
  | RttUpdate(rttUpdate)

module UpdateType = {
  type t =
    | RealIpAddress
    | GamemodesJoinMode
    | SwitchServer
    | SwitchServerManual
    | RttUpdate

  let toInt = self =>
    switch self {
    | RealIpAddress => 0
    | GamemodesJoinMode => 1
    | SwitchServer => 2
    | SwitchServerManual => 3
    | RttUpdate => 6
    }

  let fromInt = n =>
    switch n {
    | 0 => Some(RealIpAddress)
    | 1 => Some(GamemodesJoinMode)
    | 2 => Some(SwitchServer)
    | 3 => Some(SwitchServerManual)
    | 6 => Some(RttUpdate)
    | _ => None
    }
}

module Decode = {
  let {readString, readUInt16, readInt16, readByte, readInt32, readUInt64} = module(ErrorAwarePacketReader)

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
    let? Ok(serverName) = switch reader->ErrorAwarePacketReader.getBytesLeft {
    | Ok(bytesLeft) if bytesLeft > 0 => reader->readString("serverName")->Result.map(v => Some(v))
    | Ok(_) => Ok(None)
    | Error(error) => Error(error)
    }
    Ok(SwitchServerManual({ip, port, serverName}))
  }

  let parseRttUpdate = reader => {
    let? Ok(playerId) = reader->readByte("playerId")
    let? Ok(clientRttMicros) = reader->readInt32("clientRttMicros")
    let? Ok(serverRttMicros) = reader->readInt32("serverRttMicros")
    let? Ok(overallRttMicros) = reader->readInt32("overallRttMicros")
    let? Ok(updatedAt) = reader->readUInt64("updatedAt")
    Ok(RttUpdate({playerId, clientRttMicros, serverRttMicros, overallRttMicros, updatedAt}))
  }

  let parse = (payload: NodeJs.Buffer.t): result<t, ErrorAwarePacketReader.readError> => {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(updateType) = reader->readInt16("updateType")
    switch updateType->UpdateType.fromInt {
    | Some(RealIpAddress) => parseRealIpAddress(reader)
    | Some(GamemodesJoinMode) => parseGamemodesJoinMode(reader)
    | Some(SwitchServer) => parseSwitchServer(reader)
    | Some(SwitchServerManual) => parseSwitchServerManual(reader)
    | Some(RttUpdate) => parseRttUpdate(reader)
    | None =>
      Error({
        context: "DimensionsUpdate.parse.updateType",
        error: JsError.make("Unknown updateType")->JsError.toJsExn,
      })
    }
  }
}

module Encode = {
  let {packString, packInt16, packUInt16, packByte, packInt32, packUInt64, setType, data} = module(ErrorAwarePacketWriter)

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

  let switchServerManualToBuffer = (ip: string, port: int, serverName: option<string>): result<
    NodeJs.Buffer.t,
    ErrorAwarePacketWriter.packError,
  > => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.DimensionsUpdate->PacketType.toInt)
    ->packInt16(UpdateType.SwitchServerManual->UpdateType.toInt, "updateType")
    ->packString(ip, "ip")
    ->packUInt16(port, "port")
    ->switch serverName {
    | Some(serverName) => packString(_, serverName, "serverName")
    | None => writer => writer
    }
    ->data
  }

  let rttUpdateToBuffer = (rttUpdate: rttUpdate): result<
    NodeJs.Buffer.t,
    ErrorAwarePacketWriter.packError,
  > => {
    ErrorAwarePacketWriter.make()
    ->setType(PacketType.DimensionsUpdate->PacketType.toInt)
    ->packInt16(UpdateType.RttUpdate->UpdateType.toInt, "updateType")
    ->packByte(rttUpdate.playerId, "playerId")
    ->packInt32(rttUpdate.clientRttMicros, "clientRttMicros")
    ->packInt32(rttUpdate.serverRttMicros, "serverRttMicros")
    ->packInt32(rttUpdate.overallRttMicros, "overallRttMicros")
    ->packUInt64(rttUpdate.updatedAt, "updatedAt")
    ->data
  }

  let toBuffer = (self: t): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
    switch self {
    | RealIpAddress(ip) => realIpAddressToBuffer(ip)
    | GamemodesJoinMode => gamemodesJoinModeToBuffer()
    | SwitchServer(dimensionName) => switchServerToBuffer(dimensionName)
    | SwitchServerManual({ip, port, serverName}) => switchServerManualToBuffer(ip, port, serverName)
    | RttUpdate(rttUpdate) => rttUpdateToBuffer(rttUpdate)
    }
  }
}

let parse = Decode.parse
let toBuffer = Encode.toBuffer
