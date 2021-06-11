// When parsing a packet, it is sometimes necessary to note that the packet as read is not the same
// as what is in the buffer, due to 
type parsed<'a> =
  | ShouldSerialize('a) // The packet as parsed was modified in some way from the original buffer
  | SerializeNotNecessary('a, NodeJs.Buffer.t) // The buffer is equivalent to the parsed data
type parse<'a> = (~buffer: NodeJs.Buffer.t, ~fromServer: bool) => option<parsed<'a>>
