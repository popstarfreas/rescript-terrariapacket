let parse: IParser.parse<Packet.t>
let parseLazy: IParser.parseLazy<Packet.LazyPacket.t>
type convertIfNeeded =
  | PacketStructureIsSame
  | ConvertedToLatestVersion(Packet.t)
let convertFromV1449IfNeeded: (
  ~buffer: NodeJs.Buffer.t,
  ~fromServer: bool,
) => result<convertIfNeeded, IParser.parseError>
type convertToV1449IfNeeded =
  | PacketStructureIsSame
  | ConvertedToV1449(PacketV1449.t)
  | DiscardAsNotExists
let convertToV1449IfNeeded: (
  ~buffer: NodeJs.Buffer.t,
  ~fromServer: bool,
) => result<convertToV1449IfNeeded, IParser.parseError>
