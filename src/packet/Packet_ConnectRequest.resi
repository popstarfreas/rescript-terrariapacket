type t = {version: string}
let parse: NodeJs.Buffer.t => option<t>
let toBuffer: t => NodeJs.Buffer.t
