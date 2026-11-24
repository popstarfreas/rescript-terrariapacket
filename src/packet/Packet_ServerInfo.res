type endpoint = {address: string, port: int}
type t =
  | Request
  | Response({
      listenPort: int,
      worldName: string,
      hostName: string,
      maxTilesX: int,
      crimson: bool,
      gameMode: int,
      maxPlayers: int,
      activePlayers: int,
      description: string,
      externalEndpoint: option<endpoint>,
    })

let parse = (payload, fromServer): result<t, ErrorAwarePacketReader.readError> => {
  open ErrorAwarePacketReader
  if !fromServer {
    Ok(Request)
  } else {
    let reader = PacketFactory.PacketReader.make(payload)
    let? Ok(listenPort) = reader->readInt32("listenPort")
    let? Ok(worldName) = reader->readString("worldName")
    let? Ok(hostName) = reader->readString("hostName")
    let? Ok(maxTilesX) = reader->readUInt16("maxTilesX")
    let? Ok(crimson) = reader->readBool("crimson")
    let? Ok(gameMode) = reader->readInt32("gameMode")
    let? Ok(maxPlayers) = reader->readByte("maxPlayers")
    let? Ok(activePlayers) = reader->readByte("activePlayers")
    let? Ok(description) = reader->readString("description")
    let? Ok(portMapped) = reader->readBool("portMapped")
    let? Ok(externalEndpoint) = if portMapped {
      let? Ok(address) = reader->readString("externalAddress")
      let? Ok(port) = reader->readInt32("externalPort")
      Ok(Some({address, port}))
    } else {
      Ok(None)
    }
    Ok(
      Response({
        listenPort,
        worldName,
        hostName,
        maxTilesX,
        crimson,
        gameMode,
        maxPlayers,
        activePlayers,
        description,
        externalEndpoint,
      }),
    )
  }
}

let toBuffer = (self, fromServer): result<NodeJs.Buffer.t, ErrorAwarePacketWriter.packError> => {
  open ErrorAwarePacketWriter
  let writer = make()->setType(PacketType.ServerInfo->PacketType.toInt)
  switch (self, fromServer) {
  | (Request, false) => writer->data
  | (Response(info), true) =>
    let writer =
      writer
      ->packInt32(info.listenPort, "listenPort")
      ->packString(info.worldName, "worldName")
      ->packString(info.hostName, "hostName")
      ->packUInt16(info.maxTilesX, "maxTilesX")
      ->packBool(info.crimson, "crimson")
      ->packInt32(info.gameMode, "gameMode")
      ->packByte(info.maxPlayers, "maxPlayers")
      ->packByte(info.activePlayers, "activePlayers")
      ->packString(info.description, "description")
      ->packBool(info.externalEndpoint->Option.isSome, "portMapped")
    switch info.externalEndpoint {
    | None => writer->data
    | Some({address, port}) =>
      writer->packString(address, "externalAddress")->packInt32(port, "externalPort")->data
    }
  | _ =>
    Error({
      context: "ServerInfo",
      error: JsError.make("Invalid ServerInfo direction")->JsError.toJsExn,
    })
  }
}
