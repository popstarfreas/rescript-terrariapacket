let parsePayload = (packetType: PacketType.t, payload: NodeJs.Buffer.t, fromServer: bool): option<
  Packet.t,
> =>
  switch (packetType, fromServer) {
  | (ConnectRequest, true) => None
  | (ConnectRequest, false) =>
    Packet.ConnectRequest.parse(payload)->Option.map(a => Packet.ConnectRequest(a))
  | (Disconnect, false) => None
  | (Disconnect, true) => Packet.Disconnect.parse(payload)->Option.map(a => Packet.Disconnect(a))
  | (PlayerSlotSet, false) => None
  | (PlayerSlotSet, true) =>
    Packet.PlayerSlotSet.parse(payload)->Option.map(a => Packet.PlayerSlotSet(a))
  | (PlayerInfo, true | false) =>
    Packet.PlayerInfo.parse(payload)->Option.map(a => Packet.PlayerInfo(a))
  | (PlayerInventorySlot, true | false) =>
    Packet.PlayerInventorySlot.parse(payload)->Option.map(a => Packet.PlayerInventorySlot(a))
  | (WorldDataRequest, true) => None
  | (WorldDataRequest, false) =>
    Packet.WorldDataRequest.parse(payload)->Option.map(a => Packet.WorldDataRequest(a))
  | (WorldInfo, false) => None
  | (WorldInfo, true) => Packet.WorldInfo.parse(payload)->Option.map(a => Packet.WorldInfo(a))
  | (InitialTileSectionsRequest, true) => None
  | (InitialTileSectionsRequest, false) =>
    Packet.InitialTileSectionsRequest.parse(
      payload,
    )->Option.map(a => Packet.InitialTileSectionsRequest(a))
  | (Status, false) => None
  | (Status, true) => Packet.Status.parse(payload)->Option.map(a => Packet.Status(a))
  | (TileSectionSend, false) => None
  | (TileSectionSend, true) =>
    Packet.TileSectionSend.parse(payload)->Option.map(a => Packet.TileSectionSend(a))
  | (TileSectionFrame, false) => None
  | (TileSectionFrame, true) =>
    Packet.TileSectionFrame.parse(payload)->Option.map(a => Packet.TileSectionFrame(a))
  | (PlayerSpawn, true | false) =>
    Packet.PlayerSpawn.parse(payload)->Option.map(a => Packet.PlayerSpawn(a))
  | (PlayerUpdate, true | false) =>
    Packet.PlayerUpdate.parse(payload)->Option.map(a => Packet.PlayerUpdate(a))
  | (PlayerActive, false) => None
  | (PlayerActive, true) =>
    Packet.PlayerActive.parse(payload)->Option.map(a => Packet.PlayerActive(a))
  | (PlayerHealth, true | false) =>
    Packet.PlayerHealth.parse(payload)->Option.map(a => Packet.PlayerHealth(a))
  | (TileModify, true | false) =>
    Packet.TileModify.parse(payload)->Option.map(a => Packet.TileModify(a))
  | (TimeSet, false) => None
  | (TimeSet, true) => Packet.TimeSet.parse(payload)->Option.map(a => Packet.TimeSet(a))
  | (DoorUse, true | false) => Packet.DoorUse.parse(payload)->Option.map(a => Packet.DoorUse(a))
  | (TileSquareSend, true | false) =>
    Packet.TileSquareSend.parse(payload)->Option.map(a => Packet.TileSquareSend(a))
  | (ItemDropUpdate, true | false) =>
    Packet.ItemDropUpdate.parse(payload)->Option.map(a => Packet.ItemDropUpdate(a))
  | (ItemOwner, true | false) =>
    Packet.ItemOwner.parse(payload)->Option.map(a => Packet.ItemOwner(a))
  | (NpcUpdate, false) => None
  | (NpcUpdate, true) => Packet.NpcUpdate.parse(payload)->Option.map(a => Packet.NpcUpdate(a))
  | (NpcItemStrike, true | false) =>
    Packet.NpcItemStrike.parse(payload)->Option.map(a => Packet.NpcItemStrike(a))
  | (ProjectileSync, true | false) =>
    Packet.ProjectileSync.parse(payload)->Option.map(a => Packet.ProjectileSync(a))
  | (NpcStrike, true | false) =>
    Packet.NpcStrike.parse(payload)->Option.map(a => Packet.NpcStrike(a))
  | (ProjectileDestroy, true | false) =>
    Packet.ProjectileDestroy.parse(payload)->Option.map(a => Packet.ProjectileDestroy(a))
  | (PvpToggle, true | false) =>
    Packet.PvpToggle.parse(payload)->Option.map(a => Packet.PvpToggle(a))
  | (ChestOpen, true) => None
  | (ChestOpen, false) => Packet.ChestOpen.parse(payload)->Option.map(a => Packet.ChestOpen(a))
  | (ChestItem, true | false) =>
    Packet.ChestItem.parse(payload)->Option.map(a => Packet.ChestItem(a))
  | (ActiveContainerSync, true | false) =>
    Packet.ActiveContainerSync.parse(payload)->Option.map(a => Packet.ActiveContainerSync(a))
  | (ChestPlace, true | false) =>
    Packet.ChestPlace.parse(payload)->Option.map(a => Packet.ChestPlace(a))
  | (HealEffect, true | false) =>
    Packet.HealEffect.parse(payload)->Option.map(a => Packet.HealEffect(a))
  | (Zones, true | false) => Packet.Zones.parse(payload)->Option.map(a => Packet.Zones(a))
  | (PasswordRequired, false) => None
  | (PasswordRequired, true) =>
    Packet.PasswordRequired.parse(payload)->Option.map(a => Packet.PasswordRequired(a))
  | (PasswordSend, true) => None
  | (PasswordSend, false) =>
    Packet.PasswordSend.parse(payload)->Option.map(a => Packet.PasswordSend(a))
  | (ItemOwnerRemove, false) => None
  | (ItemOwnerRemove, true) =>
    Packet.ItemOwnerRemove.parse(payload)->Option.map(a => Packet.ItemOwnerRemove(a))
  | (NpcTalk, true | false) => Packet.NpcTalk.parse(payload)->Option.map(a => Packet.NpcTalk(a))
  | (PlayerAnimation, true | false) =>
    Packet.PlayerAnimation.parse(payload)->Option.map(a => Packet.PlayerAnimation(a))
  | (PlayerMana, true | false) =>
    Packet.PlayerMana.parse(payload)->Option.map(a => Packet.PlayerMana(a))
  | (ManaEffect, true | false) =>
    Packet.ManaEffect.parse(payload)->Option.map(a => Packet.ManaEffect(a))
  | (PlayerTeam, true | false) =>
    Packet.PlayerTeam.parse(payload)->Option.map(a => Packet.PlayerTeam(a))
  | (SignRead, true) => None
  | (SignRead, false) => Packet.SignRead.parse(payload)->Option.map(a => Packet.SignRead(a))
  | (SignNew, true | false) => Packet.SignNew.parse(payload)->Option.map(a => Packet.SignNew(a))
  | (LiquidSet, true | false) =>
    Packet.LiquidSet.parse(payload)->Option.map(a => Packet.LiquidSet(a))
  | (PlayerSpawnSelf, false) => None
  | (PlayerSpawnSelf, true) =>
    Packet.PlayerSpawnSelf.parse(payload)->Option.map(a => Packet.PlayerSpawnSelf(a))
  | (PlayerBuffsSet, true | false) =>
    Packet.PlayerBuffsSet.parse(payload)->Option.map(a => Packet.PlayerBuffsSet(a))
  | (NpcSpecialEffect, true | false) =>
    Packet.NpcSpecialEffect.parse(payload)->Option.map(a => Packet.NpcSpecialEffect(a))
  | (ChestOrTempleUnlock, true | false) =>
    Packet.ChestOrTempleUnlock.parse(payload)->Option.map(a => Packet.ChestOrTempleUnlock(a))
  | (NpcBuffAdd, true | false) =>
    Packet.NpcBuffAdd.parse(payload)->Option.map(a => Packet.NpcBuffAdd(a))
  | (NpcBuffUpdate, false) => None
  | (NpcBuffUpdate, true) =>
    Packet.NpcBuffUpdate.parse(payload)->Option.map(a => Packet.NpcBuffUpdate(a))
  | (PlayerBuffAdd, true | false) =>
    Packet.PlayerBuffAdd.parse(payload)->Option.map(a => Packet.PlayerBuffAdd(a))
  | (NpcNameUpdate, true | false) =>
    Packet.NpcNameUpdate.parse(payload)->Option.map(a => Packet.NpcNameUpdate(a))
  | (GoodEvilUpdate, false) => None
  | (GoodEvilUpdate, true) =>
    Packet.GoodEvilUpdate.parse(payload)->Option.map(a => Packet.GoodEvilUpdate(a))
  | (HarpPlay, true | false) => Packet.HarpPlay.parse(payload)->Option.map(a => Packet.HarpPlay(a))
  | (SwitchHit, true | false) =>
    Packet.SwitchHit.parse(payload)->Option.map(a => Packet.SwitchHit(a))
  | (NpcHomeUpdate, true | false) =>
    Packet.NpcHomeUpdate.parse(payload)->Option.map(a => Packet.NpcHomeUpdate(a))
  | (BossOrInvasionSpawn, true) => None
  | (BossOrInvasionSpawn, false) =>
    Packet.BossOrInvasionSpawn.parse(payload)->Option.map(a => Packet.BossOrInvasionSpawn(a))
  | (PlayerDodge, true | false) =>
    Packet.PlayerDodge.parse(payload)->Option.map(a => Packet.PlayerDodge(a))
  | (TilePaint, true | false) =>
    Packet.TilePaint.parse(payload)->Option.map(a => Packet.TilePaint(a))
  | (WallPaint, true | false) =>
    Packet.WallPaint.parse(payload)->Option.map(a => Packet.WallPaint(a))
  | (Teleport, true | false) => Packet.Teleport.parse(payload)->Option.map(a => Packet.Teleport(a))
  | (PlayerHealOther, true | false) =>
    Packet.PlayerHealOther.parse(payload)->Option.map(a => Packet.PlayerHealOther(a))
  | (DimensionsUpdate, true | false) =>
    Packet.DimensionsUpdate.parse(payload)->Option.map(a => Packet.DimensionsUpdate(a))
  | (ClientUuid, true) => None
  | (ClientUuid, false) => Packet.ClientUuid.parse(payload)->Option.map(a => Packet.ClientUuid(a))
  | (ChestName, true | false) =>
    Packet.ChestName.parse(payload)->Option.map(a => Packet.ChestName(a))
  | (CatchNpc, true) => None
  | (CatchNpc, false) => Packet.CatchNpc.parse(payload)->Option.map(a => Packet.CatchNpc(a))
  | (ReleaseNpc, true) => None
  | (ReleaseNpc, false) => Packet.ReleaseNpc.parse(payload)->Option.map(a => Packet.ReleaseNpc(a))
  | (TravellingMerchantInventory, false) => None
  | (TravellingMerchantInventory, true) =>
    Packet.TravellingMerchantInventory.parse(
      payload,
    )->Option.map(a => Packet.TravellingMerchantInventory(a))
  | (TeleportationPotion, true | false) =>
    Packet.TeleportationPotion.parse(payload)->Option.map(a => Packet.TeleportationPotion(a))
  | (AnglerQuest, false) => None
  | (AnglerQuest, true) => Packet.AnglerQuest.parse(payload)->Option.map(a => Packet.AnglerQuest(a))
  | (AnglerQuestComplete, true) => None
  | (AnglerQuestComplete, false) =>
    Packet.AnglerQuestComplete.parse(payload)->Option.map(a => Packet.AnglerQuestComplete(a))
  | (AnglerQuestsCompletedAmount, true)
  | (AnglerQuestsCompletedAmount, false) =>
    Packet.AnglerQuestsCompletedAmount.parse(
      payload,
    )->Option.map(a => Packet.AnglerQuestsCompletedAmount(a))
  | (TemporaryAnimationCreate, false) => None
  | (TemporaryAnimationCreate, true) =>
    Packet.TemporaryAnimationCreate.parse(payload)->Option.map(a => Packet.TemporaryAnimationCreate(
      a,
    ))
  | (InvasionProgressReport, false) => None
  | (InvasionProgressReport, true) =>
    Packet.InvasionProgressReport.parse(payload)->Option.map(a => Packet.InvasionProgressReport(a))
  | (ObjectPlace, true | false) =>
    Packet.ObjectPlace.parse(payload)->Option.map(a => Packet.ObjectPlace(a))
  | (PlayerChestIndexSync, false) => None
  | (PlayerChestIndexSync, true) =>
    Packet.PlayerChestIndexSync.parse(payload)->Option.map(a => Packet.PlayerChestIndexSync(a))
  | (CombatNumberCreate, false) => None
  | (CombatNumberCreate, true) =>
    Packet.CombatNumberCreate.parse(payload)->Option.map(a => Packet.CombatNumberCreate(a))
  | (NetModuleLoad, true | false) =>
    Packet.NetModuleLoad.parse(payload, ~fromServer)->Option.map(a => Packet.NetModuleLoad(a))
  | (NpcKillCount, false) => None
  | (NpcKillCount, true) =>
    Packet.NpcKillCount.parse(payload)->Option.map(a => Packet.NpcKillCount(a))
  | (PlayerStealth, true | false) =>
    Packet.PlayerStealth.parse(payload)->Option.map(a => Packet.PlayerStealth(a))
  | (ItemForceIntoNearestChest, true) => None
  | (ItemForceIntoNearestChest, false) =>
    Packet.ItemForceIntoNearestChest.parse(
      payload,
    )->Option.map(a => Packet.ItemForceIntoNearestChest(a))
  | (TileEntityUpdate, false) => None
  | (TileEntityUpdate, true) =>
    Packet.TileEntityUpdate.parse(payload)->Option.map(a => Packet.TileEntityUpdate(a))
  | (TileEntityPlace, true) => None
  | (TileEntityPlace, false) =>
    Packet.TileEntityPlace.parse(payload)->Option.map(a => Packet.TileEntityPlace(a))
  | (ItemDropModify, false) => None
  | (ItemDropModify, true) =>
    Packet.ItemDropModify.parse(payload)->Option.map(a => Packet.ItemDropModify(a))
  | (ItemFramePlace, true) => None
  | (ItemFramePlace, false) =>
    Packet.ItemFramePlace.parse(payload)->Option.map(a => Packet.ItemFramePlace(a))
  | (ItemDropInstancedUpdate, true | false) =>
    Packet.ItemDropInstancedUpdate.parse(payload)->Option.map(a => Packet.ItemDropInstancedUpdate(
      a,
    ))
  | (EmoteBubble, false) => None
  | (EmoteBubble, true) => Packet.EmoteBubble.parse(payload)->Option.map(a => Packet.EmoteBubble(a))
  | (ExtraValueSync, true | false) =>
    Packet.ExtraValueSync.parse(payload)->Option.map(a => Packet.ExtraValueSync(a))
  | (SocialHandshake, true | false) =>
    Packet.SocialHandshake.parse(payload)->Option.map(a => Packet.SocialHandshake(a))
  | (Unused, true | false) => Packet.Unused.parse(payload)->Option.map(a => Packet.Unused(a))
  | (PortalKill, true) => None
  | (PortalKill, false) => Packet.PortalKill.parse(payload)->Option.map(a => Packet.PortalKill(a))
  | (PlayerTeleportPortal, true | false) =>
    Packet.PlayerTeleportPortal.parse(payload)->Option.map(a => Packet.PlayerTeleportPortal(a))
  | (NpcKilledNotification, false) => None
  | (NpcKilledNotification, true) =>
    Packet.NpcKilledNotification.parse(payload)->Option.map(a => Packet.NpcKilledNotification(a))
  | (EventNotification, false) => None
  | (EventNotification, true) =>
    Packet.EventNotification.parse(payload)->Option.map(a => Packet.EventNotification(a))
  | (MinionTargetUpdate, true | false) =>
    Packet.MinionTargetUpdate.parse(payload)->Option.map(a => Packet.MinionTargetUpdate(a))
  | (NpcTeleportPortal, true | false) =>
    Packet.NpcTeleportPortal.parse(payload)->Option.map(a => Packet.NpcTeleportPortal(a))
  | (ShieldStrengthsUpdate, false) => None
  | (ShieldStrengthsUpdate, true) =>
    Packet.ShieldStrengthsUpdate.parse(payload)->Option.map(a => Packet.ShieldStrengthsUpdate(a))
  | (NebulaLevelUp, true | false) =>
    Packet.NebulaLevelUp.parse(payload)->Option.map(a => Packet.NebulaLevelUp(a))
  | (MoonLordCountdown, false) => None
  | (MoonLordCountdown, true) =>
    Packet.MoonLordCountdown.parse(payload)->Option.map(a => Packet.MoonLordCountdown(a))
  | (NpcShopItem, false) => None
  | (NpcShopItem, true) => Packet.NpcShopItem.parse(payload)->Option.map(a => Packet.NpcShopItem(a))
  | (GemLockToggle, true) => None
  | (GemLockToggle, false) =>
    Packet.GemLockToggle.parse(payload)->Option.map(a => Packet.GemLockToggle(a))
  | (SmokePoof, false) => None
  | (SmokePoof, true) => Packet.SmokePoof.parse(payload)->Option.map(a => Packet.SmokePoof(a))
  | (ChatMessageSmart, false) => None
  | (ChatMessageSmart, true) =>
    Packet.ChatMessageSmart.parse(payload)->Option.map(a => Packet.ChatMessageSmart(a))
  | (WiredCannonShot, false) => None
  | (WiredCannonShot, true) =>
    Packet.WiredCannonShot.parse(payload)->Option.map(a => Packet.WiredCannonShot(a))
  | (MassWireOperation, true) => None
  | (MassWireOperation, false) =>
    Packet.MassWireOperation.parse(payload)->Option.map(a => Packet.MassWireOperation(a))
  | (MassWireOperationPay, false) => None
  | (MassWireOperationPay, true) =>
    Packet.MassWireOperationPay.parse(payload)->Option.map(a => Packet.MassWireOperationPay(a))
  | (PartyToggle, true) => None
  | (PartyToggle, false) =>
    Packet.PartyToggle.parse(payload)->Option.map(a => Packet.PartyToggle(a))
  | (TreeGrowFx, true | false) =>
    Packet.TreeGrowFx.parse(payload)->Option.map(a => Packet.TreeGrowFx(a))
  | (CrystalInvasionStart, true) => None
  | (CrystalInvasionStart, false) =>
    Packet.CrystalInvasionStart.parse(payload)->Option.map(a => Packet.CrystalInvasionStart(a))
  | (CrystalInvasionWipeAll, false) => None
  | (CrystalInvasionWipeAll, true) =>
    Packet.CrystalInvasionWipeAll.parse(payload)->Option.map(a => Packet.CrystalInvasionWipeAll(a))
  | (MinionAttackTargetUpdate, true | false) =>
    Packet.MinionAttackTargetUpdate.parse(payload)->Option.map(a => Packet.MinionAttackTargetUpdate(
      a,
    ))
  | (CrystalInvasionSendWaitTime, false) => None
  | (CrystalInvasionSendWaitTime, true) =>
    Packet.CrystalInvasionSendWaitTime.parse(
      payload,
    )->Option.map(a => Packet.CrystalInvasionSendWaitTime(a))
  | (PlayerDamage, true | false) =>
    Packet.PlayerDamage.parse(payload)->Option.map(a => Packet.PlayerDamage(a))
  | (PlayerDeath, true | false) =>
    Packet.PlayerDeath.parse(payload)->Option.map(a => Packet.PlayerDeath(a))
  | (CombatTextCreate, false) => None
  | (CombatTextCreate, true) =>
    Packet.CombatTextCreate.parse(payload)->Option.map(a => Packet.CombatTextCreate(a))
  | (Emoji, true) => None
  | (Emoji, false) => Packet.Emoji.parse(payload)->Option.map(a => Packet.Emoji(a))
  | (TileEntityDisplayDollItemSync, true | false) =>
    Packet.TileEntityDisplayDollItemSync.parse(
      payload,
    )->Option.map(a => Packet.TileEntityDisplayDollItemSync(a))
  | (TileEntityInteractionRequest, true | false) =>
    Packet.TileEntityInteractionRequest.parse(
      payload,
    )->Option.map(a => Packet.TileEntityInteractionRequest(a))
  | (WeaponsRackTryPlacing, true) => None
  | (WeaponsRackTryPlacing, false) =>
    Packet.WeaponsRackTryPlacing.parse(payload)->Option.map(a => Packet.WeaponsRackTryPlacing(a))
  | (TileEntityHatRackItemSync, true | false) =>
    Packet.TileEntityHatRackItemSync.parse(
      payload,
    )->Option.map(a => Packet.TileEntityHatRackItemSync(a))
  | (TilePickingSync, true | false) =>
    Packet.TilePickingSync.parse(payload)->Option.map(a => Packet.TilePickingSync(a))
  | (RevengeMarkerSync, false) => None
  | (RevengeMarkerSync, true) =>
    Packet.RevengeMarkerSync.parse(payload)->Option.map(a => Packet.RevengeMarkerSync(a))
  | (RevengeMarkerRemove, false) => None
  | (RevengeMarkerRemove, true) =>
    Packet.RevengeMarkerRemove.parse(payload)->Option.map(a => Packet.RevengeMarkerRemove(a))
  | (GolfBallLandInCup, true | false) =>
    Packet.GolfBallLandInCup.parse(payload)->Option.map(a => Packet.GolfBallLandInCup(a))
  | (ClientFinishConnectingToServer, false) => None
  | (ClientFinishConnectingToServer, true) =>
    Packet.ClientFinishConnectingToServer.parse(
      payload,
    )->Option.map(a => Packet.ClientFinishConnectingToServer(a))
  | (NpcFishOut, true) => None
  | (NpcFishOut, false) => Packet.NpcFishOut.parse(payload)->Option.map(a => Packet.NpcFishOut(a))
  | (NpcTamper, false) => None
  | (NpcTamper, true) => Packet.NpcTamper.parse(payload)->Option.map(a => Packet.NpcTamper(a))
  | (LegacySoundPlay, false) => None
  | (LegacySoundPlay, true) =>
    Packet.LegacySoundPlay.parse(payload)->Option.map(a => Packet.LegacySoundPlay(a))
  | (FoodPlatterTryPlacing, true) => None
  | (FoodPlatterTryPlacing, false) =>
    Packet.FoodPlatterTryPlacing.parse(payload)->Option.map(a => Packet.FoodPlatterTryPlacing(a))
  | (PlayerLuckFactorsUpdate, true | false) =>
    Packet.PlayerLuckFactorsUpdate.parse(payload)->Option.map(a => Packet.PlayerLuckFactorsUpdate(
      a,
    ))
  | (PlayerDead, false) => None
  | (PlayerDead, true) => Packet.PlayerDead.parse(payload)->Option.map(a => Packet.PlayerDead(a))
  | (CavernMonsterTypeSync, true | false) =>
    Packet.CavernMonsterTypeSync.parse(payload)->Option.map(a => Packet.CavernMonsterTypeSync(a))
  | (NpcBuffRemovalRequest, true) => None
  | (NpcBuffRemovalRequest, false) =>
    Packet.NpcBuffRemovalRequest.parse(payload)->Option.map(a => Packet.NpcBuffRemovalRequest(a))
  | (ClientSyncedInventory, true) => None
  | (ClientSyncedInventory, false) =>
    Packet.ClientSyncedInventory.parse(payload)->Option.map(a => Packet.ClientSyncedInventory(a))
  | (CountsAsHostForGameplaySet, _) =>
    Packet.CountsAsHostForGameplaySet.parse(
      payload,
    )->Option.map(a => Packet.CountsAsHostForGameplaySet(a))
  | (CreditsOrSlimeTransform, _) =>
    Packet.CreditsOrSlimeTransform.parse(payload)->Option.map(a => Packet.CreditsOrSlimeTransform(
      a,
    ))
  | (LucyAxeMessage, _) =>
    Packet.LucyAxeMessage.parse(payload)->Option.map(a => Packet.LucyAxeMessage(a))
  | (PiggyBankVoidLensUpdate, _) =>
    Packet.PiggyBankVoidLensUpdate.parse(payload)->Option.map(a => Packet.PiggyBankVoidLensUpdate(
      a,
    ))
  | (DungeonDefendersEventAttemptSkipWait, _) =>
    Packet.DungeonDefendersEventAttemptSkipWait.parse(
      payload,
    )->Option.map(a => Packet.DungeonDefendersEventAttemptSkipWait(a))
  | (HaveDryadDoStardewAnimation, _) =>
    Packet.HaveDryadDoStardewAnimation.parse(
      payload,
    )->Option.map(a => Packet.HaveDryadDoStardewAnimation(a))
  | (ItemDropShimmeredUpdate, _) =>
    Packet.ItemDropShimmeredUpdate.parse(payload)->Option.map(a => Packet.ItemDropShimmeredUpdate(
      a,
    ))
  | (ShimmerEffectOrCoinLuck, _) =>
    Packet.ShimmerEffectOrCoinLuck.parse(payload)->Option.map(a => Packet.ShimmerEffectOrCoinLuck(
      a,
    ))
  | (LoadoutSwitch, _) =>
    Packet.LoadoutSwitch.parse(payload)->Option.map(a => Packet.LoadoutSwitch(a))
  | (ItemDropProtectedUpdate, _) =>
    Packet.ItemDropProtectedUpdate.parse(payload)->Option.map(a => Packet.ItemDropProtectedUpdate(
      a,
    ))
  }

