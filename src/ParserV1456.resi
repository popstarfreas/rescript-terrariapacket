let parse: (
  ~buffer: NodeJs.Buffer.t,
  ~fromServer: bool,
  ~ignore: array<PacketTypeV1456.t>=?,
) => result<PacketV1456.t, IParser.parseError>
let parseLazy: (
  ~buffer: NodeJs.Buffer.t,
  ~fromServer: bool,
) => result<PacketV1456.LazyPacket.t, IParser.parseError>
