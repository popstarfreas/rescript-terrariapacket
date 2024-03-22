type ip = string
type dimensionName = string
type port = int

@genType
type t =
  | RealIpAddress(ip)
  | GamemodesJoinMode
  | SwitchServer(dimensionName)
  | SwitchServerManual(ip, port)

module UpdateType: {
  @genType
  type t =
    | RealIpAddress
    | GamemodesJoinMode
    | SwitchServer
    | SwitchServerManual

  let toInt: t => int

  let fromInt: int => option<t>
}

let parse: NodeJs.Buffer.t => option<t>
let toBuffer: t => NodeJs.Buffer.t
