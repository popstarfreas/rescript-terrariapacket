open Zora

zoraBlock("should correctly parse PlayerSpawn (2)", t => {
  let data = NodeJs.Buffer.fromStringWithEncoding(
    "12000c00ffffffff00000000000000000109",
    NodeJs.StringEncoding.hex,
  )
  let result = Parser.parse(~buffer=data, ~fromServer=false)
  switch result {
  | Ok(_) => t->ok(true)
  | Error(err) => {
      Console.log(err)
      t->fail
    }
  }
})
