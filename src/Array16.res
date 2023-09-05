type t<'a> = array<'a>

let fromArray = (a: array<'a>): option<t<'a>> => {
  if Array.length(a) == 16 {
    Some(a)
  } else {
    None
  }
}

let asArray = (self: t<'a>): array<'a> => {
  self
}
