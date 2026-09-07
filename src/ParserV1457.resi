let parse: (
  ~buffer: NodeJs.Buffer.t,
  ~fromServer: bool,
  ~ignore: array<PacketTypeV1457.t>=?,
) => result<PacketV1457.t, IParser.parseError>
let parseLazy: (
  ~buffer: NodeJs.Buffer.t,
  ~fromServer: bool,
) => result<PacketV1457.LazyPacket.t, IParser.parseError>
