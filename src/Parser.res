let mapPacket = (buffer, fn): result<Packet.t, IParser.parseError> =>
  buffer->Result.map(fn)->Result.mapError(e => IParser.ReaderError(e))

type parsers = {
  parse: (NodeJs.Buffer.t, bool) => result<Packet.t, IParser.parseError>,
  parseLazy: (NodeJs.Buffer.t, bool) => result<Packet.LazyPacket.t, IParser.parseError>,
}

let makeParsers = (
  ~parse: NodeJs.Buffer.t => result<'a, ErrorAwarePacketReader.readError>,
  ~toPacket: 'a => Packet.t,
  ~toLazyPacket: Packet.LazyPacket.lazyParsed<'a> => Packet.LazyPacket.t,
): parsers => {
  let parseWrapped = (payload, _fromServer) => parse(payload)->mapPacket(toPacket)
  let parseLazyWrapped = (payload, _fromServer) => Ok(toLazyPacket(Lazy.make(() => parse(payload))))
  {parse: parseWrapped, parseLazy: parseLazyWrapped}
}

let makeParsersWithFromServer = (
  ~parse: (NodeJs.Buffer.t, bool) => result<'a, ErrorAwarePacketReader.readError>,
  ~toPacket: 'a => Packet.t,
  ~toLazyPacket: Packet.LazyPacket.lazyParsed<'a> => Packet.LazyPacket.t,
): parsers => {
  let parseWrapped = (payload, fromServer) => parse(payload, fromServer)->mapPacket(toPacket)
  let parseLazyWrapped = (payload, fromServer) => Ok(
    toLazyPacket(Lazy.make(() => parse(payload, fromServer))),
  )
  {parse: parseWrapped, parseLazy: parseLazyWrapped}
}

let getParsers = (packetType: PacketType.t, fromServer: bool): result<
  parsers,
  IParser.parseError,
