let mapPacket = (buffer, fn): result<Packet.t, IParser.parseError> =>
  buffer->Result.map(fn)->Result.mapError(e => IParser.ReaderError(e))
let parsePayload = (packetType: PacketType.t, payload: NodeJs.Buffer.t, fromServer: bool): result<
  Packet.t,
  IParser.parseError,
> =>
  switch (packetType, fromServer) {
  | (ConnectRequest, true) => Error(ConnectRequestFromServer)
  | (ConnectRequest, false) =>
    Packet.ConnectRequest.parse(payload)->mapPacket(a => Packet.ConnectRequest(a))
  | (Disconnect, false) => Error(DisconnectFromClient)
  | (Disconnect, true) => Packet.Disconnect.parse(payload)->mapPacket(a => Packet.Disconnect(a))
  | (PlayerSlotSet, false) => Error(PlayerSlotSetFromClient)
  | (PlayerSlotSet, true) =>
    mapPacket(Packet.PlayerSlotSet.parse(payload), a => Packet.PlayerSlotSet(a))
  | (PlayerInfo, true | false) =>
    mapPacket(Packet.PlayerInfo.parse(payload), a => Packet.PlayerInfo(a))
  | (PlayerInventorySlot, true | false) =>
    mapPacket(Packet.PlayerInventorySlot.parse(payload), a => Packet.PlayerInventorySlot(a))
  | (WorldDataRequest, true) => Error(WorldDataRequestFromServer)
  | (WorldDataRequest, false) => Error(NotImplemented)
  | (WorldInfo, false) => Error(WorldInfoFromClient)
  | (WorldInfo, true) => mapPacket(Packet.WorldInfo.parse(payload), a => Packet.WorldInfo(a))
  | (InitialTileSectionsRequest, true) => Error(InitialTileSectionsRequestFromServer)
  | (InitialTileSectionsRequest, false) =>
    mapPacket(
      Packet.InitialTileSectionsRequest.parse(payload),
      a => Packet.InitialTileSectionsRequest(a),
    )
  | (Status, false) => Error(StatusFromClient)
  | (Status, true) => mapPacket(Packet.Status.parse(payload), a => Packet.Status(a))
  | (TileSectionSend, false) => Error(TileSectionSendFromClient)
  | (TileSectionSend, true) =>
    mapPacket(Packet.TileSectionSend.parse(payload), a => Packet.TileSectionSend(a))
  | (TileSectionFrame, false) => Error(TileSectionFrameFromClient)
  | (TileSectionFrame, true) =>
    mapPacket(Packet.TileSectionFrame.parse(payload), a => Packet.TileSectionFrame(a))
  | (PlayerSpawn, true | false) =>
    mapPacket(Packet.PlayerSpawn.parse(payload), a => Packet.PlayerSpawn(a))
  | (PlayerUpdate, true | false) =>
    mapPacket(Packet.PlayerUpdate.parse(payload), a => Packet.PlayerUpdate(a))
  | (PlayerActive, false) => Error(PlayerActiveFromClient)
  | (PlayerActive, true) =>
    mapPacket(Packet.PlayerActive.parse(payload), a => Packet.PlayerActive(a))
  | (PlayerHealth, true | false) =>
    mapPacket(Packet.PlayerHealth.parse(payload), a => Packet.PlayerHealth(a))
  | (TileModify, true | false) =>
    mapPacket(Packet.TileModify.parse(payload), a => Packet.TileModify(a))
  | (TimeSet, false) => Error(TimeSetFromClient)
  | (TimeSet, true) => mapPacket(Packet.TimeSet.parse(payload), a => Packet.TimeSet(a))
  | (DoorUse, true | false) => Error(NotImplemented)
  | (TileSquareSend, true | false) =>
    mapPacket(Packet.TileSquareSend.parse(payload), a => Packet.TileSquareSend(a))
  | (ItemDropUpdate, true | false) =>
    mapPacket(Packet.ItemDropUpdate.parse(payload), a => Packet.ItemDropUpdate(a))
  | (ItemOwner, true | false) =>
    mapPacket(Packet.ItemOwner.parse(payload), a => Packet.ItemOwner(a))
  | (NpcUpdate, false) => Error(NpcUpdateFromClient)
  | (NpcUpdate, true) => mapPacket(Packet.NpcUpdate.parse(payload), a => Packet.NpcUpdate(a))
  | (NpcItemStrike, true | false) => Error(NotImplemented)
  | (ProjectileSync, true | false) =>
    mapPacket(Packet.ProjectileSync.parse(payload), a => Packet.ProjectileSync(a))
  | (NpcStrike, true | false) => Error(NotImplemented)
  | (ProjectileDestroy, true | false) =>
    mapPacket(Packet.ProjectileDestroy.parse(payload), a => Packet.ProjectileDestroy(a))
  | (PvpToggle, true | false) =>
    mapPacket(Packet.PvpToggle.parse(payload), a => Packet.PvpToggle(a))
  | (ChestOpen, true) => Error(ChestOpenFromServer)
  | (ChestOpen, false) => Error(NotImplemented)
  | (ChestItem, true | false) =>
    mapPacket(Packet.ChestItem.parse(payload), a => Packet.ChestItem(a))
  | (ActiveContainerSync, true | false) =>
    mapPacket(Packet.ActiveContainerSync.parse(payload), a => Packet.ActiveContainerSync(a))
  | (ChestPlace, true | false) =>
    mapPacket(Packet.ChestPlace.parse(payload), a => Packet.ChestPlace(a))
  | (HealEffect, true | false) =>
    mapPacket(Packet.HealEffect.parse(payload), a => Packet.HealEffect(a))
  | (Zones, true | false) => Error(NotImplemented)
  | (PasswordRequired, false) => Error(PasswordRequiredFromClient)
  | (PasswordRequired, true) => Error(NotImplemented)
  | (PasswordSend, true) => Error(PasswordSendFromServer)
  | (PasswordSend, false) => Error(NotImplemented)
  | (ItemOwnerRemove, false) => Error(ItemOwnerRemoveFromClient)
  | (ItemOwnerRemove, true) =>
    mapPacket(Packet.ItemOwnerRemove.parse(payload), a => Packet.ItemOwnerRemove(a))
  | (NpcTalk, true | false) => Error(NotImplemented)
  | (PlayerAnimation, true | false) => Error(NotImplemented)
  | (PlayerMana, true | false) =>
    mapPacket(Packet.PlayerMana.parse(payload), a => Packet.PlayerMana(a))
  | (ManaEffect, true | false) =>
    mapPacket(Packet.ManaEffect.parse(payload), a => Packet.ManaEffect(a))
  | (PlayerTeam, true | false) => Error(NotImplemented)
  | (SignRead, true) => Error(SignReadFromServer)
  | (SignRead, false) => Error(NotImplemented)
  | (SignNew, true | false) => Error(NotImplemented)
  | (LiquidSet, true | false) => Error(NotImplemented)
  | (PlayerSpawnSelf, false) => Error(PlayerSpawnSelfFromClient)
  | (PlayerSpawnSelf, true) => Error(NotImplemented)
  | (PlayerBuffsSet, true | false) =>
    mapPacket(Packet.PlayerBuffsSet.parse(payload), a => Packet.PlayerBuffsSet(a))
  | (NpcSpecialEffect, true | false) => Error(NotImplemented)
  | (ChestOrTempleUnlock, true | false) =>
    mapPacket(Packet.ChestOrTempleUnlock.parse(payload), a => Packet.ChestOrTempleUnlock(a))
  | (NpcBuffAdd, true | false) => Error(NotImplemented)
  | (NpcBuffUpdate, false) => Error(NpcBuffUpdateFromClient)
  | (NpcBuffUpdate, true) =>
    mapPacket(Packet.NpcBuffUpdate.parse(payload), a => Packet.NpcBuffUpdate(a))
  | (PlayerBuffAdd, true | false) =>
    mapPacket(Packet.PlayerBuffAdd.parse(payload), a => Packet.PlayerBuffAdd(a))
  | (NpcNameUpdate, true | false) => Error(NotImplemented)
  | (GoodEvilUpdate, false) => Error(GoodEvilUpdateFromClient)
  | (GoodEvilUpdate, true) => Error(NotImplemented)
  | (HarpPlay, true | false) => Error(NotImplemented)
  | (SwitchHit, true | false) => Error(NotImplemented)
  | (NpcHomeUpdate, true | false) => Error(NotImplemented)
  | (BossOrInvasionSpawn, true) => Error(BossOrInvasionSpawnFromServer)
  | (BossOrInvasionSpawn, false) =>
    mapPacket(Packet.BossOrInvasionSpawn.parse(payload), a => Packet.BossOrInvasionSpawn(a))
  | (PlayerDodge, true | false) => Error(NotImplemented)
  | (TilePaint, true | false) =>
    mapPacket(Packet.TilePaint.parse(payload), a => Packet.TilePaint(a))
  | (WallPaint, true | false) =>
    mapPacket(Packet.WallPaint.parse(payload), a => Packet.WallPaint(a))
  | (Teleport, true | false) => mapPacket(Packet.Teleport.parse(payload), a => Packet.Teleport(a))
  | (PlayerHealOther, true | false) => Error(NotImplemented)
  | (DimensionsUpdate, true | false) =>
    mapPacket(Packet.DimensionsUpdate.parse(payload), a => Packet.DimensionsUpdate(a))
  | (ClientUuid, true) => Error(ClientUuidFromServer)
  | (ClientUuid, false) => mapPacket(Packet.ClientUuid.parse(payload), a => Packet.ClientUuid(a))
  | (ChestName, true | false) => Error(NotImplemented)
  | (NpcCatch, true) => Error(NpcCatchFromServer)
  | (NpcCatch, false) => mapPacket(Packet.NpcCatch.parse(payload), a => Packet.NpcCatch(a))
  | (NpcRelease, true) => Error(NpcReleaseFromServer)
  | (NpcRelease, false) => mapPacket(Packet.NpcRelease.parse(payload), a => Packet.NpcRelease(a))
  | (TravellingMerchantInventory, false) => Error(TravellingMerchantInventoryFromClient)
  | (TravellingMerchantInventory, true) =>
    mapPacket(
      Packet.TravellingMerchantInventory.parse(payload),
      a => Packet.TravellingMerchantInventory(a),
    )
  | (TeleportationPotion, true | false) =>
    mapPacket(Packet.TeleportationPotion.parse(payload), a => Packet.TeleportationPotion(a))
  | (AnglerQuest, false) => Error(AnglerQuestFromClient)
  | (AnglerQuest, true) => Error(NotImplemented)
  | (AnglerQuestComplete, true) => Error(AnglerQuestCompleteFromServer)
  | (AnglerQuestComplete, false) => Error(NotImplemented)
  | (AnglerQuestsCompletedAmount, true)
  | (AnglerQuestsCompletedAmount, false) =>
    Error(NotImplemented)
  | (TemporaryAnimationCreate, false) => Error(TemporaryAnimationCreateFromClient)
  | (TemporaryAnimationCreate, true) => Error(NotImplemented)

  | (InvasionProgressReport, false) => Error(InvasionProgressReportFromClient)
  | (InvasionProgressReport, true) => Error(NotImplemented)
  | (ObjectPlace, true | false) =>
    mapPacket(Packet.ObjectPlace.parse(payload), a => Packet.ObjectPlace(a))
  | (PlayerChestIndexSync, false) => Error(PlayerChestIndexSyncFromClient)
  | (PlayerChestIndexSync, true) => Error(NotImplemented)
  | (CombatNumberCreate, false) => Error(CombatNumberCreateFromClient)
  | (CombatNumberCreate, true) => Error(NotImplemented)
  | (NetModuleLoad, true | false) =>
    mapPacket(Packet.NetModuleLoad.parse(payload, ~fromServer), a => Packet.NetModuleLoad(a))
  | (NpcKillCount, false) => Error(NpcKillCountFromClient)
  | (NpcKillCount, true) => Error(NotImplemented)
  | (PlayerStealth, true | false) => Error(NotImplemented)
  | (ItemForceIntoNearestChest, true) => Error(ItemForceIntoNearestChestFromServer)
  | (ItemForceIntoNearestChest, false) => Error(NotImplemented)
  | (TileEntityUpdate, false) => Error(TileEntityUpdateFromClient)
  | (TileEntityUpdate, true) => Error(NotImplemented)
  | (TileEntityPlace, true) => Error(TileEntityPlaceFromServer)
  | (TileEntityPlace, false) => Error(NotImplemented)
  | (ItemDropModify, false) => Error(ItemDropModifyFromClient)
  | (ItemDropModify, true) => Error(NotImplemented)
  | (ItemFramePlace, true) => Error(ItemFramePlaceFromServer)
  | (ItemFramePlace, false) =>
    mapPacket(Packet.ItemFramePlace.parse(payload), a => Packet.ItemFramePlace(a))
  | (ItemDropInstancedUpdate, true | false) =>
    mapPacket(Packet.ItemDropInstancedUpdate.parse(payload), a => Packet.ItemDropInstancedUpdate(a))
  | (EmoteBubble, false) => Error(EmoteBubbleFromClient)
  | (EmoteBubble, true) => Error(NotImplemented)
  | (ExtraValueSync, true | false) =>
    mapPacket(Packet.ExtraValueSync.parse(payload), a => Packet.ExtraValueSync(a))
  | (SocialHandshake, true | false) => Error(NotImplemented)
  | (Unused, true | false) => Error(NotImplemented)
  | (PortalKill, true) => Error(PortalKillFromServer)
  | (PortalKill, false) => Error(NotImplemented)
  | (PlayerTeleportPortal, true | false) =>
    mapPacket(Packet.PlayerTeleportPortal.parse(payload), a => Packet.PlayerTeleportPortal(a))
  | (NpcKilledNotification, false) => Error(NpcKilledNotificationFromClient)
  | (NpcKilledNotification, true) => Error(NotImplemented)
  | (EventNotification, false) => Error(EventNotificationFromClient)
  | (EventNotification, true) => Error(NotImplemented)
  | (MinionTargetUpdate, true | false) => Error(NotImplemented)
  | (NpcTeleportPortal, true | false) => Error(NotImplemented)
  | (ShieldStrengthsUpdate, false) => Error(ShieldStrengthsUpdateFromClient)
  | (ShieldStrengthsUpdate, true) => Error(NotImplemented)
  | (NebulaLevelUp, true | false) => Error(NotImplemented)
  | (MoonLordCountdown, false) => Error(MoonLordCountdownFromClient)
  | (MoonLordCountdown, true) =>
    mapPacket(Packet.MoonLordCountdown.parse(payload), a => Packet.MoonLordCountdown(a))
  | (NpcShopItem, false) => Error(NpcShopItemFromClient)
  | (NpcShopItem, true) => Error(NotImplemented)
  | (GemLockToggle, true) => Error(GemLockToggleFromServer)
  | (GemLockToggle, false) => Error(NotImplemented)
  | (SmokePoof, false) => Error(SmokePoofFromClient)
  | (SmokePoof, true) => Error(NotImplemented)
  | (ChatMessageSmart, false) => Error(ChatMessageSmartFromClient)
  | (ChatMessageSmart, true) =>
    mapPacket(Packet.ChatMessageSmart.parse(payload), a => Packet.ChatMessageSmart(a))
  | (WiredCannonShot, false) => Error(WiredCannonShotFromClient)
  | (WiredCannonShot, true) => Error(NotImplemented)
  | (MassWireOperation, true) => Error(MassWireOperationFromServer)
  | (MassWireOperation, false) => Error(NotImplemented)
  | (MassWireOperationPay, false) => Error(MassWireOperationPayFromClient)
  | (MassWireOperationPay, true) => Error(NotImplemented)
  | (PartyToggle, true) => Error(PartyToggleFromServer)
  | (PartyToggle, false) => Error(NotImplemented)
  | (TreeGrowFx, true | false) => Error(NotImplemented)
  | (CrystalInvasionStart, true) => Error(CrystalInvasionStartFromServer)
  | (CrystalInvasionStart, false) =>
    mapPacket(Packet.CrystalInvasionStart.parse(payload), a => Packet.CrystalInvasionStart(a))
  | (CrystalInvasionWipeAll, false) => Error(CrystalInvasionWipeAllFromClient)
  | (CrystalInvasionWipeAll, true) => Error(NotImplemented)
  | (MinionAttackTargetUpdate, true | false) => Error(NotImplemented)
  | (CrystalInvasionSendWaitTime, false) => Error(CrystalInvasionSendWaitTimeFromClient)
  | (CrystalInvasionSendWaitTime, true) => Error(NotImplemented)
  | (PlayerDamage, true | false) =>
    mapPacket(Packet.PlayerDamage.parse(payload), a => Packet.PlayerDamage(a))
  | (PlayerDeath, true | false) =>
    mapPacket(Packet.PlayerDeath.parse(payload), a => Packet.PlayerDeath(a))
  | (CombatTextCreate, false) => Error(CombatTextCreateFromClient)
  | (CombatTextCreate, true) => Error(NotImplemented)
  | (Emoji, true) => Error(EmojiFromServer)
  | (Emoji, false) => Error(NotImplemented)
  | (TileEntityDisplayDollItemSync, true | false) =>
    mapPacket(
      Packet.TileEntityDisplayDollItemSync.parse(payload),
      a => Packet.TileEntityDisplayDollItemSync(a),
    )
  | (TileEntityInteractionRequest, true | false) => Error(NotImplemented)
  | (WeaponsRackTryPlacing, true) => Error(WeaponsRackTryPlacingFromServer)
  | (WeaponsRackTryPlacing, false) =>
    mapPacket(Packet.WeaponsRackTryPlacing.parse(payload), a => Packet.WeaponsRackTryPlacing(a))
  | (TileEntityHatRackItemSync, true | false) =>
    mapPacket(
      Packet.TileEntityHatRackItemSync.parse(payload),
      a => Packet.TileEntityHatRackItemSync(a),
    )
  | (TilePickingSync, true | false) => Error(NotImplemented)
  | (RevengeMarkerSync, false) => Error(RevengeMarkerSyncFromClient)
  | (RevengeMarkerSync, true) => Error(NotImplemented)
  | (RevengeMarkerRemove, false) => Error(RevengeMarkerRemoveFromClient)
  | (RevengeMarkerRemove, true) => Error(NotImplemented)
  | (GolfBallLandInCup, true | false) => Error(NotImplemented)
  | (ClientFinishConnectingToServer, false) => Error(ClientFinishConnectingToServerFromClient)
  | (ClientFinishConnectingToServer, true) => Error(NotImplemented)
  | (NpcFishOut, true) => Error(NpcFishOutFromServer)
  | (NpcFishOut, false) => Error(NotImplemented)
  | (NpcTamper, false) => Error(NpcTamperFromClient)
  | (NpcTamper, true) => mapPacket(Packet.NpcTamper.parse(payload), a => Packet.NpcTamper(a))
  | (LegacySoundPlay, false) => Error(LegacySoundPlayFromClient)
  | (LegacySoundPlay, true) => Error(NotImplemented)
  | (FoodPlatterTryPlacing, true) => Error(FoodPlatterTryPlacingFromServer)
  | (FoodPlatterTryPlacing, false) =>
    mapPacket(Packet.FoodPlatterTryPlacing.parse(payload), a => Packet.FoodPlatterTryPlacing(a))
  | (PlayerLuckFactorsUpdate, true | false) =>
    mapPacket(Packet.PlayerLuckFactorsUpdate.parse(payload), a => Packet.PlayerLuckFactorsUpdate(a))
  | (PlayerDead, false) => Error(PlayerDeadFromClient)
  | (PlayerDead, true) => Error(NotImplemented)
  | (CavernMonsterTypeSync, true | false) => Error(NotImplemented)
  | (NpcBuffRemovalRequest, true) => Error(NpcBuffRemovalRequestFromServer)
  | (NpcBuffRemovalRequest, false) => Error(NotImplemented)
  | (ClientSyncedInventory, true) => Error(ClientSyncedInventoryFromServer)
  | (ClientSyncedInventory, false) => Error(NotImplemented)
  | (CountsAsHostForGameplaySet, _) => Error(NotImplemented)
  | (CreditsOrSlimeTransform, _) =>
    mapPacket(Packet.CreditsOrSlimeTransform.parse(payload), a => Packet.CreditsOrSlimeTransform(a))
  | (LucyAxeMessage, _) =>
    mapPacket(Packet.LucyAxeMessage.parse(payload), a => Packet.LucyAxeMessage(a))
  | (PiggyBankVoidLensUpdate, _) =>
    mapPacket(Packet.PiggyBankVoidLensUpdate.parse(payload), a => Packet.PiggyBankVoidLensUpdate(a))
  | (DungeonDefendersEventAttemptSkipWait, _) =>
    mapPacket(
      Packet.DungeonDefendersEventAttemptSkipWait.parse(payload),
      a => Packet.DungeonDefendersEventAttemptSkipWait(a),
    )
  | (HaveDryadDoStardewAnimation, _) =>
    mapPacket(
      Packet.HaveDryadDoStardewAnimation.parse(payload),
      a => Packet.HaveDryadDoStardewAnimation(a),
    )
  | (ItemDropShimmeredUpdate, _) =>
    mapPacket(Packet.ItemDropShimmeredUpdate.parse(payload), a => Packet.ItemDropShimmeredUpdate(a))
  | (ShimmerEffectOrCoinLuck, _) =>
    mapPacket(Packet.ShimmerEffectOrCoinLuck.parse(payload), a => Packet.ShimmerEffectOrCoinLuck(a))
  | (LoadoutSwitch, _) =>
    mapPacket(Packet.LoadoutSwitch.parse(payload), a => Packet.LoadoutSwitch(a))
  | (ItemDropProtectedUpdate, _) =>
    mapPacket(Packet.ItemDropProtectedUpdate.parse(payload), a => Packet.ItemDropProtectedUpdate(a))
  }

