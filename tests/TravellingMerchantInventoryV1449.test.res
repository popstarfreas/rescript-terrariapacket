open Zora

zoraBlock("should correctly parse TravellingMerchantInventory", t => {
  let data = NodeJs.Buffer.fromStringWithEncoding(
    "530048d408d508d608d111c511310e360e4411a608da087a1400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    NodeJs.StringEncoding.hex,
  )
  let v = PacketV1456_TravellingMerchantInventory.parse(data)
  switch v {
  | Ok(v) => t->ignoreValue(v)
  | Error(e) => {
      Console.log(e)
      t->fail
    }
  }
})
