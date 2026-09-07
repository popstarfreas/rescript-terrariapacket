let addPacketContext = (
  ~packetName,
  err: ErrorAwarePacketReader.readError,
): ErrorAwarePacketReader.readError => {
  context: "PacketV1457 " ++ packetName ++ ": " ++ err.context,
  error: err.error,
}

let mapPacket = (result, ~packetName, fn): result<PacketV1457.t, IParser.parseError> =>
  result
  ->Result.map(fn)
  ->Result.mapError(e => IParser.ParseError.ReaderError(addPacketContext(~packetName, e)))

type parsers = {
  parse: (NodeJs.Buffer.t, bool) => result<PacketV1457.t, IParser.parseError>,
  parseLazy: (NodeJs.Buffer.t, bool) => result<PacketV1457.LazyPacket.t, IParser.parseError>,
}

let makeParsers = (
  ~packetName: string,
  ~parse: NodeJs.Buffer.t => result<'a, ErrorAwarePacketReader.readError>,
  ~toPacket: 'a => PacketV1457.t,
  ~toLazyPacket: PacketV1457.LazyPacket.lazyParsed<'a> => PacketV1457.LazyPacket.t,
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
  ~toPacket: 'a => PacketV1457.t,
  ~toLazyPacket: PacketV1457.LazyPacket.lazyParsed<'a> => PacketV1457.LazyPacket.t,
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

let getParsers = (packetType: PacketTypeV1457.t, fromServer: bool): result<
  parsers,
  IParser.parseError,
> => {
  let packetName = PacketTypeV1457.packetName(packetType)
  switch (packetType, fromServer) {
  | (ConnectRequest, true) => Error(ConnectRequestFromServer)
  | (ConnectRequest, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ConnectRequest.parse,
        ~toPacket=a => PacketV1457.ConnectRequest(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ConnectRequest(a),
      ),
    )
  | (Disconnect, false) => Error(DisconnectFromClient)
  | (Disconnect, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.Disconnect.parse,
        ~toPacket=a => PacketV1457.Disconnect(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.Disconnect(a),
      ),
    )
  | (PlayerSlotSet, false) => Error(PlayerSlotSetFromClient)
  | (PlayerSlotSet, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerSlotSet.parse,
        ~toPacket=a => PacketV1457.PlayerSlotSet(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerSlotSet(a),
      ),
    )
  | (PlayerInfo, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerInfo.parse,
        ~toPacket=a => PacketV1457.PlayerInfo(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerInfo(a),
      ),
    )
  | (PlayerInventorySlot, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerInventorySlot.parse,
        ~toPacket=a => PacketV1457.PlayerInventorySlot(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerInventorySlot(a),
      ),
    )
  | (WorldDataRequest, true) => Error(WorldDataRequestFromServer)
  | (WorldDataRequest, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.WorldDataRequest.parse,
        ~toPacket=a => PacketV1457.WorldDataRequest(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.WorldDataRequest(a),
      ),
    )
  | (WorldInfo, false) => Error(WorldInfoFromClient)
  | (WorldInfo, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.WorldInfo.parse,
        ~toPacket=a => PacketV1457.WorldInfo(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.WorldInfo(a),
      ),
    )
  | (InitialTileSectionsRequest, true) => Error(InitialTileSectionsRequestFromServer)
  | (InitialTileSectionsRequest, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.InitialTileSectionsRequest.parse,
        ~toPacket=a => PacketV1457.InitialTileSectionsRequest(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.InitialTileSectionsRequest(a),
      ),
    )
  | (Status, false) => Error(StatusFromClient)
  | (Status, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.Status.parse,
        ~toPacket=a => PacketV1457.Status(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.Status(a),
      ),
    )
  | (TileSectionSend, false) => Error(TileSectionSendFromClient)
  | (TileSectionSend, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.TileSectionSend.parse,
        ~toPacket=a => PacketV1457.TileSectionSend(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.TileSectionSend(a),
      ),
    )
  | (TileSectionFrame, false) => Error(TileSectionFrameFromClient)
  | (TileSectionFrame, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.TileSectionFrame.parse,
        ~toPacket=a => PacketV1457.TileSectionFrame(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.TileSectionFrame(a),
      ),
    )
  | (PlayerSpawn, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerSpawn.parse,
        ~toPacket=a => PacketV1457.PlayerSpawn(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerSpawn(a),
      ),
    )
  | (PlayerUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerUpdate.parse,
        ~toPacket=a => PacketV1457.PlayerUpdate(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerUpdate(a),
      ),
    )
  | (PlayerActive, false) => Error(PlayerActiveFromClient)
  | (PlayerActive, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerActive.parse,
        ~toPacket=a => PacketV1457.PlayerActive(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerActive(a),
      ),
    )
  | (PlayerHealth, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerHealth.parse,
        ~toPacket=a => PacketV1457.PlayerHealth(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerHealth(a),
      ),
    )
  | (TileModify, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.TileModify.parse,
        ~toPacket=a => PacketV1457.TileModify(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.TileModify(a),
      ),
    )
  | (TimeSet, false) => Error(TimeSetFromClient)
  | (TimeSet, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.TimeSet.parse,
        ~toPacket=a => PacketV1457.TimeSet(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.TimeSet(a),
      ),
    )
  | (DoorUse, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.DoorUse.parse,
        ~toPacket=a => PacketV1457.DoorUse(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.DoorUse(a),
      ),
    )
  | (TileSquareSend, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.TileSquareSend.parse,
        ~toPacket=a => PacketV1457.TileSquareSend(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.TileSquareSend(a),
      ),
    )
  | (ItemDropUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ItemDropUpdate.parse,
        ~toPacket=a => PacketV1457.ItemDropUpdate(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ItemDropUpdate(a),
      ),
    )
  | (ItemOwner, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ItemOwner.parse,
        ~toPacket=a => PacketV1457.ItemOwner(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ItemOwner(a),
      ),
    )
  | (NpcUpdate, false) => Error(NpcUpdateFromClient)
  | (NpcUpdate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.NpcUpdate.parse,
        ~toPacket=a => PacketV1457.NpcUpdate(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.NpcUpdate(a),
      ),
    )
  | (NpcItemStrike, true | false) => Error(NotImplemented)
  | (ProjectileSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ProjectileSync.parse,
        ~toPacket=a => PacketV1457.ProjectileSync(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ProjectileSync(a),
      ),
    )
  | (NpcStrike, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.NpcStrike.parse,
        ~toPacket=a => PacketV1457.NpcStrike(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.NpcStrike(a),
      ),
    )
  | (ProjectileDestroy, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ProjectileDestroy.parse,
        ~toPacket=a => PacketV1457.ProjectileDestroy(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ProjectileDestroy(a),
      ),
    )
  | (PvpToggle, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PvpToggle.parse,
        ~toPacket=a => PacketV1457.PvpToggle(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PvpToggle(a),
      ),
    )
  | (ChestOpen, true) => Error(ChestOpenFromServer)
  | (ChestOpen, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ChestOpen.parse,
        ~toPacket=a => PacketV1457.ChestOpen(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ChestOpen(a),
      ),
    )
  | (ChestItem, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ChestItem.parse,
        ~toPacket=a => PacketV1457.ChestItem(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ChestItem(a),
      ),
    )
  | (ActiveContainerSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ActiveContainerSync.parse,
        ~toPacket=a => PacketV1457.ActiveContainerSync(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ActiveContainerSync(a),
      ),
    )
  | (ChestPlace, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ChestPlace.parse,
        ~toPacket=a => PacketV1457.ChestPlace(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ChestPlace(a),
      ),
    )
  | (HealEffect, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.HealEffect.parse,
        ~toPacket=a => PacketV1457.HealEffect(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.HealEffect(a),
      ),
    )
  | (Zones, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.Zones.parse,
        ~toPacket=a => PacketV1457.Zones(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.Zones(a),
      ),
    )
  | (PasswordRequired, false) => Error(PasswordRequiredFromClient)
  | (PasswordRequired, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PasswordRequired.parse,
        ~toPacket=a => PacketV1457.PasswordRequired(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PasswordRequired(a),
      ),
    )
  | (PasswordSend, true) => Error(PasswordSendFromServer)
  | (PasswordSend, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PasswordSend.parse,
        ~toPacket=a => PacketV1457.PasswordSend(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PasswordSend(a),
      ),
    )
  | (ItemOwnerRemove, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ItemOwnerRemove.parse,
        ~toPacket=a => PacketV1457.ItemOwnerRemove(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ItemOwnerRemove(a),
      ),
    )
  | (NpcTalk, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.NpcTalk.parse,
        ~toPacket=a => PacketV1457.NpcTalk(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.NpcTalk(a),
      ),
    )
  | (PlayerAnimation, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerAnimation.parse,
        ~toPacket=a => PacketV1457.PlayerAnimation(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerAnimation(a),
      ),
    )
  | (PlayerMana, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerMana.parse,
        ~toPacket=a => PacketV1457.PlayerMana(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerMana(a),
      ),
    )
  | (ManaEffect, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ManaEffect.parse,
        ~toPacket=a => PacketV1457.ManaEffect(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ManaEffect(a),
      ),
    )
  | (PlayerTeam, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerTeam.parse,
        ~toPacket=a => PacketV1457.PlayerTeam(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerTeam(a),
      ),
    )
  | (SignRead, true) => Error(SignReadFromServer)
  | (SignRead, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.SignRead.parse,
        ~toPacket=a => PacketV1457.SignRead(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.SignRead(a),
      ),
    )
  | (SignNew, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.SignNew.parse,
        ~toPacket=a => PacketV1457.SignNew(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.SignNew(a),
      ),
    )
  | (LiquidSet, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.LiquidSet.parse,
        ~toPacket=a => PacketV1457.LiquidSet(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.LiquidSet(a),
      ),
    )
  | (PlayerSpawnSelf, false) => Error(PlayerSpawnSelfFromClient)
  | (PlayerSpawnSelf, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerSpawnSelf.parse,
        ~toPacket=a => PacketV1457.PlayerSpawnSelf(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerSpawnSelf(a),
      ),
    )
  | (PlayerBuffsSet, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerBuffsSet.parse,
        ~toPacket=a => PacketV1457.PlayerBuffsSet(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerBuffsSet(a),
      ),
    )
  | (NpcSpecialEffect, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.NpcSpecialEffect.parse,
        ~toPacket=a => PacketV1457.NpcSpecialEffect(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.NpcSpecialEffect(a),
      ),
    )
  | (ChestOrTempleUnlock, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ChestOrTempleUnlock.parse,
        ~toPacket=a => PacketV1457.ChestOrTempleUnlock(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ChestOrTempleUnlock(a),
      ),
    )
  | (NpcBuffAdd, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.NpcBuffAdd.parse,
        ~toPacket=a => PacketV1457.NpcBuffAdd(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.NpcBuffAdd(a),
      ),
    )
  | (NpcBuffUpdate, false) => Error(NpcBuffUpdateFromClient)
  | (NpcBuffUpdate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.NpcBuffUpdate.parse,
        ~toPacket=a => PacketV1457.NpcBuffUpdate(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.NpcBuffUpdate(a),
      ),
    )
  | (PlayerBuffAdd, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerBuffAdd.parse,
        ~toPacket=a => PacketV1457.PlayerBuffAdd(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerBuffAdd(a),
      ),
    )
  | (NpcNameUpdate, fromServer) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.NpcNameUpdate.parse(_, ~fromServer),
        ~toPacket=a => PacketV1457.NpcNameUpdate(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.NpcNameUpdate(a),
      ),
    )
  | (GoodEvilUpdate, false) => Error(GoodEvilUpdateFromClient)
  | (GoodEvilUpdate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.GoodEvilUpdate.parse,
        ~toPacket=a => PacketV1457.GoodEvilUpdate(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.GoodEvilUpdate(a),
      ),
    )
  | (HarpPlay, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.HarpPlay.parse,
        ~toPacket=a => PacketV1457.HarpPlay(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.HarpPlay(a),
      ),
    )
  | (SwitchHit, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.SwitchHit.parse,
        ~toPacket=a => PacketV1457.SwitchHit(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.SwitchHit(a),
      ),
    )
  | (NpcHomeUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.NpcHomeUpdate.parse,
        ~toPacket=a => PacketV1457.NpcHomeUpdate(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.NpcHomeUpdate(a),
      ),
    )
  | (BossOrInvasionSpawn, true) => Error(BossOrInvasionSpawnFromServer)
  | (BossOrInvasionSpawn, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.BossOrInvasionSpawn.parse,
        ~toPacket=a => PacketV1457.BossOrInvasionSpawn(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.BossOrInvasionSpawn(a),
      ),
    )
  | (PlayerDodge, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerDodge.parse,
        ~toPacket=a => PacketV1457.PlayerDodge(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerDodge(a),
      ),
    )
  | (TilePaint, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.TilePaint.parse,
        ~toPacket=a => PacketV1457.TilePaint(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.TilePaint(a),
      ),
    )
  | (WallPaint, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.WallPaint.parse,
        ~toPacket=a => PacketV1457.WallPaint(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.WallPaint(a),
      ),
    )
  | (Teleport, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.Teleport.parse,
        ~toPacket=a => PacketV1457.Teleport(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.Teleport(a),
      ),
    )
  | (PlayerHealOther, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerHealOther.parse,
        ~toPacket=a => PacketV1457.PlayerHealOther(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerHealOther(a),
      ),
    )
  | (DimensionsUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.DimensionsUpdate.parse,
        ~toPacket=a => PacketV1457.DimensionsUpdate(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.DimensionsUpdate(a),
      ),
    )
  | (ClientUuid, true) => Error(ClientUuidFromServer)
  | (ClientUuid, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ClientUuid.parse,
        ~toPacket=a => PacketV1457.ClientUuid(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ClientUuid(a),
      ),
    )
  | (ChestName, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ChestName.parse,
        ~toPacket=a => PacketV1457.ChestName(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ChestName(a),
      ),
    )
  | (NpcCatch, true) => Error(NpcCatchFromServer)
  | (NpcCatch, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.NpcCatch.parse,
        ~toPacket=a => PacketV1457.NpcCatch(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.NpcCatch(a),
      ),
    )
  | (NpcRelease, true) => Error(NpcReleaseFromServer)
  | (NpcRelease, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.NpcRelease.parse,
        ~toPacket=a => PacketV1457.NpcRelease(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.NpcRelease(a),
      ),
    )
  | (TravellingMerchantInventory, false) => Error(TravellingMerchantInventoryFromClient)
  | (TravellingMerchantInventory, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.TravellingMerchantInventory.parse,
        ~toPacket=a => PacketV1457.TravellingMerchantInventory(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.TravellingMerchantInventory(a),
      ),
    )
  | (TeleportationPotion, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.TeleportationPotion.parse,
        ~toPacket=a => PacketV1457.TeleportationPotion(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.TeleportationPotion(a),
      ),
    )
  | (AnglerQuest, false) => Error(AnglerQuestFromClient)
  | (AnglerQuest, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.AnglerQuest.parse,
        ~toPacket=a => PacketV1457.AnglerQuest(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.AnglerQuest(a),
      ),
    )
  | (AnglerQuestComplete, true) => Error(AnglerQuestCompleteFromServer)
  | (AnglerQuestComplete, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.AnglerQuestComplete.parse,
        ~toPacket=a => PacketV1457.AnglerQuestComplete(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.AnglerQuestComplete(a),
      ),
    )
  | (AnglerQuestsCompletedAmount, true)
  | (AnglerQuestsCompletedAmount, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.AnglerQuestsCompletedAmount.parse,
        ~toPacket=a => PacketV1457.AnglerQuestsCompletedAmount(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.AnglerQuestsCompletedAmount(a),
      ),
    )
  | (TemporaryAnimationCreate, false) => Error(TemporaryAnimationCreateFromClient)
  | (TemporaryAnimationCreate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.TemporaryAnimationCreate.parse,
        ~toPacket=a => PacketV1457.TemporaryAnimationCreate(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.TemporaryAnimationCreate(a),
      ),
    )

  | (InvasionProgressReport, false) => Error(InvasionProgressReportFromClient)
  | (InvasionProgressReport, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.InvasionProgressReport.parse,
        ~toPacket=a => PacketV1457.InvasionProgressReport(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.InvasionProgressReport(a),
      ),
    )
  | (ObjectPlace, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ObjectPlace.parse,
        ~toPacket=a => PacketV1457.ObjectPlace(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ObjectPlace(a),
      ),
    )
  | (PlayerChestIndexSync, false) => Error(PlayerChestIndexSyncFromClient)
  | (PlayerChestIndexSync, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerChestIndexSync.parse,
        ~toPacket=a => PacketV1457.PlayerChestIndexSync(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerChestIndexSync(a),
      ),
    )
  | (CombatNumberCreate, false) => Error(CombatNumberCreateFromClient)
  | (CombatNumberCreate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.CombatNumberCreate.parse,
        ~toPacket=a => PacketV1457.CombatNumberCreate(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.CombatNumberCreate(a),
      ),
    )
  | (NetModuleLoad, true | false) =>
    Ok(
      makeParsersWithFromServer(
        ~packetName,
        ~parse=(payload, fromServer) => PacketV1457.NetModuleLoad.parse(payload, ~fromServer),
        ~toPacket=a => PacketV1457.NetModuleLoad(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.NetModuleLoad(a),
      ),
    )
  | (NpcKillCount, false) => Error(NpcKillCountFromClient)
  | (NpcKillCount, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.NpcKillCount.parse,
        ~toPacket=a => PacketV1457.NpcKillCount(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.NpcKillCount(a),
      ),
    )
  | (PlayerStealth, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerStealth.parse,
        ~toPacket=a => PacketV1457.PlayerStealth(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerStealth(a),
      ),
    )
  | (ItemForceIntoNearestChest, true | false) =>
    Ok(
      makeParsersWithFromServer(
        ~packetName,
        ~parse=(payload, fromServer) => PacketV1457.ItemForceIntoNearestChest.parse(payload, fromServer),
        ~toPacket=a => PacketV1457.ItemForceIntoNearestChest(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ItemForceIntoNearestChest(a),
      ),
    )
  | (TileEntityUpdate, false) => Error(TileEntityUpdateFromClient)
  | (TileEntityUpdate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.TileEntityUpdate.parse,
        ~toPacket=a => PacketV1457.TileEntityUpdate(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.TileEntityUpdate(a),
      ),
    )
  | (TileEntityPlace, true) => Error(TileEntityPlaceFromServer)
  | (TileEntityPlace, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.TileEntityPlace.parse,
        ~toPacket=a => PacketV1457.TileEntityPlace(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.TileEntityPlace(a),
      ),
    )
  | (ItemDropModify, false) => Error(ItemDropModifyFromClient)
  | (ItemDropModify, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ItemDropModify.parse,
        ~toPacket=a => PacketV1457.ItemDropModify(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ItemDropModify(a),
      ),
    )
  | (ItemFramePlace, true) => Error(ItemFramePlaceFromServer)
  | (ItemFramePlace, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ItemFramePlace.parse,
        ~toPacket=a => PacketV1457.ItemFramePlace(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ItemFramePlace(a),
      ),
    )
  | (ItemDropInstancedUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ItemDropInstancedUpdate.parse,
        ~toPacket=a => PacketV1457.ItemDropInstancedUpdate(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ItemDropInstancedUpdate(a),
      ),
    )
  | (EmoteBubble, false) => Error(EmoteBubbleFromClient)
  | (EmoteBubble, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.EmoteBubble.parse,
        ~toPacket=a => PacketV1457.EmoteBubble(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.EmoteBubble(a),
      ),
    )
  | (ExtraValueSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ExtraValueSync.parse,
        ~toPacket=a => PacketV1457.ExtraValueSync(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ExtraValueSync(a),
      ),
    )
  | (SocialHandshake, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.SocialHandshake.parse,
        ~toPacket=a => PacketV1457.SocialHandshake(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.SocialHandshake(a),
      ),
    )
  | (Unused, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.Unused.parse,
        ~toPacket=a => PacketV1457.Unused(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.Unused(a),
      ),
    )
  | (PortalKill, true) => Error(PortalKillFromServer)
  | (PortalKill, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PortalKill.parse,
        ~toPacket=a => PacketV1457.PortalKill(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PortalKill(a),
      ),
    )
  | (PlayerTeleportPortal, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerTeleportPortal.parse,
        ~toPacket=a => PacketV1457.PlayerTeleportPortal(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerTeleportPortal(a),
      ),
    )
  | (NpcKilledNotification, false) => Error(NpcKilledNotificationFromClient)
  | (NpcKilledNotification, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.NpcKilledNotification.parse,
        ~toPacket=a => PacketV1457.NpcKilledNotification(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.NpcKilledNotification(a),
      ),
    )
  | (EventNotification, false) => Error(EventNotificationFromClient)
  | (EventNotification, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.EventNotification.parse,
        ~toPacket=a => PacketV1457.EventNotification(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.EventNotification(a),
      ),
    )
  | (MinionTargetUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.MinionTargetUpdate.parse,
        ~toPacket=a => PacketV1457.MinionTargetUpdate(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.MinionTargetUpdate(a),
      ),
    )
  | (NpcTeleportPortal, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.NpcTeleportPortal.parse,
        ~toPacket=a => PacketV1457.NpcTeleportPortal(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.NpcTeleportPortal(a),
      ),
    )
  | (ShieldStrengthsUpdate, false) => Error(ShieldStrengthsUpdateFromClient)
  | (ShieldStrengthsUpdate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ShieldStrengthsUpdate.parse,
        ~toPacket=a => PacketV1457.ShieldStrengthsUpdate(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ShieldStrengthsUpdate(a),
      ),
    )
  | (NebulaLevelUp, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.NebulaLevelUp.parse,
        ~toPacket=a => PacketV1457.NebulaLevelUp(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.NebulaLevelUp(a),
      ),
    )
  | (MoonLordCountdown, false) => Error(MoonLordCountdownFromClient)
  | (MoonLordCountdown, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.MoonLordCountdown.parse,
        ~toPacket=a => PacketV1457.MoonLordCountdown(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.MoonLordCountdown(a),
      ),
    )
  | (NpcShopItem, false) => Error(NpcShopItemFromClient)
  | (NpcShopItem, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.NpcShopItem.parse,
        ~toPacket=a => PacketV1457.NpcShopItem(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.NpcShopItem(a),
      ),
    )
  | (GemLockToggle, true) => Error(GemLockToggleFromServer)
  | (GemLockToggle, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.GemLockToggle.parse,
        ~toPacket=a => PacketV1457.GemLockToggle(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.GemLockToggle(a),
      ),
    )
  | (SmokePoof, false) => Error(SmokePoofFromClient)
  | (SmokePoof, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.SmokePoof.parse,
        ~toPacket=a => PacketV1457.SmokePoof(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.SmokePoof(a),
      ),
    )
  | (ChatMessageSmart, false) => Error(ChatMessageSmartFromClient)
  | (ChatMessageSmart, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ChatMessageSmart.parse,
        ~toPacket=a => PacketV1457.ChatMessageSmart(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ChatMessageSmart(a),
      ),
    )
  | (WiredCannonShot, false) => Error(WiredCannonShotFromClient)
  | (WiredCannonShot, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.WiredCannonShot.parse,
        ~toPacket=a => PacketV1457.WiredCannonShot(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.WiredCannonShot(a),
      ),
    )
  | (MassWireOperation, true) => Error(MassWireOperationFromServer)
  | (MassWireOperation, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.MassWireOperation.parse,
        ~toPacket=a => PacketV1457.MassWireOperation(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.MassWireOperation(a),
      ),
    )
  | (MassWireOperationPay, false) => Error(MassWireOperationPayFromClient)
  | (MassWireOperationPay, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.MassWireOperationPay.parse,
        ~toPacket=a => PacketV1457.MassWireOperationPay(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.MassWireOperationPay(a),
      ),
    )
  | (PartyToggle, true) => Error(PartyToggleFromServer)
  | (PartyToggle, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PartyToggle.parse,
        ~toPacket=a => PacketV1457.PartyToggle(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PartyToggle(a),
      ),
    )
  | (TreeGrowFx, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.TreeGrowFx.parse,
        ~toPacket=a => PacketV1457.TreeGrowFx(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.TreeGrowFx(a),
      ),
    )
  | (CrystalInvasionStart, true) => Error(CrystalInvasionStartFromServer)
  | (CrystalInvasionStart, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.CrystalInvasionStart.parse,
        ~toPacket=a => PacketV1457.CrystalInvasionStart(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.CrystalInvasionStart(a),
      ),
    )
  | (CrystalInvasionWipeAll, false) => Error(CrystalInvasionWipeAllFromClient)
  | (CrystalInvasionWipeAll, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.CrystalInvasionWipeAll.parse,
        ~toPacket=a => PacketV1457.CrystalInvasionWipeAll(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.CrystalInvasionWipeAll(a),
      ),
    )
  | (MinionAttackTargetUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.MinionAttackTargetUpdate.parse,
        ~toPacket=a => PacketV1457.MinionAttackTargetUpdate(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.MinionAttackTargetUpdate(a),
      ),
    )
  | (CrystalInvasionSendWaitTime, false) => Error(CrystalInvasionSendWaitTimeFromClient)
  | (CrystalInvasionSendWaitTime, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.CrystalInvasionSendWaitTime.parse,
        ~toPacket=a => PacketV1457.CrystalInvasionSendWaitTime(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.CrystalInvasionSendWaitTime(a),
      ),
    )
  | (PlayerDamage, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerDamage.parse,
        ~toPacket=a => PacketV1457.PlayerDamage(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerDamage(a),
      ),
    )
  | (PlayerDeath, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerDeath.parse,
        ~toPacket=a => PacketV1457.PlayerDeath(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerDeath(a),
      ),
    )
  | (CombatTextCreate, false) => Error(CombatTextCreateFromClient)
  | (CombatTextCreate, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.CombatTextCreate.parse,
        ~toPacket=a => PacketV1457.CombatTextCreate(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.CombatTextCreate(a),
      ),
    )
  | (Emoji, true) => Error(EmojiFromServer)
  | (Emoji, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.Emoji.parse,
        ~toPacket=a => PacketV1457.Emoji(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.Emoji(a),
      ),
    )
  | (TileEntityDisplayDollItemSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.TileEntityDisplayDollItemSync.parse,
        ~toPacket=a => PacketV1457.TileEntityDisplayDollItemSync(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.TileEntityDisplayDollItemSync(a),
      ),
    )
  | (TileEntityInteractionRequest, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.TileEntityInteractionRequest.parse,
        ~toPacket=a => PacketV1457.TileEntityInteractionRequest(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.TileEntityInteractionRequest(a),
      ),
    )
  | (WeaponsRackTryPlacing, true) => Error(WeaponsRackTryPlacingFromServer)
  | (WeaponsRackTryPlacing, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.WeaponsRackTryPlacing.parse,
        ~toPacket=a => PacketV1457.WeaponsRackTryPlacing(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.WeaponsRackTryPlacing(a),
      ),
    )
  | (TileEntityHatRackItemSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.TileEntityHatRackItemSync.parse,
        ~toPacket=a => PacketV1457.TileEntityHatRackItemSync(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.TileEntityHatRackItemSync(a),
      ),
    )
  | (TilePickingSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.TilePickingSync.parse,
        ~toPacket=a => PacketV1457.TilePickingSync(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.TilePickingSync(a),
      ),
    )
  | (RevengeMarkerSync, false) => Error(RevengeMarkerSyncFromClient)
  | (RevengeMarkerSync, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.RevengeMarkerSync.parse,
        ~toPacket=a => PacketV1457.RevengeMarkerSync(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.RevengeMarkerSync(a),
      ),
    )
  | (RevengeMarkerRemove, false) => Error(RevengeMarkerRemoveFromClient)
  | (RevengeMarkerRemove, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.RevengeMarkerRemove.parse,
        ~toPacket=a => PacketV1457.RevengeMarkerRemove(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.RevengeMarkerRemove(a),
      ),
    )
  | (GolfBallLandInCup, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.GolfBallLandInCup.parse,
        ~toPacket=a => PacketV1457.GolfBallLandInCup(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.GolfBallLandInCup(a),
      ),
    )
  | (ClientFinishConnectingToServer, false) => Error(ClientFinishConnectingToServerFromClient)
  | (ClientFinishConnectingToServer, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ClientFinishConnectingToServer.parse,
        ~toPacket=a => PacketV1457.ClientFinishConnectingToServer(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ClientFinishConnectingToServer(a),
      ),
    )
  | (NpcFishOut, true) => Error(NpcFishOutFromServer)
  | (NpcFishOut, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.NpcFishOut.parse,
        ~toPacket=a => PacketV1457.NpcFishOut(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.NpcFishOut(a),
      ),
    )
  | (NpcTamper, false) => Error(NpcTamperFromClient)
  | (NpcTamper, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.NpcTamper.parse,
        ~toPacket=a => PacketV1457.NpcTamper(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.NpcTamper(a),
      ),
    )
  | (LegacySoundPlay, false) => Error(LegacySoundPlayFromClient)
  | (LegacySoundPlay, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.LegacySoundPlay.parse,
        ~toPacket=a => PacketV1457.LegacySoundPlay(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.LegacySoundPlay(a),
      ),
    )
  | (FoodPlatterTryPlacing, true) => Error(FoodPlatterTryPlacingFromServer)
  | (FoodPlatterTryPlacing, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.FoodPlatterTryPlacing.parse,
        ~toPacket=a => PacketV1457.FoodPlatterTryPlacing(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.FoodPlatterTryPlacing(a),
      ),
    )
  | (PlayerLuckFactorsUpdate, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerLuckFactorsUpdate.parse,
        ~toPacket=a => PacketV1457.PlayerLuckFactorsUpdate(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerLuckFactorsUpdate(a),
      ),
    )
  | (PlayerDead, false) => Error(PlayerDeadFromClient)
  | (PlayerDead, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerDead.parse,
        ~toPacket=a => PacketV1457.PlayerDead(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerDead(a),
      ),
    )
  | (CavernMonsterTypeSync, true | false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.CavernMonsterTypeSync.parse,
        ~toPacket=a => PacketV1457.CavernMonsterTypeSync(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.CavernMonsterTypeSync(a),
      ),
    )
  | (NpcBuffRemovalRequest, true) => Error(NpcBuffRemovalRequestFromServer)
  | (NpcBuffRemovalRequest, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.NpcBuffRemovalRequest.parse,
        ~toPacket=a => PacketV1457.NpcBuffRemovalRequest(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.NpcBuffRemovalRequest(a),
      ),
    )
  | (ClientSyncedInventory, true) => Error(ClientSyncedInventoryFromServer)
  | (ClientSyncedInventory, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ClientSyncedInventory.parse,
        ~toPacket=a => PacketV1457.ClientSyncedInventory(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ClientSyncedInventory(a),
      ),
    )
  | (CountsAsHostForGameplaySet, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.CountsAsHostForGameplaySet.parse,
        ~toPacket=a => PacketV1457.CountsAsHostForGameplaySet(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.CountsAsHostForGameplaySet(a),
      ),
    )
  | (CreditsOrSlimeTransform, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.CreditsOrSlimeTransform.parse,
        ~toPacket=a => PacketV1457.CreditsOrSlimeTransform(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.CreditsOrSlimeTransform(a),
      ),
    )
  | (LucyAxeMessage, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.LucyAxeMessage.parse,
        ~toPacket=a => PacketV1457.LucyAxeMessage(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.LucyAxeMessage(a),
      ),
    )
  | (PiggyBankVoidLensUpdate, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PiggyBankVoidLensUpdate.parse,
        ~toPacket=a => PacketV1457.PiggyBankVoidLensUpdate(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PiggyBankVoidLensUpdate(a),
      ),
    )
  | (DungeonDefendersEventAttemptSkipWait, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.DungeonDefendersEventAttemptSkipWait.parse,
        ~toPacket=a => PacketV1457.DungeonDefendersEventAttemptSkipWait(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.DungeonDefendersEventAttemptSkipWait(a),
      ),
    )
  | (HaveDryadDoStardewAnimation, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.HaveDryadDoStardewAnimation.parse,
        ~toPacket=a => PacketV1457.HaveDryadDoStardewAnimation(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.HaveDryadDoStardewAnimation(a),
      ),
    )
  | (ItemDropShimmeredUpdate, _) => Error(NotImplemented)
  | (ShimmerEffectOrCoinLuck, false) => Error(NotImplemented)
  | (ShimmerEffectOrCoinLuck, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ShimmerEffectOrCoinLuck.parse,
        ~toPacket=a => PacketV1457.ShimmerEffectOrCoinLuck(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ShimmerEffectOrCoinLuck(a),
      ),
    )
  | (LoadoutSwitch, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.LoadoutSwitch.parse,
        ~toPacket=a => PacketV1457.LoadoutSwitch(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.LoadoutSwitch(a),
      ),
    )
  | (ItemDropProtectedUpdate, _) => Error(NotImplemented)
  | (DeadCellsDisplayJarTryPlacing, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.DeadCellsDisplayJarTryPlacing.parse,
        ~toPacket=a => PacketV1457.DeadCellsDisplayJarTryPlacing(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.DeadCellsDisplayJarTryPlacing(a),
      ),
    )
  | (PlayerSpectate, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerSpectate.parse,
        ~toPacket=a => PacketV1457.PlayerSpectate(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerSpectate(a),
      ),
    )
  | (ItemDropClear, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ItemDropClear.parse,
        ~toPacket=a => PacketV1457.ItemDropClear(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ItemDropClear(a),
      ),
    )
  | (PlayerItemUseSound, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerItemUseSound.parse,
        ~toPacket=a => PacketV1457.PlayerItemUseSound(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerItemUseSound(a),
      ),
    )
  | (NpcHurtByDebuff, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.NpcHurtByDebuff.parse,
        ~toPacket=a => PacketV1457.NpcHurtByDebuff(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.NpcHurtByDebuff(a),
      ),
    )
  | (Ping, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.Ping.parse,
        ~toPacket=a => PacketV1457.Ping(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.Ping(a),
      ),
    )
  | (ChestResize, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ChestResize.parse,
        ~toPacket=a => PacketV1457.ChestResize(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ChestResize(a),
      ),
    )
  | (LeashedEntityAnchorInsertItem, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.LeashedEntityAnchorInsertItem.parse,
        ~toPacket=a => PacketV1457.LeashedEntityAnchorInsertItem(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.LeashedEntityAnchorInsertItem(a),
      ),
    )
  | (PlayerTeamUpdate, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerTeamUpdate.parse,
        ~toPacket=a => PacketV1457.PlayerTeamUpdate(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerTeamUpdate(a),
      ),
    )
  | (PlayerTeamSwapSpawn, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerTeamSwapSpawn.parse,
        ~toPacket=a => PacketV1457.PlayerTeamSwapSpawn(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerTeamSwapSpawn(a),
      ),
    )
  | (SectionRequest, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.SectionRequest.parse,
        ~toPacket=a => PacketV1457.SectionRequest(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.SectionRequest(a),
      ),
    )
  | (ItemDropPosition, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ItemDropPosition.parse,
        ~toPacket=a => PacketV1457.ItemDropPosition(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ItemDropPosition(a),
      ),
    )
  | (HostToken, _) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.HostToken.parse,
        ~toPacket=a => PacketV1457.HostToken(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.HostToken(a),
      ),
    )
  | (DamageNPCAck, false) => Error(NotImplemented)
  | (DamageNPCAck, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.DamageNPCAck.parse,
        ~toPacket=a => PacketV1457.DamageNPCAck(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.DamageNPCAck(a),
      ),
    )
  | (ServerInfo, false) => Error(ServerInfoFromClient)
  | (ServerInfo, true) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.ServerInfo.parse,
        ~toPacket=a => PacketV1457.ServerInfo(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.ServerInfo(a),
      ),
    )
  | (PlayerPlatformInfo, true) => Error(PlayerPlatformInfoFromServer)
  | (PlayerPlatformInfo, false) =>
    Ok(
      makeParsers(
        ~packetName,
        ~parse=PacketV1457.PlayerPlatformInfo.parse,
        ~toPacket=a => PacketV1457.PlayerPlatformInfo(a),
        ~toLazyPacket=a => PacketV1457.LazyPacket.PlayerPlatformInfo(a),
      ),
    )
  }
}

