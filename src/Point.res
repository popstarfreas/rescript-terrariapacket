@genType
type t<'a> = {
  x: 'a,
  y: 'a,
}

module Int = {
  @genType
  type t = t<int>
  let toString = (self: t) => `{ x: ${self.x->Int.toString}, y: ${self.y->Int.toString} }`
}

module Float = {
  @genType
  type t = t<float>
  let toString = (self: t) => `{ x: ${self.x->Float.toString}, y: ${self.y->Float.toString} }`
}
