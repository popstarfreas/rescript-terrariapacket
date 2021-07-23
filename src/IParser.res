// When parsing a packet, it is sometimes necessary to note that the packet as read is not the same
// as what is in the buffer, due to packet conversions. This is only true when we combine a parser with
// a conversion
type parsed<'a> =
  | ShouldSerialize('a) // The packet as parsed was modified in some way from the original buffer
  | SerializeNotNecessary('a, NodeJs.Buffer.t) // The buffer is equivalent to the parsed data
type parse<'a> = (~buffer: NodeJs.Buffer.t, ~fromServer: bool) => option<parsed<'a>>
// Lazy parsing is good when we need performance when a consumer is only reading a subset of packetsonly requiring
type parseLazy<'a> = (~buffer: NodeJs.Buffer.t, ~fromServer: bool) => Lazy.t<option<parsed<'a>>>
