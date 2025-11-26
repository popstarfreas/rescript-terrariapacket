type t = int

let fromByte = byte => {
  byte
}

let fromFlags = (
  ~flag1: bool,
  ~flag2: bool,
  ~flag3: bool,
  ~flag4: bool,
  ~flag5: bool,
  ~flag6: bool,
  ~flag7: bool,
  ~flag8: bool,
) => {
  let byte = ref(0)
  byte := byte.contents ||| (flag1 ? 1 : 0)
  byte := byte.contents ||| (flag2 ? 2 : 0)
  byte := byte.contents ||| (flag3 ? 4 : 0)
  byte := byte.contents ||| (flag4 ? 8 : 0)
  byte := byte.contents ||| (flag5 ? 16 : 0)
  byte := byte.contents ||| (flag6 ? 32 : 0)
  byte := byte.contents ||| (flag7 ? 64 : 0)
  byte := byte.contents ||| (flag8 ? 128 : 0)
  byte.contents
}

let fromArray = (flags: array<bool>): t => {
  fromFlags(
    ~flag1=flags->ArrayExt.getOr(0, false),
    ~flag2=flags->ArrayExt.getOr(1, false),
    ~flag3=flags->ArrayExt.getOr(2, false),
    ~flag4=flags->ArrayExt.getOr(3, false),
    ~flag5=flags->ArrayExt.getOr(4, false),
    ~flag6=flags->ArrayExt.getOr(5, false),
    ~flag7=flags->ArrayExt.getOr(6, false),
    ~flag8=flags->ArrayExt.getOr(7, false),
  )
}

@inline
let flagN = (self: t, n: int): bool => {
  (self &&& n) === n
}
let flag1 = flagN(_, 1)
let flag2 = flagN(_, 2)
let flag3 = flagN(_, 4)
let flag4 = flagN(_, 8)
let flag5 = flagN(_, 16)
let flag6 = flagN(_, 32)
let flag7 = flagN(_, 64)
let flag8 = flagN(_, 128)

let forEach = (self: t, fn) => {
  fn(self->flag1)
  fn(self->flag2)
  fn(self->flag3)
  fn(self->flag4)
  fn(self->flag5)
  fn(self->flag6)
  fn(self->flag7)
  fn(self->flag8)
}

let toByte = (self: t) => self
