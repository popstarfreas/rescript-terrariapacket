let intoChunks = (self: array<'a>, ~chunkSize: int): array<array<'a>> => {
  let chunkSizeF = Float.fromInt(chunkSize)
  let chunked = []
  let len = Float.fromInt(Array.length(self))
  let max = Math.ceil(len /. chunkSizeF)->Int.fromFloat - 1
  for i in 0 to max {
    self
    ->Array.slice(~start=i * chunkSize, ~end=(i + 1) * chunkSize)
    ->Array.push(chunked, _)
  }
  chunked
}

let getOr = (self: array<'a>, index: int, or: 'a): 'a => {
  self[index]->Option.getOr(or)
}
