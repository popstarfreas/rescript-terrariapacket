type t
let fromByte: int => t
let fromFlags: (
  ~flag1: bool,
  ~flag2: bool,
  ~flag3: bool,
  ~flag4: bool,
  ~flag5: bool,
  ~flag6: bool,
  ~flag7: bool,
  ~flag8: bool,
) => t
let flag1: t => bool
let flag2: t => bool
let flag3: t => bool
let flag4: t => bool
let flag5: t => bool
let flag6: t => bool
let flag7: t => bool
let flag8: t => bool
let toByte: t => int
