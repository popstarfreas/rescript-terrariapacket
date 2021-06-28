let parsePayload = (packetType: PacketType.t, payload: NodeJs.Buffer.t, fromServer: bool) =>
  switch (packetType, fromServer) {
  | (ConnectRequest, true) => None
  | (ConnectRequest, false) =>
    Packetv1405.ConnectRequest.parse(payload)->Belt.Option.map(a => Packetv1405.ConnectRequest(a))
  | (Disconnect, false) => None
  | (Disconnect, true) =>
    Packetv1405.Disconnect.parse(payload)->Belt.Option.map(a => Packetv1405.Disconnect(a))
  | (PlayerSlotSet, false) => None
  | (PlayerSlotSet, true) =>
    Packetv1405.PlayerSlotSet.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerSlotSet(a))
  | (PlayerInfo, true | false) =>
    Packetv1405.PlayerInfo.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerInfo(a))
  | (PlayerInventorySlot, true | false) =>
    Packetv1405.PlayerInventorySlot.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.PlayerInventorySlot(a))
  | (WorldDataRequest, true) => None
  | (WorldDataRequest, false) =>
    Packetv1405.WorldDataRequest.parse(payload)->Belt.Option.map(a => Packetv1405.WorldDataRequest(
      a,
    ))
  | (WorldInfo, false) => None
  | (WorldInfo, true) =>
    Packetv1405.WorldInfo.parse(payload)->Belt.Option.map(a => Packetv1405.WorldInfo(a))
  | (InitialTileSectionsRequest, true) => None
  | (InitialTileSectionsRequest, false) =>
    Packetv1405.InitialTileSectionsRequest.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.InitialTileSectionsRequest(a))
  | (Status, false) => None
  | (Status, true) => Packetv1405.Status.parse(payload)->Belt.Option.map(a => Packetv1405.Status(a))
  | (TileSectionSend, false) => None
  | (TileSectionSend, true) =>
    Packetv1405.TileSectionSend.parse(payload)->Belt.Option.map(a => Packetv1405.TileSectionSend(a))
  | (TileSectionFrame, false) => None
  | (TileSectionFrame, true) =>
    Packetv1405.TileSectionFrame.parse(payload)->Belt.Option.map(a => Packetv1405.TileSectionFrame(
      a,
    ))
  | (PlayerSpawn, true | false) =>
    Packetv1405.PlayerSpawn.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerSpawn(a))
  | (PlayerUpdate, true | false) =>
    Packetv1405.PlayerUpdate.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerUpdate(a))
  | (PlayerActive, false) => None
  | (PlayerActive, true) =>
    Packetv1405.PlayerActive.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerActive(a))
  | (PlayerHealth, true | false) =>
    Packetv1405.PlayerHealth.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerHealth(a))
  | (TileModify, true | false) =>
    Packetv1405.TileModify.parse(payload)->Belt.Option.map(a => Packetv1405.TileModify(a))
  | (TimeSet, false) => None
  | (TimeSet, true) =>
    Packetv1405.TimeSet.parse(payload)->Belt.Option.map(a => Packetv1405.TimeSet(a))
  | (DoorUse, true | false) =>
    Packetv1405.DoorUse.parse(payload)->Belt.Option.map(a => Packetv1405.DoorUse(a))
  | (TileSquareSend, true | false) =>
    Packetv1405.TileSquareSend.parse(payload)->Belt.Option.map(a => Packetv1405.TileSquareSend(a))
  | (ItemDropUpdate, true | false) =>
    Packetv1405.ItemDropUpdate.parse(payload)->Belt.Option.map(a => Packetv1405.ItemDropUpdate(a))
  | (ItemOwner, true | false) =>
    Packetv1405.ItemOwner.parse(payload)->Belt.Option.map(a => Packetv1405.ItemOwner(a))
  | (NpcUpdate, false) => {
      None
    }
  | (NpcUpdate, true) =>
    Packetv1405.NpcUpdate.parse(payload)->Belt.Option.map(a => Packetv1405.NpcUpdate(a))
  | (NpcItemStrike, true | false) =>
    Packetv1405.NpcItemStrike.parse(payload)->Belt.Option.map(a => Packetv1405.NpcItemStrike(a))
  | (ProjectileSync, true | false) =>
    Packetv1405.ProjectileSync.parse(payload)->Belt.Option.map(a => Packetv1405.ProjectileSync(a))
  | (NpcStrike, true | false) =>
    Packetv1405.NpcStrike.parse(payload)->Belt.Option.map(a => Packetv1405.NpcStrike(a))
  | (ProjectileDestroy, true | false) =>
    Packetv1405.ProjectileDestroy.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.ProjectileDestroy(a))
  | (PvpToggle, true | false) =>
    Packetv1405.PvpToggle.parse(payload)->Belt.Option.map(a => Packetv1405.PvpToggle(a))
  | (ChestOpen, true) => None
  | (ChestOpen, false) =>
    Packetv1405.ChestOpen.parse(payload)->Belt.Option.map(a => Packetv1405.ChestOpen(a))
  | (ChestItem, true | false) =>
    Packetv1405.ChestItem.parse(payload)->Belt.Option.map(a => Packetv1405.ChestItem(a))
  | (ActiveContainerSync, true | false) =>
    Packetv1405.ActiveContainerSync.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.ActiveContainerSync(a))
  | (ChestPlace, true | false) =>
    Packetv1405.ChestPlace.parse(payload)->Belt.Option.map(a => Packetv1405.ChestPlace(a))
  | (HealEffect, true | false) =>
    Packetv1405.HealEffect.parse(payload)->Belt.Option.map(a => Packetv1405.HealEffect(a))
  | (Zones, true | false) =>
    Packetv1405.Zones.parse(payload)->Belt.Option.map(a => Packetv1405.Zones(a))
  | (PasswordRequired, false) => None
  | (PasswordRequired, true) =>
    Packetv1405.PasswordRequired.parse(payload)->Belt.Option.map(a => Packetv1405.PasswordRequired(
      a,
    ))
  | (PasswordSend, true) => None
  | (PasswordSend, false) =>
    Packetv1405.PasswordSend.parse(payload)->Belt.Option.map(a => Packetv1405.PasswordSend(a))
  | (ItemOwnerRemove, false) => None
  | (ItemOwnerRemove, true) =>
    Packetv1405.ItemOwnerRemove.parse(payload)->Belt.Option.map(a => Packetv1405.ItemOwnerRemove(a))
  | (NpcTalk, true | false) =>
    Packetv1405.NpcTalk.parse(payload)->Belt.Option.map(a => Packetv1405.NpcTalk(a))
  | (PlayerAnimation, true | false) =>
    Packetv1405.PlayerAnimation.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerAnimation(a))
  | (PlayerMana, true | false) =>
    Packetv1405.PlayerMana.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerMana(a))
  | (ManaEffect, true | false) =>
    Packetv1405.ManaEffect.parse(payload)->Belt.Option.map(a => Packetv1405.ManaEffect(a))
  | (PlayerTeam, true | false) =>
    Packetv1405.PlayerTeam.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerTeam(a))
  | (SignRead, true) => None
  | (SignRead, false) =>
    Packetv1405.SignRead.parse(payload)->Belt.Option.map(a => Packetv1405.SignRead(a))
  | (SignNew, true | false) =>
    Packetv1405.SignNew.parse(payload)->Belt.Option.map(a => Packetv1405.SignNew(a))
  | (LiquidSet, true | false) =>
    Packetv1405.LiquidSet.parse(payload)->Belt.Option.map(a => Packetv1405.LiquidSet(a))
  | (PlayerSpawnSelf, false) => None
  | (PlayerSpawnSelf, true) =>
    Packetv1405.PlayerSpawnSelf.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerSpawnSelf(a))
  | (PlayerBuffsSet, true | false) =>
    Packetv1405.PlayerBuffsSet.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerBuffsSet(a))
  | (NpcSpecialEffect, true | false) =>
    Packetv1405.NpcSpecialEffect.parse(payload)->Belt.Option.map(a => Packetv1405.NpcSpecialEffect(
      a,
    ))
  | (ChestUnlock, true | false) =>
    Packetv1405.ChestUnlock.parse(payload)->Belt.Option.map(a => Packetv1405.ChestUnlock(a))
  | (NpcBuffAdd, true | false) =>
    Packetv1405.NpcBuffAdd.parse(payload)->Belt.Option.map(a => Packetv1405.NpcBuffAdd(a))
  | (NpcBuffUpdate, false) => None
  | (NpcBuffUpdate, true) =>
    Packetv1405.NpcBuffUpdate.parse(payload)->Belt.Option.map(a => Packetv1405.NpcBuffUpdate(a))
  | (PlayerBuffAdd, true | false) =>
    Packetv1405.PlayerBuffAdd.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerBuffAdd(a))
  | (NpcNameUpdate, true | false) =>
    Packetv1405.NpcNameUpdate.parse(payload)->Belt.Option.map(a => Packetv1405.NpcNameUpdate(a))
  | (GoodEvilUpdate, false) => None
  | (GoodEvilUpdate, true) =>
    Packetv1405.GoodEvilUpdate.parse(payload)->Belt.Option.map(a => Packetv1405.GoodEvilUpdate(a))
  | (HarpPlay, true | false) =>
    Packetv1405.HarpPlay.parse(payload)->Belt.Option.map(a => Packetv1405.HarpPlay(a))
  | (SwitchHit, true | false) =>
    Packetv1405.SwitchHit.parse(payload)->Belt.Option.map(a => Packetv1405.SwitchHit(a))
  | (NpcHomeUpdate, true | false) =>
    Packetv1405.NpcHomeUpdate.parse(payload)->Belt.Option.map(a => Packetv1405.NpcHomeUpdate(a))
  | (BossOrInvasionSpawn, true) => None
  | (BossOrInvasionSpawn, false) =>
    Packetv1405.BossOrInvasionSpawn.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.BossOrInvasionSpawn(a))
  | (PlayerDodge, true | false) =>
    Packetv1405.PlayerDodge.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerDodge(a))
  | (PaintTile, true | false) =>
    Packetv1405.PaintTile.parse(payload)->Belt.Option.map(a => Packetv1405.PaintTile(a))
  | (PaintWall, true | false) =>
    Packetv1405.PaintWall.parse(payload)->Belt.Option.map(a => Packetv1405.PaintWall(a))
  | (Teleport, true | false) =>
    Packetv1405.Teleport.parse(payload)->Belt.Option.map(a => Packetv1405.Teleport(a))
  | (PlayerHealOther, true | false) =>
    Packetv1405.PlayerHealOther.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerHealOther(a))
  | (DimensionsUpdate, true | false) =>
    Packetv1405.DimensionsUpdate.parse(payload)->Belt.Option.map(a => Packetv1405.DimensionsUpdate(
      a,
    ))
  | (ClientUuid, true) => None
  | (ClientUuid, false) =>
    Packetv1405.ClientUuid.parse(payload)->Belt.Option.map(a => Packetv1405.ClientUuid(a))
  | (ChestName, true | false) =>
    Packetv1405.ChestName.parse(payload)->Belt.Option.map(a => Packetv1405.ChestName(a))
  | (CatchNpc, true) => None
  | (CatchNpc, false) =>
    Packetv1405.CatchNpc.parse(payload)->Belt.Option.map(a => Packetv1405.CatchNpc(a))
  | (ReleaseNpc, true) => None
  | (ReleaseNpc, false) =>
    Packetv1405.ReleaseNpc.parse(payload)->Belt.Option.map(a => Packetv1405.ReleaseNpc(a))
  | (TravellingMerchantInventory, false) => None
  | (TravellingMerchantInventory, true) =>
    Packetv1405.TravellingMerchantInventory.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.TravellingMerchantInventory(a))
  | (TeleportationPotion, true | false) =>
    Packetv1405.TeleportationPotion.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.TeleportationPotion(a))
  | (AnglerQuest, false) => None
  | (AnglerQuest, true) =>
    Packetv1405.AnglerQuest.parse(payload)->Belt.Option.map(a => Packetv1405.AnglerQuest(a))
  | (AnglerQuestComplete, true) => None
  | (AnglerQuestComplete, false) =>
    Packetv1405.AnglerQuestComplete.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.AnglerQuestComplete(a))
  | (AnglerQuestsCompletedAmount, true) => None
  | (AnglerQuestsCompletedAmount, false) =>
    Packetv1405.AnglerQuestsCompletedAmount.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.AnglerQuestsCompletedAmount(a))
  | (TemporaryAnimationCreate, false) => None
  | (TemporaryAnimationCreate, true) =>
    Packetv1405.TemporaryAnimationCreate.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.TemporaryAnimationCreate(a))
  | (InvasionProgressReport, false) => None
  | (InvasionProgressReport, true) =>
    Packetv1405.InvasionProgressReport.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.InvasionProgressReport(a))
  | (ObjectPlace, true | false) =>
    Packetv1405.ObjectPlace.parse(payload)->Belt.Option.map(a => Packetv1405.ObjectPlace(a))
  | (PlayerChestIndexSync, false) => None
  | (PlayerChestIndexSync, true) =>
    Packetv1405.PlayerChestIndexSync.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.PlayerChestIndexSync(a))
  | (CombatNumberCreate, false) => None
  | (CombatNumberCreate, true) =>
    Packetv1405.CombatNumberCreate.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.CombatNumberCreate(a))
  | (NetModuleLoad, true | false) =>
    Packetv1405.NetModuleLoad.parse(
      payload,
      fromServer,
    )->Belt.Option.map(a => Packetv1405.NetModuleLoad(a))
  | (NpcKillCount, false) => None
  | (NpcKillCount, true) =>
    Packetv1405.NpcKillCount.parse(payload)->Belt.Option.map(a => Packetv1405.NpcKillCount(a))
  | (PlayerStealth, true | false) =>
    Packetv1405.PlayerStealth.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerStealth(a))
  | (ItemForceIntoNearestChest, true) => None
  | (ItemForceIntoNearestChest, false) =>
    Packetv1405.ItemForceIntoNearestChest.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.ItemForceIntoNearestChest(a))
  | (TileEntityUpdate, false) => None
  | (TileEntityUpdate, true) =>
    Packetv1405.TileEntityUpdate.parse(payload)->Belt.Option.map(a => Packetv1405.TileEntityUpdate(
      a,
    ))
  | (TileEntityPlace, true) => None
  | (TileEntityPlace, false) =>
    Packetv1405.TileEntityPlace.parse(payload)->Belt.Option.map(a => Packetv1405.TileEntityPlace(a))
  | (ItemDropModify, false) => None
  | (ItemDropModify, true) =>
    Packetv1405.ItemDropModify.parse(payload)->Belt.Option.map(a => Packetv1405.ItemDropModify(a))
  | (ItemFramePlace, true) => None
  | (ItemFramePlace, false) =>
    Packetv1405.ItemFramePlace.parse(payload)->Belt.Option.map(a => Packetv1405.ItemFramePlace(a))
  | (ItemDropInstancedUpdate, true | false) =>
    Packetv1405.ItemDropInstancedUpdate.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.ItemDropInstancedUpdate(a))
  | (EmoteBubble, false) => None
  | (EmoteBubble, true) =>
    Packetv1405.EmoteBubble.parse(payload)->Belt.Option.map(a => Packetv1405.EmoteBubble(a))
  | (ExtraValueSync, true | false) =>
    Packetv1405.ExtraValueSync.parse(payload)->Belt.Option.map(a => Packetv1405.ExtraValueSync(a))
  | (SocialHandshake, true | false) =>
    Packetv1405.SocialHandshake.parse(payload)->Belt.Option.map(a => Packetv1405.SocialHandshake(a))
  | (Unused, true | false) =>
    Packetv1405.Unused.parse(payload)->Belt.Option.map(a => Packetv1405.Unused(a))
  | (PortalKill, true) => None
  | (PortalKill, false) =>
    Packetv1405.PortalKill.parse(payload)->Belt.Option.map(a => Packetv1405.PortalKill(a))
  | (PlayerTeleportPortal, true | false) =>
    Packetv1405.PlayerTeleportPortal.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.PlayerTeleportPortal(a))
  | (NpcKilledNotification, false) => None
  | (NpcKilledNotification, true) =>
    Packetv1405.NpcKilledNotification.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.NpcKilledNotification(a))
  | (EventNotification, false) => None
  | (EventNotification, true) =>
    Packetv1405.EventNotification.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.EventNotification(a))
  | (MinionTargetUpdate, true | false) =>
    Packetv1405.MinionTargetUpdate.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.MinionTargetUpdate(a))
  | (NpcTeleportPortal, true | false) =>
    Packetv1405.NpcTeleportPortal.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.NpcTeleportPortal(a))
  | (ShieldStrengthsUpdate, false) => None
  | (ShieldStrengthsUpdate, true) =>
    Packetv1405.ShieldStrengthsUpdate.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.ShieldStrengthsUpdate(a))
  | (NebulaLevelUp, true | false) =>
    Packetv1405.NebulaLevelUp.parse(payload)->Belt.Option.map(a => Packetv1405.NebulaLevelUp(a))
  | (MoonLordCountdown, false) => None
  | (MoonLordCountdown, true) =>
    Packetv1405.MoonLordCountdown.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.MoonLordCountdown(a))
  | (NpcShopItem, false) => None
  | (NpcShopItem, true) =>
    Packetv1405.NpcShopItem.parse(payload)->Belt.Option.map(a => Packetv1405.NpcShopItem(a))
  | (GemLockToggle, true) => None
  | (GemLockToggle, false) =>
    Packetv1405.GemLockToggle.parse(payload)->Belt.Option.map(a => Packetv1405.GemLockToggle(a))
  | (SmokePoof, false) => None
  | (SmokePoof, true) =>
    Packetv1405.SmokePoof.parse(payload)->Belt.Option.map(a => Packetv1405.SmokePoof(a))
  | (ChatMessageSmart, false) => None
  | (ChatMessageSmart, true) =>
    Packetv1405.ChatMessageSmart.parse(payload)->Belt.Option.map(a => Packetv1405.ChatMessageSmart(
      a,
    ))
  | (WiredCannonShot, false) => None
  | (WiredCannonShot, true) =>
    Packetv1405.WiredCannonShot.parse(payload)->Belt.Option.map(a => Packetv1405.WiredCannonShot(a))
  | (MassWireOperation, true) => None
  | (MassWireOperation, false) =>
    Packetv1405.MassWireOperation.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.MassWireOperation(a))
  | (MassWireOperationPay, false) => None
  | (MassWireOperationPay, true) =>
    Packetv1405.MassWireOperationPay.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.MassWireOperationPay(a))
  | (PartyToggle, true) => None
  | (PartyToggle, false) =>
    Packetv1405.PartyToggle.parse(payload)->Belt.Option.map(a => Packetv1405.PartyToggle(a))
  | (TreeGrowFx, true | false) =>
    Packetv1405.TreeGrowFx.parse(payload)->Belt.Option.map(a => Packetv1405.TreeGrowFx(a))
  | (CrystalInvasionStart, true) => None
  | (CrystalInvasionStart, false) =>
    Packetv1405.CrystalInvasionStart.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.CrystalInvasionStart(a))
  | (CrystalInvasionWipeAll, false) => None
  | (CrystalInvasionWipeAll, true) =>
    Packetv1405.CrystalInvasionWipeAll.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.CrystalInvasionWipeAll(a))
  | (MinionAttackTargetUpdate, true | false) =>
    Packetv1405.MinionAttackTargetUpdate.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.MinionAttackTargetUpdate(a))
  | (CrystalInvasionSendWaitTime, false) => None
  | (CrystalInvasionSendWaitTime, true) =>
    Packetv1405.CrystalInvasionSendWaitTime.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.CrystalInvasionSendWaitTime(a))
  | (PlayerDamage, true | false) =>
    Packetv1405.PlayerDamage.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerDamage(a))
  | (PlayerDeath, true | false) =>
    Packetv1405.PlayerDeath.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerDeath(a))
  | (CombatTextCreate, false) => None
  | (CombatTextCreate, true) =>
    Packetv1405.CombatTextCreate.parse(payload)->Belt.Option.map(a => Packetv1405.CombatTextCreate(
      a,
    ))
  | (Emoji, true) => None
  | (Emoji, false) => Packetv1405.Emoji.parse(payload)->Belt.Option.map(a => Packetv1405.Emoji(a))
  | (TileEntityDisplayDollItemSync, true | false) =>
    Packetv1405.TileEntityDisplayDollItemSync.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.TileEntityDisplayDollItemSync(a))
  | (TileEntityInteractionRequest, true | false) =>
    Packetv1405.TileEntityInteractionRequest.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.TileEntityInteractionRequest(a))
  | (WeaponsRackTryPlacing, true) => None
  | (WeaponsRackTryPlacing, false) =>
    Packetv1405.WeaponsRackTryPlacing.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.WeaponsRackTryPlacing(a))
  | (TileEntityHatRackItemSync, true | false) =>
    Packetv1405.TileEntityHatRackItemSync.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.TileEntityHatRackItemSync(a))
  | (TilePickingSync, true | false) =>
    Packetv1405.TilePickingSync.parse(payload)->Belt.Option.map(a => Packetv1405.TilePickingSync(a))
  | (RevengeMarkerSync, false) => None
  | (RevengeMarkerSync, true) =>
    Packetv1405.RevengeMarkerSync.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.RevengeMarkerSync(a))
  | (RevengeMarkerRemove, false) => None
  | (RevengeMarkerRemove, true) =>
    Packetv1405.RevengeMarkerRemove.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.RevengeMarkerRemove(a))
  | (GolfBallLandInCup, true | false) =>
    Packetv1405.GolfBallLandInCup.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.GolfBallLandInCup(a))
  | (ClientFinishConnectingToServer, false) => None
  | (ClientFinishConnectingToServer, true) =>
    Packetv1405.ClientFinishConnectingToServer.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.ClientFinishConnectingToServer(a))
  | (NpcFishOut, true) => None
  | (NpcFishOut, false) =>
    Packetv1405.NpcFishOut.parse(payload)->Belt.Option.map(a => Packetv1405.NpcFishOut(a))
  | (NpcTamper, false) => None
  | (NpcTamper, true) =>
    Packetv1405.NpcTamper.parse(payload)->Belt.Option.map(a => Packetv1405.NpcTamper(a))
  | (LegacySoundPlay, false) => None
  | (LegacySoundPlay, true) =>
    Packetv1405.LegacySoundPlay.parse(payload)->Belt.Option.map(a => Packetv1405.LegacySoundPlay(a))
  | (FoodPlatterTryPlacing, true) => None
  | (FoodPlatterTryPlacing, false) =>
    Packetv1405.FoodPlatterTryPlacing.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.FoodPlatterTryPlacing(a))
  | (PlayerLuckFactorsUpdate, true | false) =>
    Packetv1405.PlayerLuckFactorsUpdate.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.PlayerLuckFactorsUpdate(a))
  | (PlayerDead, false) => None
  | (PlayerDead, true) =>
    Packetv1405.PlayerDead.parse(payload)->Belt.Option.map(a => Packetv1405.PlayerDead(a))
  | (CavernMonsterTypeSync, true | false) =>
    Packetv1405.CavernMonsterTypeSync.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.CavernMonsterTypeSync(a))
  | (NpcBuffRemovalRequest, true) => None
  | (NpcBuffRemovalRequest, false) =>
    Packetv1405.NpcBuffRemovalRequest.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.NpcBuffRemovalRequest(a))
  | (ClientSyncedInventory, true) => None
  | (ClientSyncedInventory, false) =>
    Packetv1405.ClientSyncedInventory.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.ClientSyncedInventory(a))
  | (CountsAsHostForGameplaySet, false) => None
  | (CountsAsHostForGameplaySet, true) =>
    Packetv1405.CountsAsHostForGameplaySet.parse(
      payload,
    )->Belt.Option.map(a => Packetv1405.CountsAsHostForGameplaySet(a))
  }