> =>
  switch (packetType, fromServer) {
  | (ConnectRequest, true) => Error(ConnectRequestFromServer)
  | (ConnectRequest, false) =>
    Ok(
      makeParsers(
        ~parse=Packet.ConnectRequest.parse,
        ~toPacket=a => Packet.ConnectRequest(a),
        ~toLazyPacket=a => Packet.LazyPacket.ConnectRequest(a),
      ),
    )
  | (Disconnect, false) => Error(DisconnectFromClient)
  | (Disconnect, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.Disconnect.parse,
        ~toPacket=a => Packet.Disconnect(a),
        ~toLazyPacket=a => Packet.LazyPacket.Disconnect(a),
      ),
    )
  | (PlayerSlotSet, false) => Error(PlayerSlotSetFromClient)
  | (PlayerSlotSet, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.PlayerSlotSet.parse,
        ~toPacket=a => Packet.PlayerSlotSet(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerSlotSet(a),
      ),
    )
  | (PlayerInfo, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.PlayerInfo.parse,
        ~toPacket=a => Packet.PlayerInfo(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerInfo(a),
      ),
    )
  | (PlayerInventorySlot, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.PlayerInventorySlot.parse,
        ~toPacket=a => Packet.PlayerInventorySlot(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerInventorySlot(a),
      ),
    )
  | (WorldDataRequest, true) => Error(WorldDataRequestFromServer)
  | (WorldDataRequest, false) =>
    Ok(
      makeParsers(
        ~parse=Packet.WorldDataRequest.parse,
        ~toPacket=a => Packet.WorldDataRequest(a),
        ~toLazyPacket=a => Packet.LazyPacket.WorldDataRequest(a),
      ),
    )
  | (WorldInfo, false) => Error(WorldInfoFromClient)
  | (WorldInfo, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.WorldInfo.parse,
        ~toPacket=a => Packet.WorldInfo(a),
        ~toLazyPacket=a => Packet.LazyPacket.WorldInfo(a),
      ),
    )
  | (InitialTileSectionsRequest, true) => Error(InitialTileSectionsRequestFromServer)
  | (InitialTileSectionsRequest, false) =>
    Ok(
      makeParsers(
        ~parse=Packet.InitialTileSectionsRequest.parse,
        ~toPacket=a => Packet.InitialTileSectionsRequest(a),
        ~toLazyPacket=a => Packet.LazyPacket.InitialTileSectionsRequest(a),
      ),
    )
  | (Status, false) => Error(StatusFromClient)
  | (Status, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.Status.parse,
        ~toPacket=a => Packet.Status(a),
        ~toLazyPacket=a => Packet.LazyPacket.Status(a),
      ),
    )
  | (TileSectionSend, false) => Error(TileSectionSendFromClient)
  | (TileSectionSend, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.TileSectionSend.parse,
        ~toPacket=a => Packet.TileSectionSend(a),
        ~toLazyPacket=a => Packet.LazyPacket.TileSectionSend(a),
      ),
    )
  | (TileSectionFrame, false) => Error(TileSectionFrameFromClient)
  | (TileSectionFrame, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.TileSectionFrame.parse,
        ~toPacket=a => Packet.TileSectionFrame(a),
        ~toLazyPacket=a => Packet.LazyPacket.TileSectionFrame(a),
      ),
    )
  | (PlayerSpawn, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.PlayerSpawn.parse,
        ~toPacket=a => Packet.PlayerSpawn(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerSpawn(a),
      ),
    )
  | (PlayerUpdate, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.PlayerUpdate.parse,
        ~toPacket=a => Packet.PlayerUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerUpdate(a),
      ),
    )
  | (PlayerActive, false) => Error(PlayerActiveFromClient)
  | (PlayerActive, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.PlayerActive.parse,
        ~toPacket=a => Packet.PlayerActive(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerActive(a),
      ),
    )
  | (PlayerHealth, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.PlayerHealth.parse,
        ~toPacket=a => Packet.PlayerHealth(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerHealth(a),
      ),
    )
  | (TileModify, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.TileModify.parse,
        ~toPacket=a => Packet.TileModify(a),
        ~toLazyPacket=a => Packet.LazyPacket.TileModify(a),
      ),
    )
  | (TimeSet, false) => Error(TimeSetFromClient)
  | (TimeSet, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.TimeSet.parse,
        ~toPacket=a => Packet.TimeSet(a),
        ~toLazyPacket=a => Packet.LazyPacket.TimeSet(a),
      ),
    )
  | (DoorUse, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.DoorUse.parse,
        ~toPacket=a => Packet.DoorUse(a),
        ~toLazyPacket=a => Packet.LazyPacket.DoorUse(a),
      ),
    )
  | (TileSquareSend, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.TileSquareSend.parse,
        ~toPacket=a => Packet.TileSquareSend(a),
        ~toLazyPacket=a => Packet.LazyPacket.TileSquareSend(a),
      ),
    )
  | (ItemDropUpdate, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.ItemDropUpdate.parse,
        ~toPacket=a => Packet.ItemDropUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.ItemDropUpdate(a),
      ),
    )
  | (ItemOwner, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.ItemOwner.parse,
        ~toPacket=a => Packet.ItemOwner(a),
        ~toLazyPacket=a => Packet.LazyPacket.ItemOwner(a),
      ),
    )
  | (NpcUpdate, false) => Error(NpcUpdateFromClient)
  | (NpcUpdate, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.NpcUpdate.parse,
        ~toPacket=a => Packet.NpcUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcUpdate(a),
      ),
    )
  | (NpcItemStrike, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.NpcItemStrike.parse,
        ~toPacket=a => Packet.NpcItemStrike(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcItemStrike(a),
      ),
    )
  | (ProjectileSync, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.ProjectileSync.parse,
        ~toPacket=a => Packet.ProjectileSync(a),
        ~toLazyPacket=a => Packet.LazyPacket.ProjectileSync(a),
      ),
    )
  | (NpcStrike, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.NpcStrike.parse,
        ~toPacket=a => Packet.NpcStrike(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcStrike(a),
      ),
    )
  | (ProjectileDestroy, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.ProjectileDestroy.parse,
        ~toPacket=a => Packet.ProjectileDestroy(a),
        ~toLazyPacket=a => Packet.LazyPacket.ProjectileDestroy(a),
      ),
    )
  | (PvpToggle, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.PvpToggle.parse,
        ~toPacket=a => Packet.PvpToggle(a),
        ~toLazyPacket=a => Packet.LazyPacket.PvpToggle(a),
      ),
    )
  | (ChestOpen, true) => Error(ChestOpenFromServer)
  | (ChestOpen, false) =>
    Ok(
      makeParsers(
        ~parse=Packet.ChestOpen.parse,
        ~toPacket=a => Packet.ChestOpen(a),
        ~toLazyPacket=a => Packet.LazyPacket.ChestOpen(a),
      ),
    )
  | (ChestItem, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.ChestItem.parse,
        ~toPacket=a => Packet.ChestItem(a),
        ~toLazyPacket=a => Packet.LazyPacket.ChestItem(a),
      ),
    )
  | (ActiveContainerSync, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.ActiveContainerSync.parse,
        ~toPacket=a => Packet.ActiveContainerSync(a),
        ~toLazyPacket=a => Packet.LazyPacket.ActiveContainerSync(a),
      ),
    )
  | (ChestPlace, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.ChestPlace.parse,
        ~toPacket=a => Packet.ChestPlace(a),
        ~toLazyPacket=a => Packet.LazyPacket.ChestPlace(a),
      ),
    )
  | (HealEffect, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.HealEffect.parse,
        ~toPacket=a => Packet.HealEffect(a),
        ~toLazyPacket=a => Packet.LazyPacket.HealEffect(a),
      ),
    )
  | (Zones, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.Zones.parse,
        ~toPacket=a => Packet.Zones(a),
        ~toLazyPacket=a => Packet.LazyPacket.Zones(a),
      ),
    )
  | (PasswordRequired, false) => Error(PasswordRequiredFromClient)
  | (PasswordRequired, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.PasswordRequired.parse,
        ~toPacket=a => Packet.PasswordRequired(a),
        ~toLazyPacket=a => Packet.LazyPacket.PasswordRequired(a),
      ),
    )
  | (PasswordSend, true) => Error(PasswordSendFromServer)
  | (PasswordSend, false) =>
    Ok(
      makeParsers(
        ~parse=Packet.PasswordSend.parse,
        ~toPacket=a => Packet.PasswordSend(a),
        ~toLazyPacket=a => Packet.LazyPacket.PasswordSend(a),
      ),
    )
  | (ItemOwnerRemove, false) => Error(ItemOwnerRemoveFromClient)
  | (ItemOwnerRemove, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.ItemOwnerRemove.parse,
        ~toPacket=a => Packet.ItemOwnerRemove(a),
        ~toLazyPacket=a => Packet.LazyPacket.ItemOwnerRemove(a),
      ),
    )
  | (NpcTalk, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.NpcTalk.parse,
        ~toPacket=a => Packet.NpcTalk(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcTalk(a),
      ),
    )
  | (PlayerAnimation, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.PlayerAnimation.parse,
        ~toPacket=a => Packet.PlayerAnimation(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerAnimation(a),
      ),
    )
  | (PlayerMana, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.PlayerMana.parse,
        ~toPacket=a => Packet.PlayerMana(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerMana(a),
      ),
    )
  | (ManaEffect, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.ManaEffect.parse,
        ~toPacket=a => Packet.ManaEffect(a),
        ~toLazyPacket=a => Packet.LazyPacket.ManaEffect(a),
      ),
    )
  | (PlayerTeam, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.PlayerTeam.parse,
        ~toPacket=a => Packet.PlayerTeam(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerTeam(a),
      ),
    )
  | (SignRead, true) => Error(SignReadFromServer)
  | (SignRead, false) =>
    Ok(
      makeParsers(
        ~parse=Packet.SignRead.parse,
        ~toPacket=a => Packet.SignRead(a),
        ~toLazyPacket=a => Packet.LazyPacket.SignRead(a),
      ),
    )
  | (SignNew, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.SignNew.parse,
        ~toPacket=a => Packet.SignNew(a),
        ~toLazyPacket=a => Packet.LazyPacket.SignNew(a),
      ),
    )
  | (LiquidSet, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.LiquidSet.parse,
        ~toPacket=a => Packet.LiquidSet(a),
        ~toLazyPacket=a => Packet.LazyPacket.LiquidSet(a),
      ),
    )
  | (PlayerSpawnSelf, false) => Error(PlayerSpawnSelfFromClient)
  | (PlayerSpawnSelf, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.PlayerSpawnSelf.parse,
        ~toPacket=a => Packet.PlayerSpawnSelf(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerSpawnSelf(a),
      ),
    )
  | (PlayerBuffsSet, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.PlayerBuffsSet.parse,
        ~toPacket=a => Packet.PlayerBuffsSet(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerBuffsSet(a),
      ),
    )
  | (NpcSpecialEffect, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.NpcSpecialEffect.parse,
        ~toPacket=a => Packet.NpcSpecialEffect(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcSpecialEffect(a),
      ),
    )
  | (ChestOrTempleUnlock, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.ChestOrTempleUnlock.parse,
        ~toPacket=a => Packet.ChestOrTempleUnlock(a),
        ~toLazyPacket=a => Packet.LazyPacket.ChestOrTempleUnlock(a),
      ),
    )
  | (NpcBuffAdd, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.NpcBuffAdd.parse,
        ~toPacket=a => Packet.NpcBuffAdd(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcBuffAdd(a),
      ),
    )
  | (NpcBuffUpdate, false) => Error(NpcBuffUpdateFromClient)
  | (NpcBuffUpdate, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.NpcBuffUpdate.parse,
        ~toPacket=a => Packet.NpcBuffUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcBuffUpdate(a),
      ),
    )
  | (PlayerBuffAdd, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.PlayerBuffAdd.parse,
        ~toPacket=a => Packet.PlayerBuffAdd(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerBuffAdd(a),
      ),
    )
  | (NpcNameUpdate, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.NpcNameUpdate.parse,
        ~toPacket=a => Packet.NpcNameUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcNameUpdate(a),
      ),
    )
  | (GoodEvilUpdate, false) => Error(GoodEvilUpdateFromClient)
  | (GoodEvilUpdate, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.GoodEvilUpdate.parse,
        ~toPacket=a => Packet.GoodEvilUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.GoodEvilUpdate(a),
      ),
    )
  | (HarpPlay, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.HarpPlay.parse,
        ~toPacket=a => Packet.HarpPlay(a),
        ~toLazyPacket=a => Packet.LazyPacket.HarpPlay(a),
      ),
    )
  | (SwitchHit, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.SwitchHit.parse,
        ~toPacket=a => Packet.SwitchHit(a),
        ~toLazyPacket=a => Packet.LazyPacket.SwitchHit(a),
      ),
    )
  | (NpcHomeUpdate, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.NpcHomeUpdate.parse,
        ~toPacket=a => Packet.NpcHomeUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcHomeUpdate(a),
      ),
    )
  | (BossOrInvasionSpawn, true) => Error(BossOrInvasionSpawnFromServer)
  | (BossOrInvasionSpawn, false) =>
    Ok(
      makeParsers(
        ~parse=Packet.BossOrInvasionSpawn.parse,
        ~toPacket=a => Packet.BossOrInvasionSpawn(a),
        ~toLazyPacket=a => Packet.LazyPacket.BossOrInvasionSpawn(a),
      ),
    )
  | (PlayerDodge, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.PlayerDodge.parse,
        ~toPacket=a => Packet.PlayerDodge(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerDodge(a),
      ),
    )
  | (TilePaint, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.TilePaint.parse,
        ~toPacket=a => Packet.TilePaint(a),
        ~toLazyPacket=a => Packet.LazyPacket.TilePaint(a),
      ),
    )
  | (WallPaint, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.WallPaint.parse,
        ~toPacket=a => Packet.WallPaint(a),
        ~toLazyPacket=a => Packet.LazyPacket.WallPaint(a),
      ),
    )
  | (Teleport, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.Teleport.parse,
        ~toPacket=a => Packet.Teleport(a),
        ~toLazyPacket=a => Packet.LazyPacket.Teleport(a),
      ),
    )
  | (PlayerHealOther, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.PlayerHealOther.parse,
        ~toPacket=a => Packet.PlayerHealOther(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerHealOther(a),
      ),
    )
  | (DimensionsUpdate, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.DimensionsUpdate.parse,
        ~toPacket=a => Packet.DimensionsUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.DimensionsUpdate(a),
      ),
    )
  | (ClientUuid, true) => Error(ClientUuidFromServer)
  | (ClientUuid, false) =>
    Ok(
      makeParsers(
        ~parse=Packet.ClientUuid.parse,
        ~toPacket=a => Packet.ClientUuid(a),
        ~toLazyPacket=a => Packet.LazyPacket.ClientUuid(a),
      ),
    )
  | (ChestName, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.ChestName.parse,
        ~toPacket=a => Packet.ChestName(a),
        ~toLazyPacket=a => Packet.LazyPacket.ChestName(a),
      ),
    )
  | (NpcCatch, true) => Error(NpcCatchFromServer)
  | (NpcCatch, false) =>
    Ok(
      makeParsers(
        ~parse=Packet.NpcCatch.parse,
        ~toPacket=a => Packet.NpcCatch(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcCatch(a),
      ),
    )
  | (NpcRelease, true) => Error(NpcReleaseFromServer)
  | (NpcRelease, false) =>
    Ok(
      makeParsers(
        ~parse=Packet.NpcRelease.parse,
        ~toPacket=a => Packet.NpcRelease(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcRelease(a),
      ),
    )
  | (TravellingMerchantInventory, false) => Error(TravellingMerchantInventoryFromClient)
  | (TravellingMerchantInventory, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.TravellingMerchantInventory.parse,
        ~toPacket=a => Packet.TravellingMerchantInventory(a),
        ~toLazyPacket=a => Packet.LazyPacket.TravellingMerchantInventory(a),
      ),
    )
  | (TeleportationPotion, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.TeleportationPotion.parse,
        ~toPacket=a => Packet.TeleportationPotion(a),
        ~toLazyPacket=a => Packet.LazyPacket.TeleportationPotion(a),
      ),
    )
  | (AnglerQuest, false) => Error(AnglerQuestFromClient)
  | (AnglerQuest, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.AnglerQuest.parse,
        ~toPacket=a => Packet.AnglerQuest(a),
        ~toLazyPacket=a => Packet.LazyPacket.AnglerQuest(a),
      ),
    )
  | (AnglerQuestComplete, true) => Error(AnglerQuestCompleteFromServer)
  | (AnglerQuestComplete, false) =>
    Ok(
      makeParsers(
        ~parse=Packet.AnglerQuestComplete.parse,
        ~toPacket=a => Packet.AnglerQuestComplete(a),
        ~toLazyPacket=a => Packet.LazyPacket.AnglerQuestComplete(a),
      ),
    )
  | (AnglerQuestsCompletedAmount, true)
  | (AnglerQuestsCompletedAmount, false) =>
    Ok(
      makeParsers(
        ~parse=Packet.AnglerQuestsCompletedAmount.parse,
        ~toPacket=a => Packet.AnglerQuestsCompletedAmount(a),
        ~toLazyPacket=a => Packet.LazyPacket.AnglerQuestsCompletedAmount(a),
      ),
    )
  | (TemporaryAnimationCreate, false) => Error(TemporaryAnimationCreateFromClient)
  | (TemporaryAnimationCreate, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.TemporaryAnimationCreate.parse,
        ~toPacket=a => Packet.TemporaryAnimationCreate(a),
        ~toLazyPacket=a => Packet.LazyPacket.TemporaryAnimationCreate(a),
      ),
    )

  | (InvasionProgressReport, false) => Error(InvasionProgressReportFromClient)
  | (InvasionProgressReport, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.InvasionProgressReport.parse,
        ~toPacket=a => Packet.InvasionProgressReport(a),
        ~toLazyPacket=a => Packet.LazyPacket.InvasionProgressReport(a),
      ),
    )
  | (ObjectPlace, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.ObjectPlace.parse,
        ~toPacket=a => Packet.ObjectPlace(a),
        ~toLazyPacket=a => Packet.LazyPacket.ObjectPlace(a),
      ),
    )
  | (PlayerChestIndexSync, false) => Error(PlayerChestIndexSyncFromClient)
  | (PlayerChestIndexSync, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.PlayerChestIndexSync.parse,
        ~toPacket=a => Packet.PlayerChestIndexSync(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerChestIndexSync(a),
      ),
    )
  | (CombatNumberCreate, false) => Error(CombatNumberCreateFromClient)
  | (CombatNumberCreate, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.CombatNumberCreate.parse,
        ~toPacket=a => Packet.CombatNumberCreate(a),
        ~toLazyPacket=a => Packet.LazyPacket.CombatNumberCreate(a),
      ),
    )
  | (NetModuleLoad, true | false) =>
    Ok(
      makeParsersWithFromServer(
        ~parse=(payload, fromServer) => Packet.NetModuleLoad.parse(payload, ~fromServer),
        ~toPacket=a => Packet.NetModuleLoad(a),
        ~toLazyPacket=a => Packet.LazyPacket.NetModuleLoad(a),
      ),
    )
  | (NpcKillCount, false) => Error(NpcKillCountFromClient)
  | (NpcKillCount, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.NpcKillCount.parse,
        ~toPacket=a => Packet.NpcKillCount(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcKillCount(a),
      ),
    )
  | (PlayerStealth, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.PlayerStealth.parse,
        ~toPacket=a => Packet.PlayerStealth(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerStealth(a),
      ),
    )
  | (ItemForceIntoNearestChest, true) => Error(ItemForceIntoNearestChestFromServer)
  | (ItemForceIntoNearestChest, false) =>
    Ok(
      makeParsers(
        ~parse=Packet.ItemForceIntoNearestChest.parse,
        ~toPacket=a => Packet.ItemForceIntoNearestChest(a),
        ~toLazyPacket=a => Packet.LazyPacket.ItemForceIntoNearestChest(a),
      ),
    )
  | (TileEntityUpdate, false) => Error(TileEntityUpdateFromClient)
  | (TileEntityUpdate, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.TileEntityUpdate.parse,
        ~toPacket=a => Packet.TileEntityUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.TileEntityUpdate(a),
      ),
    )
  | (TileEntityPlace, true) => Error(TileEntityPlaceFromServer)
  | (TileEntityPlace, false) =>
    Ok(
      makeParsers(
        ~parse=Packet.TileEntityPlace.parse,
        ~toPacket=a => Packet.TileEntityPlace(a),
        ~toLazyPacket=a => Packet.LazyPacket.TileEntityPlace(a),
      ),
    )
  | (ItemDropModify, false) => Error(ItemDropModifyFromClient)
  | (ItemDropModify, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.ItemDropModify.parse,
        ~toPacket=a => Packet.ItemDropModify(a),
        ~toLazyPacket=a => Packet.LazyPacket.ItemDropModify(a),
      ),
    )
  | (ItemFramePlace, true) => Error(ItemFramePlaceFromServer)
  | (ItemFramePlace, false) =>
    Ok(
      makeParsers(
        ~parse=Packet.ItemFramePlace.parse,
        ~toPacket=a => Packet.ItemFramePlace(a),
        ~toLazyPacket=a => Packet.LazyPacket.ItemFramePlace(a),
      ),
    )
  | (ItemDropInstancedUpdate, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.ItemDropInstancedUpdate.parse,
        ~toPacket=a => Packet.ItemDropInstancedUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.ItemDropInstancedUpdate(a),
      ),
    )
  | (EmoteBubble, false) => Error(EmoteBubbleFromClient)
  | (EmoteBubble, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.EmoteBubble.parse,
        ~toPacket=a => Packet.EmoteBubble(a),
        ~toLazyPacket=a => Packet.LazyPacket.EmoteBubble(a),
      ),
    )
  | (ExtraValueSync, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.ExtraValueSync.parse,
        ~toPacket=a => Packet.ExtraValueSync(a),
        ~toLazyPacket=a => Packet.LazyPacket.ExtraValueSync(a),
      ),
    )
  | (SocialHandshake, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.SocialHandshake.parse,
        ~toPacket=a => Packet.SocialHandshake(a),
        ~toLazyPacket=a => Packet.LazyPacket.SocialHandshake(a),
      ),
    )
  | (Unused, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.Unused.parse,
        ~toPacket=a => Packet.Unused(a),
        ~toLazyPacket=a => Packet.LazyPacket.Unused(a),
      ),
    )
  | (PortalKill, true) => Error(PortalKillFromServer)
  | (PortalKill, false) =>
    Ok(
      makeParsers(
        ~parse=Packet.PortalKill.parse,
        ~toPacket=a => Packet.PortalKill(a),
        ~toLazyPacket=a => Packet.LazyPacket.PortalKill(a),
      ),
    )
  | (PlayerTeleportPortal, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.PlayerTeleportPortal.parse,
        ~toPacket=a => Packet.PlayerTeleportPortal(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerTeleportPortal(a),
      ),
    )
  | (NpcKilledNotification, false) => Error(NpcKilledNotificationFromClient)
  | (NpcKilledNotification, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.NpcKilledNotification.parse,
        ~toPacket=a => Packet.NpcKilledNotification(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcKilledNotification(a),
      ),
    )
  | (EventNotification, false) => Error(EventNotificationFromClient)
  | (EventNotification, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.EventNotification.parse,
        ~toPacket=a => Packet.EventNotification(a),
        ~toLazyPacket=a => Packet.LazyPacket.EventNotification(a),
      ),
    )
  | (MinionTargetUpdate, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.MinionTargetUpdate.parse,
        ~toPacket=a => Packet.MinionTargetUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.MinionTargetUpdate(a),
      ),
    )
  | (NpcTeleportPortal, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.NpcTeleportPortal.parse,
        ~toPacket=a => Packet.NpcTeleportPortal(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcTeleportPortal(a),
      ),
    )
  | (ShieldStrengthsUpdate, false) => Error(ShieldStrengthsUpdateFromClient)
  | (ShieldStrengthsUpdate, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.ShieldStrengthsUpdate.parse,
        ~toPacket=a => Packet.ShieldStrengthsUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.ShieldStrengthsUpdate(a),
      ),
    )
  | (NebulaLevelUp, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.NebulaLevelUp.parse,
        ~toPacket=a => Packet.NebulaLevelUp(a),
        ~toLazyPacket=a => Packet.LazyPacket.NebulaLevelUp(a),
      ),
    )
  | (MoonLordCountdown, false) => Error(MoonLordCountdownFromClient)
  | (MoonLordCountdown, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.MoonLordCountdown.parse,
        ~toPacket=a => Packet.MoonLordCountdown(a),
        ~toLazyPacket=a => Packet.LazyPacket.MoonLordCountdown(a),
      ),
    )
  | (NpcShopItem, false) => Error(NpcShopItemFromClient)
  | (NpcShopItem, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.NpcShopItem.parse,
        ~toPacket=a => Packet.NpcShopItem(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcShopItem(a),
      ),
    )
  | (GemLockToggle, true) => Error(GemLockToggleFromServer)
  | (GemLockToggle, false) =>
    Ok(
      makeParsers(
        ~parse=Packet.GemLockToggle.parse,
        ~toPacket=a => Packet.GemLockToggle(a),
        ~toLazyPacket=a => Packet.LazyPacket.GemLockToggle(a),
      ),
    )
  | (SmokePoof, false) => Error(SmokePoofFromClient)
  | (SmokePoof, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.SmokePoof.parse,
        ~toPacket=a => Packet.SmokePoof(a),
        ~toLazyPacket=a => Packet.LazyPacket.SmokePoof(a),
      ),
    )
  | (ChatMessageSmart, false) => Error(ChatMessageSmartFromClient)
  | (ChatMessageSmart, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.ChatMessageSmart.parse,
        ~toPacket=a => Packet.ChatMessageSmart(a),
        ~toLazyPacket=a => Packet.LazyPacket.ChatMessageSmart(a),
      ),
    )
  | (WiredCannonShot, false) => Error(WiredCannonShotFromClient)
  | (WiredCannonShot, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.WiredCannonShot.parse,
        ~toPacket=a => Packet.WiredCannonShot(a),
        ~toLazyPacket=a => Packet.LazyPacket.WiredCannonShot(a),
      ),
    )
  | (MassWireOperation, true) => Error(MassWireOperationFromServer)
  | (MassWireOperation, false) =>
    Ok(
      makeParsers(
        ~parse=Packet.MassWireOperation.parse,
        ~toPacket=a => Packet.MassWireOperation(a),
        ~toLazyPacket=a => Packet.LazyPacket.MassWireOperation(a),
      ),
    )
  | (MassWireOperationPay, false) => Error(MassWireOperationPayFromClient)
  | (MassWireOperationPay, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.MassWireOperationPay.parse,
        ~toPacket=a => Packet.MassWireOperationPay(a),
        ~toLazyPacket=a => Packet.LazyPacket.MassWireOperationPay(a),
      ),
    )
  | (PartyToggle, true) => Error(PartyToggleFromServer)
  | (PartyToggle, false) =>
    Ok(
      makeParsers(
        ~parse=Packet.PartyToggle.parse,
        ~toPacket=a => Packet.PartyToggle(a),
        ~toLazyPacket=a => Packet.LazyPacket.PartyToggle(a),
      ),
    )
  | (TreeGrowFx, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.TreeGrowFx.parse,
        ~toPacket=a => Packet.TreeGrowFx(a),
        ~toLazyPacket=a => Packet.LazyPacket.TreeGrowFx(a),
      ),
    )
  | (CrystalInvasionStart, true) => Error(CrystalInvasionStartFromServer)
  | (CrystalInvasionStart, false) =>
    Ok(
      makeParsers(
        ~parse=Packet.CrystalInvasionStart.parse,
        ~toPacket=a => Packet.CrystalInvasionStart(a),
        ~toLazyPacket=a => Packet.LazyPacket.CrystalInvasionStart(a),
      ),
    )
  | (CrystalInvasionWipeAll, false) => Error(CrystalInvasionWipeAllFromClient)
  | (CrystalInvasionWipeAll, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.CrystalInvasionWipeAll.parse,
        ~toPacket=a => Packet.CrystalInvasionWipeAll(a),
        ~toLazyPacket=a => Packet.LazyPacket.CrystalInvasionWipeAll(a),
      ),
    )
  | (MinionAttackTargetUpdate, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.MinionAttackTargetUpdate.parse,
        ~toPacket=a => Packet.MinionAttackTargetUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.MinionAttackTargetUpdate(a),
      ),
    )
  | (CrystalInvasionSendWaitTime, false) => Error(CrystalInvasionSendWaitTimeFromClient)
  | (CrystalInvasionSendWaitTime, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.CrystalInvasionSendWaitTime.parse,
        ~toPacket=a => Packet.CrystalInvasionSendWaitTime(a),
        ~toLazyPacket=a => Packet.LazyPacket.CrystalInvasionSendWaitTime(a),
      ),
    )
  | (PlayerDamage, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.PlayerDamage.parse,
        ~toPacket=a => Packet.PlayerDamage(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerDamage(a),
      ),
    )
  | (PlayerDeath, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.PlayerDeath.parse,
        ~toPacket=a => Packet.PlayerDeath(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerDeath(a),
      ),
    )
  | (CombatTextCreate, false) => Error(CombatTextCreateFromClient)
  | (CombatTextCreate, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.CombatTextCreate.parse,
        ~toPacket=a => Packet.CombatTextCreate(a),
        ~toLazyPacket=a => Packet.LazyPacket.CombatTextCreate(a),
      ),
    )
  | (Emoji, true) => Error(EmojiFromServer)
  | (Emoji, false) =>
    Ok(
      makeParsers(
        ~parse=Packet.Emoji.parse,
        ~toPacket=a => Packet.Emoji(a),
        ~toLazyPacket=a => Packet.LazyPacket.Emoji(a),
      ),
    )
  | (TileEntityDisplayDollItemSync, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.TileEntityDisplayDollItemSync.parse,
        ~toPacket=a => Packet.TileEntityDisplayDollItemSync(a),
        ~toLazyPacket=a => Packet.LazyPacket.TileEntityDisplayDollItemSync(a),
      ),
    )
  | (TileEntityInteractionRequest, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.TileEntityInteractionRequest.parse,
        ~toPacket=a => Packet.TileEntityInteractionRequest(a),
        ~toLazyPacket=a => Packet.LazyPacket.TileEntityInteractionRequest(a),
      ),
    )
  | (WeaponsRackTryPlacing, true) => Error(WeaponsRackTryPlacingFromServer)
  | (WeaponsRackTryPlacing, false) =>
    Ok(
      makeParsers(
        ~parse=Packet.WeaponsRackTryPlacing.parse,
        ~toPacket=a => Packet.WeaponsRackTryPlacing(a),
        ~toLazyPacket=a => Packet.LazyPacket.WeaponsRackTryPlacing(a),
      ),
    )
  | (TileEntityHatRackItemSync, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.TileEntityHatRackItemSync.parse,
        ~toPacket=a => Packet.TileEntityHatRackItemSync(a),
        ~toLazyPacket=a => Packet.LazyPacket.TileEntityHatRackItemSync(a),
      ),
    )
  | (TilePickingSync, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.TilePickingSync.parse,
        ~toPacket=a => Packet.TilePickingSync(a),
        ~toLazyPacket=a => Packet.LazyPacket.TilePickingSync(a),
      ),
    )
  | (RevengeMarkerSync, false) => Error(RevengeMarkerSyncFromClient)
  | (RevengeMarkerSync, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.RevengeMarkerSync.parse,
        ~toPacket=a => Packet.RevengeMarkerSync(a),
        ~toLazyPacket=a => Packet.LazyPacket.RevengeMarkerSync(a),
      ),
    )
  | (RevengeMarkerRemove, false) => Error(RevengeMarkerRemoveFromClient)
  | (RevengeMarkerRemove, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.RevengeMarkerRemove.parse,
        ~toPacket=a => Packet.RevengeMarkerRemove(a),
        ~toLazyPacket=a => Packet.LazyPacket.RevengeMarkerRemove(a),
      ),
    )
  | (GolfBallLandInCup, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.GolfBallLandInCup.parse,
        ~toPacket=a => Packet.GolfBallLandInCup(a),
        ~toLazyPacket=a => Packet.LazyPacket.GolfBallLandInCup(a),
      ),
    )
  | (ClientFinishConnectingToServer, false) => Error(ClientFinishConnectingToServerFromClient)
  | (ClientFinishConnectingToServer, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.ClientFinishConnectingToServer.parse,
        ~toPacket=a => Packet.ClientFinishConnectingToServer(a),
        ~toLazyPacket=a => Packet.LazyPacket.ClientFinishConnectingToServer(a),
      ),
    )
  | (NpcFishOut, true) => Error(NpcFishOutFromServer)
  | (NpcFishOut, false) =>
    Ok(
      makeParsers(
        ~parse=Packet.NpcFishOut.parse,
        ~toPacket=a => Packet.NpcFishOut(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcFishOut(a),
      ),
    )
  | (NpcTamper, false) => Error(NpcTamperFromClient)
  | (NpcTamper, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.NpcTamper.parse,
        ~toPacket=a => Packet.NpcTamper(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcTamper(a),
      ),
    )
  | (LegacySoundPlay, false) => Error(LegacySoundPlayFromClient)
  | (LegacySoundPlay, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.LegacySoundPlay.parse,
        ~toPacket=a => Packet.LegacySoundPlay(a),
        ~toLazyPacket=a => Packet.LazyPacket.LegacySoundPlay(a),
      ),
    )
  | (FoodPlatterTryPlacing, true) => Error(FoodPlatterTryPlacingFromServer)
  | (FoodPlatterTryPlacing, false) =>
    Ok(
      makeParsers(
        ~parse=Packet.FoodPlatterTryPlacing.parse,
        ~toPacket=a => Packet.FoodPlatterTryPlacing(a),
        ~toLazyPacket=a => Packet.LazyPacket.FoodPlatterTryPlacing(a),
      ),
    )
  | (PlayerLuckFactorsUpdate, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.PlayerLuckFactorsUpdate.parse,
        ~toPacket=a => Packet.PlayerLuckFactorsUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerLuckFactorsUpdate(a),
      ),
    )
  | (PlayerDead, false) => Error(PlayerDeadFromClient)
  | (PlayerDead, true) =>
    Ok(
      makeParsers(
        ~parse=Packet.PlayerDead.parse,
        ~toPacket=a => Packet.PlayerDead(a),
        ~toLazyPacket=a => Packet.LazyPacket.PlayerDead(a),
      ),
    )
  | (CavernMonsterTypeSync, true | false) =>
    Ok(
      makeParsers(
        ~parse=Packet.CavernMonsterTypeSync.parse,
        ~toPacket=a => Packet.CavernMonsterTypeSync(a),
        ~toLazyPacket=a => Packet.LazyPacket.CavernMonsterTypeSync(a),
      ),
    )
  | (NpcBuffRemovalRequest, true) => Error(NpcBuffRemovalRequestFromServer)
  | (NpcBuffRemovalRequest, false) =>
    Ok(
      makeParsers(
        ~parse=Packet.NpcBuffRemovalRequest.parse,
        ~toPacket=a => Packet.NpcBuffRemovalRequest(a),
        ~toLazyPacket=a => Packet.LazyPacket.NpcBuffRemovalRequest(a),
      ),
    )
  | (ClientSyncedInventory, true) => Error(ClientSyncedInventoryFromServer)
  | (ClientSyncedInventory, false) =>
    Ok(
      makeParsers(
        ~parse=Packet.ClientSyncedInventory.parse,
        ~toPacket=a => Packet.ClientSyncedInventory(a),
        ~toLazyPacket=a => Packet.LazyPacket.ClientSyncedInventory(a),
      ),
    )
  | (CountsAsHostForGameplaySet, _) =>
    Ok(
      makeParsers(
        ~parse=Packet.CountsAsHostForGameplaySet.parse,
        ~toPacket=a => Packet.CountsAsHostForGameplaySet(a),
        ~toLazyPacket=a => Packet.LazyPacket.CountsAsHostForGameplaySet(a),
      ),
    )
  | (CreditsOrSlimeTransform, _) =>
    Ok(
      makeParsers(
        ~parse=Packet.CreditsOrSlimeTransform.parse,
        ~toPacket=a => Packet.CreditsOrSlimeTransform(a),
        ~toLazyPacket=a => Packet.LazyPacket.CreditsOrSlimeTransform(a),
      ),
    )
  | (LucyAxeMessage, _) =>
    Ok(
      makeParsers(
        ~parse=Packet.LucyAxeMessage.parse,
        ~toPacket=a => Packet.LucyAxeMessage(a),
        ~toLazyPacket=a => Packet.LazyPacket.LucyAxeMessage(a),
      ),
    )
  | (PiggyBankVoidLensUpdate, _) =>
    Ok(
      makeParsers(
        ~parse=Packet.PiggyBankVoidLensUpdate.parse,
        ~toPacket=a => Packet.PiggyBankVoidLensUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.PiggyBankVoidLensUpdate(a),
      ),
    )
  | (DungeonDefendersEventAttemptSkipWait, _) =>
    Ok(
      makeParsers(
        ~parse=Packet.DungeonDefendersEventAttemptSkipWait.parse,
        ~toPacket=a => Packet.DungeonDefendersEventAttemptSkipWait(a),
        ~toLazyPacket=a => Packet.LazyPacket.DungeonDefendersEventAttemptSkipWait(a),
      ),
    )
  | (HaveDryadDoStardewAnimation, _) =>
    Ok(
      makeParsers(
        ~parse=Packet.HaveDryadDoStardewAnimation.parse,
        ~toPacket=a => Packet.HaveDryadDoStardewAnimation(a),
        ~toLazyPacket=a => Packet.LazyPacket.HaveDryadDoStardewAnimation(a),
      ),
    )
  | (ItemDropShimmeredUpdate, _) =>
    Ok(
      makeParsers(
        ~parse=Packet.ItemDropShimmeredUpdate.parse,
        ~toPacket=a => Packet.ItemDropShimmeredUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.ItemDropShimmeredUpdate(a),
      ),
    )
  | (ShimmerEffectOrCoinLuck, _) =>
    Ok(
      makeParsers(
        ~parse=Packet.ShimmerEffectOrCoinLuck.parse,
        ~toPacket=a => Packet.ShimmerEffectOrCoinLuck(a),
        ~toLazyPacket=a => Packet.LazyPacket.ShimmerEffectOrCoinLuck(a),
      ),
    )
  | (LoadoutSwitch, _) =>
    Ok(
      makeParsers(
        ~parse=Packet.LoadoutSwitch.parse,
        ~toPacket=a => Packet.LoadoutSwitch(a),
        ~toLazyPacket=a => Packet.LazyPacket.LoadoutSwitch(a),
      ),
    )
  | (ItemDropProtectedUpdate, _) =>
    Ok(
      makeParsers(
        ~parse=Packet.ItemDropProtectedUpdate.parse,
        ~toPacket=a => Packet.ItemDropProtectedUpdate(a),
        ~toLazyPacket=a => Packet.LazyPacket.ItemDropProtectedUpdate(a),
      ),
    )
  }

