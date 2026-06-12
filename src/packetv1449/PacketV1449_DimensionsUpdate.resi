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

module UpdateType: {
  type t =
    | RealIpAddress
    | GamemodesJoinMode
    | SwitchServer
    | SwitchServerManual
    | RttUpdate

  let toInt: t => int

  let fromInt: int => option<t>
}

let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
