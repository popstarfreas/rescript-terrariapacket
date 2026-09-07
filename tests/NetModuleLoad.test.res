open Zora

let convertFromV1449 = hex =>
  ParserConverter.convertFromV1449IfNeeded(
    ~buffer=NodeJs.Buffer.fromStringWithEncoding(hex, NodeJs.StringEncoding.hex),
    ~fromServer=true,
  )

let assertReaderError = (result, t, ~expectedContext, ~expectedMessage) =>
  switch result {
  | Ok(_) => t->fail(~msg="Expected parse error")
  | Error(IParser.ParseError.ReaderError({context, error})) => {
      t->equal(context, expectedContext)
      let message =
        switch JsExn.message(error) {
        | Some(message) => message
        | None => ""
        }
      t->equal(message, expectedMessage)
    }
  | Error(err) => t->fail(~msg=IParser.ParseError.toDisplayString(err))
  }

let assertConvertsToLatestParticles = (result, t) =>
  switch result {
  | Ok(ParserConverter.ConvertedToLatestVersion(
      Packet.NetModuleLoad(PacketV1457_NetModuleLoad.Particles(_)),
    )) =>
    t->ok(true)
  | Ok(_) => t->fail(~msg="Expected ConvertedToLatestVersion(NetModuleLoad(Particles))")
  | Error(err) => t->fail(~msg=IParser.ParseError.toDisplayString(err))
  }

zoraBlock("should correctly parse and serialise NetModuleLoad", t => {
  let data: PacketV1457_NetModuleLoad.t = PacketV1457_NetModuleLoad.ServerText(
    255,
    PacketFactory.NetworkText.make(
      2,
      "DeathText.Fell_6",
      ~substitutionList=[PacketFactory.NetworkText.make(0, "[c/cccccc:Rofle][c/808080:#01]")],
    ),
    {\"R": 225, \"G": 25, \"B": 25},
  )

  let result = PacketV1457_NetModuleLoad.toBuffer(data)

  if result->Result.isError {
    t->fail(~msg="Failed to serialise NetModuleLoad")
  }

  let result = result->Result.getOrThrow->PacketV1457_NetModuleLoad.parse(~fromServer=true)
  switch result {
  | Ok(data2) => t->equal(data, data2)
  | Error(err) => t->fail(~msg=JsExn.message(err.error)->Option.getOrThrow)
  }
})

zoraBlock("ParserConverter shows moduleType=7 packets fail as CreativeUnlocksPlayerReport truncation", t => {
  let buffers = [
    "0900520700e60d0300",
    "09005207001c040300",
    "090052070012040300",
    "090052070036090100",
  ]

  buffers->Array.forEach(hex => {
    convertFromV1449(hex)->assertReaderError(
      t,
      ~expectedContext="Packet NetModuleLoad: researchedCount",
      ~expectedMessage={
        "The value of \"offset\" is out of range. It must be >= 0 and <= 7. Received 8"
      },
    )
  })
})

zoraBlock("ParserConverter treats moduleType=9 packets as Particles (no creative permission error)", t => {
  let buffers = [
    "1b0052090023981d844700189b46000000430000803f0000000000",
    "1b00520900237381834700989d46000000430000803f0000000000",
    "1b0052090023e87d834700189f46000000430000803f0000000000",
  ]

  buffers->Array.forEach(hex => {
    convertFromV1449(hex)->assertConvertsToLatestParticles(t)
  })
})

zoraBlock("should correctly parse and serialise NetModuleLoad (CreativePowerPermissions)", t => {
  let result = PacketV1449_NetModuleLoad.parse(
    NodeJs.Buffer.fromStringWithEncoding(
      "1b0052090004d814d9471a5cd34500000000000000000000000008",
      NodeJs.StringEncoding.hex,
    ),
    ~fromServer=true,
  )

  if result->Result.isError {
    t->fail(~msg="Failed to serialise NetModuleLoad")
  }

  switch result {
  | Ok(data2) => t->ignoreValue(data2)
  | Error(err) => t->fail(~msg=JsExn.message(err.error)->Option.getOrThrow)
  }
})

zoraBlock("should correctly parse and serialise NetModuleLoad (CreativePowerPermissions 2)", t => {
  let result = ParserConverter.convertFromV1449IfNeeded(
    ~buffer=NodeJs.Buffer.fromStringWithEncoding(
      "1b0052090004d814d9471a5cd34500000000000000000000000008",
      NodeJs.StringEncoding.hex,
    ),
    ~fromServer=true,
  )
  if result->Result.isError {
    t->fail(~msg="Failed to serialise NetModuleLoad")
  }

  switch result {
  | Ok(data2) =>
    switch data2 {
    | ConvertedToLatestVersion(packet) =>
      switch packet->Packet.toBuffer(true) {
      | Ok(buffer) => Console.log(buffer)
      | NotImplemented => t->fail(~msg="NotImplemented")
      | Error(err) => t->fail(~msg=JsExn.message(err.error)->Option.getOrThrow)
      }
    | _ => ()
    }
  | Error(err) => {
      t->fail(~msg="error")
      Console.log(err)
    }
  }
})