let parsePayload = (packetType: PacketType.t, payload: NodeJs.Buffer.t, fromServer: bool): result<
  Packet.t,
  IParser.parseError,
> =>
  switch getParsers(packetType, fromServer) {
  | Ok(parsers) => parsers.parse(payload, fromServer)
  | Error(err) => Error(err)
  }

let parsePayloadLazy = (
  packetType: PacketType.t,
  payload: NodeJs.Buffer.t,
  fromServer: bool,
): result<Packet.LazyPacket.t, IParser.parseError> =>
  switch getParsers(packetType, fromServer) {
  | Ok(parsers) => parsers.parseLazy(payload, fromServer)
  | Error(err) => Error(err)
  }

let parse: IParser.parse<Packet.t> = (~buffer: NodeJs.Buffer.t, ~fromServer: bool) => {
  switch buffer->NodeJs.Buffer.length {
  | 0 | 1 | 2 => Error(InvalidPacketLength)
  | _ =>
    switch buffer->NodeJs.Buffer.unsafeGet(2)->PacketType.fromInt {
    | Some(packetType) =>
      try {
        // As this module is parsing packets from the latest version to the equivalent packet data structures
        // it won't ever need Serializing after only parsing
        parsePayload(packetType, buffer, fromServer)
      } catch {
      | JsExn(obj) => Error(ReaderError({context: "Parser.parse", error: obj}))
      }
    | None => Error(InvalidPacketType)
    }
  }
}

let parseLazy: IParser.parseLazy<Packet.LazyPacket.t> = (
  ~buffer: NodeJs.Buffer.t,
  ~fromServer: bool,
) => {
  switch buffer->NodeJs.Buffer.length {
  | 0 | 1 | 2 => Error(InvalidPacketLength)
  | _ =>
    switch buffer->NodeJs.Buffer.unsafeGet(2)->PacketType.fromInt {
    | Some(packetType) =>
      try {
        // As this module is parsing packets from the latest version to the equivalent packet data structures
        // it won't ever need Serializing after only parsing
        parsePayloadLazy(packetType, buffer, fromServer)
      } catch {
      | JsExn(obj) => Error(ReaderError({context: "Parser.parseLazy", error: obj}))
      }
    | None => Error(InvalidPacketType)
    }
  }
}
