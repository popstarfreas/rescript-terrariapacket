type t<'a> = array<'a>

let fromArray = (a: array<'a>): option<t<'a>> => {
  if Array.length(a) == 16 {
    Some(a)
  } else {
    None
  }
}

let fromBitFlagsPair = (a: BitFlags.t, b: BitFlags.t): t<bool> => {
  let array = Array.make(~length=16, false)
  array->Array.setUnsafe(0, a->BitFlags.flag1)
  array->Array.setUnsafe(1, a->BitFlags.flag2)
  array->Array.setUnsafe(2, a->BitFlags.flag3)
  array->Array.setUnsafe(3, a->BitFlags.flag4)
  array->Array.setUnsafe(4, a->BitFlags.flag5)
  array->Array.setUnsafe(5, a->BitFlags.flag6)
  array->Array.setUnsafe(6, a->BitFlags.flag7)
  array->Array.setUnsafe(7, a->BitFlags.flag8)
  array->Array.setUnsafe(8, b->BitFlags.flag1)
  array->Array.setUnsafe(9, b->BitFlags.flag2)
  array->Array.setUnsafe(10, b->BitFlags.flag3)
  array->Array.setUnsafe(11, b->BitFlags.flag4)
  array->Array.setUnsafe(12, b->BitFlags.flag5)
  array->Array.setUnsafe(13, b->BitFlags.flag6)
  array->Array.setUnsafe(14, b->BitFlags.flag7)
  array->Array.setUnsafe(15, b->BitFlags.flag8)
  array
}

let toBitFlagsPair = (self: t<bool>): (BitFlags.t, BitFlags.t) => {
  let a = BitFlags.fromArray(Array.slice(self, ~start=0, ~end=8))
  let b = BitFlags.fromArray(Array.slice(self, ~start=8, ~end=16))
  (a, b)
}

let asArray = (self: t<'a>): array<'a> => {
  self
}
