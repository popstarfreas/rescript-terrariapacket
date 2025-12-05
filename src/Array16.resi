@genType
type t<'a>

@genType
let fromArray: array<'a> => option<t<'a>>
@genType
let asArray: t<'a> => array<'a>
let fromBitFlagsPair: (BitFlags.t, BitFlags.t) => t<bool>
let toBitFlagsPair: t<bool> => (BitFlags.t, BitFlags.t)
