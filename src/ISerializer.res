type serialize<'a> = (~parsed: IParser.parsed<'a>, ~fromServer: bool) => option<NodeJs.Buffer.t>
