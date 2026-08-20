@genType
type t = {
  spawner: int,
  index: int,
  generation: int,
}

let fromInt = bits => {
  spawner: Int.bitwiseAnd(bits, 0xff),
  index: Int.bitwiseAnd(Int.shiftRightUnsigned(bits, 8), 0x3ff),
  generation: Int.bitwiseAnd(Int.shiftRightUnsigned(bits, 18), 0x3fff),
}

let toInt = (self: t) =>
  Int.bitwiseOr(
    Int.bitwiseAnd(self.spawner, 0xff),
    Int.bitwiseOr(
      Int.shiftLeft(Int.bitwiseAnd(self.index, 0x3ff), 8),
      Int.shiftLeft(Int.bitwiseAnd(self.generation, 0x3fff), 18),
    ),
  )