let simpleParse = (~buffer: NodeJs.Buffer.t, ~fromServer: bool): option<Packetv1405.t> => {
  switch buffer->NodeJs.Buffer.length {
  | 0 | 1 | 2 => {
      None
    }
  | _ =>
    switch buffer->NodeJs.Buffer.unsafeGet(2)->PacketType.fromInt {
    | Some(packetType) =>
      try {
        // As this module is parsing packets from the 1405 to the equivalent packet data structures
        // it won't ever need Serializing after only parsing - only when it gets converted will this change
        parsePayload(packetType, buffer, fromServer)
      } catch {
      | e => {
          None
        }
      }
    | None => None
    }
  }
}

let parse: IParser.parse<Packetv1405.t> = (~buffer: NodeJs.Buffer.t, ~fromServer: bool) => {
  simpleParse(~buffer, ~fromServer)->Belt.Option.map(packet => IParser.SerializeNotNecessary(
    packet,
    buffer,
  ))
}

let parseAsLatest: IParser.parse<Packet.t> = (~buffer: NodeJs.Buffer.t, ~fromServer: bool) => {
  simpleParse(~buffer, ~fromServer)->Belt.Option.map(packet =>
    switch Packetv1405.toLatest(packet, fromServer) {
    | Same(packet) => IParser.SerializeNotNecessary(packet, buffer)
    | NotSame(packet) => IParser.ShouldSerialize(packet)
    }
  )
}