let parsePayloadLazy = (
  packetType: PacketType.t,
  payload: NodeJs.Buffer.t,
  fromServer: bool,
): option<Packet.Lazy.t> =>
  switch (packetType, fromServer) {
  | (ConnectRequest, true) => None
  | (ConnectRequest, false) =>
    Some(Packet.Lazy.ConnectRequest(lazy Packet.ConnectRequest.parse(payload)))
  | (Disconnect, false) => None
  | (Disconnect, true) => Some(Packet.Lazy.Disconnect(lazy Packet.Disconnect.parse(payload)))
  | (PlayerSlotSet, false) => None
  | (PlayerSlotSet, true) =>
    Some(Packet.Lazy.PlayerSlotSet(lazy Packet.PlayerSlotSet.parse(payload)))
  | (PlayerInfo, true | false) =>
    Some(Packet.Lazy.PlayerInfo(lazy Packet.PlayerInfo.parse(payload)))
  | (PlayerInventorySlot, true | false) =>
    Some(Packet.Lazy.PlayerInventorySlot(lazy Packet.PlayerInventorySlot.parse(payload)))
  | (WorldDataRequest, true) => None
  | (WorldDataRequest, false) =>
    Some(Packet.Lazy.WorldDataRequest(lazy Packet.WorldDataRequest.parse(payload)))
  | (WorldInfo, false) => None
  | (WorldInfo, true) => Some(Packet.Lazy.WorldInfo(lazy Packet.WorldInfo.parse(payload)))
  | (InitialTileSectionsRequest, true) => None
  | (InitialTileSectionsRequest, false) =>
    Some(
      Packet.Lazy.InitialTileSectionsRequest(lazy Packet.InitialTileSectionsRequest.parse(payload)),
    )
  | (Status, false) => None
  | (Status, true) => Some(Packet.Lazy.Status(lazy Packet.Status.parse(payload)))
  | (TileSectionSend, false) => None
  | (TileSectionSend, true) =>
    Some(Packet.Lazy.TileSectionSend(lazy Packet.TileSectionSend.parse(payload)))
  | (TileSectionFrame, false) => None
  | (TileSectionFrame, true) =>
    Some(Packet.Lazy.TileSectionFrame(lazy Packet.TileSectionFrame.parse(payload)))
  | (PlayerSpawn, true | false) =>
    Some(Packet.Lazy.PlayerSpawn(lazy Packet.PlayerSpawn.parse(payload)))
  | (PlayerUpdate, true | false) =>
    Some(Packet.Lazy.PlayerUpdate(lazy Packet.PlayerUpdate.parse(payload)))
  | (PlayerActive, false) => None
  | (PlayerActive, true) => Some(Packet.Lazy.PlayerActive(lazy Packet.PlayerActive.parse(payload)))
  | (PlayerHealth, true | false) =>
    Some(Packet.Lazy.PlayerHealth(lazy Packet.PlayerHealth.parse(payload)))
  | (TileModify, true | false) =>
    Some(Packet.Lazy.TileModify(lazy Packet.TileModify.parse(payload)))
  | (TimeSet, false) => None
  | (TimeSet, true) => Some(Packet.Lazy.TimeSet(lazy Packet.TimeSet.parse(payload)))
  | (DoorUse, true | false) => Some(Packet.Lazy.DoorUse(lazy Packet.DoorUse.parse(payload)))
  | (TileSquareSend, true | false) =>
    Some(Packet.Lazy.TileSquareSend(lazy Packet.TileSquareSend.parse(payload)))
  | (ItemDropUpdate, true | false) =>
    Some(Packet.Lazy.ItemDropUpdate(lazy Packet.ItemDropUpdate.parse(payload)))
  | (ItemOwner, true | false) => Some(Packet.Lazy.ItemOwner(lazy Packet.ItemOwner.parse(payload)))
  | (NpcUpdate, false) => None
  | (NpcUpdate, true) => Some(Packet.Lazy.NpcUpdate(lazy Packet.NpcUpdate.parse(payload)))
  | (NpcItemStrike, true | false) =>
    Some(Packet.Lazy.NpcItemStrike(lazy Packet.NpcItemStrike.parse(payload)))
  | (ProjectileSync, true | false) =>
    Some(Packet.Lazy.ProjectileSync(lazy Packet.ProjectileSync.parse(payload)))
  | (NpcStrike, true | false) => Some(Packet.Lazy.NpcStrike(lazy Packet.NpcStrike.parse(payload)))
  | (ProjectileDestroy, true | false) =>
    Some(Packet.Lazy.ProjectileDestroy(lazy Packet.ProjectileDestroy.parse(payload)))
  | (PvpToggle, true | false) => Some(Packet.Lazy.PvpToggle(lazy Packet.PvpToggle.parse(payload)))
  | (ChestOpen, true) => None
  | (ChestOpen, false) => Some(Packet.Lazy.ChestOpen(lazy Packet.ChestOpen.parse(payload)))
  | (ChestItem, true | false) => Some(Packet.Lazy.ChestItem(lazy Packet.ChestItem.parse(payload)))
  | (ActiveContainerSync, true | false) =>
    Some(Packet.Lazy.ActiveContainerSync(lazy Packet.ActiveContainerSync.parse(payload)))
  | (ChestPlace, true | false) =>
    Some(Packet.Lazy.ChestPlace(lazy Packet.ChestPlace.parse(payload)))
  | (HealEffect, true | false) =>
    Some(Packet.Lazy.HealEffect(lazy Packet.HealEffect.parse(payload)))
  | (Zones, true | false) => Some(Packet.Lazy.Zones(lazy Packet.Zones.parse(payload)))
  | (PasswordRequired, false) => None
  | (PasswordRequired, true) =>
    Some(Packet.Lazy.PasswordRequired(lazy Packet.PasswordRequired.parse(payload)))
  | (PasswordSend, true) => None
  | (PasswordSend, false) => Some(Packet.Lazy.PasswordSend(lazy Packet.PasswordSend.parse(payload)))
  | (ItemOwnerRemove, false) => None
  | (ItemOwnerRemove, true) =>
    Some(Packet.Lazy.ItemOwnerRemove(lazy Packet.ItemOwnerRemove.parse(payload)))
  | (NpcTalk, true | false) => Some(Packet.Lazy.NpcTalk(lazy Packet.NpcTalk.parse(payload)))
  | (PlayerAnimation, true | false) =>
    Some(Packet.Lazy.PlayerAnimation(lazy Packet.PlayerAnimation.parse(payload)))
  | (PlayerMana, true | false) =>
    Some(Packet.Lazy.PlayerMana(lazy Packet.PlayerMana.parse(payload)))
  | (ManaEffect, true | false) =>
    Some(Packet.Lazy.ManaEffect(lazy Packet.ManaEffect.parse(payload)))
  | (PlayerTeam, true | false) =>
    Some(Packet.Lazy.PlayerTeam(lazy Packet.PlayerTeam.parse(payload)))
  | (SignRead, true) => None
  | (SignRead, false) => Some(Packet.Lazy.SignRead(lazy Packet.SignRead.parse(payload)))
  | (SignNew, true | false) => Some(Packet.Lazy.SignNew(lazy Packet.SignNew.parse(payload)))
  | (LiquidSet, true | false) => Some(Packet.Lazy.LiquidSet(lazy Packet.LiquidSet.parse(payload)))
  | (PlayerSpawnSelf, false) => None
  | (PlayerSpawnSelf, true) =>
    Some(Packet.Lazy.PlayerSpawnSelf(lazy Packet.PlayerSpawnSelf.parse(payload)))
  | (PlayerBuffsSet, true | false) =>
    Some(Packet.Lazy.PlayerBuffsSet(lazy Packet.PlayerBuffsSet.parse(payload)))
  | (NpcSpecialEffect, true | false) =>
    Some(Packet.Lazy.NpcSpecialEffect(lazy Packet.NpcSpecialEffect.parse(payload)))
  | (ChestOrTempleUnlock, true | false) =>
    Some(Packet.Lazy.ChestOrTempleUnlock(lazy Packet.ChestOrTempleUnlock.parse(payload)))
  | (NpcBuffAdd, true | false) =>
    Some(Packet.Lazy.NpcBuffAdd(lazy Packet.NpcBuffAdd.parse(payload)))
  | (NpcBuffUpdate, false) => None
  | (NpcBuffUpdate, true) =>
    Some(Packet.Lazy.NpcBuffUpdate(lazy Packet.NpcBuffUpdate.parse(payload)))
  | (PlayerBuffAdd, true | false) =>
    Some(Packet.Lazy.PlayerBuffAdd(lazy Packet.PlayerBuffAdd.parse(payload)))
  | (NpcNameUpdate, true | false) =>
    Some(Packet.Lazy.NpcNameUpdate(lazy Packet.NpcNameUpdate.parse(payload)))
  | (GoodEvilUpdate, false) => None
  | (GoodEvilUpdate, true) =>
    Some(Packet.Lazy.GoodEvilUpdate(lazy Packet.GoodEvilUpdate.parse(payload)))
  | (HarpPlay, true | false) => Some(Packet.Lazy.HarpPlay(lazy Packet.HarpPlay.parse(payload)))
  | (SwitchHit, true | false) => Some(Packet.Lazy.SwitchHit(lazy Packet.SwitchHit.parse(payload)))
  | (NpcHomeUpdate, true | false) =>
    Some(Packet.Lazy.NpcHomeUpdate(lazy Packet.NpcHomeUpdate.parse(payload)))
  | (BossOrInvasionSpawn, true) => None
  | (BossOrInvasionSpawn, false) =>
    Some(Packet.Lazy.BossOrInvasionSpawn(lazy Packet.BossOrInvasionSpawn.parse(payload)))
  | (PlayerDodge, true | false) =>
    Some(Packet.Lazy.PlayerDodge(lazy Packet.PlayerDodge.parse(payload)))
  | (TilePaint, true | false) => Some(Packet.Lazy.TilePaint(lazy Packet.TilePaint.parse(payload)))
  | (WallPaint, true | false) => Some(Packet.Lazy.WallPaint(lazy Packet.WallPaint.parse(payload)))
  | (Teleport, true | false) => Some(Packet.Lazy.Teleport(lazy Packet.Teleport.parse(payload)))
  | (PlayerHealOther, true | false) =>
    Some(Packet.Lazy.PlayerHealOther(lazy Packet.PlayerHealOther.parse(payload)))
  | (DimensionsUpdate, true | false) =>
    Some(Packet.Lazy.DimensionsUpdate(lazy Packet.DimensionsUpdate.parse(payload)))
  | (ClientUuid, true) => None
  | (ClientUuid, false) => Some(Packet.Lazy.ClientUuid(lazy Packet.ClientUuid.parse(payload)))
  | (ChestName, true | false) => Some(Packet.Lazy.ChestName(lazy Packet.ChestName.parse(payload)))
  | (CatchNpc, true) => None
  | (CatchNpc, false) => Some(Packet.Lazy.CatchNpc(lazy Packet.CatchNpc.parse(payload)))
  | (ReleaseNpc, true) => None
  | (ReleaseNpc, false) => Some(Packet.Lazy.ReleaseNpc(lazy Packet.ReleaseNpc.parse(payload)))
  | (TravellingMerchantInventory, false) => None
  | (TravellingMerchantInventory, true) =>
    Some(
      Packet.Lazy.TravellingMerchantInventory(
        lazy Packet.TravellingMerchantInventory.parse(payload),
      ),
    )
  | (TeleportationPotion, true | false) =>
    Some(Packet.Lazy.TeleportationPotion(lazy Packet.TeleportationPotion.parse(payload)))
  | (AnglerQuest, false) => None
  | (AnglerQuest, true) => Some(Packet.Lazy.AnglerQuest(lazy Packet.AnglerQuest.parse(payload)))
  | (AnglerQuestComplete, true) => None
  | (AnglerQuestComplete, false) =>
    Some(Packet.Lazy.AnglerQuestComplete(lazy Packet.AnglerQuestComplete.parse(payload)))
  | (AnglerQuestsCompletedAmount, true)
  | (AnglerQuestsCompletedAmount, false) =>
    Some(
      Packet.Lazy.AnglerQuestsCompletedAmount(
        lazy Packet.AnglerQuestsCompletedAmount.parse(payload),
      ),
    )
  | (TemporaryAnimationCreate, false) => None
  | (TemporaryAnimationCreate, true) =>
    Some(Packet.Lazy.TemporaryAnimationCreate(lazy Packet.TemporaryAnimationCreate.parse(payload)))
  | (InvasionProgressReport, false) => None
  | (InvasionProgressReport, true) =>
    Some(Packet.Lazy.InvasionProgressReport(lazy Packet.InvasionProgressReport.parse(payload)))
  | (ObjectPlace, true | false) =>
    Some(Packet.Lazy.ObjectPlace(lazy Packet.ObjectPlace.parse(payload)))
  | (PlayerChestIndexSync, false) => None
  | (PlayerChestIndexSync, true) =>
    Some(Packet.Lazy.PlayerChestIndexSync(lazy Packet.PlayerChestIndexSync.parse(payload)))
  | (CombatNumberCreate, false) => None
  | (CombatNumberCreate, true) =>
    Some(Packet.Lazy.CombatNumberCreate(lazy Packet.CombatNumberCreate.parse(payload)))
  | (NetModuleLoad, true | false) =>
    Some(Packet.Lazy.NetModuleLoad(lazy Packet.NetModuleLoad.parse(payload, ~fromServer)))
  | (NpcKillCount, false) => None
  | (NpcKillCount, true) => Some(Packet.Lazy.NpcKillCount(lazy Packet.NpcKillCount.parse(payload)))
  | (PlayerStealth, true | false) =>
    Some(Packet.Lazy.PlayerStealth(lazy Packet.PlayerStealth.parse(payload)))
  | (ItemForceIntoNearestChest, true) => None
  | (ItemForceIntoNearestChest, false) =>
    Some(
      Packet.Lazy.ItemForceIntoNearestChest(lazy Packet.ItemForceIntoNearestChest.parse(payload)),
    )
  | (TileEntityUpdate, false) => None
  | (TileEntityUpdate, true) =>
    Some(Packet.Lazy.TileEntityUpdate(lazy Packet.TileEntityUpdate.parse(payload)))
  | (TileEntityPlace, true) => None
  | (TileEntityPlace, false) =>
    Some(Packet.Lazy.TileEntityPlace(lazy Packet.TileEntityPlace.parse(payload)))
  | (ItemDropModify, false) => None
  | (ItemDropModify, true) =>
    Some(Packet.Lazy.ItemDropModify(lazy Packet.ItemDropModify.parse(payload)))
  | (ItemFramePlace, true) => None
  | (ItemFramePlace, false) =>
    Some(Packet.Lazy.ItemFramePlace(lazy Packet.ItemFramePlace.parse(payload)))
  | (ItemDropInstancedUpdate, true | false) =>
    Some(Packet.Lazy.ItemDropInstancedUpdate(lazy Packet.ItemDropInstancedUpdate.parse(payload)))
  | (EmoteBubble, false) => None
  | (EmoteBubble, true) => Some(Packet.Lazy.EmoteBubble(lazy Packet.EmoteBubble.parse(payload)))
  | (ExtraValueSync, true | false) =>
    Some(Packet.Lazy.ExtraValueSync(lazy Packet.ExtraValueSync.parse(payload)))
  | (SocialHandshake, true | false) =>
    Some(Packet.Lazy.SocialHandshake(lazy Packet.SocialHandshake.parse(payload)))
  | (Unused, true | false) => Some(Packet.Lazy.Unused(lazy Packet.Unused.parse(payload)))
  | (PortalKill, true) => None
  | (PortalKill, false) => Some(Packet.Lazy.PortalKill(lazy Packet.PortalKill.parse(payload)))
  | (PlayerTeleportPortal, true | false) =>
    Some(Packet.Lazy.PlayerTeleportPortal(lazy Packet.PlayerTeleportPortal.parse(payload)))
  | (NpcKilledNotification, false) => None
  | (NpcKilledNotification, true) =>
    Some(Packet.Lazy.NpcKilledNotification(lazy Packet.NpcKilledNotification.parse(payload)))
  | (EventNotification, false) => None
  | (EventNotification, true) =>
    Some(Packet.Lazy.EventNotification(lazy Packet.EventNotification.parse(payload)))
  | (MinionTargetUpdate, true | false) =>
    Some(Packet.Lazy.MinionTargetUpdate(lazy Packet.MinionTargetUpdate.parse(payload)))
  | (NpcTeleportPortal, true | false) =>
    Some(Packet.Lazy.NpcTeleportPortal(lazy Packet.NpcTeleportPortal.parse(payload)))
  | (ShieldStrengthsUpdate, false) => None
  | (ShieldStrengthsUpdate, true) =>
    Some(Packet.Lazy.ShieldStrengthsUpdate(lazy Packet.ShieldStrengthsUpdate.parse(payload)))
  | (NebulaLevelUp, true | false) =>
    Some(Packet.Lazy.NebulaLevelUp(lazy Packet.NebulaLevelUp.parse(payload)))
  | (MoonLordCountdown, false) => None
  | (MoonLordCountdown, true) =>
    Some(Packet.Lazy.MoonLordCountdown(lazy Packet.MoonLordCountdown.parse(payload)))
  | (NpcShopItem, false) => None
  | (NpcShopItem, true) => Some(Packet.Lazy.NpcShopItem(lazy Packet.NpcShopItem.parse(payload)))
  | (GemLockToggle, true) => None
  | (GemLockToggle, false) =>
    Some(Packet.Lazy.GemLockToggle(lazy Packet.GemLockToggle.parse(payload)))
  | (SmokePoof, false) => None
  | (SmokePoof, true) => Some(Packet.Lazy.SmokePoof(lazy Packet.SmokePoof.parse(payload)))
  | (ChatMessageSmart, false) => None
  | (ChatMessageSmart, true) =>
    Some(Packet.Lazy.ChatMessageSmart(lazy Packet.ChatMessageSmart.parse(payload)))
  | (WiredCannonShot, false) => None
  | (WiredCannonShot, true) =>
    Some(Packet.Lazy.WiredCannonShot(lazy Packet.WiredCannonShot.parse(payload)))
  | (MassWireOperation, true) => None
  | (MassWireOperation, false) =>
    Some(Packet.Lazy.MassWireOperation(lazy Packet.MassWireOperation.parse(payload)))
  | (MassWireOperationPay, false) => None
  | (MassWireOperationPay, true) =>
    Some(Packet.Lazy.MassWireOperationPay(lazy Packet.MassWireOperationPay.parse(payload)))
  | (PartyToggle, true) => None
  | (PartyToggle, false) => Some(Packet.Lazy.PartyToggle(lazy Packet.PartyToggle.parse(payload)))
  | (TreeGrowFx, true | false) =>
    Some(Packet.Lazy.TreeGrowFx(lazy Packet.TreeGrowFx.parse(payload)))
  | (CrystalInvasionStart, true) => None
  | (CrystalInvasionStart, false) =>
    Some(Packet.Lazy.CrystalInvasionStart(lazy Packet.CrystalInvasionStart.parse(payload)))
  | (CrystalInvasionWipeAll, false) => None
  | (CrystalInvasionWipeAll, true) =>
    Some(Packet.Lazy.CrystalInvasionWipeAll(lazy Packet.CrystalInvasionWipeAll.parse(payload)))
  | (MinionAttackTargetUpdate, true | false) =>
    Some(Packet.Lazy.MinionAttackTargetUpdate(lazy Packet.MinionAttackTargetUpdate.parse(payload)))
  | (CrystalInvasionSendWaitTime, false) => None
  | (CrystalInvasionSendWaitTime, true) =>
    Some(
      Packet.Lazy.CrystalInvasionSendWaitTime(
        lazy Packet.CrystalInvasionSendWaitTime.parse(payload),
      ),
    )
  | (PlayerDamage, true | false) =>
    Some(Packet.Lazy.PlayerDamage(lazy Packet.PlayerDamage.parse(payload)))
  | (PlayerDeath, true | false) =>
    Some(Packet.Lazy.PlayerDeath(lazy Packet.PlayerDeath.parse(payload)))
  | (CombatTextCreate, false) => None
  | (CombatTextCreate, true) =>
    Some(Packet.Lazy.CombatTextCreate(lazy Packet.CombatTextCreate.parse(payload)))
  | (Emoji, true) => None
  | (Emoji, false) => Some(Packet.Lazy.Emoji(lazy Packet.Emoji.parse(payload)))
  | (TileEntityDisplayDollItemSync, true | false) =>
    Some(
      Packet.Lazy.TileEntityDisplayDollItemSync(
        lazy Packet.TileEntityDisplayDollItemSync.parse(payload),
      ),
    )
  | (TileEntityInteractionRequest, true | false) =>
    Some(
      Packet.Lazy.TileEntityInteractionRequest(
        lazy Packet.TileEntityInteractionRequest.parse(payload),
      ),
    )
  | (WeaponsRackTryPlacing, true) => None
  | (WeaponsRackTryPlacing, false) =>
    Some(Packet.Lazy.WeaponsRackTryPlacing(lazy Packet.WeaponsRackTryPlacing.parse(payload)))
  | (TileEntityHatRackItemSync, true | false) =>
    Some(
      Packet.Lazy.TileEntityHatRackItemSync(lazy Packet.TileEntityHatRackItemSync.parse(payload)),
    )
  | (TilePickingSync, true | false) =>
    Some(Packet.Lazy.TilePickingSync(lazy Packet.TilePickingSync.parse(payload)))
  | (RevengeMarkerSync, false) => None
  | (RevengeMarkerSync, true) =>
    Some(Packet.Lazy.RevengeMarkerSync(lazy Packet.RevengeMarkerSync.parse(payload)))
  | (RevengeMarkerRemove, false) => None
  | (RevengeMarkerRemove, true) =>
    Some(Packet.Lazy.RevengeMarkerRemove(lazy Packet.RevengeMarkerRemove.parse(payload)))
  | (GolfBallLandInCup, true | false) =>
    Some(Packet.Lazy.GolfBallLandInCup(lazy Packet.GolfBallLandInCup.parse(payload)))
  | (ClientFinishConnectingToServer, false) => None
  | (ClientFinishConnectingToServer, true) =>
    Some(
      Packet.Lazy.ClientFinishConnectingToServer(
        lazy Packet.ClientFinishConnectingToServer.parse(payload),
      ),
    )
  | (NpcFishOut, true) => None
  | (NpcFishOut, false) => Some(Packet.Lazy.NpcFishOut(lazy Packet.NpcFishOut.parse(payload)))
  | (NpcTamper, false) => None
  | (NpcTamper, true) => Some(Packet.Lazy.NpcTamper(lazy Packet.NpcTamper.parse(payload)))
  | (LegacySoundPlay, false) => None
  | (LegacySoundPlay, true) =>
    Some(Packet.Lazy.LegacySoundPlay(lazy Packet.LegacySoundPlay.parse(payload)))
  | (FoodPlatterTryPlacing, true) => None
  | (FoodPlatterTryPlacing, false) =>
    Some(Packet.Lazy.FoodPlatterTryPlacing(lazy Packet.FoodPlatterTryPlacing.parse(payload)))
  | (PlayerLuckFactorsUpdate, true | false) =>
    Some(Packet.Lazy.PlayerLuckFactorsUpdate(lazy Packet.PlayerLuckFactorsUpdate.parse(payload)))
  | (PlayerDead, false) => None
  | (PlayerDead, true) => Some(Packet.Lazy.PlayerDead(lazy Packet.PlayerDead.parse(payload)))
  | (CavernMonsterTypeSync, true | false) =>
    Some(Packet.Lazy.CavernMonsterTypeSync(lazy Packet.CavernMonsterTypeSync.parse(payload)))
  | (NpcBuffRemovalRequest, true) => None
  | (NpcBuffRemovalRequest, false) =>
    Some(Packet.Lazy.NpcBuffRemovalRequest(lazy Packet.NpcBuffRemovalRequest.parse(payload)))
  | (ClientSyncedInventory, true) => None
  | (ClientSyncedInventory, false) =>
    Some(Packet.Lazy.ClientSyncedInventory(lazy Packet.ClientSyncedInventory.parse(payload)))
  | (CountsAsHostForGameplaySet, _) =>
    Some(
      Packet.Lazy.CountsAsHostForGameplaySet(lazy Packet.CountsAsHostForGameplaySet.parse(payload)),
    )
  | (CreditsOrSlimeTransform, _) =>
    Some(Packet.Lazy.CreditsOrSlimeTransform(lazy Packet.CreditsOrSlimeTransform.parse(payload)))
  | (LucyAxeMessage, _) =>
    Some(Packet.Lazy.LucyAxeMessage(lazy Packet.LucyAxeMessage.parse(payload)))
  | (PiggyBankVoidLensUpdate, _) =>
    Some(Packet.Lazy.PiggyBankVoidLensUpdate(lazy Packet.PiggyBankVoidLensUpdate.parse(payload)))
  | (DungeonDefendersEventAttemptSkipWait, _) =>
    Some(
      Packet.Lazy.DungeonDefendersEventAttemptSkipWait(
        lazy Packet.DungeonDefendersEventAttemptSkipWait.parse(payload),
      ),
    )
  | (HaveDryadDoStardewAnimation, _) =>
    Some(
      Packet.Lazy.HaveDryadDoStardewAnimation(
        lazy Packet.HaveDryadDoStardewAnimation.parse(payload),
      ),
    )
  | (ItemDropShimmeredUpdate, _) =>
    Some(Packet.Lazy.ItemDropShimmeredUpdate(lazy Packet.ItemDropShimmeredUpdate.parse(payload)))
  | (ShimmerEffectOrCoinLuck, _) =>
    Some(Packet.Lazy.ShimmerEffectOrCoinLuck(lazy Packet.ShimmerEffectOrCoinLuck.parse(payload)))
  | (LoadoutSwitch, _) => Some(Packet.Lazy.LoadoutSwitch(lazy Packet.LoadoutSwitch.parse(payload)))
  | (ItemDropProtectedUpdate, _) =>
    Some(Packet.Lazy.ItemDropProtectedUpdate(lazy Packet.ItemDropProtectedUpdate.parse(payload)))
  }

let parse: IParser.parse<Packet.t> = (~buffer: NodeJs.Buffer.t, ~fromServer: bool) => {
  switch buffer->NodeJs.Buffer.length {
  | 0 | 1 | 2 => None
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
        )->Option.map(packet => IParser.SerializeNotNecessary(packet, buffer))
      } catch {
      | _e => None
      }
    | None => None
    }
  }
}

let parseLazy: IParser.parseLazy<Packet.Lazy.t> = (~buffer: NodeJs.Buffer.t, ~fromServer: bool) => {
  switch buffer->NodeJs.Buffer.length {
  | 0 | 1 | 2 => None
  | _ =>
    switch buffer->NodeJs.Buffer.unsafeGet(2)->PacketType.fromInt {
    | Some(packetType) =>
      try {
        // As this module is parsing packets from the latest version to the equivalent packet data structures
        // it won't ever need Serializing after only parsing
        parsePayloadLazy(packetType, buffer, fromServer)
      } catch {
      | _e => None
      }
    | None => None
    }
  }
}
