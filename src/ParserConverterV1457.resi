type toLatestIfNeeded =
  | PacketStructureIsSame
  | ConvertedToLatest(Packet.t)
  | DiscardAsNotExists

type fromLatestIfNeeded =
  | PacketStructureIsSame
  | ConvertedFromLatest(PacketV1457.t)
  | DiscardAsNotExists

let convertToLatestIfNeeded: (
  ~buffer: NodeJs.Buffer.t,
  ~fromServer: bool,
) => result<toLatestIfNeeded, IParser.parseError>

let convertFromLatestIfNeeded: (
  ~buffer: NodeJs.Buffer.t,
  ~fromServer: bool,
) => result<fromLatestIfNeeded, IParser.parseError>
