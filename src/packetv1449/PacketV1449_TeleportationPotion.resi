@genType
type teleportType =
  | TeleportationPotion
  | MagicConch
  | DemonConch
  | ShellphoneSpawn

@genType
type t = {teleportType: teleportType}

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>
