let allOkOrError = (results: array<result<'a, 'b>>): result<array<'a>, 'b> => {
  let rec processEntry = (good, entriesLeft) => {
    switch entriesLeft {
    | list{} => Ok(good->Belt.List.toArray)
    | list{entry, ...more} =>
      switch entry {
      | Ok(value) => processEntry(list{value, ...good}, more)
      | Error(_) as error => error
      }
    }
  }

  processEntry(list{}, results->Belt.List.fromArray)
}
