@genType
type t<'a> = {
  x: 'a,
  y: 'a,
}

module Int = {
  @genType
  type t = t<int>
  let toString = (self: t) => `{ x: ${self.x->Belt.Int.toString}, y: ${self.y->Belt.Int.toString} }`
}

module Float = {
  @genType
  type t = t<float>
  let toString = (self: t) =>
    `{ x: ${self.x->Belt.Float.toString}, y: ${self.y->Belt.Float.toString} }`
}
