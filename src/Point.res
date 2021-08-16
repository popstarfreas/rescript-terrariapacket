type t<'a> = {
  x: 'a,
  y: 'a,
}

module Int = {
  type t = t<int>
  let toString = (self: t) => `{ x: ${self.x->Belt.Int.toString}, y: ${self.y->Belt.Int.toString} }`
}

module Float = {
  type t = t<float>
  let toString = (self: t) =>
    `{ x: ${self.x->Belt.Float.toString}, y: ${self.y->Belt.Float.toString} }`
}
