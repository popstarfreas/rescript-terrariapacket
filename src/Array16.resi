@genType
type t<'a>

@genType
let fromArray: array<'a> => option<t<'a>>
@genType
let asArray: t<'a> => array<'a>
