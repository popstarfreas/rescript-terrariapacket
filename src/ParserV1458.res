let addPacketContext = (
  ~packetName,
  err: ErrorAwarePacketReader.readError,
): ErrorAwarePacketReader.readError => {
  context: "Packet " ++ packetName ++ ": " ++ err.context,
  error: err.error,
}

let mapPacket = (result, ~packetName, fn): result<PacketV1458.t, IParser.parseError> =>
  result
  ->Result.map(fn)
  ->Result.mapError(e => IParser.ParseError.ReaderError(addPacketContext(~packetName, e)))

type parsers = {
  parse: (NodeJs.Buffer.t, bool) => result<PacketV1458.t, IParser.parseError>,
  parseLazy: (NodeJs.Buffer.t, bool) => result<PacketV1458.LazyPacket.t, IParser.parseError>,
}

let makeParsers = (
  ~packetName: string,
  ~parse: NodeJs.Buffer.t => result<'a, ErrorAwarePacketReader.readError>,
  ~toPacket: 'a => PacketV1458.t,
  ~toLazyPacket: PacketV1458.LazyPacket.lazyParsed<'a> => PacketV1458.LazyPacket.t,
): parsers => {
  let parseWrapped = (payload, _fromServer) => parse(payload)->mapPacket(~packetName, toPacket)
  let parseLazyWrapped = (payload, _fromServer) => Ok(
    toLazyPacket(
      Lazy.make(() => parse(payload)->Result.mapError(e => addPacketContext(~packetName, e))),
    ),
  )
  {parse: parseWrapped, parseLazy: parseLazyWrapped}
}

let makeParsersWithFromServer = (
  ~packetName: string,
  ~parse: (NodeJs.Buffer.t, bool) => result<'a, ErrorAwarePacketReader.readError>,
  ~toPacket: 'a => PacketV1458.t,
  ~toLazyPacket: PacketV1458.LazyPacket.lazyParsed<'a> => PacketV1458.LazyPacket.t,
): parsers => {
  let parseWrapped = (payload, fromServer) =>
    parse(payload, fromServer)->mapPacket(~packetName, toPacket)
  let parseLazyWrapped = (payload, fromServer) => Ok(
    toLazyPacket(
      Lazy.make(() =>
        parse(payload, fromServer)->Result.mapError(e => addPacketContext(~packetName, e))
      ),
    ),
  )
  {parse: parseWrapped, parseLazy: parseLazyWrapped}
}

let getParsers = (packetType: PacketTypeV1458.t, fromServer: bool): result<
  parsers,
  IParser.parseError,
