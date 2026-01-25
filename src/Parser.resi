let parse: IParser.parse<Packet.t>
let parseLazy: IParser.parseLazy<Packet.LazyPacket.t>
type convertIfNeeded =
  | PacketStructureIsSame
  | ConvertedToLatestVersion(Packet.t)
let convertv1449IfNeeded: (
  ~buffer: NodeJs.Buffer.t,
  ~fromServer: bool,
) => result<convertIfNeeded, IParser.parseError>
