let mapPacket = (packetResult, fn) => packetResult->Result.map(fn)->Result.map(Some)

let parsePayload = (
  packetType: PacketType.t,
  payload: NodeJs.Buffer.t,
  fromServer: bool,
): result<option<Packetv1405.t>, ErrorAwarePacketReader.readError> =>
  switch (packetType, fromServer) {
  | (ConnectRequest, true) => Ok(None)
  | (ConnectRequest, false) =>
    Packetv1405.ConnectRequest.parse(payload)->mapPacket(a => Packetv1405.ConnectRequest(a))
  | (Disconnect, false) => Ok(None)
  | (Disconnect, true) =>
    Packetv1405.Disconnect.parse(payload)->mapPacket(a => Packetv1405.Disconnect(a))
  | (PlayerSlotSet, false) => Ok(None)
  | (PlayerSlotSet, true) =>
    Packetv1405.PlayerSlotSet.parse(payload)->mapPacket(a => Packetv1405.PlayerSlotSet(a))
  | (PlayerInfo, true | false) =>
    Packetv1405.PlayerInfo.parse(payload)->mapPacket(a => Packetv1405.PlayerInfo(a))
  | (PlayerInventorySlot, true | false) =>
    Packetv1405.PlayerInventorySlot.parse(
      payload,
    )->mapPacket(a => Packetv1405.PlayerInventorySlot(a))
  | (WorldDataRequest, true) => Ok(None)
  | (WorldDataRequest, false) =>
    Packetv1405.WorldDataRequest.parse(payload)->mapPacket(a => Packetv1405.WorldDataRequest(
      a,
    ))
  | (WorldInfo, false) => Ok(None)
  | (WorldInfo, true) =>
    Packetv1405.WorldInfo.parse(payload)->mapPacket(a => Packetv1405.WorldInfo(a))
  | (InitialTileSectionsRequest, true) => Ok(None)
  | (InitialTileSectionsRequest, false) =>
    Packetv1405.InitialTileSectionsRequest.parse(
      payload,
    )->mapPacket(a => Packetv1405.InitialTileSectionsRequest(a))
  | (Status, false) => Ok(None)
  | (Status, true) => Packetv1405.Status.parse(payload)->mapPacket(a => Packetv1405.Status(a))
  | (TileSectionSend, false) => Ok(None)
  | (TileSectionSend, true) =>
    Packetv1405.TileSectionSend.parse(payload)->mapPacket(a => Packetv1405.TileSectionSend(a))
  | (TileSectionFrame, false) => Ok(None)
  | (TileSectionFrame, true) =>
    Packetv1405.TileSectionFrame.parse(payload)->mapPacket(a => Packetv1405.TileSectionFrame(
      a,
    ))
  | (PlayerSpawn, true | false) =>
    Packetv1405.PlayerSpawn.parse(payload)->mapPacket(a => Packetv1405.PlayerSpawn(a))
  | (PlayerUpdate, true | false) =>
    Packetv1405.PlayerUpdate.parse(payload)->mapPacket(a => Packetv1405.PlayerUpdate(a))
  | (PlayerActive, false) => Ok(None)
  | (PlayerActive, true) =>
    Packetv1405.PlayerActive.parse(payload)->mapPacket(a => Packetv1405.PlayerActive(a))
  | (PlayerHealth, true | false) =>
    Packetv1405.PlayerHealth.parse(payload)->mapPacket(a => Packetv1405.PlayerHealth(a))
  | (TileModify, true | false) =>
    Packetv1405.TileModify.parse(payload)->mapPacket(a => Packetv1405.TileModify(a))
  | (TimeSet, false) => Ok(None)
  | (TimeSet, true) =>
    Packetv1405.TimeSet.parse(payload)->mapPacket(a => Packetv1405.TimeSet(a))
  | (DoorUse, true | false) =>
    Packetv1405.DoorUse.parse(payload)->mapPacket(a => Packetv1405.DoorUse(a))
  | (TileSquareSend, true | false) =>
    Packetv1405.TileSquareSend.parse(payload)->mapPacket(a => Packetv1405.TileSquareSend(a))
  | (ItemDropUpdate, true | false) =>
    Packetv1405.ItemDropUpdate.parse(payload)->mapPacket(a => Packetv1405.ItemDropUpdate(a))
  | (ItemOwner, true | false) =>
    Packetv1405.ItemOwner.parse(payload)->mapPacket(a => Packetv1405.ItemOwner(a))
  | (NpcUpdate, false) => Ok(None)
  | (NpcUpdate, true) =>
    Packetv1405.NpcUpdate.parse(payload)->mapPacket(a => Packetv1405.NpcUpdate(a))
  | (NpcItemStrike, true | false) =>
    Packetv1405.NpcItemStrike.parse(payload)->mapPacket(a => Packetv1405.NpcItemStrike(a))
  | (ProjectileSync, true | false) =>
    Packetv1405.ProjectileSync.parse(payload)->mapPacket(a => Packetv1405.ProjectileSync(a))
  | (NpcStrike, true | false) =>
    Packetv1405.NpcStrike.parse(payload)->mapPacket(a => Packetv1405.NpcStrike(a))
  | (ProjectileDestroy, true | false) =>
    Packetv1405.ProjectileDestroy.parse(
      payload,
    )->mapPacket(a => Packetv1405.ProjectileDestroy(a))
  | (PvpToggle, true | false) =>
    Packetv1405.PvpToggle.parse(payload)->mapPacket(a => Packetv1405.PvpToggle(a))
  | (ChestOpen, true) => Ok(None)
  | (ChestOpen, false) =>
    Packetv1405.ChestOpen.parse(payload)->mapPacket(a => Packetv1405.ChestOpen(a))
  | (ChestItem, true | false) =>
    Packetv1405.ChestItem.parse(payload)->mapPacket(a => Packetv1405.ChestItem(a))
  | (ActiveContainerSync, true | false) =>
    Packetv1405.ActiveContainerSync.parse(
      payload,
    )->mapPacket(a => Packetv1405.ActiveContainerSync(a))
  | (ChestPlace, true | false) =>
    Packetv1405.ChestPlace.parse(payload)->mapPacket(a => Packetv1405.ChestPlace(a))
  | (HealEffect, true | false) =>
    Packetv1405.HealEffect.parse(payload)->mapPacket(a => Packetv1405.HealEffect(a))
  | (Zones, true | false) =>
    Packetv1405.Zones.parse(payload)->mapPacket(a => Packetv1405.Zones(a))
  | (PasswordRequired, false) => Ok(None)
  | (PasswordRequired, true) =>
    Packetv1405.PasswordRequired.parse(payload)->mapPacket(a => Packetv1405.PasswordRequired(
      a,
    ))
  | (PasswordSend, true) => Ok(None)
  | (PasswordSend, false) =>
    Packetv1405.PasswordSend.parse(payload)->mapPacket(a => Packetv1405.PasswordSend(a))
  | (ItemOwnerRemove, false) => Ok(None)
  | (ItemOwnerRemove, true) =>
    Packetv1405.ItemOwnerRemove.parse(payload)->mapPacket(a => Packetv1405.ItemOwnerRemove(a))
  | (NpcTalk, true | false) =>
    Packetv1405.NpcTalk.parse(payload)->mapPacket(a => Packetv1405.NpcTalk(a))
  | (PlayerAnimation, true | false) =>
    Packetv1405.PlayerAnimation.parse(payload)->mapPacket(a => Packetv1405.PlayerAnimation(a))
  | (PlayerMana, true | false) =>
    Packetv1405.PlayerMana.parse(payload)->mapPacket(a => Packetv1405.PlayerMana(a))
  | (ManaEffect, true | false) =>
    Packetv1405.ManaEffect.parse(payload)->mapPacket(a => Packetv1405.ManaEffect(a))
  | (PlayerTeam, true | false) =>
    Packetv1405.PlayerTeam.parse(payload)->mapPacket(a => Packetv1405.PlayerTeam(a))
  | (SignRead, true) => Ok(None)
  | (SignRead, false) =>
    Packetv1405.SignRead.parse(payload)->mapPacket(a => Packetv1405.SignRead(a))
  | (SignNew, true | false) =>
    Packetv1405.SignNew.parse(payload)->mapPacket(a => Packetv1405.SignNew(a))
  | (LiquidSet, true | false) =>
    Packetv1405.LiquidSet.parse(payload)->mapPacket(a => Packetv1405.LiquidSet(a))
  | (PlayerSpawnSelf, false) => Ok(None)
  | (PlayerSpawnSelf, true) =>
    Packetv1405.PlayerSpawnSelf.parse(payload)->mapPacket(a => Packetv1405.PlayerSpawnSelf(a))
  | (PlayerBuffsSet, true | false) =>
    Packetv1405.PlayerBuffsSet.parse(payload)->mapPacket(a => Packetv1405.PlayerBuffsSet(a))
  | (NpcSpecialEffect, true | false) =>
    Packetv1405.NpcSpecialEffect.parse(payload)->mapPacket(a => Packetv1405.NpcSpecialEffect(
      a,
    ))
  | (ChestOrTempleUnlock, true | false) =>
    Packetv1405.ChestOrTempleUnlock.parse(
      payload,
    )->mapPacket(a => Packetv1405.ChestOrTempleUnlock(a))
  | (NpcBuffAdd, true | false) =>
    Packetv1405.NpcBuffAdd.parse(payload)->mapPacket(a => Packetv1405.NpcBuffAdd(a))
  | (NpcBuffUpdate, false) => Ok(None)
  | (NpcBuffUpdate, true) =>
    Packetv1405.NpcBuffUpdate.parse(payload)->mapPacket(a => Packetv1405.NpcBuffUpdate(a))
  | (PlayerBuffAdd, true | false) =>
    Packetv1405.PlayerBuffAdd.parse(payload)->mapPacket(a => Packetv1405.PlayerBuffAdd(a))
  | (NpcNameUpdate, true | false) =>
    Packetv1405.NpcNameUpdate.parse(payload)->mapPacket(a => Packetv1405.NpcNameUpdate(a))
  | (GoodEvilUpdate, false) => Ok(None)
  | (GoodEvilUpdate, true) =>
    Packetv1405.GoodEvilUpdate.parse(payload)->mapPacket(a => Packetv1405.GoodEvilUpdate(a))
  | (HarpPlay, true | false) =>
    Packetv1405.HarpPlay.parse(payload)->mapPacket(a => Packetv1405.HarpPlay(a))
  | (SwitchHit, true | false) =>
    Packetv1405.SwitchHit.parse(payload)->mapPacket(a => Packetv1405.SwitchHit(a))
  | (NpcHomeUpdate, true | false) =>
    Packetv1405.NpcHomeUpdate.parse(payload)->mapPacket(a => Packetv1405.NpcHomeUpdate(a))
  | (BossOrInvasionSpawn, true) => Ok(None)
  | (BossOrInvasionSpawn, false) =>
    Packetv1405.BossOrInvasionSpawn.parse(
      payload,
    )->mapPacket(a => Packetv1405.BossOrInvasionSpawn(a))
  | (PlayerDodge, true | false) =>
    Packetv1405.PlayerDodge.parse(payload)->mapPacket(a => Packetv1405.PlayerDodge(a))
  | (TilePaint, true | false) =>
    Packetv1405.TilePaint.parse(payload)->mapPacket(a => Packetv1405.TilePaint(a))
  | (WallPaint, true | false) =>
    Packetv1405.WallPaint.parse(payload)->mapPacket(a => Packetv1405.WallPaint(a))
  | (Teleport, true | false) =>
    Packetv1405.Teleport.parse(payload)->mapPacket(a => Packetv1405.Teleport(a))
  | (PlayerHealOther, true | false) =>
    Packetv1405.PlayerHealOther.parse(payload)->mapPacket(a => Packetv1405.PlayerHealOther(a))
  | (DimensionsUpdate, true | false) =>
    Packetv1405.DimensionsUpdate.parse(payload)->mapPacket(a => Packetv1405.DimensionsUpdate(
      a,
    ))
  | (ClientUuid, true) => Ok(None)
  | (ClientUuid, false) =>
    Packetv1405.ClientUuid.parse(payload)->mapPacket(a => Packetv1405.ClientUuid(a))
  | (ChestName, true | false) =>
    Packetv1405.ChestName.parse(payload)->mapPacket(a => Packetv1405.ChestName(a))
  | (NpcCatch, true) => Ok(None)
  | (NpcCatch, false) =>
    Packetv1405.NpcCatch.parse(payload)->mapPacket(a => Packetv1405.NpcCatch(a))
  | (NpcRelease, true) => Ok(None)
  | (NpcRelease, false) =>
    Packetv1405.NpcRelease.parse(payload)->mapPacket(a => Packetv1405.NpcRelease(a))
  | (TravellingMerchantInventory, false) => Ok(None)
  | (TravellingMerchantInventory, true) =>
    Packetv1405.TravellingMerchantInventory.parse(
      payload,
    )->mapPacket(a => Packetv1405.TravellingMerchantInventory(a))
  | (TeleportationPotion, true | false) =>
    Packetv1405.TeleportationPotion.parse(
      payload,
    )->mapPacket(a => Packetv1405.TeleportationPotion(a))
  | (AnglerQuest, false) => Ok(None)
  | (AnglerQuest, true) =>
    Packetv1405.AnglerQuest.parse(payload)->mapPacket(a => Packetv1405.AnglerQuest(a))
  | (AnglerQuestComplete, true) => Ok(None)
  | (AnglerQuestComplete, false) =>
    Packetv1405.AnglerQuestComplete.parse(
      payload,
    )->mapPacket(a => Packetv1405.AnglerQuestComplete(a))
  | (AnglerQuestsCompletedAmount, true)
  | (AnglerQuestsCompletedAmount, false) =>
    Packetv1405.AnglerQuestsCompletedAmount.parse(
      payload,
    )->mapPacket(a => Packetv1405.AnglerQuestsCompletedAmount(a))
  | (TemporaryAnimationCreate, false) => Ok(None)
  | (TemporaryAnimationCreate, true) =>
    Packetv1405.TemporaryAnimationCreate.parse(
      payload,
    )->mapPacket(a => Packetv1405.TemporaryAnimationCreate(a))
  | (InvasionProgressReport, false) => Ok(None)
  | (InvasionProgressReport, true) =>
    Packetv1405.InvasionProgressReport.parse(
      payload,
    )->mapPacket(a => Packetv1405.InvasionProgressReport(a))
  | (ObjectPlace, true | false) =>
    Packetv1405.ObjectPlace.parse(payload)->mapPacket(a => Packetv1405.ObjectPlace(a))
  | (PlayerChestIndexSync, false) => Ok(None)
  | (PlayerChestIndexSync, true) =>
    Packetv1405.PlayerChestIndexSync.parse(
      payload,
    )->mapPacket(a => Packetv1405.PlayerChestIndexSync(a))
  | (CombatNumberCreate, false) => Ok(None)
  | (CombatNumberCreate, true) =>
    Packetv1405.CombatNumberCreate.parse(
      payload,
    )->mapPacket(a => Packetv1405.CombatNumberCreate(a))
  | (NetModuleLoad, true | false) =>
    Packetv1405.NetModuleLoad.parse(
      payload,
      ~fromServer,
    )->mapPacket(a => Packetv1405.NetModuleLoad(a))
  | (NpcKillCount, false) => Ok(None)
  | (NpcKillCount, true) =>
    Packetv1405.NpcKillCount.parse(payload)->mapPacket(a => Packetv1405.NpcKillCount(a))
  | (PlayerStealth, true | false) =>
    Packetv1405.PlayerStealth.parse(payload)->mapPacket(a => Packetv1405.PlayerStealth(a))
  | (ItemForceIntoNearestChest, true) => Ok(None)
  | (ItemForceIntoNearestChest, false) =>
    Packetv1405.ItemForceIntoNearestChest.parse(
      payload,
    )->mapPacket(a => Packetv1405.ItemForceIntoNearestChest(a))
  | (TileEntityUpdate, false) => Ok(None)
  | (TileEntityUpdate, true) =>
    Packetv1405.TileEntityUpdate.parse(payload)->mapPacket(a => Packetv1405.TileEntityUpdate(
      a,
    ))
  | (TileEntityPlace, true) => Ok(None)
  | (TileEntityPlace, false) =>
    Packetv1405.TileEntityPlace.parse(payload)->mapPacket(a => Packetv1405.TileEntityPlace(a))
  | (ItemDropModify, false) => Ok(None)
  | (ItemDropModify, true) =>
    Packetv1405.ItemDropModify.parse(payload)->mapPacket(a => Packetv1405.ItemDropModify(a))
  | (ItemFramePlace, true) => Ok(None)
  | (ItemFramePlace, false) =>
    Packetv1405.ItemFramePlace.parse(payload)->mapPacket(a => Packetv1405.ItemFramePlace(a))
  | (ItemDropInstancedUpdate, true | false) =>
    Packetv1405.ItemDropInstancedUpdate.parse(
      payload,
    )->mapPacket(a => Packetv1405.ItemDropInstancedUpdate(a))
  | (EmoteBubble, false) => Ok(None)
  | (EmoteBubble, true) =>
    Packetv1405.EmoteBubble.parse(payload)->mapPacket(a => Packetv1405.EmoteBubble(a))
  | (ExtraValueSync, true | false) =>
    Packetv1405.ExtraValueSync.parse(payload)->mapPacket(a => Packetv1405.ExtraValueSync(a))
  | (SocialHandshake, true | false) =>
    Packetv1405.SocialHandshake.parse(payload)->mapPacket(a => Packetv1405.SocialHandshake(a))
  | (Unused, true | false) =>
    Packetv1405.Unused.parse(payload)->mapPacket(a => Packetv1405.Unused(a))
  | (PortalKill, true) => Ok(None)
  | (PortalKill, false) =>
    Packetv1405.PortalKill.parse(payload)->mapPacket(a => Packetv1405.PortalKill(a))
  | (PlayerTeleportPortal, true | false) =>
    Packetv1405.PlayerTeleportPortal.parse(
      payload,
    )->mapPacket(a => Packetv1405.PlayerTeleportPortal(a))
  | (NpcKilledNotification, false) => Ok(None)
  | (NpcKilledNotification, true) =>
    Packetv1405.NpcKilledNotification.parse(
      payload,
    )->mapPacket(a => Packetv1405.NpcKilledNotification(a))
  | (EventNotification, false) => Ok(None)
  | (EventNotification, true) =>
    Packetv1405.EventNotification.parse(
      payload,
    )->mapPacket(a => Packetv1405.EventNotification(a))
  | (MinionTargetUpdate, true | false) =>
    Packetv1405.MinionTargetUpdate.parse(
      payload,
    )->mapPacket(a => Packetv1405.MinionTargetUpdate(a))
  | (NpcTeleportPortal, true | false) =>
    Packetv1405.NpcTeleportPortal.parse(
      payload,
    )->mapPacket(a => Packetv1405.NpcTeleportPortal(a))
  | (ShieldStrengthsUpdate, false) => Ok(None)
  | (ShieldStrengthsUpdate, true) =>
    Packetv1405.ShieldStrengthsUpdate.parse(
      payload,
    )->mapPacket(a => Packetv1405.ShieldStrengthsUpdate(a))
  | (NebulaLevelUp, true | false) =>
    Packetv1405.NebulaLevelUp.parse(payload)->mapPacket(a => Packetv1405.NebulaLevelUp(a))
  | (MoonLordCountdown, false) => Ok(None)
  | (MoonLordCountdown, true) =>
    Packetv1405.MoonLordCountdown.parse(
      payload,
    )->mapPacket(a => Packetv1405.MoonLordCountdown(a))
  | (NpcShopItem, false) => Ok(None)
  | (NpcShopItem, true) =>
    Packetv1405.NpcShopItem.parse(payload)->mapPacket(a => Packetv1405.NpcShopItem(a))
  | (GemLockToggle, true) => Ok(None)
  | (GemLockToggle, false) =>
    Packetv1405.GemLockToggle.parse(payload)->mapPacket(a => Packetv1405.GemLockToggle(a))
  | (SmokePoof, false) => Ok(None)
  | (SmokePoof, true) =>
    Packetv1405.SmokePoof.parse(payload)->mapPacket(a => Packetv1405.SmokePoof(a))
  | (ChatMessageSmart, false) => Ok(None)
  | (ChatMessageSmart, true) =>
    Packetv1405.ChatMessageSmart.parse(payload)->mapPacket(a => Packetv1405.ChatMessageSmart(
      a,
    ))
  | (WiredCannonShot, false) => Ok(None)
  | (WiredCannonShot, true) =>
    Packetv1405.WiredCannonShot.parse(payload)->mapPacket(a => Packetv1405.WiredCannonShot(a))
  | (MassWireOperation, true) => Ok(None)
  | (MassWireOperation, false) =>
    Packetv1405.MassWireOperation.parse(
      payload,
    )->mapPacket(a => Packetv1405.MassWireOperation(a))
  | (MassWireOperationPay, false) => Ok(None)
  | (MassWireOperationPay, true) =>
    Packetv1405.MassWireOperationPay.parse(
      payload,
    )->mapPacket(a => Packetv1405.MassWireOperationPay(a))
  | (PartyToggle, true) => Ok(None)
  | (PartyToggle, false) =>
    Packetv1405.PartyToggle.parse(payload)->mapPacket(a => Packetv1405.PartyToggle(a))
  | (TreeGrowFx, true | false) =>
    Packetv1405.TreeGrowFx.parse(payload)->mapPacket(a => Packetv1405.TreeGrowFx(a))
  | (CrystalInvasionStart, true) => Ok(None)
  | (CrystalInvasionStart, false) =>
    Packetv1405.CrystalInvasionStart.parse(
      payload,
    )->mapPacket(a => Packetv1405.CrystalInvasionStart(a))
  | (CrystalInvasionWipeAll, false) => Ok(None)
  | (CrystalInvasionWipeAll, true) =>
    Packetv1405.CrystalInvasionWipeAll.parse(
      payload,
    )->mapPacket(a => Packetv1405.CrystalInvasionWipeAll(a))
  | (MinionAttackTargetUpdate, true | false) =>
    Packetv1405.MinionAttackTargetUpdate.parse(
      payload,
    )->mapPacket(a => Packetv1405.MinionAttackTargetUpdate(a))
  | (CrystalInvasionSendWaitTime, false) => Ok(None)
  | (CrystalInvasionSendWaitTime, true) =>
    Packetv1405.CrystalInvasionSendWaitTime.parse(
      payload,
    )->mapPacket(a => Packetv1405.CrystalInvasionSendWaitTime(a))
  | (PlayerDamage, true | false) =>
    Packetv1405.PlayerDamage.parse(payload)->mapPacket(a => Packetv1405.PlayerDamage(a))
  | (PlayerDeath, true | false) =>
    Packetv1405.PlayerDeath.parse(payload)->mapPacket(a => Packetv1405.PlayerDeath(a))
  | (CombatTextCreate, false) => Ok(None)
  | (CombatTextCreate, true) =>
    Packetv1405.CombatTextCreate.parse(payload)->mapPacket(a => Packetv1405.CombatTextCreate(
      a,
    ))
  | (Emoji, true) => Ok(None)
  | (Emoji, false) => Packetv1405.Emoji.parse(payload)->mapPacket(a => Packetv1405.Emoji(a))
  | (TileEntityDisplayDollItemSync, true | false) =>
    Packetv1405.TileEntityDisplayDollItemSync.parse(
      payload,
    )->mapPacket(a => Packetv1405.TileEntityDisplayDollItemSync(a))
  | (TileEntityInteractionRequest, true | false) =>
    Packetv1405.TileEntityInteractionRequest.parse(
      payload,
    )->mapPacket(a => Packetv1405.TileEntityInteractionRequest(a))
  | (WeaponsRackTryPlacing, true) => Ok(None)
  | (WeaponsRackTryPlacing, false) =>
    Packetv1405.WeaponsRackTryPlacing.parse(
      payload,
    )->mapPacket(a => Packetv1405.WeaponsRackTryPlacing(a))
  | (TileEntityHatRackItemSync, true | false) =>
    Packetv1405.TileEntityHatRackItemSync.parse(
      payload,
    )->mapPacket(a => Packetv1405.TileEntityHatRackItemSync(a))
  | (TilePickingSync, true | false) =>
    Packetv1405.TilePickingSync.parse(payload)->mapPacket(a => Packetv1405.TilePickingSync(a))
  | (RevengeMarkerSync, false) => Ok(None)
  | (RevengeMarkerSync, true) =>
    Packetv1405.RevengeMarkerSync.parse(
      payload,
    )->mapPacket(a => Packetv1405.RevengeMarkerSync(a))
  | (RevengeMarkerRemove, false) => Ok(None)
  | (RevengeMarkerRemove, true) =>
    Packetv1405.RevengeMarkerRemove.parse(
      payload,
    )->mapPacket(a => Packetv1405.RevengeMarkerRemove(a))
  | (GolfBallLandInCup, true | false) =>
    Packetv1405.GolfBallLandInCup.parse(
      payload,
    )->mapPacket(a => Packetv1405.GolfBallLandInCup(a))
  | (ClientFinishConnectingToServer, false) => Ok(None)
  | (ClientFinishConnectingToServer, true) =>
    Packetv1405.ClientFinishConnectingToServer.parse(
      payload,
    )->mapPacket(a => Packetv1405.ClientFinishConnectingToServer(a))
  | (NpcFishOut, true) => Ok(None)
  | (NpcFishOut, false) =>
    Packetv1405.NpcFishOut.parse(payload)->mapPacket(a => Packetv1405.NpcFishOut(a))
  | (NpcTamper, false) => Ok(None)
  | (NpcTamper, true) =>
    Packetv1405.NpcTamper.parse(payload)->mapPacket(a => Packetv1405.NpcTamper(a))
  | (LegacySoundPlay, false) => Ok(None)
  | (LegacySoundPlay, true) =>
    Packetv1405.LegacySoundPlay.parse(payload)->mapPacket(a => Packetv1405.LegacySoundPlay(a))
  | (FoodPlatterTryPlacing, true) => Ok(None)
  | (FoodPlatterTryPlacing, false) =>
    Packetv1405.FoodPlatterTryPlacing.parse(
      payload,
    )->mapPacket(a => Packetv1405.FoodPlatterTryPlacing(a))
  | (PlayerLuckFactorsUpdate, true | false) =>
    Packetv1405.PlayerLuckFactorsUpdate.parse(
      payload,
    )->mapPacket(a => Packetv1405.PlayerLuckFactorsUpdate(a))
  | (PlayerDead, false) => Ok(None)
  | (PlayerDead, true) =>
    Packetv1405.PlayerDead.parse(payload)->mapPacket(a => Packetv1405.PlayerDead(a))
  | (CavernMonsterTypeSync, true | false) =>
    Packetv1405.CavernMonsterTypeSync.parse(
      payload,
    )->mapPacket(a => Packetv1405.CavernMonsterTypeSync(a))
  | (NpcBuffRemovalRequest, true) => Ok(None)
  | (NpcBuffRemovalRequest, false) =>
    Packetv1405.NpcBuffRemovalRequest.parse(
      payload,
    )->mapPacket(a => Packetv1405.NpcBuffRemovalRequest(a))
  | (ClientSyncedInventory, true) => Ok(None)
  | (ClientSyncedInventory, false) =>
    Packetv1405.ClientSyncedInventory.parse(
      payload,
    )->mapPacket(a => Packetv1405.ClientSyncedInventory(a))
  | (CountsAsHostForGameplaySet, false) => Ok(None)
  | (CountsAsHostForGameplaySet, true) =>
    Packetv1405.CountsAsHostForGameplaySet.parse(
      payload,
    )->mapPacket(a => Packetv1405.CountsAsHostForGameplaySet(a))

  // Newer packets
  | (CreditsOrSlimeTransform, true | false) => Ok(None)
  | (LucyAxeMessage, true | false) => Ok(None)
  | (PiggyBankVoidLensUpdate, true | false) => Ok(None)
  | (DungeonDefendersEventAttemptSkipWait, true | false) => Ok(None)
  | (HaveDryadDoStardewAnimation, true | false) => Ok(None)
  | (ItemDropShimmeredUpdate, true | false) => Ok(None)
  | (ShimmerEffectOrCoinLuck, true | false) => Ok(None)
  | (LoadoutSwitch, true | false) => Ok(None)
  | (ItemDropProtectedUpdate, true | false) => Ok(None)
  }