> => {
  let packetName = PacketTypeV1458.packetName(packetType)
  switch (packetType, fromServer) {
  | (ConnectRequest, true) => Error(ConnectRequestFromServer)
  | (ConnectRequest, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ConnectRequest.parse,
        ~toPacket=a => PacketV1458.ConnectRequest(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ConnectRequest(a),
      ),
    )
  | (Disconnect, false) => Error(DisconnectFromClient)
  | (Disconnect, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.Disconnect.parse,
        ~toPacket=a => PacketV1458.Disconnect(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.Disconnect(a),
      ),
    )
  | (PlayerSlotSet, false) => Error(PlayerSlotSetFromClient)
  | (PlayerSlotSet, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerSlotSet.parse,
        ~toPacket=a => PacketV1458.PlayerSlotSet(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerSlotSet(a),
      ),
    )
  | (PlayerInfo, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerInfo.parse,
        ~toPacket=a => PacketV1458.PlayerInfo(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerInfo(a),
      ),
    )
  | (PlayerInventorySlot, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerInventorySlot.parse,
        ~toPacket=a => PacketV1458.PlayerInventorySlot(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerInventorySlot(a),
      ),
    )
  | (WorldDataRequest, true) => Error(WorldDataRequestFromServer)
  | (WorldDataRequest, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.WorldDataRequest.parse,
        ~toPacket=a => PacketV1458.WorldDataRequest(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.WorldDataRequest(a),
      ),
    )
  | (WorldInfo, false) => Error(WorldInfoFromClient)
  | (WorldInfo, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.WorldInfo.parse,
        ~toPacket=a => PacketV1458.WorldInfo(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.WorldInfo(a),
      ),
    )
  | (InitialTileSectionsRequest, true) => Error(InitialTileSectionsRequestFromServer)
  | (InitialTileSectionsRequest, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.InitialTileSectionsRequest.parse,
        ~toPacket=a => PacketV1458.InitialTileSectionsRequest(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.InitialTileSectionsRequest(a),
      ),
    )
  | (Status, false) => Error(StatusFromClient)
  | (Status, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.Status.parse,
        ~toPacket=a => PacketV1458.Status(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.Status(a),
      ),
    )
  | (TileSectionSend, false) => Error(TileSectionSendFromClient)
  | (TileSectionSend, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.TileSectionSend.parse,
        ~toPacket=a => PacketV1458.TileSectionSend(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.TileSectionSend(a),
      ),
    )
  | (TileSectionFrame, false) => Error(TileSectionFrameFromClient)
  | (TileSectionFrame, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.TileSectionFrame.parse,
        ~toPacket=a => PacketV1458.TileSectionFrame(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.TileSectionFrame(a),
      ),
    )
  | (PlayerSpawn, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerSpawn.parse,
        ~toPacket=a => PacketV1458.PlayerSpawn(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerSpawn(a),
      ),
    )
  | (PlayerUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerUpdate.parse,
        ~toPacket=a => PacketV1458.PlayerUpdate(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerUpdate(a),
      ),
    )
  | (PlayerActive, false) => Error(PlayerActiveFromClient)
  | (PlayerActive, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerActive.parse,
        ~toPacket=a => PacketV1458.PlayerActive(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerActive(a),
      ),
    )
  | (PlayerHealth, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerHealth.parse,
        ~toPacket=a => PacketV1458.PlayerHealth(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerHealth(a),
      ),
    )
  | (TileModify, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.TileModify.parse,
        ~toPacket=a => PacketV1458.TileModify(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.TileModify(a),
      ),
    )
  | (TimeSet, false) => Error(TimeSetFromClient)
  | (TimeSet, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.TimeSet.parse,
        ~toPacket=a => PacketV1458.TimeSet(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.TimeSet(a),
      ),
    )
  | (DoorUse, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.DoorUse.parse,
        ~toPacket=a => PacketV1458.DoorUse(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.DoorUse(a),
      ),
    )
  | (TileSquareSend, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.TileSquareSend.parse,
        ~toPacket=a => PacketV1458.TileSquareSend(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.TileSquareSend(a),
      ),
    )
  | (ItemDropUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ItemDropUpdate.parse,
        ~toPacket=a => PacketV1458.ItemDropUpdate(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ItemDropUpdate(a),
      ),
    )
  | (ItemOwner, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ItemOwner.parse,
        ~toPacket=a => PacketV1458.ItemOwner(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ItemOwner(a),
      ),
    )
  | (NpcUpdate, false) => Error(NpcUpdateFromClient)
  | (NpcUpdate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.NpcUpdate.parse,
        ~toPacket=a => PacketV1458.NpcUpdate(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.NpcUpdate(a),
      ),
    )
  | (NpcItemStrike, true | false) => Error(NotImplemented)
  | (ProjectileSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ProjectileSync.parse,
        ~toPacket=a => PacketV1458.ProjectileSync(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ProjectileSync(a),
      ),
    )
  | (NpcStrike, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.NpcStrike.parse,
        ~toPacket=a => PacketV1458.NpcStrike(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.NpcStrike(a),
      ),
    )
  | (ProjectileDestroy, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ProjectileDestroy.parse,
        ~toPacket=a => PacketV1458.ProjectileDestroy(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ProjectileDestroy(a),
      ),
    )
  | (PvpToggle, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PvpToggle.parse,
        ~toPacket=a => PacketV1458.PvpToggle(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PvpToggle(a),
      ),
    )
  | (ChestOpen, true) => Error(ChestOpenFromServer)
  | (ChestOpen, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ChestOpen.parse,
        ~toPacket=a => PacketV1458.ChestOpen(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ChestOpen(a),
      ),
    )
  | (ChestItem, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ChestItem.parse,
        ~toPacket=a => PacketV1458.ChestItem(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ChestItem(a),
      ),
    )
  | (ActiveContainerSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ActiveContainerSync.parse,
        ~toPacket=a => PacketV1458.ActiveContainerSync(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ActiveContainerSync(a),
      ),
    )
  | (ChestPlace, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ChestPlace.parse,
        ~toPacket=a => PacketV1458.ChestPlace(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ChestPlace(a),
      ),
    )
  | (HealEffect, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.HealEffect.parse,
        ~toPacket=a => PacketV1458.HealEffect(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.HealEffect(a),
      ),
    )
  | (Zones, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.Zones.parse,
        ~toPacket=a => PacketV1458.Zones(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.Zones(a),
      ),
    )
  | (PasswordRequired, false) => Error(PasswordRequiredFromClient)
  | (PasswordRequired, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PasswordRequired.parse,
        ~toPacket=a => PacketV1458.PasswordRequired(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PasswordRequired(a),
      ),
    )
  | (PasswordSend, true) => Error(PasswordSendFromServer)
  | (PasswordSend, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PasswordSend.parse,
        ~toPacket=a => PacketV1458.PasswordSend(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PasswordSend(a),
      ),
    )
  | (ItemOwnerRemove, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ItemOwnerRemove.parse,
        ~toPacket=a => PacketV1458.ItemOwnerRemove(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ItemOwnerRemove(a),
      ),
    )
  | (NpcTalk, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.NpcTalk.parse,
        ~toPacket=a => PacketV1458.NpcTalk(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.NpcTalk(a),
      ),
    )
  | (PlayerAnimation, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerAnimation.parse,
        ~toPacket=a => PacketV1458.PlayerAnimation(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerAnimation(a),
      ),
    )
  | (PlayerMana, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerMana.parse,
        ~toPacket=a => PacketV1458.PlayerMana(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerMana(a),
      ),
    )
  | (ManaEffect, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ManaEffect.parse,
        ~toPacket=a => PacketV1458.ManaEffect(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ManaEffect(a),
      ),
    )
  | (PlayerTeam, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerTeam.parse,
        ~toPacket=a => PacketV1458.PlayerTeam(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerTeam(a),
      ),
    )
  | (SignRead, true) => Error(SignReadFromServer)
  | (SignRead, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.SignRead.parse,
        ~toPacket=a => PacketV1458.SignRead(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.SignRead(a),
      ),
    )
  | (SignNew, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.SignNew.parse,
        ~toPacket=a => PacketV1458.SignNew(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.SignNew(a),
      ),
    )
  | (LiquidSet, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.LiquidSet.parse,
        ~toPacket=a => PacketV1458.LiquidSet(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.LiquidSet(a),
      ),
    )
  | (PlayerSpawnSelf, false) => Error(PlayerSpawnSelfFromClient)
  | (PlayerSpawnSelf, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerSpawnSelf.parse,
        ~toPacket=a => PacketV1458.PlayerSpawnSelf(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerSpawnSelf(a),
      ),
    )
  | (PlayerBuffsSet, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerBuffsSet.parse,
        ~toPacket=a => PacketV1458.PlayerBuffsSet(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerBuffsSet(a),
      ),
    )
  | (NpcSpecialEffect, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.NpcSpecialEffect.parse,
        ~toPacket=a => PacketV1458.NpcSpecialEffect(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.NpcSpecialEffect(a),
      ),
    )
  | (ChestOrTempleUnlock, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ChestOrTempleUnlock.parse,
        ~toPacket=a => PacketV1458.ChestOrTempleUnlock(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ChestOrTempleUnlock(a),
      ),
    )
  | (NpcBuffAdd, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.NpcBuffAdd.parse,
        ~toPacket=a => PacketV1458.NpcBuffAdd(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.NpcBuffAdd(a),
      ),
    )
  | (NpcBuffUpdate, false) => Error(NpcBuffUpdateFromClient)
  | (NpcBuffUpdate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.NpcBuffUpdate.parse,
        ~toPacket=a => PacketV1458.NpcBuffUpdate(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.NpcBuffUpdate(a),
      ),
    )
  | (PlayerBuffAdd, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerBuffAdd.parse,
        ~toPacket=a => PacketV1458.PlayerBuffAdd(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerBuffAdd(a),
      ),
    )
  | (NpcNameUpdate, fromServer) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.NpcNameUpdate.parse(_, ~fromServer),
        ~toPacket=a => PacketV1458.NpcNameUpdate(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.NpcNameUpdate(a),
      ),
    )
  | (GoodEvilUpdate, false) => Error(GoodEvilUpdateFromClient)
  | (GoodEvilUpdate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.GoodEvilUpdate.parse,
        ~toPacket=a => PacketV1458.GoodEvilUpdate(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.GoodEvilUpdate(a),
      ),
    )
  | (HarpPlay, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.HarpPlay.parse,
        ~toPacket=a => PacketV1458.HarpPlay(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.HarpPlay(a),
      ),
    )
  | (SwitchHit, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.SwitchHit.parse,
        ~toPacket=a => PacketV1458.SwitchHit(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.SwitchHit(a),
      ),
    )
  | (NpcHomeUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.NpcHomeUpdate.parse,
        ~toPacket=a => PacketV1458.NpcHomeUpdate(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.NpcHomeUpdate(a),
      ),
    )
  | (BossOrInvasionSpawn, true) => Error(BossOrInvasionSpawnFromServer)
  | (BossOrInvasionSpawn, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.BossOrInvasionSpawn.parse,
        ~toPacket=a => PacketV1458.BossOrInvasionSpawn(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.BossOrInvasionSpawn(a),
      ),
    )
  | (PlayerDodge, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerDodge.parse,
        ~toPacket=a => PacketV1458.PlayerDodge(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerDodge(a),
      ),
    )
  | (TilePaint, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.TilePaint.parse,
        ~toPacket=a => PacketV1458.TilePaint(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.TilePaint(a),
      ),
    )
  | (WallPaint, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.WallPaint.parse,
        ~toPacket=a => PacketV1458.WallPaint(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.WallPaint(a),
      ),
    )
  | (Teleport, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.Teleport.parse,
        ~toPacket=a => PacketV1458.Teleport(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.Teleport(a),
      ),
    )
  | (PlayerHealOther, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerHealOther.parse,
        ~toPacket=a => PacketV1458.PlayerHealOther(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerHealOther(a),
      ),
    )
  | (DimensionsUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.DimensionsUpdate.parse,
        ~toPacket=a => PacketV1458.DimensionsUpdate(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.DimensionsUpdate(a),
      ),
    )
  | (ClientUuid, true) => Error(ClientUuidFromServer)
  | (ClientUuid, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ClientUuid.parse,
        ~toPacket=a => PacketV1458.ClientUuid(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ClientUuid(a),
      ),
    )
  | (ChestName, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ChestName.parse,
        ~toPacket=a => PacketV1458.ChestName(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ChestName(a),
      ),
    )
  | (NpcCatch, true) => Error(NpcCatchFromServer)
  | (NpcCatch, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.NpcCatch.parse,
        ~toPacket=a => PacketV1458.NpcCatch(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.NpcCatch(a),
      ),
    )
  | (NpcRelease, true) => Error(NpcReleaseFromServer)
  | (NpcRelease, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.NpcRelease.parse,
        ~toPacket=a => PacketV1458.NpcRelease(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.NpcRelease(a),
      ),
    )
  | (TravellingMerchantInventory, false) => Error(TravellingMerchantInventoryFromClient)
  | (TravellingMerchantInventory, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.TravellingMerchantInventory.parse,
        ~toPacket=a => PacketV1458.TravellingMerchantInventory(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.TravellingMerchantInventory(a),
      ),
    )
  | (TeleportationPotion, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.TeleportationPotion.parse,
        ~toPacket=a => PacketV1458.TeleportationPotion(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.TeleportationPotion(a),
      ),
    )
  | (AnglerQuest, false) => Error(AnglerQuestFromClient)
  | (AnglerQuest, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.AnglerQuest.parse,
        ~toPacket=a => PacketV1458.AnglerQuest(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.AnglerQuest(a),
      ),
    )
  | (AnglerQuestComplete, true) => Error(AnglerQuestCompleteFromServer)
  | (AnglerQuestComplete, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.AnglerQuestComplete.parse,
        ~toPacket=a => PacketV1458.AnglerQuestComplete(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.AnglerQuestComplete(a),
      ),
    )
  | (AnglerQuestsCompletedAmount, true)
  | (AnglerQuestsCompletedAmount, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.AnglerQuestsCompletedAmount.parse,
        ~toPacket=a => PacketV1458.AnglerQuestsCompletedAmount(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.AnglerQuestsCompletedAmount(a),
      ),
    )
  | (TemporaryAnimationCreate, false) => Error(TemporaryAnimationCreateFromClient)
  | (TemporaryAnimationCreate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.TemporaryAnimationCreate.parse,
        ~toPacket=a => PacketV1458.TemporaryAnimationCreate(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.TemporaryAnimationCreate(a),
      ),
    )

  | (InvasionProgressReport, false) => Error(InvasionProgressReportFromClient)
  | (InvasionProgressReport, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.InvasionProgressReport.parse,
        ~toPacket=a => PacketV1458.InvasionProgressReport(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.InvasionProgressReport(a),
      ),
    )
  | (ObjectPlace, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ObjectPlace.parse,
        ~toPacket=a => PacketV1458.ObjectPlace(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ObjectPlace(a),
      ),
    )
  | (PlayerChestIndexSync, false) => Error(PlayerChestIndexSyncFromClient)
  | (PlayerChestIndexSync, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerChestIndexSync.parse,
        ~toPacket=a => PacketV1458.PlayerChestIndexSync(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerChestIndexSync(a),
      ),
    )
  | (CombatNumberCreate, false) => Error(CombatNumberCreateFromClient)
  | (CombatNumberCreate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.CombatNumberCreate.parse,
        ~toPacket=a => PacketV1458.CombatNumberCreate(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.CombatNumberCreate(a),
      ),
    )
  | (NetModuleLoad, true | false) =>
    Ok(
      makeParsersWithFromServer(
        ~packetName,
        ~parse=(payload, fromServer) => PacketV1458.NetModuleLoad.parse(payload, ~fromServer),
        ~toPacket=a => PacketV1458.NetModuleLoad(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.NetModuleLoad(a),
      ),
    )
  | (NpcKillCount, false) => Error(NpcKillCountFromClient)
  | (NpcKillCount, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.NpcKillCount.parse,
        ~toPacket=a => PacketV1458.NpcKillCount(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.NpcKillCount(a),
      ),
    )
  | (PlayerStealth, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerStealth.parse,
        ~toPacket=a => PacketV1458.PlayerStealth(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerStealth(a),
      ),
    )
  | (ItemForceIntoNearestChest, true | false) =>
    Ok(
      makeParsersWithFromServer(
        ~packetName,
        ~parse=(payload, fromServer) => PacketV1458.ItemForceIntoNearestChest.parse(payload, fromServer),
        ~toPacket=a => PacketV1458.ItemForceIntoNearestChest(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ItemForceIntoNearestChest(a),
      ),
    )
  | (TileEntityUpdate, false) => Error(TileEntityUpdateFromClient)
  | (TileEntityUpdate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.TileEntityUpdate.parse,
        ~toPacket=a => PacketV1458.TileEntityUpdate(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.TileEntityUpdate(a),
      ),
    )
  | (TileEntityPlace, true) => Error(TileEntityPlaceFromServer)
  | (TileEntityPlace, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.TileEntityPlace.parse,
        ~toPacket=a => PacketV1458.TileEntityPlace(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.TileEntityPlace(a),
      ),
    )
  | (ItemDropModify, false) => Error(ItemDropModifyFromClient)
  | (ItemDropModify, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ItemDropModify.parse,
        ~toPacket=a => PacketV1458.ItemDropModify(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ItemDropModify(a),
      ),
    )
  | (ItemFramePlace, true) => Error(ItemFramePlaceFromServer)
  | (ItemFramePlace, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ItemFramePlace.parse,
        ~toPacket=a => PacketV1458.ItemFramePlace(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ItemFramePlace(a),
      ),
    )
  | (ItemDropInstancedUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ItemDropInstancedUpdate.parse,
        ~toPacket=a => PacketV1458.ItemDropInstancedUpdate(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ItemDropInstancedUpdate(a),
      ),
    )
  | (EmoteBubble, false) => Error(EmoteBubbleFromClient)
  | (EmoteBubble, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.EmoteBubble.parse,
        ~toPacket=a => PacketV1458.EmoteBubble(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.EmoteBubble(a),
      ),
    )
  | (ExtraValueSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ExtraValueSync.parse,
        ~toPacket=a => PacketV1458.ExtraValueSync(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ExtraValueSync(a),
      ),
    )
  | (SocialHandshake, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.SocialHandshake.parse,
        ~toPacket=a => PacketV1458.SocialHandshake(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.SocialHandshake(a),
      ),
    )
  | (Unused, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.Unused.parse,
        ~toPacket=a => PacketV1458.Unused(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.Unused(a),
      ),
    )
  | (PortalKill, true) => Error(PortalKillFromServer)
  | (PortalKill, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PortalKill.parse,
        ~toPacket=a => PacketV1458.PortalKill(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PortalKill(a),
      ),
    )
  | (PlayerTeleportPortal, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerTeleportPortal.parse,
        ~toPacket=a => PacketV1458.PlayerTeleportPortal(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerTeleportPortal(a),
      ),
    )
  | (NpcKilledNotification, false) => Error(NpcKilledNotificationFromClient)
  | (NpcKilledNotification, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.NpcKilledNotification.parse,
        ~toPacket=a => PacketV1458.NpcKilledNotification(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.NpcKilledNotification(a),
      ),
    )
  | (EventNotification, false) => Error(EventNotificationFromClient)
  | (EventNotification, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.EventNotification.parse,
        ~toPacket=a => PacketV1458.EventNotification(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.EventNotification(a),
      ),
    )
  | (MinionTargetUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.MinionTargetUpdate.parse,
        ~toPacket=a => PacketV1458.MinionTargetUpdate(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.MinionTargetUpdate(a),
      ),
    )
  | (NpcTeleportPortal, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.NpcTeleportPortal.parse,
        ~toPacket=a => PacketV1458.NpcTeleportPortal(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.NpcTeleportPortal(a),
      ),
    )
  | (ShieldStrengthsUpdate, false) => Error(ShieldStrengthsUpdateFromClient)
  | (ShieldStrengthsUpdate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ShieldStrengthsUpdate.parse,
        ~toPacket=a => PacketV1458.ShieldStrengthsUpdate(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ShieldStrengthsUpdate(a),
      ),
    )
  | (NebulaLevelUp, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.NebulaLevelUp.parse,
        ~toPacket=a => PacketV1458.NebulaLevelUp(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.NebulaLevelUp(a),
      ),
    )
  | (MoonLordCountdown, false) => Error(MoonLordCountdownFromClient)
  | (MoonLordCountdown, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.MoonLordCountdown.parse,
        ~toPacket=a => PacketV1458.MoonLordCountdown(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.MoonLordCountdown(a),
      ),
    )
  | (NpcShopItem, false) => Error(NpcShopItemFromClient)
  | (NpcShopItem, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.NpcShopItem.parse,
        ~toPacket=a => PacketV1458.NpcShopItem(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.NpcShopItem(a),
      ),
    )
  | (GemLockToggle, true) => Error(GemLockToggleFromServer)
  | (GemLockToggle, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.GemLockToggle.parse,
        ~toPacket=a => PacketV1458.GemLockToggle(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.GemLockToggle(a),
      ),
    )
  | (SmokePoof, false) => Error(SmokePoofFromClient)
  | (SmokePoof, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.SmokePoof.parse,
        ~toPacket=a => PacketV1458.SmokePoof(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.SmokePoof(a),
      ),
    )
  | (ChatMessageSmart, false) => Error(ChatMessageSmartFromClient)
  | (ChatMessageSmart, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ChatMessageSmart.parse,
        ~toPacket=a => PacketV1458.ChatMessageSmart(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ChatMessageSmart(a),
      ),
    )
  | (WiredCannonShot, false) => Error(WiredCannonShotFromClient)
  | (WiredCannonShot, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.WiredCannonShot.parse,
        ~toPacket=a => PacketV1458.WiredCannonShot(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.WiredCannonShot(a),
      ),
    )
  | (MassWireOperation, true) => Error(MassWireOperationFromServer)
  | (MassWireOperation, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.MassWireOperation.parse,
        ~toPacket=a => PacketV1458.MassWireOperation(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.MassWireOperation(a),
      ),
    )
  | (MassWireOperationPay, false) => Error(MassWireOperationPayFromClient)
  | (MassWireOperationPay, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.MassWireOperationPay.parse,
        ~toPacket=a => PacketV1458.MassWireOperationPay(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.MassWireOperationPay(a),
      ),
    )
  | (PartyToggle, true) => Error(PartyToggleFromServer)
  | (PartyToggle, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PartyToggle.parse,
        ~toPacket=a => PacketV1458.PartyToggle(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PartyToggle(a),
      ),
    )
  | (TreeGrowFx, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.TreeGrowFx.parse,
        ~toPacket=a => PacketV1458.TreeGrowFx(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.TreeGrowFx(a),
      ),
    )
  | (CrystalInvasionStart, true) => Error(CrystalInvasionStartFromServer)
  | (CrystalInvasionStart, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.CrystalInvasionStart.parse,
        ~toPacket=a => PacketV1458.CrystalInvasionStart(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.CrystalInvasionStart(a),
      ),
    )
  | (CrystalInvasionWipeAll, false) => Error(CrystalInvasionWipeAllFromClient)
  | (CrystalInvasionWipeAll, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.CrystalInvasionWipeAll.parse,
        ~toPacket=a => PacketV1458.CrystalInvasionWipeAll(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.CrystalInvasionWipeAll(a),
      ),
    )
  | (MinionAttackTargetUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.MinionAttackTargetUpdate.parse,
        ~toPacket=a => PacketV1458.MinionAttackTargetUpdate(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.MinionAttackTargetUpdate(a),
      ),
    )
  | (CrystalInvasionSendWaitTime, false) => Error(CrystalInvasionSendWaitTimeFromClient)
  | (CrystalInvasionSendWaitTime, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.CrystalInvasionSendWaitTime.parse,
        ~toPacket=a => PacketV1458.CrystalInvasionSendWaitTime(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.CrystalInvasionSendWaitTime(a),
      ),
    )
  | (PlayerDamage, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerDamage.parse,
        ~toPacket=a => PacketV1458.PlayerDamage(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerDamage(a),
      ),
    )
  | (PlayerDeath, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerDeath.parse,
        ~toPacket=a => PacketV1458.PlayerDeath(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerDeath(a),
      ),
    )
  | (CombatTextCreate, false) => Error(CombatTextCreateFromClient)
  | (CombatTextCreate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.CombatTextCreate.parse,
        ~toPacket=a => PacketV1458.CombatTextCreate(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.CombatTextCreate(a),
      ),
    )
  | (Emoji, true) => Error(EmojiFromServer)
  | (Emoji, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.Emoji.parse,
        ~toPacket=a => PacketV1458.Emoji(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.Emoji(a),
      ),
    )
  | (TileEntityDisplayDollItemSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.TileEntityDisplayDollItemSync.parse,
        ~toPacket=a => PacketV1458.TileEntityDisplayDollItemSync(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.TileEntityDisplayDollItemSync(a),
      ),
    )
  | (TileEntityInteractionRequest, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.TileEntityInteractionRequest.parse,
        ~toPacket=a => PacketV1458.TileEntityInteractionRequest(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.TileEntityInteractionRequest(a),
      ),
    )
  | (WeaponsRackTryPlacing, true) => Error(WeaponsRackTryPlacingFromServer)
  | (WeaponsRackTryPlacing, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.WeaponsRackTryPlacing.parse,
        ~toPacket=a => PacketV1458.WeaponsRackTryPlacing(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.WeaponsRackTryPlacing(a),
      ),
    )
  | (TileEntityHatRackItemSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.TileEntityHatRackItemSync.parse,
        ~toPacket=a => PacketV1458.TileEntityHatRackItemSync(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.TileEntityHatRackItemSync(a),
      ),
    )
  | (TilePickingSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.TilePickingSync.parse,
        ~toPacket=a => PacketV1458.TilePickingSync(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.TilePickingSync(a),
      ),
    )
  | (RevengeMarkerSync, false) => Error(RevengeMarkerSyncFromClient)
  | (RevengeMarkerSync, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.RevengeMarkerSync.parse,
        ~toPacket=a => PacketV1458.RevengeMarkerSync(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.RevengeMarkerSync(a),
      ),
    )
  | (RevengeMarkerRemove, false) => Error(RevengeMarkerRemoveFromClient)
  | (RevengeMarkerRemove, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.RevengeMarkerRemove.parse,
        ~toPacket=a => PacketV1458.RevengeMarkerRemove(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.RevengeMarkerRemove(a),
      ),
    )
  | (GolfBallLandInCup, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.GolfBallLandInCup.parse,
        ~toPacket=a => PacketV1458.GolfBallLandInCup(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.GolfBallLandInCup(a),
      ),
    )
  | (ClientFinishConnectingToServer, false) => Error(ClientFinishConnectingToServerFromClient)
  | (ClientFinishConnectingToServer, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ClientFinishConnectingToServer.parse,
        ~toPacket=a => PacketV1458.ClientFinishConnectingToServer(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ClientFinishConnectingToServer(a),
      ),
    )
  | (NpcFishOut, true) => Error(NpcFishOutFromServer)
  | (NpcFishOut, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.NpcFishOut.parse,
        ~toPacket=a => PacketV1458.NpcFishOut(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.NpcFishOut(a),
      ),
    )
  | (NpcTamper, false) => Error(NpcTamperFromClient)
  | (NpcTamper, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.NpcTamper.parse,
        ~toPacket=a => PacketV1458.NpcTamper(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.NpcTamper(a),
      ),
    )
  | (LegacySoundPlay, false) => Error(LegacySoundPlayFromClient)
  | (LegacySoundPlay, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.LegacySoundPlay.parse,
        ~toPacket=a => PacketV1458.LegacySoundPlay(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.LegacySoundPlay(a),
      ),
    )
  | (FoodPlatterTryPlacing, true) => Error(FoodPlatterTryPlacingFromServer)
  | (FoodPlatterTryPlacing, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.FoodPlatterTryPlacing.parse,
        ~toPacket=a => PacketV1458.FoodPlatterTryPlacing(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.FoodPlatterTryPlacing(a),
      ),
    )
  | (PlayerLuckFactorsUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerLuckFactorsUpdate.parse,
        ~toPacket=a => PacketV1458.PlayerLuckFactorsUpdate(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerLuckFactorsUpdate(a),
      ),
    )
  | (PlayerDead, false) => Error(PlayerDeadFromClient)
  | (PlayerDead, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerDead.parse,
        ~toPacket=a => PacketV1458.PlayerDead(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerDead(a),
      ),
    )
  | (CavernMonsterTypeSync, false) => Error(CavernMonsterTypeSyncFromClient)
  | (CavernMonsterTypeSync, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.CavernMonsterTypeSync.parse,
        ~toPacket=a => PacketV1458.CavernMonsterTypeSync(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.CavernMonsterTypeSync(a),
      ),
    )
  | (NpcBuffRemovalRequest, true) => Error(NpcBuffRemovalRequestFromServer)
  | (NpcBuffRemovalRequest, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.NpcBuffRemovalRequest.parse,
        ~toPacket=a => PacketV1458.NpcBuffRemovalRequest(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.NpcBuffRemovalRequest(a),
      ),
    )
  | (ClientSyncedInventory, true) => Error(ClientSyncedInventoryFromServer)
  | (ClientSyncedInventory, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ClientSyncedInventory.parse,
        ~toPacket=a => PacketV1458.ClientSyncedInventory(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ClientSyncedInventory(a),
      ),
    )
  | (CountsAsHostForGameplaySet, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.CountsAsHostForGameplaySet.parse,
        ~toPacket=a => PacketV1458.CountsAsHostForGameplaySet(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.CountsAsHostForGameplaySet(a),
      ),
    )
  | (CreditsOrSlimeTransform, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.CreditsOrSlimeTransform.parse,
        ~toPacket=a => PacketV1458.CreditsOrSlimeTransform(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.CreditsOrSlimeTransform(a),
      ),
    )
  | (LucyAxeMessage, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.LucyAxeMessage.parse,
        ~toPacket=a => PacketV1458.LucyAxeMessage(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.LucyAxeMessage(a),
      ),
    )
  | (PiggyBankVoidLensUpdate, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PiggyBankVoidLensUpdate.parse,
        ~toPacket=a => PacketV1458.PiggyBankVoidLensUpdate(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PiggyBankVoidLensUpdate(a),
      ),
    )
  | (DungeonDefendersEventAttemptSkipWait, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.DungeonDefendersEventAttemptSkipWait.parse,
        ~toPacket=a => PacketV1458.DungeonDefendersEventAttemptSkipWait(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.DungeonDefendersEventAttemptSkipWait(a),
      ),
    )
  | (HaveDryadDoStardewAnimation, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.HaveDryadDoStardewAnimation.parse,
        ~toPacket=a => PacketV1458.HaveDryadDoStardewAnimation(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.HaveDryadDoStardewAnimation(a),
      ),
    )
  | (ItemDropShimmeredUpdate, _) => Error(NotImplemented)
  | (ShimmerEffectOrCoinLuck, false) => Error(NotImplemented)
  | (ShimmerEffectOrCoinLuck, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ShimmerEffectOrCoinLuck.parse,
        ~toPacket=a => PacketV1458.ShimmerEffectOrCoinLuck(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ShimmerEffectOrCoinLuck(a),
      ),
    )
  | (LoadoutSwitch, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.LoadoutSwitch.parse,
        ~toPacket=a => PacketV1458.LoadoutSwitch(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.LoadoutSwitch(a),
      ),
    )
  | (ItemDropProtectedUpdate, _) => Error(NotImplemented)
  | (DeadCellsDisplayJarTryPlacing, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.DeadCellsDisplayJarTryPlacing.parse,
        ~toPacket=a => PacketV1458.DeadCellsDisplayJarTryPlacing(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.DeadCellsDisplayJarTryPlacing(a),
      ),
    )
  | (PlayerSpectate, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerSpectate.parse,
        ~toPacket=a => PacketV1458.PlayerSpectate(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerSpectate(a),
      ),
    )
  | (ItemDropClear, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ItemDropClear.parse,
        ~toPacket=a => PacketV1458.ItemDropClear(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ItemDropClear(a),
      ),
    )
  | (PlayerItemUseSound, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerItemUseSound.parse,
        ~toPacket=a => PacketV1458.PlayerItemUseSound(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerItemUseSound(a),
      ),
    )
  | (NpcHurtByDebuff, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.NpcHurtByDebuff.parse,
        ~toPacket=a => PacketV1458.NpcHurtByDebuff(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.NpcHurtByDebuff(a),
      ),
    )
  | (Ping, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.Ping.parse,
        ~toPacket=a => PacketV1458.Ping(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.Ping(a),
      ),
    )
  | (ChestResize, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ChestResize.parse,
        ~toPacket=a => PacketV1458.ChestResize(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ChestResize(a),
      ),
    )
  | (LeashedEntityAnchorInsertItem, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.LeashedEntityAnchorInsertItem.parse,
        ~toPacket=a => PacketV1458.LeashedEntityAnchorInsertItem(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.LeashedEntityAnchorInsertItem(a),
      ),
    )
  | (PlayerTeamUpdate, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerTeamUpdate.parse,
        ~toPacket=a => PacketV1458.PlayerTeamUpdate(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerTeamUpdate(a),
      ),
    )
  | (PlayerTeamSwapSpawn, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerTeamSwapSpawn.parse,
        ~toPacket=a => PacketV1458.PlayerTeamSwapSpawn(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerTeamSwapSpawn(a),
      ),
    )
  | (SectionRequest, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.SectionRequest.parse,
        ~toPacket=a => PacketV1458.SectionRequest(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.SectionRequest(a),
      ),
    )
  | (ItemDropPosition, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ItemDropPosition.parse,
        ~toPacket=a => PacketV1458.ItemDropPosition(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ItemDropPosition(a),
      ),
    )
  | (HostToken, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.HostToken.parse,
        ~toPacket=a => PacketV1458.HostToken(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.HostToken(a),
      ),
    )
  | (DamageNPCAck, false) => Error(NotImplemented)
  | (DamageNPCAck, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.DamageNPCAck.parse,
        ~toPacket=a => PacketV1458.DamageNPCAck(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.DamageNPCAck(a),
      ),
    )
  | (ServerInfo, false) => Error(ServerInfoFromClient)
  | (ServerInfo, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.ServerInfo.parse,
        ~toPacket=a => PacketV1458.ServerInfo(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.ServerInfo(a),
      ),
    )
  | (PlayerPlatformInfo, true) => Error(PlayerPlatformInfoFromServer)
  | (PlayerPlatformInfo, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1458.PlayerPlatformInfo.parse,
        ~toPacket=a => PacketV1458.PlayerPlatformInfo(a),
        ~toLazyPacket=a => PacketV1458.LazyPacket.PlayerPlatformInfo(a),
      ),
    )
  }
}

