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
  | (WorldDataRequest, false) =>
    mapPacket(Packet.WorldDataRequest.parse(payload), a => Packet.WorldDataRequest(a))
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
  | (DoorUse, true | false) => mapPacket(Packet.DoorUse.parse(payload), a => Packet.DoorUse(a))
  | (TileSquareSend, true | false) =>
    mapPacket(Packet.TileSquareSend.parse(payload), a => Packet.TileSquareSend(a))
  | (ItemDropUpdate, true | false) =>
    mapPacket(Packet.ItemDropUpdate.parse(payload), a => Packet.ItemDropUpdate(a))
  | (ItemOwner, true | false) =>
    mapPacket(Packet.ItemOwner.parse(payload), a => Packet.ItemOwner(a))
  | (NpcUpdate, false) => Error(NpcUpdateFromClient)
  | (NpcUpdate, true) => mapPacket(Packet.NpcUpdate.parse(payload), a => Packet.NpcUpdate(a))
  | (NpcItemStrike, true | false) =>
    mapPacket(Packet.NpcItemStrike.parse(payload), a => Packet.NpcItemStrike(a))
  | (ProjectileSync, true | false) =>
    mapPacket(Packet.ProjectileSync.parse(payload), a => Packet.ProjectileSync(a))
  | (NpcStrike, true | false) =>
    mapPacket(Packet.NpcStrike.parse(payload), a => Packet.NpcStrike(a))
  | (ProjectileDestroy, true | false) =>
    mapPacket(Packet.ProjectileDestroy.parse(payload), a => Packet.ProjectileDestroy(a))
  | (PvpToggle, true | false) =>
    mapPacket(Packet.PvpToggle.parse(payload), a => Packet.PvpToggle(a))
  | (ChestOpen, true) => Error(ChestOpenFromServer)
  | (ChestOpen, false) => mapPacket(Packet.ChestOpen.parse(payload), a => Packet.ChestOpen(a))
  | (ChestItem, true | false) =>
    mapPacket(Packet.ChestItem.parse(payload), a => Packet.ChestItem(a))
  | (ActiveContainerSync, true | false) =>
    mapPacket(Packet.ActiveContainerSync.parse(payload), a => Packet.ActiveContainerSync(a))
  | (ChestPlace, true | false) =>
    mapPacket(Packet.ChestPlace.parse(payload), a => Packet.ChestPlace(a))
  | (HealEffect, true | false) =>
    mapPacket(Packet.HealEffect.parse(payload), a => Packet.HealEffect(a))
  | (Zones, true | false) => mapPacket(Packet.Zones.parse(payload), a => Packet.Zones(a))
  | (PasswordRequired, false) => Error(PasswordRequiredFromClient)
  | (PasswordRequired, true) =>
    mapPacket(Packet.PasswordRequired.parse(payload), a => Packet.PasswordRequired(a))
  | (PasswordSend, true) => Error(PasswordSendFromServer)
  | (PasswordSend, false) =>
    mapPacket(Packet.PasswordSend.parse(payload), a => Packet.PasswordSend(a))
  | (ItemOwnerRemove, false) => Error(ItemOwnerRemoveFromClient)
  | (ItemOwnerRemove, true) =>
    mapPacket(Packet.ItemOwnerRemove.parse(payload), a => Packet.ItemOwnerRemove(a))
  | (NpcTalk, true | false) => mapPacket(Packet.NpcTalk.parse(payload), a => Packet.NpcTalk(a))
  | (PlayerAnimation, true | false) =>
    mapPacket(Packet.PlayerAnimation.parse(payload), a => Packet.PlayerAnimation(a))
  | (PlayerMana, true | false) =>
    mapPacket(Packet.PlayerMana.parse(payload), a => Packet.PlayerMana(a))
  | (ManaEffect, true | false) =>
    mapPacket(Packet.ManaEffect.parse(payload), a => Packet.ManaEffect(a))
  | (PlayerTeam, true | false) =>
    mapPacket(Packet.PlayerTeam.parse(payload), a => Packet.PlayerTeam(a))
  | (SignRead, true) => Error(SignReadFromServer)
  | (SignRead, false) => mapPacket(Packet.SignRead.parse(payload), a => Packet.SignRead(a))
  | (SignNew, true | false) => mapPacket(Packet.SignNew.parse(payload), a => Packet.SignNew(a))
  | (LiquidSet, true | false) =>
    mapPacket(Packet.LiquidSet.parse(payload), a => Packet.LiquidSet(a))
  | (PlayerSpawnSelf, false) => Error(PlayerSpawnSelfFromClient)
  | (PlayerSpawnSelf, true) =>
    mapPacket(Packet.PlayerSpawnSelf.parse(payload), a => Packet.PlayerSpawnSelf(a))
  | (PlayerBuffsSet, true | false) =>
    mapPacket(Packet.PlayerBuffsSet.parse(payload), a => Packet.PlayerBuffsSet(a))
  | (NpcSpecialEffect, true | false) =>
    mapPacket(Packet.NpcSpecialEffect.parse(payload), a => Packet.NpcSpecialEffect(a))
  | (ChestOrTempleUnlock, true | false) =>
    mapPacket(Packet.ChestOrTempleUnlock.parse(payload), a => Packet.ChestOrTempleUnlock(a))
  | (NpcBuffAdd, true | false) =>
    mapPacket(Packet.NpcBuffAdd.parse(payload), a => Packet.NpcBuffAdd(a))
  | (NpcBuffUpdate, false) => Error(NpcBuffUpdateFromClient)
  | (NpcBuffUpdate, true) =>
    mapPacket(Packet.NpcBuffUpdate.parse(payload), a => Packet.NpcBuffUpdate(a))
  | (PlayerBuffAdd, true | false) =>
    mapPacket(Packet.PlayerBuffAdd.parse(payload), a => Packet.PlayerBuffAdd(a))
  | (NpcNameUpdate, true | false) =>
    mapPacket(Packet.NpcNameUpdate.parse(payload), a => Packet.NpcNameUpdate(a))
  | (GoodEvilUpdate, false) => Error(GoodEvilUpdateFromClient)
  | (GoodEvilUpdate, true) =>
    mapPacket(Packet.GoodEvilUpdate.parse(payload), a => Packet.GoodEvilUpdate(a))
  | (HarpPlay, true | false) => mapPacket(Packet.HarpPlay.parse(payload), a => Packet.HarpPlay(a))
  | (SwitchHit, true | false) =>
    mapPacket(Packet.SwitchHit.parse(payload), a => Packet.SwitchHit(a))
  | (NpcHomeUpdate, true | false) =>
    mapPacket(Packet.NpcHomeUpdate.parse(payload), a => Packet.NpcHomeUpdate(a))
  | (BossOrInvasionSpawn, true) => Error(BossOrInvasionSpawnFromServer)
  | (BossOrInvasionSpawn, false) =>
    mapPacket(Packet.BossOrInvasionSpawn.parse(payload), a => Packet.BossOrInvasionSpawn(a))
  | (PlayerDodge, true | false) =>
    mapPacket(Packet.PlayerDodge.parse(payload), a => Packet.PlayerDodge(a))
  | (TilePaint, true | false) =>
    mapPacket(Packet.TilePaint.parse(payload), a => Packet.TilePaint(a))
  | (WallPaint, true | false) =>
    mapPacket(Packet.WallPaint.parse(payload), a => Packet.WallPaint(a))
  | (Teleport, true | false) => mapPacket(Packet.Teleport.parse(payload), a => Packet.Teleport(a))
  | (PlayerHealOther, true | false) =>
    mapPacket(Packet.PlayerHealOther.parse(payload), a => Packet.PlayerHealOther(a))
  | (DimensionsUpdate, true | false) =>
    mapPacket(Packet.DimensionsUpdate.parse(payload), a => Packet.DimensionsUpdate(a))
  | (ClientUuid, true) => Error(ClientUuidFromServer)
  | (ClientUuid, false) => mapPacket(Packet.ClientUuid.parse(payload), a => Packet.ClientUuid(a))
  | (ChestName, true | false) =>
    mapPacket(Packet.ChestName.parse(payload), a => Packet.ChestName(a))
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
  | (AnglerQuest, true) => mapPacket(Packet.AnglerQuest.parse(payload), a => Packet.AnglerQuest(a))
  | (AnglerQuestComplete, true) => Error(AnglerQuestCompleteFromServer)
  | (AnglerQuestComplete, false) =>
    mapPacket(Packet.AnglerQuestComplete.parse(payload), a => Packet.AnglerQuestComplete(a))
  | (AnglerQuestsCompletedAmount, true)
  | (AnglerQuestsCompletedAmount, false) =>
    mapPacket(
      Packet.AnglerQuestsCompletedAmount.parse(payload),
      a => Packet.AnglerQuestsCompletedAmount(a),
    )
  | (TemporaryAnimationCreate, false) => Error(TemporaryAnimationCreateFromClient)
  | (TemporaryAnimationCreate, true) =>
    mapPacket(Packet.TemporaryAnimationCreate.parse(payload), a => Packet.TemporaryAnimationCreate(
      a,
    ))

  | (InvasionProgressReport, false) => Error(InvasionProgressReportFromClient)
  | (InvasionProgressReport, true) =>
    mapPacket(Packet.InvasionProgressReport.parse(payload), a => Packet.InvasionProgressReport(a))
  | (ObjectPlace, true | false) =>
    mapPacket(Packet.ObjectPlace.parse(payload), a => Packet.ObjectPlace(a))
  | (PlayerChestIndexSync, false) => Error(PlayerChestIndexSyncFromClient)
  | (PlayerChestIndexSync, true) =>
    mapPacket(Packet.PlayerChestIndexSync.parse(payload), a => Packet.PlayerChestIndexSync(a))
  | (CombatNumberCreate, false) => Error(CombatNumberCreateFromClient)
  | (CombatNumberCreate, true) =>
    mapPacket(Packet.CombatNumberCreate.parse(payload), a => Packet.CombatNumberCreate(a))
  | (NetModuleLoad, true | false) =>
    mapPacket(Packet.NetModuleLoad.parse(payload, ~fromServer), a => Packet.NetModuleLoad(a))
  | (NpcKillCount, false) => Error(NpcKillCountFromClient)
  | (NpcKillCount, true) =>
    mapPacket(Packet.NpcKillCount.parse(payload), a => Packet.NpcKillCount(a))
  | (PlayerStealth, true | false) =>
    mapPacket(Packet.PlayerStealth.parse(payload), a => Packet.PlayerStealth(a))
  | (ItemForceIntoNearestChest, true) => Error(ItemForceIntoNearestChestFromServer)
  | (ItemForceIntoNearestChest, false) =>
    mapPacket(
      Packet.ItemForceIntoNearestChest.parse(payload),
      a => Packet.ItemForceIntoNearestChest(a),
    )
  | (TileEntityUpdate, false) => Error(TileEntityUpdateFromClient)
  | (TileEntityUpdate, true) =>
    mapPacket(Packet.TileEntityUpdate.parse(payload), a => Packet.TileEntityUpdate(a))
  | (TileEntityPlace, true) => Error(TileEntityPlaceFromServer)
  | (TileEntityPlace, false) =>
    mapPacket(Packet.TileEntityPlace.parse(payload), a => Packet.TileEntityPlace(a))
  | (ItemDropModify, false) => Error(ItemDropModifyFromClient)
  | (ItemDropModify, true) =>
    mapPacket(Packet.ItemDropModify.parse(payload), a => Packet.ItemDropModify(a))
  | (ItemFramePlace, true) => Error(ItemFramePlaceFromServer)
  | (ItemFramePlace, false) =>
    mapPacket(Packet.ItemFramePlace.parse(payload), a => Packet.ItemFramePlace(a))
  | (ItemDropInstancedUpdate, true | false) =>
    mapPacket(Packet.ItemDropInstancedUpdate.parse(payload), a => Packet.ItemDropInstancedUpdate(a))
  | (EmoteBubble, false) => Error(EmoteBubbleFromClient)
  | (EmoteBubble, true) => mapPacket(Packet.EmoteBubble.parse(payload), a => Packet.EmoteBubble(a))
  | (ExtraValueSync, true | false) =>
    mapPacket(Packet.ExtraValueSync.parse(payload), a => Packet.ExtraValueSync(a))
  | (SocialHandshake, true | false) =>
    mapPacket(Packet.SocialHandshake.parse(payload), a => Packet.SocialHandshake(a))
  | (Unused, true | false) => mapPacket(Packet.Unused.parse(payload), a => Packet.Unused(a))
  | (PortalKill, true) => Error(PortalKillFromServer)
  | (PortalKill, false) => mapPacket(Packet.PortalKill.parse(payload), a => Packet.PortalKill(a))
  | (PlayerTeleportPortal, true | false) =>
    mapPacket(Packet.PlayerTeleportPortal.parse(payload), a => Packet.PlayerTeleportPortal(a))
  | (NpcKilledNotification, false) => Error(NpcKilledNotificationFromClient)
  | (NpcKilledNotification, true) =>
    mapPacket(Packet.NpcKilledNotification.parse(payload), a => Packet.NpcKilledNotification(a))
  | (EventNotification, false) => Error(EventNotificationFromClient)
  | (EventNotification, true) =>
    mapPacket(Packet.EventNotification.parse(payload), a => Packet.EventNotification(a))
  | (MinionTargetUpdate, true | false) =>
    mapPacket(Packet.MinionTargetUpdate.parse(payload), a => Packet.MinionTargetUpdate(a))
  | (NpcTeleportPortal, true | false) =>
    mapPacket(Packet.NpcTeleportPortal.parse(payload), a => Packet.NpcTeleportPortal(a))
  | (ShieldStrengthsUpdate, false) => Error(ShieldStrengthsUpdateFromClient)
  | (ShieldStrengthsUpdate, true) =>
    mapPacket(Packet.ShieldStrengthsUpdate.parse(payload), a => Packet.ShieldStrengthsUpdate(a))
  | (NebulaLevelUp, true | false) =>
    mapPacket(Packet.NebulaLevelUp.parse(payload), a => Packet.NebulaLevelUp(a))
  | (MoonLordCountdown, false) => Error(MoonLordCountdownFromClient)
  | (MoonLordCountdown, true) =>
    mapPacket(Packet.MoonLordCountdown.parse(payload), a => Packet.MoonLordCountdown(a))
  | (NpcShopItem, false) => Error(NpcShopItemFromClient)
  | (NpcShopItem, true) => mapPacket(Packet.NpcShopItem.parse(payload), a => Packet.NpcShopItem(a))
  | (GemLockToggle, true) => Error(GemLockToggleFromServer)
  | (GemLockToggle, false) =>
    mapPacket(Packet.GemLockToggle.parse(payload), a => Packet.GemLockToggle(a))
  | (SmokePoof, false) => Error(SmokePoofFromClient)
  | (SmokePoof, true) => mapPacket(Packet.SmokePoof.parse(payload), a => Packet.SmokePoof(a))
  | (ChatMessageSmart, false) => Error(ChatMessageSmartFromClient)
  | (ChatMessageSmart, true) =>
    mapPacket(Packet.ChatMessageSmart.parse(payload), a => Packet.ChatMessageSmart(a))
  | (WiredCannonShot, false) => Error(WiredCannonShotFromClient)
  | (WiredCannonShot, true) =>
    mapPacket(Packet.WiredCannonShot.parse(payload), a => Packet.WiredCannonShot(a))
  | (MassWireOperation, true) => Error(MassWireOperationFromServer)
  | (MassWireOperation, false) =>
    mapPacket(Packet.MassWireOperation.parse(payload), a => Packet.MassWireOperation(a))
  | (MassWireOperationPay, false) => Error(MassWireOperationPayFromClient)
  | (MassWireOperationPay, true) =>
    mapPacket(Packet.MassWireOperationPay.parse(payload), a => Packet.MassWireOperationPay(a))
  | (PartyToggle, true) => Error(PartyToggleFromServer)
  | (PartyToggle, false) => mapPacket(Packet.PartyToggle.parse(payload), a => Packet.PartyToggle(a))
  | (TreeGrowFx, true | false) =>
    mapPacket(Packet.TreeGrowFx.parse(payload), a => Packet.TreeGrowFx(a))
  | (CrystalInvasionStart, true) => Error(CrystalInvasionStartFromServer)
  | (CrystalInvasionStart, false) =>
    mapPacket(Packet.CrystalInvasionStart.parse(payload), a => Packet.CrystalInvasionStart(a))
  | (CrystalInvasionWipeAll, false) => Error(CrystalInvasionWipeAllFromClient)
  | (CrystalInvasionWipeAll, true) =>
    mapPacket(Packet.CrystalInvasionWipeAll.parse(payload), a => Packet.CrystalInvasionWipeAll(a))
  | (MinionAttackTargetUpdate, true | false) =>
    mapPacket(Packet.MinionAttackTargetUpdate.parse(payload), a => Packet.MinionAttackTargetUpdate(
      a,
    ))
  | (CrystalInvasionSendWaitTime, false) => Error(CrystalInvasionSendWaitTimeFromClient)
  | (CrystalInvasionSendWaitTime, true) =>
    mapPacket(
      Packet.CrystalInvasionSendWaitTime.parse(payload),
      a => Packet.CrystalInvasionSendWaitTime(a),
    )
  | (PlayerDamage, true | false) =>
    mapPacket(Packet.PlayerDamage.parse(payload), a => Packet.PlayerDamage(a))
  | (PlayerDeath, true | false) =>
    mapPacket(Packet.PlayerDeath.parse(payload), a => Packet.PlayerDeath(a))
  | (CombatTextCreate, false) => Error(CombatTextCreateFromClient)
  | (CombatTextCreate, true) =>
    mapPacket(Packet.CombatTextCreate.parse(payload), a => Packet.CombatTextCreate(a))
  | (Emoji, true) => Error(EmojiFromServer)
  | (Emoji, false) => mapPacket(Packet.Emoji.parse(payload), a => Packet.Emoji(a))
  | (TileEntityDisplayDollItemSync, true | false) =>
    mapPacket(
      Packet.TileEntityDisplayDollItemSync.parse(payload),
      a => Packet.TileEntityDisplayDollItemSync(a),
    )
  | (TileEntityInteractionRequest, true | false) =>
    mapPacket(
      Packet.TileEntityInteractionRequest.parse(payload),
      a => Packet.TileEntityInteractionRequest(a),
    )
  | (WeaponsRackTryPlacing, true) => Error(WeaponsRackTryPlacingFromServer)
  | (WeaponsRackTryPlacing, false) =>
    mapPacket(Packet.WeaponsRackTryPlacing.parse(payload), a => Packet.WeaponsRackTryPlacing(a))
  | (TileEntityHatRackItemSync, true | false) =>
    mapPacket(
      Packet.TileEntityHatRackItemSync.parse(payload),
      a => Packet.TileEntityHatRackItemSync(a),
    )
  | (TilePickingSync, true | false) =>
    mapPacket(Packet.TilePickingSync.parse(payload), a => Packet.TilePickingSync(a))
  | (RevengeMarkerSync, false) => Error(RevengeMarkerSyncFromClient)
  | (RevengeMarkerSync, true) =>
    mapPacket(Packet.RevengeMarkerSync.parse(payload), a => Packet.RevengeMarkerSync(a))
  | (RevengeMarkerRemove, false) => Error(RevengeMarkerRemoveFromClient)
  | (RevengeMarkerRemove, true) =>
    mapPacket(Packet.RevengeMarkerRemove.parse(payload), a => Packet.RevengeMarkerRemove(a))
  | (GolfBallLandInCup, true | false) =>
    mapPacket(Packet.GolfBallLandInCup.parse(payload), a => Packet.GolfBallLandInCup(a))
  | (ClientFinishConnectingToServer, false) => Error(ClientFinishConnectingToServerFromClient)
  | (ClientFinishConnectingToServer, true) =>
    mapPacket(
      Packet.ClientFinishConnectingToServer.parse(payload),
      a => Packet.ClientFinishConnectingToServer(a),
    )
  | (NpcFishOut, true) => Error(NpcFishOutFromServer)
  | (NpcFishOut, false) => mapPacket(Packet.NpcFishOut.parse(payload), a => Packet.NpcFishOut(a))
  | (NpcTamper, false) => Error(NpcTamperFromClient)
  | (NpcTamper, true) => mapPacket(Packet.NpcTamper.parse(payload), a => Packet.NpcTamper(a))
  | (LegacySoundPlay, false) => Error(LegacySoundPlayFromClient)
  | (LegacySoundPlay, true) =>
    mapPacket(Packet.LegacySoundPlay.parse(payload), a => Packet.LegacySoundPlay(a))
  | (FoodPlatterTryPlacing, true) => Error(FoodPlatterTryPlacingFromServer)
  | (FoodPlatterTryPlacing, false) =>
    mapPacket(Packet.FoodPlatterTryPlacing.parse(payload), a => Packet.FoodPlatterTryPlacing(a))
  | (PlayerLuckFactorsUpdate, true | false) =>
    mapPacket(Packet.PlayerLuckFactorsUpdate.parse(payload), a => Packet.PlayerLuckFactorsUpdate(a))
  | (PlayerDead, false) => Error(PlayerDeadFromClient)
  | (PlayerDead, true) => mapPacket(Packet.PlayerDead.parse(payload), a => Packet.PlayerDead(a))
  | (CavernMonsterTypeSync, true | false) =>
    mapPacket(Packet.CavernMonsterTypeSync.parse(payload), a => Packet.CavernMonsterTypeSync(a))
  | (NpcBuffRemovalRequest, true) => Error(NpcBuffRemovalRequestFromServer)
  | (NpcBuffRemovalRequest, false) =>
    mapPacket(Packet.NpcBuffRemovalRequest.parse(payload), a => Packet.NpcBuffRemovalRequest(a))
  | (ClientSyncedInventory, true) => Error(ClientSyncedInventoryFromServer)
  | (ClientSyncedInventory, false) =>
    mapPacket(Packet.ClientSyncedInventory.parse(payload), a => Packet.ClientSyncedInventory(a))
  | (CountsAsHostForGameplaySet, _) =>
    mapPacket(
      Packet.CountsAsHostForGameplaySet.parse(payload),
      a => Packet.CountsAsHostForGameplaySet(a),
    )
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
  | (WorldDataRequest, false) =>
    Ok(Packet.LazyPacket.WorldDataRequest(Lazy.make(() => Packet.WorldDataRequest.parse(payload))))
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
  | (DoorUse, true | false) =>
    Ok(Packet.LazyPacket.DoorUse(Lazy.make(() => Packet.DoorUse.parse(payload))))
  | (TileSquareSend, true | false) =>
    Ok(Packet.LazyPacket.TileSquareSend(Lazy.make(() => Packet.TileSquareSend.parse(payload))))
  | (ItemDropUpdate, true | false) =>
    Ok(Packet.LazyPacket.ItemDropUpdate(Lazy.make(() => Packet.ItemDropUpdate.parse(payload))))
  | (ItemOwner, true | false) =>
    Ok(Packet.LazyPacket.ItemOwner(Lazy.make(() => Packet.ItemOwner.parse(payload))))
  | (NpcUpdate, false) => Error(NpcUpdateFromClient)
  | (NpcUpdate, true) =>
    Ok(Packet.LazyPacket.NpcUpdate(Lazy.make(() => Packet.NpcUpdate.parse(payload))))
  | (NpcItemStrike, true | false) =>
    Ok(Packet.LazyPacket.NpcItemStrike(Lazy.make(() => Packet.NpcItemStrike.parse(payload))))
  | (ProjectileSync, true | false) =>
    Ok(Packet.LazyPacket.ProjectileSync(Lazy.make(() => Packet.ProjectileSync.parse(payload))))
  | (NpcStrike, true | false) =>
    Ok(Packet.LazyPacket.NpcStrike(Lazy.make(() => Packet.NpcStrike.parse(payload))))
  | (ProjectileDestroy, true | false) =>
    Ok(
      Packet.LazyPacket.ProjectileDestroy(Lazy.make(() => Packet.ProjectileDestroy.parse(payload))),
    )
  | (PvpToggle, true | false) =>
    Ok(Packet.LazyPacket.PvpToggle(Lazy.make(() => Packet.PvpToggle.parse(payload))))
  | (ChestOpen, true) => Error(ChestOpenFromServer)
  | (ChestOpen, false) =>
    Ok(Packet.LazyPacket.ChestOpen(Lazy.make(() => Packet.ChestOpen.parse(payload))))
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
  | (Zones, true | false) =>
    Ok(Packet.LazyPacket.Zones(Lazy.make(() => Packet.Zones.parse(payload))))
  | (PasswordRequired, false) => Error(PasswordRequiredFromClient)
  | (PasswordRequired, true) =>
    Ok(Packet.LazyPacket.PasswordRequired(Lazy.make(() => Packet.PasswordRequired.parse(payload))))
  | (PasswordSend, true) => Error(PasswordSendFromServer)
  | (PasswordSend, false) =>
    Ok(Packet.LazyPacket.PasswordSend(Lazy.make(() => Packet.PasswordSend.parse(payload))))
  | (ItemOwnerRemove, false) => Error(ItemOwnerRemoveFromClient)
  | (ItemOwnerRemove, true) =>
    Ok(Packet.LazyPacket.ItemOwnerRemove(Lazy.make(() => Packet.ItemOwnerRemove.parse(payload))))
  | (NpcTalk, true | false) =>
    Ok(Packet.LazyPacket.NpcTalk(Lazy.make(() => Packet.NpcTalk.parse(payload))))
  | (PlayerAnimation, true | false) =>
    Ok(Packet.LazyPacket.PlayerAnimation(Lazy.make(() => Packet.PlayerAnimation.parse(payload))))
  | (PlayerMana, true | false) =>
    Ok(Packet.LazyPacket.PlayerMana(Lazy.make(() => Packet.PlayerMana.parse(payload))))
  | (ManaEffect, true | false) =>
    Ok(Packet.LazyPacket.ManaEffect(Lazy.make(() => Packet.ManaEffect.parse(payload))))
  | (PlayerTeam, true | false) =>
    Ok(Packet.LazyPacket.PlayerTeam(Lazy.make(() => Packet.PlayerTeam.parse(payload))))
  | (SignRead, true) => Error(SignReadFromServer)
  | (SignRead, false) =>
    Ok(Packet.LazyPacket.SignRead(Lazy.make(() => Packet.SignRead.parse(payload))))
  | (SignNew, true | false) =>
    Ok(Packet.LazyPacket.SignNew(Lazy.make(() => Packet.SignNew.parse(payload))))
  | (LiquidSet, true | false) =>
    Ok(Packet.LazyPacket.LiquidSet(Lazy.make(() => Packet.LiquidSet.parse(payload))))
  | (PlayerSpawnSelf, false) => Error(PlayerSpawnSelfFromClient)
  | (PlayerSpawnSelf, true) =>
    Ok(Packet.LazyPacket.PlayerSpawnSelf(Lazy.make(() => Packet.PlayerSpawnSelf.parse(payload))))
  | (PlayerBuffsSet, true | false) =>
    Ok(Packet.LazyPacket.PlayerBuffsSet(Lazy.make(() => Packet.PlayerBuffsSet.parse(payload))))
  | (NpcSpecialEffect, true | false) =>
    Ok(Packet.LazyPacket.NpcSpecialEffect(Lazy.make(() => Packet.NpcSpecialEffect.parse(payload))))
  | (ChestOrTempleUnlock, true | false) =>
    Ok(
      Packet.LazyPacket.ChestOrTempleUnlock(
        Lazy.make(() => Packet.ChestOrTempleUnlock.parse(payload)),
      ),
    )
  | (NpcBuffAdd, true | false) =>
    Ok(Packet.LazyPacket.NpcBuffAdd(Lazy.make(() => Packet.NpcBuffAdd.parse(payload))))
  | (NpcBuffUpdate, false) => Error(NpcBuffUpdateFromClient)
  | (NpcBuffUpdate, true) =>
    Ok(Packet.LazyPacket.NpcBuffUpdate(Lazy.make(() => Packet.NpcBuffUpdate.parse(payload))))
  | (PlayerBuffAdd, true | false) =>
    Ok(Packet.LazyPacket.PlayerBuffAdd(Lazy.make(() => Packet.PlayerBuffAdd.parse(payload))))
  | (NpcNameUpdate, true | false) =>
    Ok(Packet.LazyPacket.NpcNameUpdate(Lazy.make(() => Packet.NpcNameUpdate.parse(payload))))
  | (GoodEvilUpdate, false) => Error(GoodEvilUpdateFromClient)
  | (GoodEvilUpdate, true) =>
    Ok(Packet.LazyPacket.GoodEvilUpdate(Lazy.make(() => Packet.GoodEvilUpdate.parse(payload))))
  | (HarpPlay, true | false) =>
    Ok(Packet.LazyPacket.HarpPlay(Lazy.make(() => Packet.HarpPlay.parse(payload))))
  | (SwitchHit, true | false) =>
    Ok(Packet.LazyPacket.SwitchHit(Lazy.make(() => Packet.SwitchHit.parse(payload))))
  | (NpcHomeUpdate, true | false) =>
    Ok(Packet.LazyPacket.NpcHomeUpdate(Lazy.make(() => Packet.NpcHomeUpdate.parse(payload))))
  | (BossOrInvasionSpawn, true) => Error(BossOrInvasionSpawnFromServer)
  | (BossOrInvasionSpawn, false) =>
    Ok(
      Packet.LazyPacket.BossOrInvasionSpawn(
        Lazy.make(() => Packet.BossOrInvasionSpawn.parse(payload)),
      ),
    )
  | (PlayerDodge, true | false) =>
    Ok(Packet.LazyPacket.PlayerDodge(Lazy.make(() => Packet.PlayerDodge.parse(payload))))
  | (TilePaint, true | false) =>
    Ok(Packet.LazyPacket.TilePaint(Lazy.make(() => Packet.TilePaint.parse(payload))))
  | (WallPaint, true | false) =>
    Ok(Packet.LazyPacket.WallPaint(Lazy.make(() => Packet.WallPaint.parse(payload))))
  | (Teleport, true | false) =>
    Ok(Packet.LazyPacket.Teleport(Lazy.make(() => Packet.Teleport.parse(payload))))
  | (PlayerHealOther, true | false) =>
    Ok(Packet.LazyPacket.PlayerHealOther(Lazy.make(() => Packet.PlayerHealOther.parse(payload))))
  | (DimensionsUpdate, true | false) =>
    Ok(Packet.LazyPacket.DimensionsUpdate(Lazy.make(() => Packet.DimensionsUpdate.parse(payload))))
  | (ClientUuid, true) => Error(ClientUuidFromServer)
  | (ClientUuid, false) =>
    Ok(Packet.LazyPacket.ClientUuid(Lazy.make(() => Packet.ClientUuid.parse(payload))))
  | (ChestName, true | false) =>
    Ok(Packet.LazyPacket.ChestName(Lazy.make(() => Packet.ChestName.parse(payload))))
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
  | (AnglerQuest, true) =>
    Ok(Packet.LazyPacket.AnglerQuest(Lazy.make(() => Packet.AnglerQuest.parse(payload))))
  | (AnglerQuestComplete, true) => Error(AnglerQuestCompleteFromServer)
  | (AnglerQuestComplete, false) =>
    Ok(
      Packet.LazyPacket.AnglerQuestComplete(
        Lazy.make(() => Packet.AnglerQuestComplete.parse(payload)),
      ),
    )
  | (AnglerQuestsCompletedAmount, true)
  | (AnglerQuestsCompletedAmount, false) =>
    Ok(
      Packet.LazyPacket.AnglerQuestsCompletedAmount(
        Lazy.make(() => Packet.AnglerQuestsCompletedAmount.parse(payload)),
      ),
    )
  | (TemporaryAnimationCreate, false) => Error(TemporaryAnimationCreateFromClient)
  | (TemporaryAnimationCreate, true) =>
    Ok(
      Packet.LazyPacket.TemporaryAnimationCreate(
        Lazy.make(() => Packet.TemporaryAnimationCreate.parse(payload)),
      ),
    )
  | (InvasionProgressReport, false) => Error(InvasionProgressReportFromClient)
  | (InvasionProgressReport, true) =>
    Ok(
      Packet.LazyPacket.InvasionProgressReport(
        Lazy.make(() => Packet.InvasionProgressReport.parse(payload)),
      ),
    )
  | (ObjectPlace, true | false) =>
    Ok(Packet.LazyPacket.ObjectPlace(Lazy.make(() => Packet.ObjectPlace.parse(payload))))
  | (PlayerChestIndexSync, false) => Error(PlayerChestIndexSyncFromClient)
  | (PlayerChestIndexSync, true) =>
    Ok(
      Packet.LazyPacket.PlayerChestIndexSync(
        Lazy.make(() => Packet.PlayerChestIndexSync.parse(payload)),
      ),
    )
  | (CombatNumberCreate, false) => Error(CombatNumberCreateFromClient)
  | (CombatNumberCreate, true) =>
    Ok(
      Packet.LazyPacket.CombatNumberCreate(
        Lazy.make(() => Packet.CombatNumberCreate.parse(payload)),
      ),
    )
  | (NetModuleLoad, true | false) =>
    Ok(
      Packet.LazyPacket.NetModuleLoad(
        Lazy.make(() => Packet.NetModuleLoad.parse(payload, ~fromServer)),
      ),
    )
  | (NpcKillCount, false) => Error(NpcKillCountFromClient)
  | (NpcKillCount, true) =>
    Ok(Packet.LazyPacket.NpcKillCount(Lazy.make(() => Packet.NpcKillCount.parse(payload))))
  | (PlayerStealth, true | false) =>
    Ok(Packet.LazyPacket.PlayerStealth(Lazy.make(() => Packet.PlayerStealth.parse(payload))))
  | (ItemForceIntoNearestChest, true) => Error(ItemForceIntoNearestChestFromServer)
  | (ItemForceIntoNearestChest, false) =>
    Ok(
      Packet.LazyPacket.ItemForceIntoNearestChest(
        Lazy.make(() => Packet.ItemForceIntoNearestChest.parse(payload)),
      ),
    )
  | (TileEntityUpdate, false) => Error(TileEntityUpdateFromClient)
  | (TileEntityUpdate, true) =>
    Ok(Packet.LazyPacket.TileEntityUpdate(Lazy.make(() => Packet.TileEntityUpdate.parse(payload))))
  | (TileEntityPlace, true) => Error(TileEntityPlaceFromServer)
  | (TileEntityPlace, false) =>
    Ok(Packet.LazyPacket.TileEntityPlace(Lazy.make(() => Packet.TileEntityPlace.parse(payload))))
  | (ItemDropModify, false) => Error(ItemDropModifyFromClient)
  | (ItemDropModify, true) =>
    Ok(Packet.LazyPacket.ItemDropModify(Lazy.make(() => Packet.ItemDropModify.parse(payload))))
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
  | (EmoteBubble, true) =>
    Ok(Packet.LazyPacket.EmoteBubble(Lazy.make(() => Packet.EmoteBubble.parse(payload))))
  | (ExtraValueSync, true | false) =>
    Ok(Packet.LazyPacket.ExtraValueSync(Lazy.make(() => Packet.ExtraValueSync.parse(payload))))
  | (SocialHandshake, true | false) =>
    Ok(Packet.LazyPacket.SocialHandshake(Lazy.make(() => Packet.SocialHandshake.parse(payload))))
  | (Unused, true | false) =>
    Ok(Packet.LazyPacket.Unused(Lazy.make(() => Packet.Unused.parse(payload))))
  | (PortalKill, true) => Error(PortalKillFromServer)
  | (PortalKill, false) =>
    Ok(Packet.LazyPacket.PortalKill(Lazy.make(() => Packet.PortalKill.parse(payload))))
  | (PlayerTeleportPortal, true | false) =>
    Ok(
      Packet.LazyPacket.PlayerTeleportPortal(
        Lazy.make(() => Packet.PlayerTeleportPortal.parse(payload)),
      ),
    )
  | (NpcKilledNotification, false) => Error(NpcKilledNotificationFromClient)
  | (NpcKilledNotification, true) =>
    Ok(
      Packet.LazyPacket.NpcKilledNotification(
        Lazy.make(() => Packet.NpcKilledNotification.parse(payload)),
      ),
    )
  | (EventNotification, false) => Error(EventNotificationFromClient)
  | (EventNotification, true) =>
    Ok(
      Packet.LazyPacket.EventNotification(Lazy.make(() => Packet.EventNotification.parse(payload))),
    )
  | (MinionTargetUpdate, true | false) =>
    Ok(
      Packet.LazyPacket.MinionTargetUpdate(
        Lazy.make(() => Packet.MinionTargetUpdate.parse(payload)),
      ),
    )
  | (NpcTeleportPortal, true | false) =>
    Ok(
      Packet.LazyPacket.NpcTeleportPortal(Lazy.make(() => Packet.NpcTeleportPortal.parse(payload))),
    )
  | (ShieldStrengthsUpdate, false) => Error(ShieldStrengthsUpdateFromClient)
  | (ShieldStrengthsUpdate, true) =>
    Ok(
      Packet.LazyPacket.ShieldStrengthsUpdate(
        Lazy.make(() => Packet.ShieldStrengthsUpdate.parse(payload)),
      ),
    )
  | (NebulaLevelUp, true | false) =>
    Ok(Packet.LazyPacket.NebulaLevelUp(Lazy.make(() => Packet.NebulaLevelUp.parse(payload))))
  | (MoonLordCountdown, false) => Error(MoonLordCountdownFromClient)
  | (MoonLordCountdown, true) =>
    Ok(
      Packet.LazyPacket.MoonLordCountdown(Lazy.make(() => Packet.MoonLordCountdown.parse(payload))),
    )
  | (NpcShopItem, false) => Error(NpcShopItemFromClient)
  | (NpcShopItem, true) =>
    Ok(Packet.LazyPacket.NpcShopItem(Lazy.make(() => Packet.NpcShopItem.parse(payload))))
  | (GemLockToggle, true) => Error(GemLockToggleFromServer)
  | (GemLockToggle, false) =>
    Ok(Packet.LazyPacket.GemLockToggle(Lazy.make(() => Packet.GemLockToggle.parse(payload))))
  | (SmokePoof, false) => Error(SmokePoofFromClient)
  | (SmokePoof, true) =>
    Ok(Packet.LazyPacket.SmokePoof(Lazy.make(() => Packet.SmokePoof.parse(payload))))
  | (ChatMessageSmart, false) => Error(ChatMessageSmartFromClient)
  | (ChatMessageSmart, true) =>
    Ok(Packet.LazyPacket.ChatMessageSmart(Lazy.make(() => Packet.ChatMessageSmart.parse(payload))))
  | (WiredCannonShot, false) => Error(WiredCannonShotFromClient)
  | (WiredCannonShot, true) =>
    Ok(Packet.LazyPacket.WiredCannonShot(Lazy.make(() => Packet.WiredCannonShot.parse(payload))))
  | (MassWireOperation, true) => Error(MassWireOperationFromServer)
  | (MassWireOperation, false) =>
    Ok(
      Packet.LazyPacket.MassWireOperation(Lazy.make(() => Packet.MassWireOperation.parse(payload))),
    )
  | (MassWireOperationPay, false) => Error(MassWireOperationPayFromClient)
  | (MassWireOperationPay, true) =>
    Ok(
      Packet.LazyPacket.MassWireOperationPay(
        Lazy.make(() => Packet.MassWireOperationPay.parse(payload)),
      ),
    )
  | (PartyToggle, true) => Error(PartyToggleFromServer)
  | (PartyToggle, false) =>
    Ok(Packet.LazyPacket.PartyToggle(Lazy.make(() => Packet.PartyToggle.parse(payload))))
  | (TreeGrowFx, true | false) =>
    Ok(Packet.LazyPacket.TreeGrowFx(Lazy.make(() => Packet.TreeGrowFx.parse(payload))))
  | (CrystalInvasionStart, true) => Error(CrystalInvasionStartFromServer)
  | (CrystalInvasionStart, false) =>
    Ok(
      Packet.LazyPacket.CrystalInvasionStart(
        Lazy.make(() => Packet.CrystalInvasionStart.parse(payload)),
      ),
    )
  | (CrystalInvasionWipeAll, false) => Error(CrystalInvasionWipeAllFromClient)
  | (CrystalInvasionWipeAll, true) =>
    Ok(
      Packet.LazyPacket.CrystalInvasionWipeAll(
        Lazy.make(() => Packet.CrystalInvasionWipeAll.parse(payload)),
      ),
    )
  | (MinionAttackTargetUpdate, true | false) =>
    Ok(
      Packet.LazyPacket.MinionAttackTargetUpdate(
        Lazy.make(() => Packet.MinionAttackTargetUpdate.parse(payload)),
      ),
    )
  | (CrystalInvasionSendWaitTime, false) => Error(CrystalInvasionSendWaitTimeFromClient)
  | (CrystalInvasionSendWaitTime, true) =>
    Ok(
      Packet.LazyPacket.CrystalInvasionSendWaitTime(
        Lazy.make(() => Packet.CrystalInvasionSendWaitTime.parse(payload)),
      ),
    )
  | (PlayerDamage, true | false) =>
    Ok(Packet.LazyPacket.PlayerDamage(Lazy.make(() => Packet.PlayerDamage.parse(payload))))
  | (PlayerDeath, true | false) =>
    Ok(Packet.LazyPacket.PlayerDeath(Lazy.make(() => Packet.PlayerDeath.parse(payload))))
  | (CombatTextCreate, false) => Error(CombatTextCreateFromClient)
  | (CombatTextCreate, true) =>
    Ok(Packet.LazyPacket.CombatTextCreate(Lazy.make(() => Packet.CombatTextCreate.parse(payload))))
  | (Emoji, true) => Error(EmojiFromServer)
  | (Emoji, false) => Ok(Packet.LazyPacket.Emoji(Lazy.make(() => Packet.Emoji.parse(payload))))
  | (TileEntityDisplayDollItemSync, true | false) =>
    Ok(
      Packet.LazyPacket.TileEntityDisplayDollItemSync(
        Lazy.make(() => Packet.TileEntityDisplayDollItemSync.parse(payload)),
      ),
    )
  | (TileEntityInteractionRequest, true | false) =>
    Ok(
      Packet.LazyPacket.TileEntityInteractionRequest(
        Lazy.make(() => Packet.TileEntityInteractionRequest.parse(payload)),
      ),
    )
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
  | (TilePickingSync, true | false) =>
    Ok(Packet.LazyPacket.TilePickingSync(Lazy.make(() => Packet.TilePickingSync.parse(payload))))
  | (RevengeMarkerSync, false) => Error(RevengeMarkerSyncFromClient)
  | (RevengeMarkerSync, true) =>
    Ok(
      Packet.LazyPacket.RevengeMarkerSync(Lazy.make(() => Packet.RevengeMarkerSync.parse(payload))),
    )
  | (RevengeMarkerRemove, false) => Error(RevengeMarkerRemoveFromClient)
  | (RevengeMarkerRemove, true) =>
    Ok(
      Packet.LazyPacket.RevengeMarkerRemove(
        Lazy.make(() => Packet.RevengeMarkerRemove.parse(payload)),
      ),
    )
  | (GolfBallLandInCup, true | false) =>
    Ok(
      Packet.LazyPacket.GolfBallLandInCup(Lazy.make(() => Packet.GolfBallLandInCup.parse(payload))),
    )
  | (ClientFinishConnectingToServer, false) => Error(ClientFinishConnectingToServerFromClient)
  | (ClientFinishConnectingToServer, true) =>
    Ok(
      Packet.LazyPacket.ClientFinishConnectingToServer(
        Lazy.make(() => Packet.ClientFinishConnectingToServer.parse(payload)),
      ),
    )
  | (NpcFishOut, true) => Error(NpcFishOutFromServer)
  | (NpcFishOut, false) =>
    Ok(Packet.LazyPacket.NpcFishOut(Lazy.make(() => Packet.NpcFishOut.parse(payload))))
  | (NpcTamper, false) => Error(NpcTamperFromClient)
  | (NpcTamper, true) =>
    Ok(Packet.LazyPacket.NpcTamper(Lazy.make(() => Packet.NpcTamper.parse(payload))))
  | (LegacySoundPlay, false) => Error(LegacySoundPlayFromClient)
  | (LegacySoundPlay, true) =>
    Ok(Packet.LazyPacket.LegacySoundPlay(Lazy.make(() => Packet.LegacySoundPlay.parse(payload))))
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
  | (PlayerDead, true) =>
    Ok(Packet.LazyPacket.PlayerDead(Lazy.make(() => Packet.PlayerDead.parse(payload))))
  | (CavernMonsterTypeSync, true | false) =>
    Ok(
      Packet.LazyPacket.CavernMonsterTypeSync(
        Lazy.make(() => Packet.CavernMonsterTypeSync.parse(payload)),
      ),
    )
  | (NpcBuffRemovalRequest, true) => Error(NpcBuffRemovalRequestFromServer)
  | (NpcBuffRemovalRequest, false) =>
    Ok(
      Packet.LazyPacket.NpcBuffRemovalRequest(
        Lazy.make(() => Packet.NpcBuffRemovalRequest.parse(payload)),
      ),
    )
  | (ClientSyncedInventory, true) => Error(ClientSyncedInventoryFromServer)
  | (ClientSyncedInventory, false) =>
    Ok(
      Packet.LazyPacket.ClientSyncedInventory(
        Lazy.make(() => Packet.ClientSyncedInventory.parse(payload)),
      ),
    )
  | (CountsAsHostForGameplaySet, _) =>
    Ok(
      Packet.LazyPacket.CountsAsHostForGameplaySet(
        Lazy.make(() => Packet.CountsAsHostForGameplaySet.parse(payload)),
      ),
    )
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