let parsePayload = (packetType: PacketTypeV1457.t, payload: NodeJs.Buffer.t, fromServer: bool): result<
  PacketV1457.t,
  IParser.parseError,
> =>
  switch getParsers(packetType, fromServer) {
  | Ok(parsers) => parsers.parse(payload, fromServer)
  | Error(err) => Error(err)
  }

let parsePayloadLazy = (
  packetType: PacketTypeV1457.t,
  payload: NodeJs.Buffer.t,
  fromServer: bool,
): result<PacketV1457.LazyPacket.t, IParser.parseError> =>
  switch getParsers(packetType, fromServer) {
  | Ok(parsers) => parsers.parseLazy(payload, fromServer)
  | Error(err) => Error(err)
  }

let parse = (
  ~buffer: NodeJs.Buffer.t,
  ~fromServer: bool,
  ~ignore: array<PacketTypeV1457.t>=[],
): result<PacketV1457.t, IParser.parseError> => {
  switch buffer->NodeJs.Buffer.length {
  | 0 | 1 | 2 => Error(InvalidPacketLength(buffer->NodeJs.Buffer.length))
  | _ =>
    switch buffer->NodeJs.Buffer.unsafeGet(2)->PacketTypeV1457.fromInt {
    | Some(packetType) if Array.includes(ignore, packetType) => Error(IgnoredPacket)
    | Some(packetType) =>
      try {
        // As this module is parsing packets from version 1.4.5.7 to the equivalent packet data structures
        // it won't ever need Serializing after only parsing
        parsePayload(packetType, buffer, fromServer)
      } catch {
      | JsExn(obj) => Error(ReaderError({context: "ParserV1457.parse", error: obj}))
      }
    | None => Error(InvalidPacketType(buffer->NodeJs.Buffer.unsafeGet(2)))
    }
  }
}

let parseLazy = (
  ~buffer: NodeJs.Buffer.t,
  ~fromServer: bool,
): result<PacketV1457.LazyPacket.t, IParser.parseError> => {
  switch buffer->NodeJs.Buffer.length {
  | 0 | 1 | 2 => Error(InvalidPacketLength(buffer->NodeJs.Buffer.length))
  | _ =>
    switch buffer->NodeJs.Buffer.unsafeGet(2)->PacketTypeV1457.fromInt {
    | Some(packetType) =>
      try {
        // As this module is parsing packets from version 1.4.5.7 to the equivalent packet data structures
        // it won't ever need Serializing after only parsing
        parsePayloadLazy(packetType, buffer, fromServer)
      } catch {
      | JsExn(obj) => Error(ReaderError({context: "ParserV1457.parseLazy", error: obj}))
      }
    | None => Error(InvalidPacketType(buffer->NodeJs.Buffer.unsafeGet(2)))
    }
  }
}