let parsePayloadLazy = (
  packetType: PacketType.t,
  payload: NodeJs.Buffer.t,
  fromServer: bool,
): result<option<Packetv1405.LazyPacket.t>, ErrorAwarePacketReader.readError> =>
  Ok(
    switch (packetType, fromServer) {
  | (ConnectRequest, true) => None
  | (ConnectRequest, false) =>
    Some(Packetv1405.LazyPacket.ConnectRequest(Lazy.make(() => Packetv1405.ConnectRequest.parse(payload))))
  | (Disconnect, false) => None
  | (Disconnect, true) =>
    Some(Packetv1405.LazyPacket.Disconnect(Lazy.make(() => Packetv1405.Disconnect.parse(payload))))
  | (PlayerSlotSet, false) => None
  | (PlayerSlotSet, true) =>
    Some(Packetv1405.LazyPacket.PlayerSlotSet(Lazy.make(() => Packetv1405.PlayerSlotSet.parse(payload))))
  | (PlayerInfo, true | false) =>
    Some(Packetv1405.LazyPacket.PlayerInfo(Lazy.make(() => Packetv1405.PlayerInfo.parse(payload))))
  | (PlayerInventorySlot, true | false) =>
    Some(
      Packetv1405.LazyPacket.PlayerInventorySlot(
        Lazy.make(() => Packetv1405.PlayerInventorySlot.parse(payload)),
      ),
    )
  | (WorldDataRequest, true) => None
  | (WorldDataRequest, false) =>
    Some(Packetv1405.LazyPacket.WorldDataRequest(Lazy.make(() => Packetv1405.WorldDataRequest.parse(payload))))
  | (WorldInfo, false) => None
  | (WorldInfo, true) =>
    Some(Packetv1405.LazyPacket.WorldInfo(Lazy.make(() => Packetv1405.WorldInfo.parse(payload))))
  | (InitialTileSectionsRequest, true) => None
  | (InitialTileSectionsRequest, false) =>
    Some(
      Packetv1405.LazyPacket.InitialTileSectionsRequest(
        Lazy.make(() => Packetv1405.InitialTileSectionsRequest.parse(payload)),
      ),
    )
  | (Status, false) => None
  | (Status, true) => Some(Packetv1405.LazyPacket.Status(Lazy.make(() => Packetv1405.Status.parse(payload))))
  | (TileSectionSend, false) => None
  | (TileSectionSend, true) =>
    Some(Packetv1405.LazyPacket.TileSectionSend(Lazy.make(() => Packetv1405.TileSectionSend.parse(payload))))
  | (TileSectionFrame, false) => None
  | (TileSectionFrame, true) =>
    Some(Packetv1405.LazyPacket.TileSectionFrame(Lazy.make(() => Packetv1405.TileSectionFrame.parse(payload))))
  | (PlayerSpawn, true | false) =>
    Some(Packetv1405.LazyPacket.PlayerSpawn(Lazy.make(() => Packetv1405.PlayerSpawn.parse(payload))))
  | (PlayerUpdate, true | false) =>
    Some(Packetv1405.LazyPacket.PlayerUpdate(Lazy.make(() => Packetv1405.PlayerUpdate.parse(payload))))
  | (PlayerActive, false) => None
  | (PlayerActive, true) =>
    Some(Packetv1405.LazyPacket.PlayerActive(Lazy.make(() => Packetv1405.PlayerActive.parse(payload))))
  | (PlayerHealth, true | false) =>
    Some(Packetv1405.LazyPacket.PlayerHealth(Lazy.make(() => Packetv1405.PlayerHealth.parse(payload))))
  | (TileModify, true | false) =>
    Some(Packetv1405.LazyPacket.TileModify(Lazy.make(() => Packetv1405.TileModify.parse(payload))))
  | (TimeSet, false) => None
  | (TimeSet, true) => Some(Packetv1405.LazyPacket.TimeSet(Lazy.make(() => Packetv1405.TimeSet.parse(payload))))
  | (DoorUse, true | false) =>
    Some(Packetv1405.LazyPacket.DoorUse(Lazy.make(() => Packetv1405.DoorUse.parse(payload))))
  | (TileSquareSend, true | false) =>
    Some(Packetv1405.LazyPacket.TileSquareSend(Lazy.make(() => Packetv1405.TileSquareSend.parse(payload))))
  | (ItemDropUpdate, true | false) =>
    Some(Packetv1405.LazyPacket.ItemDropUpdate(Lazy.make(() => Packetv1405.ItemDropUpdate.parse(payload))))
  | (ItemOwner, true | false) =>
    Some(Packetv1405.LazyPacket.ItemOwner(Lazy.make(() => Packetv1405.ItemOwner.parse(payload))))
  | (NpcUpdate, false) => None
  | (NpcUpdate, true) =>
    Some(Packetv1405.LazyPacket.NpcUpdate(Lazy.make(() => Packetv1405.NpcUpdate.parse(payload))))
  | (NpcItemStrike, true | false) =>
    Some(Packetv1405.LazyPacket.NpcItemStrike(Lazy.make(() => Packetv1405.NpcItemStrike.parse(payload))))
  | (ProjectileSync, true | false) =>
    Some(Packetv1405.LazyPacket.ProjectileSync(Lazy.make(() => Packetv1405.ProjectileSync.parse(payload))))
  | (NpcStrike, true | false) =>
    Some(Packetv1405.LazyPacket.NpcStrike(Lazy.make(() => Packetv1405.NpcStrike.parse(payload))))
  | (ProjectileDestroy, true | false) =>
    Some(
      Packetv1405.LazyPacket.ProjectileDestroy(Lazy.make(() => Packetv1405.ProjectileDestroy.parse(payload))),
    )
  | (PvpToggle, true | false) =>
    Some(Packetv1405.LazyPacket.PvpToggle(Lazy.make(() => Packetv1405.PvpToggle.parse(payload))))
  | (ChestOpen, true) => None
  | (ChestOpen, false) =>
    Some(Packetv1405.LazyPacket.ChestOpen(Lazy.make(() => Packetv1405.ChestOpen.parse(payload))))
  | (ChestItem, true | false) =>
    Some(Packetv1405.LazyPacket.ChestItem(Lazy.make(() => Packetv1405.ChestItem.parse(payload))))
  | (ActiveContainerSync, true | false) =>
    Some(
      Packetv1405.LazyPacket.ActiveContainerSync(
        Lazy.make(() => Packetv1405.ActiveContainerSync.parse(payload)),
      ),
    )
  | (ChestPlace, true | false) =>
    Some(Packetv1405.LazyPacket.ChestPlace(Lazy.make(() => Packetv1405.ChestPlace.parse(payload))))
  | (HealEffect, true | false) =>
    Some(Packetv1405.LazyPacket.HealEffect(Lazy.make(() => Packetv1405.HealEffect.parse(payload))))
  | (Zones, true | false) =>
    Some(Packetv1405.LazyPacket.Zones(Lazy.make(() => Packetv1405.Zones.parse(payload))))
  | (PasswordRequired, false) => None
  | (PasswordRequired, true) =>
    Some(Packetv1405.LazyPacket.PasswordRequired(Lazy.make(() => Packetv1405.PasswordRequired.parse(payload))))
  | (PasswordSend, true) => None
  | (PasswordSend, false) =>
    Some(Packetv1405.LazyPacket.PasswordSend(Lazy.make(() => Packetv1405.PasswordSend.parse(payload))))
  | (ItemOwnerRemove, false) => None
  | (ItemOwnerRemove, true) =>
    Some(Packetv1405.LazyPacket.ItemOwnerRemove(Lazy.make(() => Packetv1405.ItemOwnerRemove.parse(payload))))
  | (NpcTalk, true | false) =>
    Some(Packetv1405.LazyPacket.NpcTalk(Lazy.make(() => Packetv1405.NpcTalk.parse(payload))))
  | (PlayerAnimation, true | false) =>
    Some(Packetv1405.LazyPacket.PlayerAnimation(Lazy.make(() => Packetv1405.PlayerAnimation.parse(payload))))
  | (PlayerMana, true | false) =>
    Some(Packetv1405.LazyPacket.PlayerMana(Lazy.make(() => Packetv1405.PlayerMana.parse(payload))))
  | (ManaEffect, true | false) =>
    Some(Packetv1405.LazyPacket.ManaEffect(Lazy.make(() => Packetv1405.ManaEffect.parse(payload))))
  | (PlayerTeam, true | false) =>
    Some(Packetv1405.LazyPacket.PlayerTeam(Lazy.make(() => Packetv1405.PlayerTeam.parse(payload))))
  | (SignRead, true) => None
  | (SignRead, false) =>
    Some(Packetv1405.LazyPacket.SignRead(Lazy.make(() => Packetv1405.SignRead.parse(payload))))
  | (SignNew, true | false) =>
    Some(Packetv1405.LazyPacket.SignNew(Lazy.make(() => Packetv1405.SignNew.parse(payload))))
  | (LiquidSet, true | false) =>
    Some(Packetv1405.LazyPacket.LiquidSet(Lazy.make(() => Packetv1405.LiquidSet.parse(payload))))
  | (PlayerSpawnSelf, false) => None
  | (PlayerSpawnSelf, true) =>
    Some(Packetv1405.LazyPacket.PlayerSpawnSelf(Lazy.make(() => Packetv1405.PlayerSpawnSelf.parse(payload))))
  | (PlayerBuffsSet, true | false) =>
    Some(Packetv1405.LazyPacket.PlayerBuffsSet(Lazy.make(() => Packetv1405.PlayerBuffsSet.parse(payload))))
  | (NpcSpecialEffect, true | false) =>
    Some(Packetv1405.LazyPacket.NpcSpecialEffect(Lazy.make(() => Packetv1405.NpcSpecialEffect.parse(payload))))
  | (ChestOrTempleUnlock, true | false) =>
    Some(
      Packetv1405.LazyPacket.ChestOrTempleUnlock(
        Lazy.make(() => Packetv1405.ChestOrTempleUnlock.parse(payload)),
      ),
    )
  | (NpcBuffAdd, true | false) =>
    Some(Packetv1405.LazyPacket.NpcBuffAdd(Lazy.make(() => Packetv1405.NpcBuffAdd.parse(payload))))
  | (NpcBuffUpdate, false) => None
  | (NpcBuffUpdate, true) =>
    Some(Packetv1405.LazyPacket.NpcBuffUpdate(Lazy.make(() => Packetv1405.NpcBuffUpdate.parse(payload))))
  | (PlayerBuffAdd, true | false) =>
    Some(Packetv1405.LazyPacket.PlayerBuffAdd(Lazy.make(() => Packetv1405.PlayerBuffAdd.parse(payload))))
  | (NpcNameUpdate, true | false) =>
    Some(Packetv1405.LazyPacket.NpcNameUpdate(Lazy.make(() => Packetv1405.NpcNameUpdate.parse(payload))))
  | (GoodEvilUpdate, false) => None
  | (GoodEvilUpdate, true) =>
    Some(Packetv1405.LazyPacket.GoodEvilUpdate(Lazy.make(() => Packetv1405.GoodEvilUpdate.parse(payload))))
  | (HarpPlay, true | false) =>
    Some(Packetv1405.LazyPacket.HarpPlay(Lazy.make(() => Packetv1405.HarpPlay.parse(payload))))
  | (SwitchHit, true | false) =>
    Some(Packetv1405.LazyPacket.SwitchHit(Lazy.make(() => Packetv1405.SwitchHit.parse(payload))))
  | (NpcHomeUpdate, true | false) =>
    Some(Packetv1405.LazyPacket.NpcHomeUpdate(Lazy.make(() => Packetv1405.NpcHomeUpdate.parse(payload))))
  | (BossOrInvasionSpawn, true) => None
  | (BossOrInvasionSpawn, false) =>
    Some(
      Packetv1405.LazyPacket.BossOrInvasionSpawn(
        Lazy.make(() => Packetv1405.BossOrInvasionSpawn.parse(payload)),
      ),
    )
  | (PlayerDodge, true | false) =>
    Some(Packetv1405.LazyPacket.PlayerDodge(Lazy.make(() => Packetv1405.PlayerDodge.parse(payload))))
  | (TilePaint, true | false) =>
    Some(Packetv1405.LazyPacket.TilePaint(Lazy.make(() => Packetv1405.TilePaint.parse(payload))))
  | (WallPaint, true | false) =>
    Some(Packetv1405.LazyPacket.WallPaint(Lazy.make(() => Packetv1405.WallPaint.parse(payload))))
  | (Teleport, true | false) =>
    Some(Packetv1405.LazyPacket.Teleport(Lazy.make(() => Packetv1405.Teleport.parse(payload))))
  | (PlayerHealOther, true | false) =>
    Some(Packetv1405.LazyPacket.PlayerHealOther(Lazy.make(() => Packetv1405.PlayerHealOther.parse(payload))))
  | (DimensionsUpdate, true | false) =>
    Some(Packetv1405.LazyPacket.DimensionsUpdate(Lazy.make(() => Packetv1405.DimensionsUpdate.parse(payload))))
  | (ClientUuid, true) => None
  | (ClientUuid, false) =>
    Some(Packetv1405.LazyPacket.ClientUuid(Lazy.make(() => Packetv1405.ClientUuid.parse(payload))))
  | (ChestName, true | false) =>
    Some(Packetv1405.LazyPacket.ChestName(Lazy.make(() => Packetv1405.ChestName.parse(payload))))
  | (NpcCatch, true) => None
  | (NpcCatch, false) =>
    Some(Packetv1405.LazyPacket.NpcCatch(Lazy.make(() => Packetv1405.NpcCatch.parse(payload))))
  | (NpcRelease, true) => None
  | (NpcRelease, false) =>
    Some(Packetv1405.LazyPacket.NpcRelease(Lazy.make(() => Packetv1405.NpcRelease.parse(payload))))
  | (TravellingMerchantInventory, false) => None
  | (TravellingMerchantInventory, true) =>
    Some(
      Packetv1405.LazyPacket.TravellingMerchantInventory(
        Lazy.make(() => Packetv1405.TravellingMerchantInventory.parse(payload)),
      ),
    )
  | (TeleportationPotion, true | false) =>
    Some(
      Packetv1405.LazyPacket.TeleportationPotion(
        Lazy.make(() => Packetv1405.TeleportationPotion.parse(payload)),
      ),
    )
  | (AnglerQuest, false) => None
  | (AnglerQuest, true) =>
    Some(Packetv1405.LazyPacket.AnglerQuest(Lazy.make(() => Packetv1405.AnglerQuest.parse(payload))))
  | (AnglerQuestComplete, true) => None
  | (AnglerQuestComplete, false) =>
    Some(
      Packetv1405.LazyPacket.AnglerQuestComplete(
        Lazy.make(() => Packetv1405.AnglerQuestComplete.parse(payload)),
      ),
    )
  | (AnglerQuestsCompletedAmount, true)
  | (AnglerQuestsCompletedAmount, false) =>
    Some(
      Packetv1405.LazyPacket.AnglerQuestsCompletedAmount(
        Lazy.make(() => Packetv1405.AnglerQuestsCompletedAmount.parse(payload)),
      ),
    )
  | (TemporaryAnimationCreate, false) => None
  | (TemporaryAnimationCreate, true) =>
    Some(
      Packetv1405.LazyPacket.TemporaryAnimationCreate(
        Lazy.make(() => Packetv1405.TemporaryAnimationCreate.parse(payload)),
      ),
    )
  | (InvasionProgressReport, false) => None
  | (InvasionProgressReport, true) =>
    Some(
      Packetv1405.LazyPacket.InvasionProgressReport(
        Lazy.make(() => Packetv1405.InvasionProgressReport.parse(payload)),
      ),
    )
  | (ObjectPlace, true | false) =>
    Some(Packetv1405.LazyPacket.ObjectPlace(Lazy.make(() => Packetv1405.ObjectPlace.parse(payload))))
  | (PlayerChestIndexSync, false) => None
  | (PlayerChestIndexSync, true) =>
    Some(
      Packetv1405.LazyPacket.PlayerChestIndexSync(
        Lazy.make(() => Packetv1405.PlayerChestIndexSync.parse(payload)),
      ),
    )
  | (CombatNumberCreate, false) => None
  | (CombatNumberCreate, true) =>
    Some(
      Packetv1405.LazyPacket.CombatNumberCreate(Lazy.make(() => Packetv1405.CombatNumberCreate.parse(payload))),
    )
  | (NetModuleLoad, true | false) =>
    Some(
      Packetv1405.LazyPacket.NetModuleLoad(
        Lazy.make(() => Packetv1405.NetModuleLoad.parse(payload, ~fromServer)),
      ),
    )
  | (NpcKillCount, false) => None
  | (NpcKillCount, true) =>
    Some(Packetv1405.LazyPacket.NpcKillCount(Lazy.make(() => Packetv1405.NpcKillCount.parse(payload))))
  | (PlayerStealth, true | false) =>
    Some(Packetv1405.LazyPacket.PlayerStealth(Lazy.make(() => Packetv1405.PlayerStealth.parse(payload))))
  | (ItemForceIntoNearestChest, true) => None
  | (ItemForceIntoNearestChest, false) =>
    Some(
      Packetv1405.LazyPacket.ItemForceIntoNearestChest(
        Lazy.make(() => Packetv1405.ItemForceIntoNearestChest.parse(payload)),
      ),
    )
  | (TileEntityUpdate, false) => None
  | (TileEntityUpdate, true) =>
    Some(Packetv1405.LazyPacket.TileEntityUpdate(Lazy.make(() => Packetv1405.TileEntityUpdate.parse(payload))))
  | (TileEntityPlace, true) => None
  | (TileEntityPlace, false) =>
    Some(Packetv1405.LazyPacket.TileEntityPlace(Lazy.make(() => Packetv1405.TileEntityPlace.parse(payload))))
  | (ItemDropModify, false) => None
  | (ItemDropModify, true) =>
    Some(Packetv1405.LazyPacket.ItemDropModify(Lazy.make(() => Packetv1405.ItemDropModify.parse(payload))))
  | (ItemFramePlace, true) => None
  | (ItemFramePlace, false) =>
    Some(Packetv1405.LazyPacket.ItemFramePlace(Lazy.make(() => Packetv1405.ItemFramePlace.parse(payload))))
  | (ItemDropInstancedUpdate, true | false) =>
    Some(
      Packetv1405.LazyPacket.ItemDropInstancedUpdate(
        Lazy.make(() => Packetv1405.ItemDropInstancedUpdate.parse(payload)),
      ),
    )
  | (EmoteBubble, false) => None
  | (EmoteBubble, true) =>
    Some(Packetv1405.LazyPacket.EmoteBubble(Lazy.make(() => Packetv1405.EmoteBubble.parse(payload))))
  | (ExtraValueSync, true | false) =>
    Some(Packetv1405.LazyPacket.ExtraValueSync(Lazy.make(() => Packetv1405.ExtraValueSync.parse(payload))))
  | (SocialHandshake, true | false) =>
    Some(Packetv1405.LazyPacket.SocialHandshake(Lazy.make(() => Packetv1405.SocialHandshake.parse(payload))))
  | (Unused, true | false) =>
    Some(Packetv1405.LazyPacket.Unused(Lazy.make(() => Packetv1405.Unused.parse(payload))))
  | (PortalKill, true) => None
  | (PortalKill, false) =>
    Some(Packetv1405.LazyPacket.PortalKill(Lazy.make(() => Packetv1405.PortalKill.parse(payload))))
  | (PlayerTeleportPortal, true | false) =>
    Some(
      Packetv1405.LazyPacket.PlayerTeleportPortal(
        Lazy.make(() => Packetv1405.PlayerTeleportPortal.parse(payload)),
      ),
    )
  | (NpcKilledNotification, false) => None
  | (NpcKilledNotification, true) =>
    Some(
      Packetv1405.LazyPacket.NpcKilledNotification(
        Lazy.make(() => Packetv1405.NpcKilledNotification.parse(payload)),
      ),
    )
  | (EventNotification, false) => None
  | (EventNotification, true) =>
    Some(
      Packetv1405.LazyPacket.EventNotification(Lazy.make(() => Packetv1405.EventNotification.parse(payload))),
    )
  | (MinionTargetUpdate, true | false) =>
    Some(
      Packetv1405.LazyPacket.MinionTargetUpdate(Lazy.make(() => Packetv1405.MinionTargetUpdate.parse(payload))),
    )
  | (NpcTeleportPortal, true | false) =>
    Some(
      Packetv1405.LazyPacket.NpcTeleportPortal(Lazy.make(() => Packetv1405.NpcTeleportPortal.parse(payload))),
    )
  | (ShieldStrengthsUpdate, false) => None
  | (ShieldStrengthsUpdate, true) =>
    Some(
      Packetv1405.LazyPacket.ShieldStrengthsUpdate(
        Lazy.make(() => Packetv1405.ShieldStrengthsUpdate.parse(payload)),
      ),
    )
  | (NebulaLevelUp, true | false) =>
    Some(Packetv1405.LazyPacket.NebulaLevelUp(Lazy.make(() => Packetv1405.NebulaLevelUp.parse(payload))))
  | (MoonLordCountdown, false) => None
  | (MoonLordCountdown, true) =>
    Some(
      Packetv1405.LazyPacket.MoonLordCountdown(Lazy.make(() => Packetv1405.MoonLordCountdown.parse(payload))),
    )
  | (NpcShopItem, false) => None
  | (NpcShopItem, true) =>
    Some(Packetv1405.LazyPacket.NpcShopItem(Lazy.make(() => Packetv1405.NpcShopItem.parse(payload))))
  | (GemLockToggle, true) => None
  | (GemLockToggle, false) =>
    Some(Packetv1405.LazyPacket.GemLockToggle(Lazy.make(() => Packetv1405.GemLockToggle.parse(payload))))
  | (SmokePoof, false) => None
  | (SmokePoof, true) =>
    Some(Packetv1405.LazyPacket.SmokePoof(Lazy.make(() => Packetv1405.SmokePoof.parse(payload))))
  | (ChatMessageSmart, false) => None
  | (ChatMessageSmart, true) =>
    Some(Packetv1405.LazyPacket.ChatMessageSmart(Lazy.make(() => Packetv1405.ChatMessageSmart.parse(payload))))
  | (WiredCannonShot, false) => None
  | (WiredCannonShot, true) =>
    Some(Packetv1405.LazyPacket.WiredCannonShot(Lazy.make(() => Packetv1405.WiredCannonShot.parse(payload))))
  | (MassWireOperation, true) => None
  | (MassWireOperation, false) =>
    Some(
      Packetv1405.LazyPacket.MassWireOperation(Lazy.make(() => Packetv1405.MassWireOperation.parse(payload))),
    )
  | (MassWireOperationPay, false) => None
  | (MassWireOperationPay, true) =>
    Some(
      Packetv1405.LazyPacket.MassWireOperationPay(
        Lazy.make(() => Packetv1405.MassWireOperationPay.parse(payload)),
      ),
    )
  | (PartyToggle, true) => None
  | (PartyToggle, false) =>
    Some(Packetv1405.LazyPacket.PartyToggle(Lazy.make(() => Packetv1405.PartyToggle.parse(payload))))
  | (TreeGrowFx, true | false) =>
    Some(Packetv1405.LazyPacket.TreeGrowFx(Lazy.make(() => Packetv1405.TreeGrowFx.parse(payload))))
  | (CrystalInvasionStart, true) => None
  | (CrystalInvasionStart, false) =>
    Some(
      Packetv1405.LazyPacket.CrystalInvasionStart(
        Lazy.make(() => Packetv1405.CrystalInvasionStart.parse(payload)),
      ),
    )
  | (CrystalInvasionWipeAll, false) => None
  | (CrystalInvasionWipeAll, true) =>
    Some(
      Packetv1405.LazyPacket.CrystalInvasionWipeAll(
        Lazy.make(() => Packetv1405.CrystalInvasionWipeAll.parse(payload)),
      ),
    )
  | (MinionAttackTargetUpdate, true | false) =>
    Some(
      Packetv1405.LazyPacket.MinionAttackTargetUpdate(
        Lazy.make(() => Packetv1405.MinionAttackTargetUpdate.parse(payload)),
      ),
    )
  | (CrystalInvasionSendWaitTime, false) => None
  | (CrystalInvasionSendWaitTime, true) =>
    Some(
      Packetv1405.LazyPacket.CrystalInvasionSendWaitTime(
        Lazy.make(() => Packetv1405.CrystalInvasionSendWaitTime.parse(payload)),
      ),
    )
  | (PlayerDamage, true | false) =>
    Some(Packetv1405.LazyPacket.PlayerDamage(Lazy.make(() => Packetv1405.PlayerDamage.parse(payload))))
  | (PlayerDeath, true | false) =>
    Some(Packetv1405.LazyPacket.PlayerDeath(Lazy.make(() => Packetv1405.PlayerDeath.parse(payload))))
  | (CombatTextCreate, false) => None
  | (CombatTextCreate, true) =>
    Some(Packetv1405.LazyPacket.CombatTextCreate(Lazy.make(() => Packetv1405.CombatTextCreate.parse(payload))))
  | (Emoji, true) => None
  | (Emoji, false) => Some(Packetv1405.LazyPacket.Emoji(Lazy.make(() => Packetv1405.Emoji.parse(payload))))
  | (TileEntityDisplayDollItemSync, true | false) =>
    Some(
      Packetv1405.LazyPacket.TileEntityDisplayDollItemSync(
        Lazy.make(() => Packetv1405.TileEntityDisplayDollItemSync.parse(payload)),
      ),
    )
  | (TileEntityInteractionRequest, true | false) =>
    Some(
      Packetv1405.LazyPacket.TileEntityInteractionRequest(
        Lazy.make(() => Packetv1405.TileEntityInteractionRequest.parse(payload)),
      ),
    )
  | (WeaponsRackTryPlacing, true) => None
  | (WeaponsRackTryPlacing, false) =>
    Some(
      Packetv1405.LazyPacket.WeaponsRackTryPlacing(
        Lazy.make(() => Packetv1405.WeaponsRackTryPlacing.parse(payload)),
      ),
    )
  | (TileEntityHatRackItemSync, true | false) =>
    Some(
      Packetv1405.LazyPacket.TileEntityHatRackItemSync(
        Lazy.make(() => Packetv1405.TileEntityHatRackItemSync.parse(payload)),
      ),
    )
  | (TilePickingSync, true | false) =>
    Some(Packetv1405.LazyPacket.TilePickingSync(Lazy.make(() => Packetv1405.TilePickingSync.parse(payload))))
  | (RevengeMarkerSync, false) => None
  | (RevengeMarkerSync, true) =>
    Some(
      Packetv1405.LazyPacket.RevengeMarkerSync(Lazy.make(() => Packetv1405.RevengeMarkerSync.parse(payload))),
    )
  | (RevengeMarkerRemove, false) => None
  | (RevengeMarkerRemove, true) =>
    Some(
      Packetv1405.LazyPacket.RevengeMarkerRemove(
        Lazy.make(() => Packetv1405.RevengeMarkerRemove.parse(payload)),
      ),
    )
  | (GolfBallLandInCup, true | false) =>
    Some(
      Packetv1405.LazyPacket.GolfBallLandInCup(Lazy.make(() => Packetv1405.GolfBallLandInCup.parse(payload))),
    )
  | (ClientFinishConnectingToServer, false) => None
  | (ClientFinishConnectingToServer, true) =>
    Some(
      Packetv1405.LazyPacket.ClientFinishConnectingToServer(
        Lazy.make(() => Packetv1405.ClientFinishConnectingToServer.parse(payload)),
      ),
    )
  | (NpcFishOut, true) => None
  | (NpcFishOut, false) =>
    Some(Packetv1405.LazyPacket.NpcFishOut(Lazy.make(() => Packetv1405.NpcFishOut.parse(payload))))
  | (NpcTamper, false) => None
  | (NpcTamper, true) =>
    Some(Packetv1405.LazyPacket.NpcTamper(Lazy.make(() => Packetv1405.NpcTamper.parse(payload))))
  | (LegacySoundPlay, false) => None
  | (LegacySoundPlay, true) =>
    Some(Packetv1405.LazyPacket.LegacySoundPlay(Lazy.make(() => Packetv1405.LegacySoundPlay.parse(payload))))
  | (FoodPlatterTryPlacing, true) => None
  | (FoodPlatterTryPlacing, false) =>
    Some(
      Packetv1405.LazyPacket.FoodPlatterTryPlacing(
        Lazy.make(() => Packetv1405.FoodPlatterTryPlacing.parse(payload)),
      ),
    )
  | (PlayerLuckFactorsUpdate, true | false) =>
    Some(
      Packetv1405.LazyPacket.PlayerLuckFactorsUpdate(
        Lazy.make(() => Packetv1405.PlayerLuckFactorsUpdate.parse(payload)),
      ),
    )
  | (PlayerDead, false) => None
  | (PlayerDead, true) =>
    Some(Packetv1405.LazyPacket.PlayerDead(Lazy.make(() => Packetv1405.PlayerDead.parse(payload))))
  | (CavernMonsterTypeSync, true | false) =>
    Some(
      Packetv1405.LazyPacket.CavernMonsterTypeSync(
        Lazy.make(() => Packetv1405.CavernMonsterTypeSync.parse(payload)),
      ),
    )
  | (NpcBuffRemovalRequest, true) => None
  | (NpcBuffRemovalRequest, false) =>
    Some(
      Packetv1405.LazyPacket.NpcBuffRemovalRequest(
        Lazy.make(() => Packetv1405.NpcBuffRemovalRequest.parse(payload)),
      ),
    )
  | (ClientSyncedInventory, true) => None
  | (ClientSyncedInventory, false) =>
    Some(
      Packetv1405.LazyPacket.ClientSyncedInventory(
        Lazy.make(() => Packetv1405.ClientSyncedInventory.parse(payload)),
      ),
    )
  | (CountsAsHostForGameplaySet, false) => None
  | (CountsAsHostForGameplaySet, true) =>
    Some(
      Packetv1405.LazyPacket.CountsAsHostForGameplaySet(
        Lazy.make(() => Packetv1405.CountsAsHostForGameplaySet.parse(payload)),
      ),
    )

  // Newer packets
  | (CreditsOrSlimeTransform, true | false) => None
  | (LucyAxeMessage, true | false) => None
  | (PiggyBankVoidLensUpdate, true | false) => None
  | (DungeonDefendersEventAttemptSkipWait, true | false) => None
  | (HaveDryadDoStardewAnimation, true | false) => None
  | (ItemDropShimmeredUpdate, true | false) => None
  | (ShimmerEffectOrCoinLuck, true | false) => None
  | (LoadoutSwitch, true | false) => None
  | (ItemDropProtectedUpdate, true | false) => None
  })

