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
  byte := byte.contents->lor(flag1 ? 1 : 0)
  byte := byte.contents->lor(flag2 ? 2 : 0)
  byte := byte.contents->lor(flag3 ? 4 : 0)
  byte := byte.contents->lor(flag4 ? 8 : 0)
  byte := byte.contents->lor(flag5 ? 16 : 0)
  byte := byte.contents->lor(flag6 ? 32 : 0)
  byte := byte.contents->lor(flag7 ? 64 : 0)
  byte := byte.contents->lor(flag8 ? 128 : 0)
  byte.contents
}
@inline
let flagN = (self: t, n: int): bool => {
  self->land(n) === n
}
let flag1 = flagN(_, 1)
let flag2 = flagN(_, 2)
let flag3 = flagN(_, 4)
let flag4 = flagN(_, 8)
let flag5 = flagN(_, 16)
let flag6 = flagN(_, 32)
let flag7 = flagN(_, 64)
let flag8 = flagN(_, 128)

let toByte = (self: t) => self
