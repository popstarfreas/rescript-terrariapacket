@genType
type teleportType =
  | TeleportationPotion
  | MagicConch
  | DemonConch
  | ShellphoneSpawn

@genType
let parse: NodeJs.Buffer.t => result<t, ErrorAwarePacketReader.readError>
@genType
let toBuffer: t => result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>

