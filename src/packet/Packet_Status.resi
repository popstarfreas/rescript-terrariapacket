@genType
type flags = {
  hideStatusTextPercent: bool,
  statusTextHasShadows: bool,
  runCheckBytes: bool,
}

@genType
type t = {
  max: int,
  text: PacketFactory.NetworkText.t,
  flags: flags,
}

let parse: NodeJs.Buffer.t => option<t>
let toBuffer: t => NodeJs.Buffer.t
