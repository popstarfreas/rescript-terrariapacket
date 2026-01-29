open Zora

zoraBlock("should correctly parse PiggyBankVoidLensUpdate", t => {
  let data = NodeJs.Buffer.fromStringWithEncoding("08008e01ffffffff", NodeJs.StringEncoding.hex)
  let v = PacketV1449_PiggyBankVoidLensUpdate.parse(data)
  switch v {
  | Ok(v) => t->ignoreValue(v)
  | Error(e) => {
      Console.log(e)
      t->fail
    }
  }
})
