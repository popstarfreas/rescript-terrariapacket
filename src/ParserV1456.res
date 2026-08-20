let addPacketContext = (
  ~packetName,
  err: ErrorAwarePacketReader.readError,
): ErrorAwarePacketReader.readError => {
  context: "Packet " ++ packetName ++ ": " ++ err.context,
  error: err.error,
}

let mapPacket = (result, ~packetName, fn): result<PacketV1456.t, IParser.parseError> =>
  result
  ->Result.map(fn)
  ->Result.mapError(e => IParser.ParseError.ReaderError(addPacketContext(~packetName, e)))

type parsers = {
  parse: (NodeJs.Buffer.t, bool) => result<PacketV1456.t, IParser.parseError>,
  parseLazy: (NodeJs.Buffer.t, bool) => result<PacketV1456.LazyPacket.t, IParser.parseError>,
}

let makeParsers = (
  ~packetName: string,
  ~parse: NodeJs.Buffer.t => result<'a, ErrorAwarePacketReader.readError>,
  ~toPacket: 'a => PacketV1456.t,
  ~toLazyPacket: PacketV1456.LazyPacket.lazyParsed<'a> => PacketV1456.LazyPacket.t,
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
  ~toPacket: 'a => PacketV1456.t,
  ~toLazyPacket: PacketV1456.LazyPacket.lazyParsed<'a> => PacketV1456.LazyPacket.t,
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

let getParsers = (packetType: PacketTypeV1456.t, fromServer: bool): result<
  parsers,
  IParser.parseError,
> => {
  let packetName = PacketTypeV1456.packetName(packetType)
  switch (packetType, fromServer) {
  | (ConnectRequest, true) => Error(ConnectRequestFromServer)
  | (ConnectRequest, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ConnectRequest.parse,
        ~toPacket=a => PacketV1456.ConnectRequest(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ConnectRequest(a),
      ),
    )
  | (Disconnect, false) => Error(DisconnectFromClient)
  | (Disconnect, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.Disconnect.parse,
        ~toPacket=a => PacketV1456.Disconnect(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.Disconnect(a),
      ),
    )
  | (PlayerSlotSet, false) => Error(PlayerSlotSetFromClient)
  | (PlayerSlotSet, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerSlotSet.parse,
        ~toPacket=a => PacketV1456.PlayerSlotSet(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerSlotSet(a),
      ),
    )
  | (PlayerInfo, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerInfo.parse,
        ~toPacket=a => PacketV1456.PlayerInfo(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerInfo(a),
      ),
    )
  | (PlayerInventorySlot, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerInventorySlot.parse,
        ~toPacket=a => PacketV1456.PlayerInventorySlot(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerInventorySlot(a),
      ),
    )
  | (WorldDataRequest, true) => Error(WorldDataRequestFromServer)
  | (WorldDataRequest, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.WorldDataRequest.parse,
        ~toPacket=a => PacketV1456.WorldDataRequest(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.WorldDataRequest(a),
      ),
    )
  | (WorldInfo, false) => Error(WorldInfoFromClient)
  | (WorldInfo, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.WorldInfo.parse,
        ~toPacket=a => PacketV1456.WorldInfo(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.WorldInfo(a),
      ),
    )
  | (InitialTileSectionsRequest, true) => Error(InitialTileSectionsRequestFromServer)
  | (InitialTileSectionsRequest, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.InitialTileSectionsRequest.parse,
        ~toPacket=a => PacketV1456.InitialTileSectionsRequest(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.InitialTileSectionsRequest(a),
      ),
    )
  | (Status, false) => Error(StatusFromClient)
  | (Status, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.Status.parse,
        ~toPacket=a => PacketV1456.Status(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.Status(a),
      ),
    )
  | (TileSectionSend, false) => Error(TileSectionSendFromClient)
  | (TileSectionSend, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.TileSectionSend.parse,
        ~toPacket=a => PacketV1456.TileSectionSend(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.TileSectionSend(a),
      ),
    )
  | (TileSectionFrame, false) => Error(TileSectionFrameFromClient)
  | (TileSectionFrame, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.TileSectionFrame.parse,
        ~toPacket=a => PacketV1456.TileSectionFrame(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.TileSectionFrame(a),
      ),
    )
  | (PlayerSpawn, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerSpawn.parse,
        ~toPacket=a => PacketV1456.PlayerSpawn(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerSpawn(a),
      ),
    )
  | (PlayerUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerUpdate.parse,
        ~toPacket=a => PacketV1456.PlayerUpdate(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerUpdate(a),
      ),
    )
  | (PlayerActive, false) => Error(PlayerActiveFromClient)
  | (PlayerActive, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerActive.parse,
        ~toPacket=a => PacketV1456.PlayerActive(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerActive(a),
      ),
    )
  | (PlayerHealth, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerHealth.parse,
        ~toPacket=a => PacketV1456.PlayerHealth(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerHealth(a),
      ),
    )
  | (TileModify, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.TileModify.parse,
        ~toPacket=a => PacketV1456.TileModify(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.TileModify(a),
      ),
    )
  | (TimeSet, false) => Error(TimeSetFromClient)
  | (TimeSet, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.TimeSet.parse,
        ~toPacket=a => PacketV1456.TimeSet(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.TimeSet(a),
      ),
    )
  | (DoorUse, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.DoorUse.parse,
        ~toPacket=a => PacketV1456.DoorUse(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.DoorUse(a),
      ),
    )
  | (TileSquareSend, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.TileSquareSend.parse,
        ~toPacket=a => PacketV1456.TileSquareSend(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.TileSquareSend(a),
      ),
    )
  | (ItemDropUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ItemDropUpdate.parse,
        ~toPacket=a => PacketV1456.ItemDropUpdate(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ItemDropUpdate(a),
      ),
    )
  | (ItemOwner, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ItemOwner.parse,
        ~toPacket=a => PacketV1456.ItemOwner(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ItemOwner(a),
      ),
    )
  | (NpcUpdate, false) => Error(NpcUpdateFromClient)
  | (NpcUpdate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.NpcUpdate.parse,
        ~toPacket=a => PacketV1456.NpcUpdate(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.NpcUpdate(a),
      ),
    )
  | (NpcItemStrike, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.NpcItemStrike.parse,
        ~toPacket=a => PacketV1456.NpcItemStrike(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.NpcItemStrike(a),
      ),
    )
  | (ProjectileSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ProjectileSync.parse,
        ~toPacket=a => PacketV1456.ProjectileSync(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ProjectileSync(a),
      ),
    )
  | (NpcStrike, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.NpcStrike.parse,
        ~toPacket=a => PacketV1456.NpcStrike(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.NpcStrike(a),
      ),
    )
  | (ProjectileDestroy, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ProjectileDestroy.parse,
        ~toPacket=a => PacketV1456.ProjectileDestroy(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ProjectileDestroy(a),
      ),
    )
  | (PvpToggle, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PvpToggle.parse,
        ~toPacket=a => PacketV1456.PvpToggle(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PvpToggle(a),
      ),
    )
  | (ChestOpen, true) => Error(ChestOpenFromServer)
  | (ChestOpen, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ChestOpen.parse,
        ~toPacket=a => PacketV1456.ChestOpen(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ChestOpen(a),
      ),
    )
  | (ChestItem, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ChestItem.parse,
        ~toPacket=a => PacketV1456.ChestItem(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ChestItem(a),
      ),
    )
  | (ActiveContainerSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ActiveContainerSync.parse,
        ~toPacket=a => PacketV1456.ActiveContainerSync(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ActiveContainerSync(a),
      ),
    )
  | (ChestPlace, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ChestPlace.parse,
        ~toPacket=a => PacketV1456.ChestPlace(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ChestPlace(a),
      ),
    )
  | (HealEffect, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.HealEffect.parse,
        ~toPacket=a => PacketV1456.HealEffect(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.HealEffect(a),
      ),
    )
  | (Zones, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.Zones.parse,
        ~toPacket=a => PacketV1456.Zones(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.Zones(a),
      ),
    )
  | (PasswordRequired, false) => Error(PasswordRequiredFromClient)
  | (PasswordRequired, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PasswordRequired.parse,
        ~toPacket=a => PacketV1456.PasswordRequired(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PasswordRequired(a),
      ),
    )
  | (PasswordSend, true) => Error(PasswordSendFromServer)
  | (PasswordSend, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PasswordSend.parse,
        ~toPacket=a => PacketV1456.PasswordSend(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PasswordSend(a),
      ),
    )
  | (ItemOwnerRemove, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ItemOwnerRemove.parse,
        ~toPacket=a => PacketV1456.ItemOwnerRemove(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ItemOwnerRemove(a),
      ),
    )
  | (NpcTalk, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.NpcTalk.parse,
        ~toPacket=a => PacketV1456.NpcTalk(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.NpcTalk(a),
      ),
    )
  | (PlayerAnimation, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerAnimation.parse,
        ~toPacket=a => PacketV1456.PlayerAnimation(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerAnimation(a),
      ),
    )
  | (PlayerMana, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerMana.parse,
        ~toPacket=a => PacketV1456.PlayerMana(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerMana(a),
      ),
    )
  | (ManaEffect, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ManaEffect.parse,
        ~toPacket=a => PacketV1456.ManaEffect(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ManaEffect(a),
      ),
    )
  | (PlayerTeam, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerTeam.parse,
        ~toPacket=a => PacketV1456.PlayerTeam(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerTeam(a),
      ),
    )
  | (SignRead, true) => Error(SignReadFromServer)
  | (SignRead, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.SignRead.parse,
        ~toPacket=a => PacketV1456.SignRead(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.SignRead(a),
      ),
    )
  | (SignNew, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.SignNew.parse,
        ~toPacket=a => PacketV1456.SignNew(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.SignNew(a),
      ),
    )
  | (LiquidSet, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.LiquidSet.parse,
        ~toPacket=a => PacketV1456.LiquidSet(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.LiquidSet(a),
      ),
    )
  | (PlayerSpawnSelf, false) => Error(PlayerSpawnSelfFromClient)
  | (PlayerSpawnSelf, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerSpawnSelf.parse,
        ~toPacket=a => PacketV1456.PlayerSpawnSelf(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerSpawnSelf(a),
      ),
    )
  | (PlayerBuffsSet, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerBuffsSet.parse,
        ~toPacket=a => PacketV1456.PlayerBuffsSet(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerBuffsSet(a),
      ),
    )
  | (NpcSpecialEffect, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.NpcSpecialEffect.parse,
        ~toPacket=a => PacketV1456.NpcSpecialEffect(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.NpcSpecialEffect(a),
      ),
    )
  | (ChestOrTempleUnlock, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ChestOrTempleUnlock.parse,
        ~toPacket=a => PacketV1456.ChestOrTempleUnlock(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ChestOrTempleUnlock(a),
      ),
    )
  | (NpcBuffAdd, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.NpcBuffAdd.parse,
        ~toPacket=a => PacketV1456.NpcBuffAdd(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.NpcBuffAdd(a),
      ),
    )
  | (NpcBuffUpdate, false) => Error(NpcBuffUpdateFromClient)
  | (NpcBuffUpdate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.NpcBuffUpdate.parse,
        ~toPacket=a => PacketV1456.NpcBuffUpdate(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.NpcBuffUpdate(a),
      ),
    )
  | (PlayerBuffAdd, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerBuffAdd.parse,
        ~toPacket=a => PacketV1456.PlayerBuffAdd(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerBuffAdd(a),
      ),
    )
  | (NpcNameUpdate, fromServer) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.NpcNameUpdate.parse(_, ~fromServer),
        ~toPacket=a => PacketV1456.NpcNameUpdate(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.NpcNameUpdate(a),
      ),
    )
  | (GoodEvilUpdate, false) => Error(GoodEvilUpdateFromClient)
  | (GoodEvilUpdate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.GoodEvilUpdate.parse,
        ~toPacket=a => PacketV1456.GoodEvilUpdate(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.GoodEvilUpdate(a),
      ),
    )
  | (HarpPlay, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.HarpPlay.parse,
        ~toPacket=a => PacketV1456.HarpPlay(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.HarpPlay(a),
      ),
    )
  | (SwitchHit, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.SwitchHit.parse,
        ~toPacket=a => PacketV1456.SwitchHit(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.SwitchHit(a),
      ),
    )
  | (NpcHomeUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.NpcHomeUpdate.parse,
        ~toPacket=a => PacketV1456.NpcHomeUpdate(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.NpcHomeUpdate(a),
      ),
    )
  | (BossOrInvasionSpawn, true) => Error(BossOrInvasionSpawnFromServer)
  | (BossOrInvasionSpawn, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.BossOrInvasionSpawn.parse,
        ~toPacket=a => PacketV1456.BossOrInvasionSpawn(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.BossOrInvasionSpawn(a),
      ),
    )
  | (PlayerDodge, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerDodge.parse,
        ~toPacket=a => PacketV1456.PlayerDodge(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerDodge(a),
      ),
    )
  | (TilePaint, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.TilePaint.parse,
        ~toPacket=a => PacketV1456.TilePaint(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.TilePaint(a),
      ),
    )
  | (WallPaint, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.WallPaint.parse,
        ~toPacket=a => PacketV1456.WallPaint(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.WallPaint(a),
      ),
    )
  | (Teleport, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.Teleport.parse,
        ~toPacket=a => PacketV1456.Teleport(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.Teleport(a),
      ),
    )
  | (PlayerHealOther, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerHealOther.parse,
        ~toPacket=a => PacketV1456.PlayerHealOther(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerHealOther(a),
      ),
    )
  | (DimensionsUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.DimensionsUpdate.parse,
        ~toPacket=a => PacketV1456.DimensionsUpdate(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.DimensionsUpdate(a),
      ),
    )
  | (ClientUuid, true) => Error(ClientUuidFromServer)
  | (ClientUuid, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ClientUuid.parse,
        ~toPacket=a => PacketV1456.ClientUuid(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ClientUuid(a),
      ),
    )
  | (ChestName, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ChestName.parse,
        ~toPacket=a => PacketV1456.ChestName(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ChestName(a),
      ),
    )
  | (NpcCatch, true) => Error(NpcCatchFromServer)
  | (NpcCatch, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.NpcCatch.parse,
        ~toPacket=a => PacketV1456.NpcCatch(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.NpcCatch(a),
      ),
    )
  | (NpcRelease, true) => Error(NpcReleaseFromServer)
  | (NpcRelease, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.NpcRelease.parse,
        ~toPacket=a => PacketV1456.NpcRelease(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.NpcRelease(a),
      ),
    )
  | (TravellingMerchantInventory, false) => Error(TravellingMerchantInventoryFromClient)
  | (TravellingMerchantInventory, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.TravellingMerchantInventory.parse,
        ~toPacket=a => PacketV1456.TravellingMerchantInventory(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.TravellingMerchantInventory(a),
      ),
    )
  | (TeleportationPotion, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.TeleportationPotion.parse,
        ~toPacket=a => PacketV1456.TeleportationPotion(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.TeleportationPotion(a),
      ),
    )
  | (AnglerQuest, false) => Error(AnglerQuestFromClient)
  | (AnglerQuest, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.AnglerQuest.parse,
        ~toPacket=a => PacketV1456.AnglerQuest(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.AnglerQuest(a),
      ),
    )
  | (AnglerQuestComplete, true) => Error(AnglerQuestCompleteFromServer)
  | (AnglerQuestComplete, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.AnglerQuestComplete.parse,
        ~toPacket=a => PacketV1456.AnglerQuestComplete(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.AnglerQuestComplete(a),
      ),
    )
  | (AnglerQuestsCompletedAmount, true)
  | (AnglerQuestsCompletedAmount, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.AnglerQuestsCompletedAmount.parse,
        ~toPacket=a => PacketV1456.AnglerQuestsCompletedAmount(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.AnglerQuestsCompletedAmount(a),
      ),
    )
  | (TemporaryAnimationCreate, false) => Error(TemporaryAnimationCreateFromClient)
  | (TemporaryAnimationCreate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.TemporaryAnimationCreate.parse,
        ~toPacket=a => PacketV1456.TemporaryAnimationCreate(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.TemporaryAnimationCreate(a),
      ),
    )

  | (InvasionProgressReport, false) => Error(InvasionProgressReportFromClient)
  | (InvasionProgressReport, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.InvasionProgressReport.parse,
        ~toPacket=a => PacketV1456.InvasionProgressReport(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.InvasionProgressReport(a),
      ),
    )
  | (ObjectPlace, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ObjectPlace.parse,
        ~toPacket=a => PacketV1456.ObjectPlace(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ObjectPlace(a),
      ),
    )
  | (PlayerChestIndexSync, false) => Error(PlayerChestIndexSyncFromClient)
  | (PlayerChestIndexSync, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerChestIndexSync.parse,
        ~toPacket=a => PacketV1456.PlayerChestIndexSync(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerChestIndexSync(a),
      ),
    )
  | (CombatNumberCreate, false) => Error(CombatNumberCreateFromClient)
  | (CombatNumberCreate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.CombatNumberCreate.parse,
        ~toPacket=a => PacketV1456.CombatNumberCreate(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.CombatNumberCreate(a),
      ),
    )
  | (NetModuleLoad, true | false) =>
    Ok(
      makeParsersWithFromServer(
        ~packetName,
        ~parse=(payload, fromServer) => PacketV1456.NetModuleLoad.parse(payload, ~fromServer),
        ~toPacket=a => PacketV1456.NetModuleLoad(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.NetModuleLoad(a),
      ),
    )
  | (NpcKillCount, false) => Error(NpcKillCountFromClient)
  | (NpcKillCount, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.NpcKillCount.parse,
        ~toPacket=a => PacketV1456.NpcKillCount(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.NpcKillCount(a),
      ),
    )
  | (PlayerStealth, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerStealth.parse,
        ~toPacket=a => PacketV1456.PlayerStealth(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerStealth(a),
      ),
    )
  | (ItemForceIntoNearestChest, true | false) =>
    Ok(
      makeParsersWithFromServer(
        ~packetName,
        ~parse=(payload, fromServer) => PacketV1456.ItemForceIntoNearestChest.parse(payload, fromServer),
        ~toPacket=a => PacketV1456.ItemForceIntoNearestChest(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ItemForceIntoNearestChest(a),
      ),
    )
  | (TileEntityUpdate, false) => Error(TileEntityUpdateFromClient)
  | (TileEntityUpdate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.TileEntityUpdate.parse,
        ~toPacket=a => PacketV1456.TileEntityUpdate(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.TileEntityUpdate(a),
      ),
    )
  | (TileEntityPlace, true) => Error(TileEntityPlaceFromServer)
  | (TileEntityPlace, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.TileEntityPlace.parse,
        ~toPacket=a => PacketV1456.TileEntityPlace(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.TileEntityPlace(a),
      ),
    )
  | (ItemDropModify, false) => Error(ItemDropModifyFromClient)
  | (ItemDropModify, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ItemDropModify.parse,
        ~toPacket=a => PacketV1456.ItemDropModify(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ItemDropModify(a),
      ),
    )
  | (ItemFramePlace, true) => Error(ItemFramePlaceFromServer)
  | (ItemFramePlace, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ItemFramePlace.parse,
        ~toPacket=a => PacketV1456.ItemFramePlace(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ItemFramePlace(a),
      ),
    )
  | (ItemDropInstancedUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ItemDropInstancedUpdate.parse,
        ~toPacket=a => PacketV1456.ItemDropInstancedUpdate(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ItemDropInstancedUpdate(a),
      ),
    )
  | (EmoteBubble, false) => Error(EmoteBubbleFromClient)
  | (EmoteBubble, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.EmoteBubble.parse,
        ~toPacket=a => PacketV1456.EmoteBubble(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.EmoteBubble(a),
      ),
    )
  | (ExtraValueSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ExtraValueSync.parse,
        ~toPacket=a => PacketV1456.ExtraValueSync(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ExtraValueSync(a),
      ),
    )
  | (SocialHandshake, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.SocialHandshake.parse,
        ~toPacket=a => PacketV1456.SocialHandshake(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.SocialHandshake(a),
      ),
    )
  | (Unused, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.Unused.parse,
        ~toPacket=a => PacketV1456.Unused(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.Unused(a),
      ),
    )
  | (PortalKill, true) => Error(PortalKillFromServer)
  | (PortalKill, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PortalKill.parse,
        ~toPacket=a => PacketV1456.PortalKill(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PortalKill(a),
      ),
    )
  | (PlayerTeleportPortal, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerTeleportPortal.parse,
        ~toPacket=a => PacketV1456.PlayerTeleportPortal(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerTeleportPortal(a),
      ),
    )
  | (NpcKilledNotification, false) => Error(NpcKilledNotificationFromClient)
  | (NpcKilledNotification, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.NpcKilledNotification.parse,
        ~toPacket=a => PacketV1456.NpcKilledNotification(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.NpcKilledNotification(a),
      ),
    )
  | (EventNotification, false) => Error(EventNotificationFromClient)
  | (EventNotification, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.EventNotification.parse,
        ~toPacket=a => PacketV1456.EventNotification(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.EventNotification(a),
      ),
    )
  | (MinionTargetUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.MinionTargetUpdate.parse,
        ~toPacket=a => PacketV1456.MinionTargetUpdate(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.MinionTargetUpdate(a),
      ),
    )
  | (NpcTeleportPortal, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.NpcTeleportPortal.parse,
        ~toPacket=a => PacketV1456.NpcTeleportPortal(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.NpcTeleportPortal(a),
      ),
    )
  | (ShieldStrengthsUpdate, false) => Error(ShieldStrengthsUpdateFromClient)
  | (ShieldStrengthsUpdate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ShieldStrengthsUpdate.parse,
        ~toPacket=a => PacketV1456.ShieldStrengthsUpdate(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ShieldStrengthsUpdate(a),
      ),
    )
  | (NebulaLevelUp, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.NebulaLevelUp.parse,
        ~toPacket=a => PacketV1456.NebulaLevelUp(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.NebulaLevelUp(a),
      ),
    )
  | (MoonLordCountdown, false) => Error(MoonLordCountdownFromClient)
  | (MoonLordCountdown, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.MoonLordCountdown.parse,
        ~toPacket=a => PacketV1456.MoonLordCountdown(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.MoonLordCountdown(a),
      ),
    )
  | (NpcShopItem, false) => Error(NpcShopItemFromClient)
  | (NpcShopItem, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.NpcShopItem.parse,
        ~toPacket=a => PacketV1456.NpcShopItem(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.NpcShopItem(a),
      ),
    )
  | (GemLockToggle, true) => Error(GemLockToggleFromServer)
  | (GemLockToggle, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.GemLockToggle.parse,
        ~toPacket=a => PacketV1456.GemLockToggle(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.GemLockToggle(a),
      ),
    )
  | (SmokePoof, false) => Error(SmokePoofFromClient)
  | (SmokePoof, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.SmokePoof.parse,
        ~toPacket=a => PacketV1456.SmokePoof(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.SmokePoof(a),
      ),
    )
  | (ChatMessageSmart, false) => Error(ChatMessageSmartFromClient)
  | (ChatMessageSmart, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ChatMessageSmart.parse,
        ~toPacket=a => PacketV1456.ChatMessageSmart(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ChatMessageSmart(a),
      ),
    )
  | (WiredCannonShot, false) => Error(WiredCannonShotFromClient)
  | (WiredCannonShot, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.WiredCannonShot.parse,
        ~toPacket=a => PacketV1456.WiredCannonShot(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.WiredCannonShot(a),
      ),
    )
  | (MassWireOperation, true) => Error(MassWireOperationFromServer)
  | (MassWireOperation, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.MassWireOperation.parse,
        ~toPacket=a => PacketV1456.MassWireOperation(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.MassWireOperation(a),
      ),
    )
  | (MassWireOperationPay, false) => Error(MassWireOperationPayFromClient)
  | (MassWireOperationPay, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.MassWireOperationPay.parse,
        ~toPacket=a => PacketV1456.MassWireOperationPay(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.MassWireOperationPay(a),
      ),
    )
  | (PartyToggle, true) => Error(PartyToggleFromServer)
  | (PartyToggle, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PartyToggle.parse,
        ~toPacket=a => PacketV1456.PartyToggle(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PartyToggle(a),
      ),
    )
  | (TreeGrowFx, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.TreeGrowFx.parse,
        ~toPacket=a => PacketV1456.TreeGrowFx(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.TreeGrowFx(a),
      ),
    )
  | (CrystalInvasionStart, true) => Error(CrystalInvasionStartFromServer)
  | (CrystalInvasionStart, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.CrystalInvasionStart.parse,
        ~toPacket=a => PacketV1456.CrystalInvasionStart(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.CrystalInvasionStart(a),
      ),
    )
  | (CrystalInvasionWipeAll, false) => Error(CrystalInvasionWipeAllFromClient)
  | (CrystalInvasionWipeAll, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.CrystalInvasionWipeAll.parse,
        ~toPacket=a => PacketV1456.CrystalInvasionWipeAll(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.CrystalInvasionWipeAll(a),
      ),
    )
  | (MinionAttackTargetUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.MinionAttackTargetUpdate.parse,
        ~toPacket=a => PacketV1456.MinionAttackTargetUpdate(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.MinionAttackTargetUpdate(a),
      ),
    )
  | (CrystalInvasionSendWaitTime, false) => Error(CrystalInvasionSendWaitTimeFromClient)
  | (CrystalInvasionSendWaitTime, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.CrystalInvasionSendWaitTime.parse,
        ~toPacket=a => PacketV1456.CrystalInvasionSendWaitTime(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.CrystalInvasionSendWaitTime(a),
      ),
    )
  | (PlayerDamage, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerDamage.parse,
        ~toPacket=a => PacketV1456.PlayerDamage(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerDamage(a),
      ),
    )
  | (PlayerDeath, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerDeath.parse,
        ~toPacket=a => PacketV1456.PlayerDeath(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerDeath(a),
      ),
    )
  | (CombatTextCreate, false) => Error(CombatTextCreateFromClient)
  | (CombatTextCreate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.CombatTextCreate.parse,
        ~toPacket=a => PacketV1456.CombatTextCreate(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.CombatTextCreate(a),
      ),
    )
  | (Emoji, true) => Error(EmojiFromServer)
  | (Emoji, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.Emoji.parse,
        ~toPacket=a => PacketV1456.Emoji(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.Emoji(a),
      ),
    )
  | (TileEntityDisplayDollItemSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.TileEntityDisplayDollItemSync.parse,
        ~toPacket=a => PacketV1456.TileEntityDisplayDollItemSync(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.TileEntityDisplayDollItemSync(a),
      ),
    )
  | (TileEntityInteractionRequest, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.TileEntityInteractionRequest.parse,
        ~toPacket=a => PacketV1456.TileEntityInteractionRequest(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.TileEntityInteractionRequest(a),
      ),
    )
  | (WeaponsRackTryPlacing, true) => Error(WeaponsRackTryPlacingFromServer)
  | (WeaponsRackTryPlacing, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.WeaponsRackTryPlacing.parse,
        ~toPacket=a => PacketV1456.WeaponsRackTryPlacing(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.WeaponsRackTryPlacing(a),
      ),
    )
  | (TileEntityHatRackItemSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.TileEntityHatRackItemSync.parse,
        ~toPacket=a => PacketV1456.TileEntityHatRackItemSync(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.TileEntityHatRackItemSync(a),
      ),
    )
  | (TilePickingSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.TilePickingSync.parse,
        ~toPacket=a => PacketV1456.TilePickingSync(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.TilePickingSync(a),
      ),
    )
  | (RevengeMarkerSync, false) => Error(RevengeMarkerSyncFromClient)
  | (RevengeMarkerSync, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.RevengeMarkerSync.parse,
        ~toPacket=a => PacketV1456.RevengeMarkerSync(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.RevengeMarkerSync(a),
      ),
    )
  | (RevengeMarkerRemove, false) => Error(RevengeMarkerRemoveFromClient)
  | (RevengeMarkerRemove, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.RevengeMarkerRemove.parse,
        ~toPacket=a => PacketV1456.RevengeMarkerRemove(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.RevengeMarkerRemove(a),
      ),
    )
  | (GolfBallLandInCup, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.GolfBallLandInCup.parse,
        ~toPacket=a => PacketV1456.GolfBallLandInCup(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.GolfBallLandInCup(a),
      ),
    )
  | (ClientFinishConnectingToServer, false) => Error(ClientFinishConnectingToServerFromClient)
  | (ClientFinishConnectingToServer, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ClientFinishConnectingToServer.parse,
        ~toPacket=a => PacketV1456.ClientFinishConnectingToServer(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ClientFinishConnectingToServer(a),
      ),
    )
  | (NpcFishOut, true) => Error(NpcFishOutFromServer)
  | (NpcFishOut, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.NpcFishOut.parse,
        ~toPacket=a => PacketV1456.NpcFishOut(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.NpcFishOut(a),
      ),
    )
  | (NpcTamper, false) => Error(NpcTamperFromClient)
  | (NpcTamper, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.NpcTamper.parse,
        ~toPacket=a => PacketV1456.NpcTamper(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.NpcTamper(a),
      ),
    )
  | (LegacySoundPlay, false) => Error(LegacySoundPlayFromClient)
  | (LegacySoundPlay, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.LegacySoundPlay.parse,
        ~toPacket=a => PacketV1456.LegacySoundPlay(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.LegacySoundPlay(a),
      ),
    )
  | (FoodPlatterTryPlacing, true) => Error(FoodPlatterTryPlacingFromServer)
  | (FoodPlatterTryPlacing, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.FoodPlatterTryPlacing.parse,
        ~toPacket=a => PacketV1456.FoodPlatterTryPlacing(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.FoodPlatterTryPlacing(a),
      ),
    )
  | (PlayerLuckFactorsUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerLuckFactorsUpdate.parse,
        ~toPacket=a => PacketV1456.PlayerLuckFactorsUpdate(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerLuckFactorsUpdate(a),
      ),
    )
  | (PlayerDead, false) => Error(PlayerDeadFromClient)
  | (PlayerDead, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerDead.parse,
        ~toPacket=a => PacketV1456.PlayerDead(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerDead(a),
      ),
    )
  | (CavernMonsterTypeSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.CavernMonsterTypeSync.parse,
        ~toPacket=a => PacketV1456.CavernMonsterTypeSync(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.CavernMonsterTypeSync(a),
      ),
    )
  | (NpcBuffRemovalRequest, true) => Error(NpcBuffRemovalRequestFromServer)
  | (NpcBuffRemovalRequest, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.NpcBuffRemovalRequest.parse,
        ~toPacket=a => PacketV1456.NpcBuffRemovalRequest(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.NpcBuffRemovalRequest(a),
      ),
    )
  | (ClientSyncedInventory, true) => Error(ClientSyncedInventoryFromServer)
  | (ClientSyncedInventory, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ClientSyncedInventory.parse,
        ~toPacket=a => PacketV1456.ClientSyncedInventory(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ClientSyncedInventory(a),
      ),
    )
  | (CountsAsHostForGameplaySet, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.CountsAsHostForGameplaySet.parse,
        ~toPacket=a => PacketV1456.CountsAsHostForGameplaySet(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.CountsAsHostForGameplaySet(a),
      ),
    )
  | (CreditsOrSlimeTransform, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.CreditsOrSlimeTransform.parse,
        ~toPacket=a => PacketV1456.CreditsOrSlimeTransform(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.CreditsOrSlimeTransform(a),
      ),
    )
  | (LucyAxeMessage, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.LucyAxeMessage.parse,
        ~toPacket=a => PacketV1456.LucyAxeMessage(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.LucyAxeMessage(a),
      ),
    )
  | (PiggyBankVoidLensUpdate, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PiggyBankVoidLensUpdate.parse,
        ~toPacket=a => PacketV1456.PiggyBankVoidLensUpdate(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PiggyBankVoidLensUpdate(a),
      ),
    )
  | (DungeonDefendersEventAttemptSkipWait, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.DungeonDefendersEventAttemptSkipWait.parse,
        ~toPacket=a => PacketV1456.DungeonDefendersEventAttemptSkipWait(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.DungeonDefendersEventAttemptSkipWait(a),
      ),
    )
  | (HaveDryadDoStardewAnimation, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.HaveDryadDoStardewAnimation.parse,
        ~toPacket=a => PacketV1456.HaveDryadDoStardewAnimation(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.HaveDryadDoStardewAnimation(a),
      ),
    )
  | (ItemDropShimmeredUpdate, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ItemDropShimmeredUpdate.parse,
        ~toPacket=a => PacketV1456.ItemDropShimmeredUpdate(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ItemDropShimmeredUpdate(a),
      ),
    )
  | (ShimmerEffectOrCoinLuck, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ShimmerEffectOrCoinLuck.parse,
        ~toPacket=a => PacketV1456.ShimmerEffectOrCoinLuck(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ShimmerEffectOrCoinLuck(a),
      ),
    )
  | (LoadoutSwitch, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.LoadoutSwitch.parse,
        ~toPacket=a => PacketV1456.LoadoutSwitch(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.LoadoutSwitch(a),
      ),
    )
  | (ItemDropProtectedUpdate, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ItemDropProtectedUpdate.parse,
        ~toPacket=a => PacketV1456.ItemDropProtectedUpdate(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ItemDropProtectedUpdate(a),
      ),
    )
  | (DeadCellsDisplayJarTryPlacing, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.DeadCellsDisplayJarTryPlacing.parse,
        ~toPacket=a => PacketV1456.DeadCellsDisplayJarTryPlacing(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.DeadCellsDisplayJarTryPlacing(a),
      ),
    )
  | (PlayerSpectate, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerSpectate.parse,
        ~toPacket=a => PacketV1456.PlayerSpectate(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerSpectate(a),
      ),
    )
  | (ItemDropClear, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ItemDropClear.parse,
        ~toPacket=a => PacketV1456.ItemDropClear(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ItemDropClear(a),
      ),
    )
  | (PlayerItemUseSound, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerItemUseSound.parse,
        ~toPacket=a => PacketV1456.PlayerItemUseSound(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerItemUseSound(a),
      ),
    )
  | (NpcHurtByDebuff, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.NpcHurtByDebuff.parse,
        ~toPacket=a => PacketV1456.NpcHurtByDebuff(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.NpcHurtByDebuff(a),
      ),
    )
  | (Ping, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.Ping.parse,
        ~toPacket=a => PacketV1456.Ping(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.Ping(a),
      ),
    )
  | (ChestResize, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ChestResize.parse,
        ~toPacket=a => PacketV1456.ChestResize(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ChestResize(a),
      ),
    )
  | (LeashedEntityAnchorInsertItem, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.LeashedEntityAnchorInsertItem.parse,
        ~toPacket=a => PacketV1456.LeashedEntityAnchorInsertItem(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.LeashedEntityAnchorInsertItem(a),
      ),
    )
  | (PlayerTeamUpdate, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerTeamUpdate.parse,
        ~toPacket=a => PacketV1456.PlayerTeamUpdate(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerTeamUpdate(a),
      ),
    )
  | (PlayerTeamSwapSpawn, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerTeamSwapSpawn.parse,
        ~toPacket=a => PacketV1456.PlayerTeamSwapSpawn(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerTeamSwapSpawn(a),
      ),
    )
  | (SectionRequest, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.SectionRequest.parse,
        ~toPacket=a => PacketV1456.SectionRequest(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.SectionRequest(a),
      ),
    )
  | (ItemDropPosition, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ItemDropPosition.parse,
        ~toPacket=a => PacketV1456.ItemDropPosition(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ItemDropPosition(a),
      ),
    )
  | (HostToken, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.HostToken.parse,
        ~toPacket=a => PacketV1456.HostToken(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.HostToken(a),
      ),
    )
  | (ServerInfo, false) => Error(ServerInfoFromClient)
  | (ServerInfo, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.ServerInfo.parse,
        ~toPacket=a => PacketV1456.ServerInfo(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.ServerInfo(a),
      ),
    )
  | (PlayerPlatformInfo, true) => Error(PlayerPlatformInfoFromServer)
  | (PlayerPlatformInfo, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1456.PlayerPlatformInfo.parse,
        ~toPacket=a => PacketV1456.PlayerPlatformInfo(a),
        ~toLazyPacket=a => PacketV1456.LazyPacket.PlayerPlatformInfo(a),
      ),
    )
  }
}

let parsePayload = (packetType: PacketTypeV1456.t, payload: NodeJs.Buffer.t, fromServer: bool): result<
  PacketV1456.t,
  IParser.parseError,
> =>
  switch getParsers(packetType, fromServer) {
  | Ok(parsers) => parsers.parse(payload, fromServer)
  | Error(err) => Error(err)
  }

let parsePayloadLazy = (
  packetType: PacketTypeV1456.t,
  payload: NodeJs.Buffer.t,
  fromServer: bool,
): result<PacketV1456.LazyPacket.t, IParser.parseError> =>
  switch getParsers(packetType, fromServer) {
  | Ok(parsers) => parsers.parseLazy(payload, fromServer)
  | Error(err) => Error(err)
  }

let parse = (
  ~buffer: NodeJs.Buffer.t,
  ~fromServer: bool,
  ~ignore: array<PacketTypeV1456.t>=[],
) => {
  switch buffer->NodeJs.Buffer.length {
  | 0 | 1 | 2 => Error(IParser.ParseError.InvalidPacketLength(buffer->NodeJs.Buffer.length))
  | _ =>
    switch buffer->NodeJs.Buffer.unsafeGet(2)->PacketTypeV1456.fromInt {
    | Some(packetType) if Array.includes(ignore, packetType) =>
      Error(IParser.ParseError.IgnoredPacket)
    | Some(packetType) =>
      try {
        // As this module is parsing packets from the latest version to the equivalent packet data structures
        // it won't ever need Serializing after only parsing
        parsePayload(packetType, buffer, fromServer)
      } catch {
      | JsExn(obj) => Error(IParser.ParseError.ReaderError({context: "ParserV1456.parse", error: obj}))
      }
    | None =>
      Error(IParser.ParseError.InvalidPacketType(buffer->NodeJs.Buffer.unsafeGet(2)))
    }
  }
}

let parseLazy = (
  ~buffer: NodeJs.Buffer.t,
  ~fromServer: bool,
) => {
  switch buffer->NodeJs.Buffer.length {
  | 0 | 1 | 2 => Error(IParser.ParseError.InvalidPacketLength(buffer->NodeJs.Buffer.length))
  | _ =>
    switch buffer->NodeJs.Buffer.unsafeGet(2)->PacketTypeV1456.fromInt {
    | Some(packetType) =>
      try {
        // As this module is parsing packets from the latest version to the equivalent packet data structures
        // it won't ever need Serializing after only parsing
        parsePayloadLazy(packetType, buffer, fromServer)
      } catch {
      | JsExn(obj) =>
        Error(IParser.ParseError.ReaderError({context: "ParserV1456.parseLazy", error: obj}))
      }
    | None =>
      Error(IParser.ParseError.InvalidPacketType(buffer->NodeJs.Buffer.unsafeGet(2)))
    }
  }
}
