type toBufferResult =
  | Ok(NodeJs.Buffer.t)
  | NotImplemented
  | Error(ErrorAwarePacketWriter.packError)

let toBufferResult = (
  result: result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError>,
): toBufferResult => {
  switch result {
  | Ok(buffer) => Ok(buffer)
  | Error(error) => Error(error)
  }
}

type serialize<'a> = (~parsed: 'a, ~fromServer: bool) => toBufferResult