let simpleParse = (
  ~buffer: NodeJs.Buffer.t,
  ~fromServer: bool,
): result<option<Packetv1405.t>, ErrorAwarePacketReader.readError> => {
  switch buffer->NodeJs.Buffer.length {
  | 0 | 1 | 2 => Ok(None)
  | _ =>
    switch buffer->NodeJs.Buffer.unsafeGet(2)->PacketType.fromInt {
    | Some(packetType) =>
      try {
        // As this module is parsing packets from the 1405 to the equivalent packet data structures
        // it won't ever need Serializing after only parsing - only when it gets converted will this change
        parsePayload(packetType, buffer, fromServer)
      } catch {
      | JsExn(obj) => Error({context: "Parserv1405.simpleParse", error: obj})
      }
    | None => Ok(None)
    }
  }
}

let simpleParseLazy = (
  ~buffer: NodeJs.Buffer.t,
  ~fromServer: bool,
): result<option<Packetv1405.LazyPacket.t>, ErrorAwarePacketReader.readError> => {
  switch buffer->NodeJs.Buffer.length {
  | 0 | 1 | 2 => Ok(None)
  | _ =>
    switch buffer->NodeJs.Buffer.unsafeGet(2)->PacketType.fromInt {
    | Some(packetType) =>
      try {
        // As this module is parsing packets from the 1405 to the equivalent packet data structures
        // it won't ever need Serializing after only parsing - only when it gets converted will this change
        parsePayloadLazy(packetType, buffer, fromServer)
      } catch {
      | JsExn(obj) => Error({context: "Parserv1405.simpleParseLazy", error: obj})
      }
    | None => Ok(None)
    }
  }
}

let parse: IParser.parse<Packetv1405.t> = (~buffer: NodeJs.Buffer.t, ~fromServer: bool) => {
  simpleParse(~buffer, ~fromServer)->Result.map(opt => opt->Belt.Option.map(packet =>
    IParser.SerializeNotNecessary(packet, buffer)
  ))
}

let parseAsLatest: IParser.parse<Packet.t> = (~buffer: NodeJs.Buffer.t, ~fromServer: bool) => {
  simpleParse(~buffer, ~fromServer)->Result.map(opt =>
    opt->Belt.Option.map(packet =>
      switch Packetv1405.toLatest(packet, fromServer) {
      | Same(packet) => IParser.SerializeNotNecessary(packet, buffer)
      | NotSame(packet) => IParser.ShouldSerialize(packet)
      }
    )
  )
}

let parseAsLatestLazy: IParser.parseLazy<Packet.LazyPacket.t> = (
  ~buffer: NodeJs.Buffer.t,
  ~fromServer: bool,
) => {
  simpleParseLazy(~buffer, ~fromServer)->Result.map(opt =>
    opt->Belt.Option.map(packet => Packetv1405.LazyPacket.toLatest(packet, fromServer))
  )
}
