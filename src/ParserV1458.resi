let parse: (
  ~buffer: NodeJs.Buffer.t,
  ~fromServer: bool,
  ~ignore: array<PacketTypeV1458.t>=?,
) => result<PacketV1458.t, IParser.parseError>
let parseLazy: (
  ~buffer: NodeJs.Buffer.t,
  ~fromServer: bool,
) => result<PacketV1458.LazyPacket.t, IParser.parseError>