let parsePayload = (packetType: PacketTypeV1458.t, payload: NodeJs.Buffer.t, fromServer: bool): result<
  PacketV1458.t,
  IParser.parseError,
> =>
  switch getParsers(packetType, fromServer) {
  | Ok(parsers) => parsers.parse(payload, fromServer)
  | Error(err) => Error(err)
  }

let parsePayloadLazy = (
  packetType: PacketTypeV1458.t,
  payload: NodeJs.Buffer.t,
  fromServer: bool,
): result<PacketV1458.LazyPacket.t, IParser.parseError> =>
  switch getParsers(packetType, fromServer) {
  | Ok(parsers) => parsers.parseLazy(payload, fromServer)
  | Error(err) => Error(err)
  }

let parse = (
  ~buffer: NodeJs.Buffer.t,
  ~fromServer: bool,
  ~ignore: array<PacketTypeV1458.t>=[],
): result<PacketV1458.t, IParser.parseError> => {
  switch buffer->NodeJs.Buffer.length {
  | 0 | 1 | 2 => Error(InvalidPacketLength(buffer->NodeJs.Buffer.length))
  | _ =>
    switch buffer->NodeJs.Buffer.unsafeGet(2)->PacketTypeV1458.fromInt {
    | Some(packetType) if Array.includes(ignore, packetType) => Error(IgnoredPacket)
    | Some(packetType) =>
      try {
        // As this module is parsing packets from version 1.4.5.8 to the equivalent packet data structures
        // it won't ever need Serializing after only parsing
        parsePayload(packetType, buffer, fromServer)
      } catch {
      | JsExn(obj) => Error(ReaderError({context: "ParserV1458.parse", error: obj}))
      }
    | None => Error(InvalidPacketType(buffer->NodeJs.Buffer.unsafeGet(2)))
    }
  }
}

let parseLazy = (
  ~buffer: NodeJs.Buffer.t,
  ~fromServer: bool,
): result<PacketV1458.LazyPacket.t, IParser.parseError> => {
  switch buffer->NodeJs.Buffer.length {
  | 0 | 1 | 2 => Error(InvalidPacketLength(buffer->NodeJs.Buffer.length))
  | _ =>
    switch buffer->NodeJs.Buffer.unsafeGet(2)->PacketTypeV1458.fromInt {
    | Some(packetType) =>
      try {
        // As this module is parsing packets from version 1.4.5.8 to the equivalent packet data structures
        // it won't ever need Serializing after only parsing
        parsePayloadLazy(packetType, buffer, fromServer)
      } catch {
      | JsExn(obj) => Error(ReaderError({context: "ParserV1458.parseLazy", error: obj}))
      }
    | None => Error(InvalidPacketType(buffer->NodeJs.Buffer.unsafeGet(2)))
    }
  }
}
