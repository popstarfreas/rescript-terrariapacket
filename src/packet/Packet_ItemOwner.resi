@genType
type t = {
  itemDropId: int,
  owner: int,
}
@genType
let parse: NodeJs.Buffer.t => option<t>
@genType
let toBuffer: t => NodeJs.Buffer.t
