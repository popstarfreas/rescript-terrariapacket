// When parsing a packet, it is sometimes necessary to note that the packet as read is not the same
// as what is in the buffer, due to packet conversions. This is only true when we combine a parser with
// a conversion
@genType
type parsed<'a> =
  | ShouldSerialize('a) // The packet as parsed was modified in some way from the original buffer
  | SerializeNotNecessary('a, NodeJs.Buffer.t) // The buffer is equivalent to the parsed data
@genType
type parse<'a> = (~buffer: NodeJs.Buffer.t, ~fromServer: bool) => option<parsed<'a>>
// Serializtion is not considered for now for simplicity
@genType
type parseLazy<'a> = (~buffer: NodeJs.Buffer.t, ~fromServer: bool) => option<'a>
