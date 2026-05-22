type ip = string
type dimensionName = string
type port = int

type switchServerManual = {
  serverName: option<string>,
  ip: ip,
  port: port,
}

type t =
  | RealIpAddress(ip)
  | GamemodesJoinMode
  | SwitchServer(dimensionName)
  | SwitchServerManual(switchServerManual)

module UpdateType: {
  type t =
    | RealIpAddress
    | GamemodesJoinMode
    | SwitchServer
    | SwitchServerManual

  let toInt: t => int

  let fromInt: int => option<t>
}

let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