let parsePayloadLazy = (
  packetType: PacketType.t,
  payload: NodeJs.Buffer.t,
  fromServer: bool,
): result<Packet.LazyPacket.t, IParser.parseError> =>
  switch (packetType, fromServer) {
  | (ConnectRequest, true) => Error(ConnectRequestFromServer)
  | (ConnectRequest, false) =>
    Ok(Packet.LazyPacket.ConnectRequest(Lazy.make(() => Packet.ConnectRequest.parse(payload))))
  | (Disconnect, false) => Error(DisconnectFromClient)
  | (Disconnect, true) =>
    Ok(Packet.LazyPacket.Disconnect(Lazy.make(() => Packet.Disconnect.parse(payload))))
  | (PlayerSlotSet, false) => Error(PlayerSlotSetFromClient)
  | (PlayerSlotSet, true) =>
    Ok(Packet.LazyPacket.PlayerSlotSet(Lazy.make(() => Packet.PlayerSlotSet.parse(payload))))
  | (PlayerInfo, true | false) =>
    Ok(Packet.LazyPacket.PlayerInfo(Lazy.make(() => Packet.PlayerInfo.parse(payload))))
  | (PlayerInventorySlot, true | false) =>
    Ok(
      Packet.LazyPacket.PlayerInventorySlot(
        Lazy.make(() => Packet.PlayerInventorySlot.parse(payload)),
      ),
    )
  | (WorldDataRequest, true) => Error(WorldDataRequestFromServer)
  | (WorldDataRequest, false) => Error(NotImplemented)
  | (WorldInfo, false) => Error(WorldInfoFromClient)
  | (WorldInfo, true) =>
    Ok(Packet.LazyPacket.WorldInfo(Lazy.make(() => Packet.WorldInfo.parse(payload))))
  | (InitialTileSectionsRequest, true) => Error(InitialTileSectionsRequestFromServer)
  | (InitialTileSectionsRequest, false) =>
    Ok(
      Packet.LazyPacket.InitialTileSectionsRequest(
        Lazy.make(() => Packet.InitialTileSectionsRequest.parse(payload)),
      ),
    )
  | (Status, false) => Error(StatusFromClient)
  | (Status, true) => Ok(Packet.LazyPacket.Status(Lazy.make(() => Packet.Status.parse(payload))))
  | (TileSectionSend, false) => Error(TileSectionSendFromClient)
  | (TileSectionSend, true) =>
    Ok(Packet.LazyPacket.TileSectionSend(Lazy.make(() => Packet.TileSectionSend.parse(payload))))
  | (TileSectionFrame, false) => Error(TileSectionFrameFromClient)
  | (TileSectionFrame, true) =>
    Ok(Packet.LazyPacket.TileSectionFrame(Lazy.make(() => Packet.TileSectionFrame.parse(payload))))
  | (PlayerSpawn, true | false) =>
    Ok(Packet.LazyPacket.PlayerSpawn(Lazy.make(() => Packet.PlayerSpawn.parse(payload))))
  | (PlayerUpdate, true | false) =>
    Ok(Packet.LazyPacket.PlayerUpdate(Lazy.make(() => Packet.PlayerUpdate.parse(payload))))
  | (PlayerActive, false) => Error(PlayerActiveFromClient)
  | (PlayerActive, true) =>
    Ok(Packet.LazyPacket.PlayerActive(Lazy.make(() => Packet.PlayerActive.parse(payload))))
  | (PlayerHealth, true | false) =>
    Ok(Packet.LazyPacket.PlayerHealth(Lazy.make(() => Packet.PlayerHealth.parse(payload))))
  | (TileModify, true | false) =>
    Ok(Packet.LazyPacket.TileModify(Lazy.make(() => Packet.TileModify.parse(payload))))
  | (TimeSet, false) => Error(TimeSetFromClient)
  | (TimeSet, true) => Ok(Packet.LazyPacket.TimeSet(Lazy.make(() => Packet.TimeSet.parse(payload))))
  | (DoorUse, true | false) => Error(NotImplemented)
  | (TileSquareSend, true | false) =>
    Ok(Packet.LazyPacket.TileSquareSend(Lazy.make(() => Packet.TileSquareSend.parse(payload))))
  | (ItemDropUpdate, true | false) =>
    Ok(Packet.LazyPacket.ItemDropUpdate(Lazy.make(() => Packet.ItemDropUpdate.parse(payload))))
  | (ItemOwner, true | false) =>
    Ok(Packet.LazyPacket.ItemOwner(Lazy.make(() => Packet.ItemOwner.parse(payload))))
  | (NpcUpdate, false) => Error(NpcUpdateFromClient)
  | (NpcUpdate, true) =>
    Ok(Packet.LazyPacket.NpcUpdate(Lazy.make(() => Packet.NpcUpdate.parse(payload))))
  | (NpcItemStrike, true | false) => Error(NotImplemented)
  | (ProjectileSync, true | false) =>
    Ok(Packet.LazyPacket.ProjectileSync(Lazy.make(() => Packet.ProjectileSync.parse(payload))))
  | (NpcStrike, true | false) => Error(NotImplemented)
  | (ProjectileDestroy, true | false) =>
    Ok(
      Packet.LazyPacket.ProjectileDestroy(Lazy.make(() => Packet.ProjectileDestroy.parse(payload))),
    )
  | (PvpToggle, true | false) =>
    Ok(Packet.LazyPacket.PvpToggle(Lazy.make(() => Packet.PvpToggle.parse(payload))))
  | (ChestOpen, true) => Error(ChestOpenFromServer)
  | (ChestOpen, false) => Error(NotImplemented)
  | (ChestItem, true | false) =>
    Ok(Packet.LazyPacket.ChestItem(Lazy.make(() => Packet.ChestItem.parse(payload))))
  | (ActiveContainerSync, true | false) =>
    Ok(
      Packet.LazyPacket.ActiveContainerSync(
        Lazy.make(() => Packet.ActiveContainerSync.parse(payload)),
      ),
    )
  | (ChestPlace, true | false) =>
    Ok(Packet.LazyPacket.ChestPlace(Lazy.make(() => Packet.ChestPlace.parse(payload))))
  | (HealEffect, true | false) =>
    Ok(Packet.LazyPacket.HealEffect(Lazy.make(() => Packet.HealEffect.parse(payload))))
  | (Zones, true | false) => Error(NotImplemented)
  | (PasswordRequired, false) => Error(PasswordRequiredFromClient)
  | (PasswordRequired, true) => Error(NotImplemented)
  | (PasswordSend, true) => Error(PasswordSendFromServer)
  | (PasswordSend, false) => Error(NotImplemented)
  | (ItemOwnerRemove, false) => Error(ItemOwnerRemoveFromClient)
  | (ItemOwnerRemove, true) =>
    Ok(Packet.LazyPacket.ItemOwnerRemove(Lazy.make(() => Packet.ItemOwnerRemove.parse(payload))))
  | (NpcTalk, true | false) => Error(NotImplemented)
  | (PlayerAnimation, true | false) => Error(NotImplemented)
  | (PlayerMana, true | false) =>
    Ok(Packet.LazyPacket.PlayerMana(Lazy.make(() => Packet.PlayerMana.parse(payload))))
  | (ManaEffect, true | false) =>
    Ok(Packet.LazyPacket.ManaEffect(Lazy.make(() => Packet.ManaEffect.parse(payload))))
  | (PlayerTeam, true | false) => Error(NotImplemented)
  | (SignRead, true) => Error(SignReadFromServer)
  | (SignRead, false) => Error(NotImplemented)
  | (SignNew, true | false) => Error(NotImplemented)
  | (LiquidSet, true | false) => Error(NotImplemented)
  | (PlayerSpawnSelf, false) => Error(PlayerSpawnSelfFromClient)
  | (PlayerSpawnSelf, true) => Error(NotImplemented)
  | (PlayerBuffsSet, true | false) =>
    Ok(Packet.LazyPacket.PlayerBuffsSet(Lazy.make(() => Packet.PlayerBuffsSet.parse(payload))))
  | (NpcSpecialEffect, true | false) => Error(NotImplemented)
  | (ChestOrTempleUnlock, true | false) =>
    Ok(
      Packet.LazyPacket.ChestOrTempleUnlock(
        Lazy.make(() => Packet.ChestOrTempleUnlock.parse(payload)),
      ),
    )
  | (NpcBuffAdd, true | false) => Error(NotImplemented)
  | (NpcBuffUpdate, false) => Error(NpcBuffUpdateFromClient)
  | (NpcBuffUpdate, true) =>
    Ok(Packet.LazyPacket.NpcBuffUpdate(Lazy.make(() => Packet.NpcBuffUpdate.parse(payload))))
  | (PlayerBuffAdd, true | false) =>
    Ok(Packet.LazyPacket.PlayerBuffAdd(Lazy.make(() => Packet.PlayerBuffAdd.parse(payload))))
  | (NpcNameUpdate, true | false) => Error(NotImplemented)
  | (GoodEvilUpdate, false) => Error(GoodEvilUpdateFromClient)
  | (GoodEvilUpdate, true) => Error(NotImplemented)
  | (HarpPlay, true | false) => Error(NotImplemented)
  | (SwitchHit, true | false) => Error(NotImplemented)
  | (NpcHomeUpdate, true | false) => Error(NotImplemented)
  | (BossOrInvasionSpawn, true) => Error(BossOrInvasionSpawnFromServer)
  | (BossOrInvasionSpawn, false) =>
    Ok(
      Packet.LazyPacket.BossOrInvasionSpawn(
        Lazy.make(() => Packet.BossOrInvasionSpawn.parse(payload)),
      ),
    )
  | (PlayerDodge, true | false) => Error(NotImplemented)
  | (TilePaint, true | false) =>
    Ok(Packet.LazyPacket.TilePaint(Lazy.make(() => Packet.TilePaint.parse(payload))))
  | (WallPaint, true | false) =>
    Ok(Packet.LazyPacket.WallPaint(Lazy.make(() => Packet.WallPaint.parse(payload))))
  | (Teleport, true | false) =>
    Ok(Packet.LazyPacket.Teleport(Lazy.make(() => Packet.Teleport.parse(payload))))
  | (PlayerHealOther, true | false) => Error(NotImplemented)
  | (DimensionsUpdate, true | false) =>
    Ok(Packet.LazyPacket.DimensionsUpdate(Lazy.make(() => Packet.DimensionsUpdate.parse(payload))))
  | (ClientUuid, true) => Error(ClientUuidFromServer)
  | (ClientUuid, false) =>
    Ok(Packet.LazyPacket.ClientUuid(Lazy.make(() => Packet.ClientUuid.parse(payload))))
  | (ChestName, true | false) => Error(NotImplemented)
  | (NpcCatch, true) => Error(NpcCatchFromServer)
  | (NpcCatch, false) =>
    Ok(Packet.LazyPacket.NpcCatch(Lazy.make(() => Packet.NpcCatch.parse(payload))))
  | (NpcRelease, true) => Error(NpcReleaseFromServer)
  | (NpcRelease, false) =>
    Ok(Packet.LazyPacket.NpcRelease(Lazy.make(() => Packet.NpcRelease.parse(payload))))
  | (TravellingMerchantInventory, false) => Error(TravellingMerchantInventoryFromClient)
  | (TravellingMerchantInventory, true) =>
    Ok(
      Packet.LazyPacket.TravellingMerchantInventory(
        Lazy.make(() => Packet.TravellingMerchantInventory.parse(payload)),
      ),
    )
  | (TeleportationPotion, true | false) =>
    Ok(
      Packet.LazyPacket.TeleportationPotion(
        Lazy.make(() => Packet.TeleportationPotion.parse(payload)),
      ),
    )
  | (AnglerQuest, false) => Error(AnglerQuestFromClient)
  | (AnglerQuest, true) => Error(NotImplemented)
  | (AnglerQuestComplete, true) => Error(AnglerQuestCompleteFromServer)
  | (AnglerQuestComplete, false) => Error(NotImplemented)
  | (AnglerQuestsCompletedAmount, true)
  | (AnglerQuestsCompletedAmount, false) =>
    Error(NotImplemented)
  | (TemporaryAnimationCreate, false) => Error(TemporaryAnimationCreateFromClient)
  | (TemporaryAnimationCreate, true) => Error(NotImplemented)
  | (InvasionProgressReport, false) => Error(InvasionProgressReportFromClient)
  | (InvasionProgressReport, true) => Error(NotImplemented)
  | (ObjectPlace, true | false) =>
    Ok(Packet.LazyPacket.ObjectPlace(Lazy.make(() => Packet.ObjectPlace.parse(payload))))
  | (PlayerChestIndexSync, false) => Error(PlayerChestIndexSyncFromClient)
  | (PlayerChestIndexSync, true) => Error(NotImplemented)
  | (CombatNumberCreate, false) => Error(CombatNumberCreateFromClient)
  | (CombatNumberCreate, true) => Error(NotImplemented)
  | (NetModuleLoad, true | false) =>
    Ok(
      Packet.LazyPacket.NetModuleLoad(
        Lazy.make(() => Packet.NetModuleLoad.parse(payload, ~fromServer)),
      ),
    )
  | (NpcKillCount, false) => Error(NpcKillCountFromClient)
  | (NpcKillCount, true) => Error(NotImplemented)
  | (PlayerStealth, true | false) => Error(NotImplemented)
  | (ItemForceIntoNearestChest, true) => Error(ItemForceIntoNearestChestFromServer)
  | (ItemForceIntoNearestChest, false) => Error(NotImplemented)
  | (TileEntityUpdate, false) => Error(TileEntityUpdateFromClient)
  | (TileEntityUpdate, true) => Error(NotImplemented)
  | (TileEntityPlace, true) => Error(TileEntityPlaceFromServer)
  | (TileEntityPlace, false) => Error(NotImplemented)
  | (ItemDropModify, false) => Error(ItemDropModifyFromClient)
  | (ItemDropModify, true) => Error(NotImplemented)
  | (ItemFramePlace, true) => Error(ItemFramePlaceFromServer)
  | (ItemFramePlace, false) =>
    Ok(Packet.LazyPacket.ItemFramePlace(Lazy.make(() => Packet.ItemFramePlace.parse(payload))))
  | (ItemDropInstancedUpdate, true | false) =>
    Ok(
      Packet.LazyPacket.ItemDropInstancedUpdate(
        Lazy.make(() => Packet.ItemDropInstancedUpdate.parse(payload)),
      ),
    )
  | (EmoteBubble, false) => Error(EmoteBubbleFromClient)
  | (EmoteBubble, true) => Error(NotImplemented)
  | (ExtraValueSync, true | false) =>
    Ok(Packet.LazyPacket.ExtraValueSync(Lazy.make(() => Packet.ExtraValueSync.parse(payload))))
  | (SocialHandshake, true | false) => Error(NotImplemented)
  | (Unused, true | false) => Error(NotImplemented)
  | (PortalKill, true) => Error(PortalKillFromServer)
  | (PortalKill, false) => Error(NotImplemented)
  | (PlayerTeleportPortal, true | false) =>
    Ok(
      Packet.LazyPacket.PlayerTeleportPortal(
        Lazy.make(() => Packet.PlayerTeleportPortal.parse(payload)),
      ),
    )
  | (NpcKilledNotification, false) => Error(NpcKilledNotificationFromClient)
  | (NpcKilledNotification, true) => Error(NotImplemented)
  | (EventNotification, false) => Error(EventNotificationFromClient)
  | (EventNotification, true) => Error(NotImplemented)
  | (MinionTargetUpdate, true | false) => Error(NotImplemented)
  | (NpcTeleportPortal, true | false) => Error(NotImplemented)
  | (ShieldStrengthsUpdate, false) => Error(ShieldStrengthsUpdateFromClient)
  | (ShieldStrengthsUpdate, true) => Error(NotImplemented)
  | (NebulaLevelUp, true | false) => Error(NotImplemented)
  | (MoonLordCountdown, false) => Error(MoonLordCountdownFromClient)
  | (MoonLordCountdown, true) =>
    Ok(
      Packet.LazyPacket.MoonLordCountdown(Lazy.make(() => Packet.MoonLordCountdown.parse(payload))),
    )
  | (NpcShopItem, false) => Error(NpcShopItemFromClient)
  | (NpcShopItem, true) => Error(NotImplemented)
  | (GemLockToggle, true) => Error(GemLockToggleFromServer)
  | (GemLockToggle, false) => Error(NotImplemented)
  | (SmokePoof, false) => Error(SmokePoofFromClient)
  | (SmokePoof, true) => Error(NotImplemented)
  | (ChatMessageSmart, false) => Error(ChatMessageSmartFromClient)
  | (ChatMessageSmart, true) =>
    Ok(Packet.LazyPacket.ChatMessageSmart(Lazy.make(() => Packet.ChatMessageSmart.parse(payload))))
  | (WiredCannonShot, false) => Error(WiredCannonShotFromClient)
  | (WiredCannonShot, true) => Error(NotImplemented)
  | (MassWireOperation, true) => Error(MassWireOperationFromServer)
  | (MassWireOperation, false) => Error(NotImplemented)
  | (MassWireOperationPay, false) => Error(MassWireOperationPayFromClient)
  | (MassWireOperationPay, true) => Error(NotImplemented)
  | (PartyToggle, true) => Error(PartyToggleFromServer)
  | (PartyToggle, false) => Error(NotImplemented)
  | (TreeGrowFx, true | false) => Error(NotImplemented)
  | (CrystalInvasionStart, true) => Error(CrystalInvasionStartFromServer)
  | (CrystalInvasionStart, false) =>
    Ok(
      Packet.LazyPacket.CrystalInvasionStart(
        Lazy.make(() => Packet.CrystalInvasionStart.parse(payload)),
      ),
    )
  | (CrystalInvasionWipeAll, false) => Error(CrystalInvasionWipeAllFromClient)
  | (CrystalInvasionWipeAll, true) => Error(NotImplemented)
  | (MinionAttackTargetUpdate, true | false) => Error(NotImplemented)
  | (CrystalInvasionSendWaitTime, false) => Error(CrystalInvasionSendWaitTimeFromClient)
  | (CrystalInvasionSendWaitTime, true) => Error(NotImplemented)
  | (PlayerDamage, true | false) =>
    Ok(Packet.LazyPacket.PlayerDamage(Lazy.make(() => Packet.PlayerDamage.parse(payload))))
  | (PlayerDeath, true | false) =>
    Ok(Packet.LazyPacket.PlayerDeath(Lazy.make(() => Packet.PlayerDeath.parse(payload))))
  | (CombatTextCreate, false) => Error(CombatTextCreateFromClient)
  | (CombatTextCreate, true) => Error(NotImplemented)
  | (Emoji, true) => Error(EmojiFromServer)
  | (Emoji, false) => Error(NotImplemented)
  | (TileEntityDisplayDollItemSync, true | false) =>
    Ok(
      Packet.LazyPacket.TileEntityDisplayDollItemSync(
        Lazy.make(() => Packet.TileEntityDisplayDollItemSync.parse(payload)),
      ),
    )
  | (TileEntityInteractionRequest, true | false) => Error(NotImplemented)
  | (WeaponsRackTryPlacing, true) => Error(WeaponsRackTryPlacingFromServer)
  | (WeaponsRackTryPlacing, false) =>
    Ok(
      Packet.LazyPacket.WeaponsRackTryPlacing(
        Lazy.make(() => Packet.WeaponsRackTryPlacing.parse(payload)),
      ),
    )
  | (TileEntityHatRackItemSync, true | false) =>
    Ok(
      Packet.LazyPacket.TileEntityHatRackItemSync(
        Lazy.make(() => Packet.TileEntityHatRackItemSync.parse(payload)),
      ),
    )
  | (TilePickingSync, true | false) => Error(NotImplemented)
  | (RevengeMarkerSync, false) => Error(RevengeMarkerSyncFromClient)
  | (RevengeMarkerSync, true) => Error(NotImplemented)
  | (RevengeMarkerRemove, false) => Error(RevengeMarkerRemoveFromClient)
  | (RevengeMarkerRemove, true) => Error(NotImplemented)
  | (GolfBallLandInCup, true | false) => Error(NotImplemented)
  | (ClientFinishConnectingToServer, false) => Error(ClientFinishConnectingToServerFromClient)
  | (ClientFinishConnectingToServer, true) => Error(NotImplemented)
  | (NpcFishOut, true) => Error(NpcFishOutFromServer)
  | (NpcFishOut, false) => Error(NotImplemented)
  | (NpcTamper, false) => Error(NpcTamperFromClient)
  | (NpcTamper, true) =>
    Ok(Packet.LazyPacket.NpcTamper(Lazy.make(() => Packet.NpcTamper.parse(payload))))
  | (LegacySoundPlay, false) => Error(LegacySoundPlayFromClient)
  | (LegacySoundPlay, true) => Error(NotImplemented)
  | (FoodPlatterTryPlacing, true) => Error(FoodPlatterTryPlacingFromServer)
  | (FoodPlatterTryPlacing, false) =>
    Ok(
      Packet.LazyPacket.FoodPlatterTryPlacing(
        Lazy.make(() => Packet.FoodPlatterTryPlacing.parse(payload)),
      ),
    )
  | (PlayerLuckFactorsUpdate, true | false) =>
    Ok(
      Packet.LazyPacket.PlayerLuckFactorsUpdate(
        Lazy.make(() => Packet.PlayerLuckFactorsUpdate.parse(payload)),
      ),
    )
  | (PlayerDead, false) => Error(PlayerDeadFromClient)
  | (PlayerDead, true) => Error(NotImplemented)
  | (CavernMonsterTypeSync, true | false) => Error(NotImplemented)
  | (NpcBuffRemovalRequest, true) => Error(NpcBuffRemovalRequestFromServer)
  | (NpcBuffRemovalRequest, false) => Error(NotImplemented)
  | (ClientSyncedInventory, true) => Error(ClientSyncedInventoryFromServer)
  | (ClientSyncedInventory, false) => Error(NotImplemented)
  | (CountsAsHostForGameplaySet, _) => Error(NotImplemented)
  | (CreditsOrSlimeTransform, _) =>
    Ok(
      Packet.LazyPacket.CreditsOrSlimeTransform(
        Lazy.make(() => Packet.CreditsOrSlimeTransform.parse(payload)),
      ),
    )
  | (LucyAxeMessage, _) =>
    Ok(Packet.LazyPacket.LucyAxeMessage(Lazy.make(() => Packet.LucyAxeMessage.parse(payload))))
  | (PiggyBankVoidLensUpdate, _) =>
    Ok(
      Packet.LazyPacket.PiggyBankVoidLensUpdate(
        Lazy.make(() => Packet.PiggyBankVoidLensUpdate.parse(payload)),
      ),
    )
  | (DungeonDefendersEventAttemptSkipWait, _) =>
    Ok(
      Packet.LazyPacket.DungeonDefendersEventAttemptSkipWait(
        Lazy.make(() => Packet.DungeonDefendersEventAttemptSkipWait.parse(payload)),
      ),
    )
  | (HaveDryadDoStardewAnimation, _) =>
    Ok(
      Packet.LazyPacket.HaveDryadDoStardewAnimation(
        Lazy.make(() => Packet.HaveDryadDoStardewAnimation.parse(payload)),
      ),
    )
  | (ItemDropShimmeredUpdate, _) =>
    Ok(
      Packet.LazyPacket.ItemDropShimmeredUpdate(
        Lazy.make(() => Packet.ItemDropShimmeredUpdate.parse(payload)),
      ),
    )
  | (ShimmerEffectOrCoinLuck, _) =>
    Ok(
      Packet.LazyPacket.ShimmerEffectOrCoinLuck(
        Lazy.make(() => Packet.ShimmerEffectOrCoinLuck.parse(payload)),
      ),
    )
  | (LoadoutSwitch, _) =>
    Ok(Packet.LazyPacket.LoadoutSwitch(Lazy.make(() => Packet.LoadoutSwitch.parse(payload))))
  | (ItemDropProtectedUpdate, _) =>
    Ok(
      Packet.LazyPacket.ItemDropProtectedUpdate(
        Lazy.make(() => Packet.ItemDropProtectedUpdate.parse(payload)),
      ),
    )
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
        parsePayload(
          packetType,
          buffer,
          fromServer,
        )->Result.map(packet => IParser.SerializeNotNecessary(packet, buffer))
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
